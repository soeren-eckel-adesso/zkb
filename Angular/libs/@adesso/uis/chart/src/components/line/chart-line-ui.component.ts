import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ComponentRef,
	createNgModuleRef,
	Injector,
	Input,
	OnInit,
	ViewChild,
	ViewContainerRef,
} from "@angular/core";
import { EnvironmentService } from "@adesso/util-environment";
import { InstrumentDetailViewModel } from "@stroeer/repository-instrument-detail";

@Component({
	selector: "ui-chart-line",
	templateUrl: "./chart-line-ui.component.html",
	styleUrls: ["./chart-line-ui.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartLineUiComponent implements OnInit {
	@ViewChild("container", { read: ViewContainerRef })
	container: ViewContainerRef;
	@Input() height: string;
	private instrumentModel: InstrumentDetailViewModel;
	public instrumentName: string;
	public chartSeriesData: Array<[number, number]> | undefined;
	public underlyingChartSeriesData: Array<[number, number]> | undefined;
	public chartInstance?: ComponentRef<any>;

	constructor(private environmentService: EnvironmentService, private injector: Injector, private ref: ChangeDetectorRef) {}

	@Input()
	set name(value: string | undefined) {
		if (value) {
			this.instrumentName = value;
		}

		if (this.chartInstance) {
			this.chartInstance.instance.name = value;
		}
	}

	@Input() 
	set instrument(value: InstrumentDetailViewModel| undefined ) {
		if (value) {
			this.instrumentModel = value;
			
			if (this.chartInstance) {
				this.chartInstance.instance.instrument = value;
				
			}
		}
	}


	@Input()
	set chartData(value: Array<[number, number]> | undefined | null) {
		if (value) {
			this.chartSeriesData = value;
			if (this.chartInstance) {
				this.chartInstance.instance.chartData = value;
			}
		}
	}

	@Input()
	set underlyingChartData(value: Array<[number, number]> | undefined | null) {
		if (value) {
			this.underlyingChartSeriesData = value;
			if (this.chartInstance) {
				this.chartInstance.instance.underlyingChartData = value;
			}
		}
	}

	async ngOnInit() {
		if (this.environmentService.environment?.useHighCharts) {
			const { HighchartsUiModule } = await import("@adesso/ui-highcharts");
			const moduleRef = createNgModuleRef(HighchartsUiModule, this.injector);
			const lazyFormComponent = moduleRef.instance.resolveLineChartComponent();
			this.container.clear();
			this.chartInstance = this.container.createComponent(lazyFormComponent, { ngModuleRef: moduleRef });
			this.setProperties();
		} else {
			const { SvgChartUiModule } = await import("@adesso/ui-svg-chart");
			const moduleRef = createNgModuleRef(SvgChartUiModule, this.injector);
			const lazyFormComponent = moduleRef.instance.resolveLineChartComponent();
			this.container.clear();
			this.chartInstance = this.container.createComponent(lazyFormComponent, { ngModuleRef: moduleRef });
			this.setProperties();
		}
	}

	private setProperties() {
		// set component Input() property
		if (!this.chartInstance) {
			return;
		}
		this.chartInstance.instance.name = this.instrumentName;
		this.chartInstance.instance.height = this.height;
		this.chartInstance.instance.chartData = this.chartSeriesData;
		this.chartInstance.instance.underlyingChartData = this.underlyingChartSeriesData;
		this.chartInstance.instance.instrument = this.instrumentModel;
		this.ref.markForCheck();
	}
}
