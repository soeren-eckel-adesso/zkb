import { ComponentFactoryResolver, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartModule } from "angular-highcharts";
import { TranslateModule } from "@ngx-translate/core";
import { FormatUtilModule } from "@base/util-format";
import { EnvironmentUtilModule } from "@adesso/util-environment";
import { HighchartsPieUiComponent } from "./components/pie/highcharts-pie-ui.component";
import { HighchartsLineUiComponent } from "./components/line/highcharts-line-ui.component";
import { LoggerUtilModule } from "@base/util-logger";

@NgModule({
  declarations: [HighchartsLineUiComponent, HighchartsPieUiComponent],
  imports: [CommonModule, ChartModule, TranslateModule, FormatUtilModule, EnvironmentUtilModule, LoggerUtilModule],
  exports: [HighchartsLineUiComponent, HighchartsPieUiComponent],
})
export class HighchartsUiModule {
  // @ts-ignore
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public resolveLineChartComponent() {
    return HighchartsLineUiComponent;
  }
  public resolvePieChartComponent() {
    return HighchartsPieUiComponent;
  }
}
