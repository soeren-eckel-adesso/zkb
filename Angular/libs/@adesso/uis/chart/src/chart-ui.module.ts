import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartLineUiComponent } from "./components/line/chart-line-ui.component";
import { ChartPieUiComponent } from "./components/pie/chart-pie-ui.component";

@NgModule({
  declarations: [ChartLineUiComponent, ChartPieUiComponent],
  imports: [CommonModule],
  exports: [ChartLineUiComponent, ChartPieUiComponent],
})
export class ChartUiModule {}
