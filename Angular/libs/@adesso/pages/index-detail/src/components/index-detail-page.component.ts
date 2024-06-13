import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { Observable, ReplaySubject, Subject, Subscription } from "rxjs";
import { InstrumentDetailService } from "@adesso/service-instrument-detail";
import { TranslateService } from "@ngx-translate/core";
import { LoggerUtil } from "@base/util-logger";
import { BreadcrumbItemModel } from "@adesso/ui-bread-crumb";
import {
	InstrumentValorEnum,
	KeyValueListOptionEnum,
	PageTypeEnum,
	UiChartQuoteBoxModel,
	UiInstrumentListTypeEnum,
} from "@adesso/util-contracts";
import { IndexDetailPageConfigModel } from "../models/index-detail-page-config.model";
import { map } from "rxjs/operators";
import { InstrumentListViewModel } from "@adesso/ui-instrument-list";
import { InstrumentListService } from "@adesso/service-instrument-list";
import { InstrumentDetailViewModel } from "@stroeer/repository-instrument-detail";

@Component({
	selector: "page-index-detail",
	templateUrl: "./index-detail-page.component.html",
	styleUrls: ["./index-detail-page.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexDetailPageComponent implements OnDestroy {
	public pageConfig$: Subject<IndexDetailPageConfigModel> = new ReplaySubject<IndexDetailPageConfigModel>();
	private routerSubscription: Subscription;
	private config: IndexDetailPageConfigModel;
	public tableType: UiInstrumentListTypeEnum = UiInstrumentListTypeEnum.performance;
	public quoteStreamUnderlying$: Subject<UiChartQuoteBoxModel> = new ReplaySubject<UiChartQuoteBoxModel>();
	public instrument: InstrumentDetailViewModel;

	constructor(
		public instrumentDetailService: InstrumentDetailService,
		public translate: TranslateService,
		public logger: LoggerUtil,
		private instrumentListService: InstrumentListService
	) {
		this.routerSubscription = this.instrumentDetailService.routerInstrument$().subscribe((instrument) => {
			this.instrument = instrument;
			if (instrument) {
				this.config = {
					breadCrumbItems: this.getBreadCrumbItems(),
					chartQuoteBoxValues: this.getChartQuoteBoxValues(),
					instrumentHeader: this.instrumentDetailService.instrumentHeader(),
					valor: instrument.base?.valor,
					germanIndices: this.loadGermanIndices(),
					europeIndices: this.loadEuropeIndices(),
					usaAndAsiaIndices: this.loadUsaAndAsiaIndices(),
				};
				this.pageConfig$.next(this.config);
			}
		});
	}

	private getBreadCrumbItems(): BreadcrumbItemModel[] {
		return [
			{
				label: this.translate.instant("bread-crumb-label-home"),
				url: this.translate.instant(PageTypeEnum.home),
			},
			{
				label: this.translate.instant("bread-crumb-label-overview"),
				url: this.translate.instant(PageTypeEnum.indexOverviewPage),
			},
			{
				label: this.translate.instant("bread-crumb-label-search"),
				url: this.translate.instant(PageTypeEnum.indexSearchPage),
			},
			{
				label: this.translate.instant("bread-crumb-label-detail"),
			},
		];
	}

	private getChartQuoteBoxValues(): UiChartQuoteBoxModel | undefined {
		const result = this.instrumentDetailService.createChartQuoteBoxValues();
		if (!result) {
			return undefined;
		}
		const key = KeyValueListOptionEnum;
		result.keyValues = this.instrumentDetailService.extractKeyValueListValues([{ option: key.domicile }]);
		return result;
	}

	private loadGermanIndices(): Observable<InstrumentListViewModel[]> {
		return this.loadInstruments([
			InstrumentValorEnum.dax.toString(),
			InstrumentValorEnum.tecDax.toString(),
			InstrumentValorEnum.mDax.toString(),
			InstrumentValorEnum.sDax.toString(),
			InstrumentValorEnum.hDax.toString(),
			InstrumentValorEnum.cDax.toString(),
			InstrumentValorEnum.divDax.toString(),
		]);
	}

	private loadEuropeIndices(): Observable<InstrumentListViewModel[]> {
		return this.loadInstruments([
			InstrumentValorEnum.stoxxEurope50.toString(),
			InstrumentValorEnum.euroStoxx50.toString(),
			InstrumentValorEnum.ftse100.toString(),
			InstrumentValorEnum.smi.toString(),
			InstrumentValorEnum.cac40.toString(),
			InstrumentValorEnum.ibex35.toString(),
			InstrumentValorEnum.atx.toString(),
		]);
	}

	private loadUsaAndAsiaIndices(): Observable<InstrumentListViewModel[]> {
		return this.loadInstruments([
			InstrumentValorEnum.dowJones.toString(),
			InstrumentValorEnum.sp500.toString(),
			InstrumentValorEnum.nasdaq100.toString(),
			InstrumentValorEnum.nikkei225.toString(),
			InstrumentValorEnum.hangSeng.toString(),
			InstrumentValorEnum.kospi200.toString(),
			InstrumentValorEnum.spBseSensex.toString(),
		]);
	}

	private loadInstruments(ids: string[]): Observable<InstrumentListViewModel[]> {
		return this.instrumentListService.getInstrumentTable(ids, this.tableType).pipe(map((result) => (result ? result.result : [])));
	}

	ngOnDestroy() {
		this.routerSubscription.unsubscribe();
	}
}
