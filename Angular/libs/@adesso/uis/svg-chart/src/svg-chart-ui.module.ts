import { ComponentFactoryResolver, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormatUtilModule } from "@base/util-format";
import { SvgChartLineUiComponent } from "./components/line/svg-chart-line-ui.component";
import { UiSvgChartPieComponent } from "./components/pie/ui-svg-chart-pie.component";

@NgModule({
  declarations: [SvgChartLineUiComponent, UiSvgChartPieComponent],
  imports: [CommonModule, FormatUtilModule],
  exports: [SvgChartLineUiComponent, UiSvgChartPieComponent],
})
export class SvgChartUiModule {
  // @ts-ignore
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public resolveLineChartComponent() {
    return SvgChartLineUiComponent;
  }
  public resolvePieChartComponent() {
    return UiSvgChartPieComponent;
  }
}
