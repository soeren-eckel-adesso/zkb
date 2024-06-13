import { Injectable } from "@angular/core";
import { LoggerUtil } from "@base/util-logger";
import { HttpClient, HttpParams } from "@angular/common/http";
import { EMPTY, Observable } from "rxjs";
import { IdentifierTypeEnum } from "@adesso/util-contracts";
import { InstrumentDetailViewModel } from "../models/instrument-detail-view.model";

@Injectable({
  providedIn: "root",
})
export class InstrumentDetailRepository {
  private adessoUrl = "https://tonline-api.sh01.de/stroeer/adesso_api/1.0.0";

  constructor(private http: HttpClient, private logger: LoggerUtil) {
    logger.repositoryConstructor("InstrumentDetailRepository");
  }

  public getInstrumentDetail(instrumentId: string): Observable<InstrumentDetailViewModel> {
    this.logger.repositoryRequest("getInstrumentDetail", instrumentId);

    if (instrumentId === undefined || instrumentId === "") {
      return EMPTY;
    }

    const idType = this.getIdentifierTypeById(instrumentId);

    if (!idType) {
      return EMPTY;
    }

    const params = new HttpParams().set("id", instrumentId).set("idType", idType);

    return this.http.get<InstrumentDetailViewModel>(this.adessoUrl + "/InstrumentDetail", { params });
  }

  private getIdentifierTypeById(id: string): IdentifierTypeEnum | undefined {
    if (id.length === 12) {
      return IdentifierTypeEnum.isin;
    }

    if (!isNaN(+id)) {
      return IdentifierTypeEnum.valor;
    }
    return undefined;
  }
}
