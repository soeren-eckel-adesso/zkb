import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { KeyValueListUiModule } from "@adesso/ui-key-value-list";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { ContentBoxUiModule } from "@adesso/ui-content-box";
import { FormatUtilModule } from "@base/util-format";
import { RouterModule } from "@angular/router";
import { QuoteStreamFeatureModule } from "@adesso/feature-quote-stream";
import { ChartUiModule } from "@adesso/ui-chart";
import { translationConfig } from "./translations/config";
import { ChartQuoteBoxUiComponent } from "./components/chart-quote-box-ui.component";
import { LoggerUtilModule } from "@base/util-logger";

@NgModule({
  declarations: [ChartQuoteBoxUiComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    KeyValueListUiModule,
    TranslationManagerUtilModule,
    ContentBoxUiModule,
    FormatUtilModule,
    QuoteStreamFeatureModule,
    ChartUiModule,
    LoggerUtilModule,
  ],
  exports: [ChartQuoteBoxUiComponent],
})
export class ChartQuoteUiModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
