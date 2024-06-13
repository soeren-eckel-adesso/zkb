import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContentBoxUiModule } from "@adesso/ui-content-box";
import { FormatUtilModule } from "@base/util-format";
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule } from "@angular/router";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { AnalysesListUiComponent } from "./components/analyses-list-ui.component";
import { translationConfig } from "./translations/config";
import { LoggerUtilModule } from "@base/util-logger";

@NgModule({
  declarations: [AnalysesListUiComponent],
  imports: [
    CommonModule,
    ContentBoxUiModule,
    FormatUtilModule,
    TranslateModule,
    TranslationManagerUtilModule,
    RouterModule,
    LoggerUtilModule,
  ],
  exports: [AnalysesListUiComponent],
})
export class AnalysesListUiModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
