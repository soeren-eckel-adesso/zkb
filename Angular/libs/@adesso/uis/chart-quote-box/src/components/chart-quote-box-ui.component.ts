import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ChartDataPayloadModel, KeyValueListDesignEnum, PageTypeEnum, PushFieldEnum, UiChartQuoteBoxModel } from "@adesso/util-contracts";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { EnvironmentService } from "@adesso/util-environment";
import { LoggerUtil } from "@base/util-logger";
import { ReplaySubject, Subject } from "rxjs";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { InstrumentDetailViewModel } from "@stroeer/repository-instrument-detail";

@Component({
	selector: "ui-chart-quote-box",
	templateUrl: "./chart-quote-box-ui.component.html",
	styleUrls: ["./chart-quote-box-ui.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartQuoteBoxUiComponent implements OnInit {
	@Output()
	chartTimeSelected = new EventEmitter<ChartDataPayloadModel>();
	@Output()
	underlyingChartTimeSelected = new EventEmitter<ChartDataPayloadModel>();
	@Input() tradingVersion = true;
	@Input() isChart = true;
	@Input() isin: string | undefined;
	@Input() instrument: InstrumentDetailViewModel;
	@Input() knockout = false;

	public chartPayload?: ChartDataPayloadModel;
	public underlyingChartPayload?: ChartDataPayloadModel;
	public keyValueDesigns = KeyValueListDesignEnum;
	public chartData$: Subject<Array<[number, number]>> = new ReplaySubject<Array<[number, number]>>();
	public underlyingChartData$: Subject<Array<[number, number]>> = new ReplaySubject<Array<[number, number]>>();
	public pf = PushFieldEnum;
	public open = false;
	public currentDate = new Date();

	constructor(
		private router: Router,
		private translate: TranslateService,
		private environmentService: EnvironmentService,
		public logger: LoggerUtil
	) {}

	public quoteBoxValues$: Subject<UiChartQuoteBoxModel> = new ReplaySubject<UiChartQuoteBoxModel>();
	@Input()
	set values(values: UiChartQuoteBoxModel) {
		this.quoteBoxValues$.next(values);
		if (values.chartPayload) {
			this.chartPayload = {
				valor: values.chartPayload.valor,
				exchangeId: values.chartPayload.exchangeId,
				currencyId: values.chartPayload.currencyId,
				period: "OneMonth",
				priceField: values.chartPayload.priceField,
			};
		} else {
			this.chartPayload = undefined;
		}
	}

	@Input()
	set chartData(value: Array<[number, number]> | undefined | null) {
		if (value) {
			this.chartData$.next(value);
		}
	}

	public underlyingQuoteBoxValues$: Subject<UiChartQuoteBoxModel> = new ReplaySubject<UiChartQuoteBoxModel>();
	@Input()
	set underlyingValues(values: UiChartQuoteBoxModel) {
		this.underlyingQuoteBoxValues$.next(values);
		if (values) {
			this.underlyingChartPayload = values.chartPayload;
		} else {
			this.underlyingChartPayload = undefined;
		}
	}

	@Input()
	set underlyingChartData(value: Array<[number, number]> | undefined | null) {
		if (value) {
			this.underlyingChartData$.next(value);
		}
	}

	ngOnInit() {
		if (this.environmentService.isBrowserRendering && this.chartPayload) {
			this.chartTimeSelected.emit(this.chartPayload);
			this.underlyingChartTimeSelected.emit(this.underlyingChartPayload);
		}
	}

	public changePeriod(period: string) {
		if (!this.chartPayload) {
			return;
		}
		this.chartPayload.period = period;

		this.chartTimeSelected.emit(this.chartPayload);
		if (!this.underlyingChartPayload) {
			return;
		}
		this.underlyingChartPayload.period = period;
		this.underlyingChartTimeSelected.emit(this.underlyingChartPayload);
		this.open = false;
	}

	public buyInstrument(currency: string | undefined): string {
		return this.translate.instant(PageTypeEnum.buyInstrumentPage).replace("{isin}", this.isin).replace("{currency}", currency);
	}

	public sellInstrument(currency: string | undefined): string {
		return this.translate.instant(PageTypeEnum.sellInstrumentPage).replace("{isin}", this.isin).replace("{currency}", currency);
	}
}
