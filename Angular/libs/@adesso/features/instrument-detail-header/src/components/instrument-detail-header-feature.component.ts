import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from "@angular/core";
import { BreadcrumbItemModel } from "@adesso/ui-bread-crumb";
import { SuggestSearchDesignEnum } from "@adesso/feature-suggest-search";
import { ChartDataPayloadModel, InstrumentHeaderPropsModel, PushFieldEnum, UiChartQuoteBoxModel } from "@adesso/util-contracts";
import { ReplaySubject, Subject } from "rxjs";
import { take } from "rxjs/operators";
import { ChartService } from "@adesso/service-chart";
import { LoggerUtil } from "@base/util-logger";
import { InstrumentDetailViewModel } from "@stroeer/repository-instrument-detail";
import { MatDialog } from "@angular/material/dialog";
import { InstrumentHeaderUiComponent } from "@adesso/ui-instrument-header";
import { InstrumentDetailHeaderFeatureDialogComponent } from "./instrument-detail-header-feature.component.dialog";

@Component({
	selector: "feature-instrument-detail-header",
	templateUrl: "./instrument-detail-header-feature.component.html",
	styleUrls: ["./instrument-detail-header-feature.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstrumentDetailHeaderFeatureComponent {
	@Input() breadCrumbItems: BreadcrumbItemModel[];
	@Input() instrumentHeader: InstrumentHeaderPropsModel | undefined;
	@Input() instrument: InstrumentDetailViewModel;
	@Input() underlying: InstrumentDetailViewModel;
	public suggestSearchDesign = SuggestSearchDesignEnum.navigationArea;
	knockoutVal = false;
	public pf = PushFieldEnum;
	closeVal = 0;
	private chartQuoteBoxValuesModel: UiChartQuoteBoxModel | undefined;
	public knockoutDate: Date | null = null;

	@Input()
	set chartQuoteBoxValues(value: UiChartQuoteBoxModel | undefined) {
		if (value) {
			this.chartQuoteBoxValues$.next(value);
			this.chartQuoteBoxValuesModel = value;
			if (value.chartPayload) {
				this.loadChartData(value.chartPayload);
			}
		}
	}

	private underlyingChartQuoteBoxValuesPr: UiChartQuoteBoxModel;
	@Input()
	get underlyingChartQuoteBoxValues(): UiChartQuoteBoxModel {
		return this.underlyingChartQuoteBoxValuesPr;
	}
	set underlyingChartQuoteBoxValues(value: UiChartQuoteBoxModel) {
		if (value) {
			this.underlyingChartQuoteBoxValuesPr = value;
			if (value.chartPayload) {
				this.loadUnderlyingChartData(value.chartPayload);
			}
		}
	}

	get close(): number {
		return this.closeVal;
	}
	set close(close: number) {
		this.closeVal = close;
	}

	get knockout(): boolean {
		return this.knockoutVal;
	}
	set knockout(knockout: boolean) {
		this.knockoutVal = knockout;
	}
	public chartQuoteBoxValues$: Subject<UiChartQuoteBoxModel> = new ReplaySubject<UiChartQuoteBoxModel>();
	public chartData$: Subject<Array<[number, number]>> = new ReplaySubject<Array<[number, number]>>();
	public underlyingChartData$: Subject<Array<[number, number]>> = new ReplaySubject<Array<[number, number]>>();
	constructor(public chartService: ChartService, public logger: LoggerUtil, private cdRef: ChangeDetectorRef, public dialog: MatDialog) {
		window.setTimeout(() => {
			if (this.instrument?.derivativeData?.derivativeType.name === "Knock-Out & Open-End Knock-Out") {
				this.knockout = true;

				this.knockoutDate = new Date();
				this.logger.info("test", this.knockoutDate);
				cdRef.detectChanges();
			}
		}, 10000);
	}

	loadChartData(chartPayload: ChartDataPayloadModel) {
		this.chartService
			.loadChartData(chartPayload)
			.pipe(take(1))
			.subscribe((x) => {
				this.chartData$.next(x);
			});
	}

	loadUnderlyingChartData(chartPayload: ChartDataPayloadModel) {
		this.chartService
			.loadChartData({
				valor: chartPayload.valor,
				exchangeId: chartPayload.exchangeId,
				currencyId: chartPayload.currencyId,
				period: "OneMonth",
				priceField: chartPayload.priceField,
			})
			.pipe(take(1))
			.subscribe((x) => {
				const now = new Date();
				const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0) as any;
				const timestamp = Math.floor(todayMidnight / 1);

				for (let i = x.length - 1; i >= 0; i--) {
					if (x[i][0] < timestamp) {
						this.close = x[i][1];
						break;
					}
				}

				this.underlyingChartData$.next(x);
			});
	}

	copyMessage() {
		const selBox = document.createElement("textarea");
		selBox.style.position = "fixed";
		selBox.style.left = "0";
		selBox.style.top = "0";
		selBox.style.opacity = "0";
		selBox.value = this.instrument.base?.isin ?? "";
		document.body.appendChild(selBox);
		selBox.focus();
		selBox.select();
		document.execCommand("copy");
		document.body.removeChild(selBox);
	}

	openDialog() {
		const dialogRef = this.dialog.open(InstrumentDetailHeaderFeatureDialogComponent, {
			height: "100%",
			width: "100%",
			data: { instrument: this.instrument, chartQuoteBoxValuesModel: this.chartQuoteBoxValuesModel },
		});

		dialogRef.afterClosed().subscribe((result) => {
			this.logger.info(`Dialog result: ${result}`);
		});
	}
}
