import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContentBoxUiModule } from "@adesso/ui-content-box";
import { FormatUtilModule } from "@base/util-format";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { QuoteStreamFeatureModule } from "@adesso/feature-quote-stream";
import { ChartUiModule } from "@adesso/ui-chart";
import { ChartTeaserUiComponent } from "./components/chart-teaser-ui.component";
import { NgLetUtilModule } from "@base/util-ng-let";

@NgModule({
  declarations: [ChartTeaserUiComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ContentBoxUiModule,
    ChartUiModule,
    FormatUtilModule,
    QuoteStreamFeatureModule,
    NgLetUtilModule,
  ],
  exports: [ChartTeaserUiComponent],
})
export class ChartTeaserUiModule {}
