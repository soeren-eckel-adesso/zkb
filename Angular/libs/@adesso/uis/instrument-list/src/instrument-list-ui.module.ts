import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule } from "@angular/router";

import { ContentBoxUiModule } from "@adesso/ui-content-box";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { FormatUtilModule } from "@base/util-format";
import { QuoteStreamFeatureModule } from "@adesso/feature-quote-stream";
import { BasicTableUiComponent } from "./components/basic-table/basic-table-ui.component";
import { InstrumentListUiComponent } from "./components/instrument-list/instrument-list-ui.component";
import { PerformanceTableUiComponent } from "./components/performance-table/performance-table-ui.component";
import { translationConfig } from "./translations/config";
import { OrderTableUiComponent } from "./components/order-table/order-table-ui.component";
import { LoggerUtilModule } from "@base/util-logger";

@NgModule({
  declarations: [InstrumentListUiComponent, BasicTableUiComponent, OrderTableUiComponent, PerformanceTableUiComponent],
  imports: [
    CommonModule,
    RouterModule,
    ContentBoxUiModule,
    TranslateModule,
    FormatUtilModule,
    TranslationManagerUtilModule,
    QuoteStreamFeatureModule,
    LoggerUtilModule,
  ],
  exports: [InstrumentListUiComponent, BasicTableUiComponent, OrderTableUiComponent, PerformanceTableUiComponent],
})
export class InstrumentListUiModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
