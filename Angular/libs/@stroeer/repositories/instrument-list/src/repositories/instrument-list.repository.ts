import {Injectable} from "@angular/core";
import {LoggerUtil} from "@base/util-logger";
import {HttpClient, HttpParams} from "@angular/common/http";
import {IdentifierTypeEnum, InstrumentResultDataFieldsEnum} from "@adesso/util-contracts";
import {EMPTY, Observable, of} from "rxjs";
import {InstrumentListResultModel} from "../models/instrument-list-result.model";
import {map} from "rxjs/operators";
import {TopFlopPayloadModel} from "../models/top-flop-payload.model";
import {InstrumentSearchPayloadModel} from "../models/instrument-search-payload.model";

function enumKeys<T>(e: T): (keyof T)[] {
	return Object.keys(e as object) as (keyof T)[];
}

@Injectable({
	providedIn: "root",
})
export class InstrumentListRepository {
	private adessoUrl = "https://tonline-api.sh01.de/stroeer/adesso_api/1.0.0";

	constructor(private http: HttpClient, private logger: LoggerUtil) {
		logger.repositoryConstructor("InstrumentListRepository");
	}

	public getInstruments(instrumentIds: string[], dataFields: InstrumentResultDataFieldsEnum[]): Observable<InstrumentListResultModel> {
		this.logger.repositoryRequest("getInstruments", instrumentIds, dataFields);
		if (instrumentIds && instrumentIds.length > 0) {
			const idType = this.getIdentifierTypeById(instrumentIds[0]);
			if (!idType) {
				return EMPTY;
			}
			let params = new HttpParams().set("idType", idType).set("top", (instrumentIds.length + 1).toString());

			instrumentIds.forEach((id) => {
				params = params.append("ids", id);
			});

			params = this.addDataFieldParams(params, dataFields);

			return this.http.get<InstrumentListResultModel>(this.adessoUrl + "/InstrumentsByIdentifiers", {params});
		}
		return of();
	}

	public getConstituents(
		instrumentId: string,
		top: number,
		skip: number,
		dataFields: InstrumentResultDataFieldsEnum[]
	): Observable<InstrumentListResultModel> {
		this.logger.repositoryRequest("getConstituents", instrumentId, top, skip, dataFields);
		if (instrumentId && instrumentId.length > 0) {
			const idType = this.getIdentifierTypeById(instrumentId);
			if (!idType) {
				return EMPTY;
			}
			let params = new HttpParams()
				.set("id", instrumentId)
				.set("idType", idType.toString())
				.set("orderBy", "Name")
				.set("top", top.toString())
				.set("skip", skip.toString());

			params = this.addDataFieldParams(params, dataFields);

			return this.http
				.get<InstrumentListResultModel>(this.adessoUrl + "/Constituents", {
					params,
				})
				.pipe(map((response: InstrumentListResultModel) => response));
		}
		return EMPTY;
	}

	public getTopFlop(payload: TopFlopPayloadModel, dataFields: InstrumentResultDataFieldsEnum[]): Observable<InstrumentListResultModel> {
		this.logger.repositoryRequest("getTopFlop", payload, dataFields);
		if (!payload) {
			return EMPTY;
		}

		let params = new HttpParams()
			.set("top", payload.top.toString())
			.set("skip", payload.skip.toString())
			.set("orderBy", payload.orderBy)
			.set("isDescendingOrder", payload.isDescendingOrder ? "true" : "false")
			.set("topFlopIndex", payload.topFlopIndex);

		params = this.addDataFieldParams(params, dataFields);

		return this.http.get<InstrumentListResultModel>(this.adessoUrl + "/TopFlops", {params});
	}

	public searchInstrument(
		payload: InstrumentSearchPayloadModel,
		dataFields: InstrumentResultDataFieldsEnum[]
	): Observable<InstrumentListResultModel> {
		this.logger.repositoryRequest("searchInstrument", payload, dataFields);
		if (!payload) {
			return EMPTY;
		}

		let params = new HttpParams()
			.set("top", payload.top.toString())
			.set("skip", payload.skip.toString())
			.set("orderBy", payload.orderBy)
			.set("isDescendingOrder", payload.isDescendingOrder ? "true" : "false");

		params = this.addParam(params, "searchTerm", payload.searchTerm);
		params = this.addParam(params, "assetClasses", payload.assetClasses);
		params = this.addParam(params, "instrumentType", payload.instrumentType);
		params = this.addParam(params, "currencyId", payload.currencyId);
		params = this.addParam(params, "exchangeId", payload.exchangeId);
		params = this.addParam(params, "domicile", payload.domicile);
		params = this.addParam(params, "capitalManagementCompany", payload.capitalManagementCompany);
		params = this.addParam(params, "fundTypeClass", payload.fundTypeClass);
		params = this.addParam(params, "fundTypeFocus", payload.fundTypeFocus);
		params = this.addParam(params, "fundCurrencyIsoCode", payload.fundCurrencyIsoCode);
		params = this.addParam(params, "morningStarRatingFrom", payload.morningStarRatingFrom);
		params = this.addParam(params, "morningStarRatingTo", payload.morningStarRatingTo);

		params = this.addDataFieldParams(params, dataFields);

		return this.http
			.get<InstrumentListResultModel>(this.adessoUrl + "/InstrumentSearch", {
				params,
			})
			.pipe(map((response: InstrumentListResultModel) => response));
	}

	private addParam(params: HttpParams, key: string, value?: string | number): HttpParams {
		if (!value) {
			return params;
		} else {
			return params.append(key, value.toString());
		}
	}

	private addDataFieldParams(params: HttpParams, dataFields: InstrumentResultDataFieldsEnum[]): HttpParams {
		if (dataFields.length === 0) {
			for (const key of enumKeys(InstrumentResultDataFieldsEnum)) {
				params = params.append("resultDataFields", key);
			}
		} else {
			dataFields.forEach((field) => {
				params = params.append("resultDataFields", field);
			});
		}
		return params;
	}

	private getIdentifierTypeById(id: string): IdentifierTypeEnum | undefined {
		if (!id) {
			return undefined;
		}
		if (id.length === 12) {
			return IdentifierTypeEnum.isin;
		}

		if (!isNaN(+id)) {
			return IdentifierTypeEnum.valor;
		}
		return undefined;
	}
}
