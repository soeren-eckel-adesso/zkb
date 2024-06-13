import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Chart } from "angular-highcharts";
import { EnvironmentService } from "@adesso/util-environment";
import { ReplaySubject, Subject } from "rxjs";
import { InstrumentDetailViewModel } from "@stroeer/repository-instrument-detail";

@Component({
	selector: "ui-chart-line",
	templateUrl: "./highcharts-line-ui.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighchartsLineUiComponent {
	public chartHeight = "240px";
	@Input()
	set height(value: string) {
		if (value) {
			this.chartHeight = value;
		}
	}

	@Input()
	set instrument(value: InstrumentDetailViewModel | undefined) {
		if (value) {
			this.instrumentModel = value;

			if (this.instrumentModel?.derivativeData?.commonLevels?.cap) {
				this.underlyingName = "CAP";
				this.barriereValue = this.instrumentModel?.derivativeData?.commonLevels?.cap?.value;
			}
			if (this.instrumentModel?.derivativeData?.underlyings[0]?.levels?.stopLoss?.value) {
				this.underlyingName = "Knock-Out Barriere";
				this.barriereValue = this.instrumentModel?.derivativeData?.underlyings[0]?.levels?.stopLoss?.value;
			}
			this.renderChart();
		}
	}

	private underlyingName = "";
	private barriereValue = 0;
	public chart$: Subject<Chart> = new ReplaySubject<Chart>();
	private chartSeriesData: Array<[number, number]>;
	private underlyingChartSeriesData: Array<[number, number]> = [];
	private instrumentName: string;
	private instrumentModel: InstrumentDetailViewModel;

	constructor(private environmentService: EnvironmentService) {}

	@Input()
	set chartData(value: Array<[number, number]> | undefined | null) {
		if (value) {
			this.chartSeriesData = value;
			this.renderChart();
		}
	}

	@Input()
	set underlyingChartData(value: Array<[number, number]> | undefined | null) {
		if (value) {
			this.underlyingChartSeriesData = value;
			this.renderChart();
		}
	}

	@Input()
	set name(value: string | undefined) {
		if (value) {
			this.instrumentName = value;
			this.renderChart();
		}
	}

	private renderChart() {
		if (this.environmentService.isServerRendering || !this.instrumentName || !this.chartSeriesData) {
			return;
		}
		let color = "";

		if (this.chartSeriesData && this.chartSeriesData.length > 2) {
			if (this.chartSeriesData[0][1] <= this.chartSeriesData[this.chartSeriesData.length - 1][1]) {
				color = "green";
				if (this.environmentService.environment?.colorPositive) {
					color = this.environmentService.environment?.colorPositive;
				}
			}
			if (this.chartSeriesData[0][1] >= this.chartSeriesData[this.chartSeriesData.length - 1][1]) {
				color = "red";
				if (this.environmentService.environment?.colorNegative) {
					color = this.environmentService.environment?.colorNegative;
				}
			}
		}

		this.chart$.next(
			new Chart({
				chart: {
					type: "line",
					height: this.chartHeight,
					animation: false,
				},
				title: {
					text: "",
				},
				credits: {
					enabled: false,
				},
				series: [
					{
						color: "#006CFF", //blue hell
						name: this.instrumentName,
						type: "line",
						data: this.chartSeriesData,
					},
					{
						color: "#003CB4", //blue dunkel
						name: this.instrumentModel?.derivativeData?.underlyings[0].name,
						type: "line",
						data: this.underlyingChartSeriesData, // hier underlying value einfügen
						yAxis: 1,
					},
					{
						color: "#00BEC8", //green
						name: this.underlyingName,
						type: "line",
						data: undefined,
						yAxis: 1,
					},
				],
				legend: {
					enabled: true,
					align: "left",
					symbolWidth: 25, // Width of the legend symbol
					symbolHeight: 1, // Height of the legend symbol
					symbolPadding: 5, // Padding between the symbol and the legend text
					symbolRadius: 0,
				},
				plotOptions: {
					series: {
						animation: {
							duration: 0,
						},
					},
				},
				xAxis: {
					type: "datetime",
				},
				yAxis: [
					{
						title: {
							text: "",
						},
						labels: {
							style: {
								color: "#006CFF",
							},
						},
					},
					{
						title: {
							text: "",
						},
						labels: {
							style: {
								color: "#003CB4",
							},
						},
						plotLines: [
							{
								color: "#00BEC8",
								width: 2,
								value: this.barriereValue,
							},
						],
						opposite: true,
						min:
							this.underlyingChartSeriesData.length === 0 ||
							Math.min(...this.underlyingChartSeriesData.map((u) => u[1])) < this.barriereValue
								? undefined
								: this.barriereValue,
						max:
							this.underlyingChartSeriesData.length === 0 ||
							Math.max(...this.underlyingChartSeriesData.map((u) => u[1])) > this.barriereValue
								? undefined
								: this.barriereValue,
					},
				],
			})
		);
	}
}
