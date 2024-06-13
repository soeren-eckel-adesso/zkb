import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  createNgModuleRef,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { ChartColorModel, CompositionItemInterface } from "@adesso/util-contracts";
import { EnvironmentService } from "@adesso/util-environment";
import { LoggerUtil } from "@base/util-logger";

@Component({
  selector: "ui-chart-pie",
  templateUrl: "./chart-pie-ui.component.html",
  styleUrls: ["./chart-pie-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartPieUiComponent implements OnInit {
  @ViewChild("container", { read: ViewContainerRef })
  container: ViewContainerRef;
  @Output() hoverIdChanged = new EventEmitter<number | undefined>();
  @Input() colors: ChartColorModel[] | undefined;
  @Input() items: CompositionItemInterface[];
  public chartInstance?: ComponentRef<any>;

  constructor(
    private environmentService: EnvironmentService,
    private injector: Injector,
    public logger: LoggerUtil,
    private ref: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    if (this.environmentService.environment?.useHighCharts) {
      const { HighchartsUiModule } = await import("@adesso/ui-highcharts");
      const moduleRef = createNgModuleRef(HighchartsUiModule, this.injector);
      const lazyFormComponent = moduleRef.instance.resolvePieChartComponent();
      this.container.clear();
      this.chartInstance = this.container.createComponent(lazyFormComponent, { ngModuleRef: moduleRef });
      this.setProperties();
    } else {
      const { SvgChartUiModule } = await import("@adesso/ui-svg-chart");
      const moduleRef = createNgModuleRef(SvgChartUiModule, this.injector);
      const lazyFormComponent = moduleRef.instance.resolvePieChartComponent();
      this.container.clear();
      this.chartInstance = this.container.createComponent(lazyFormComponent, { ngModuleRef: moduleRef });
      this.setProperties();
    }
  }
  private setProperties() {
    if (!this.chartInstance) {
      return;
    }
    if (this.colors) {
      this.chartInstance.instance.colors = this.colors;
    }
    if (this.items) {
      this.chartInstance.instance.items = this.items;
    }

    this.chartInstance.instance.hoverIdChanged.subscribe((x) => {
      this.hoverIdChanged.emit(x);
    });
    this.ref.markForCheck();
  }
}
