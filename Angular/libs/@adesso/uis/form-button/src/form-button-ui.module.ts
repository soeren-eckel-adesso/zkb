import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoggerUtilModule } from "@base/util-logger";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { FormButtonUiComponent } from "./components/form-button-ui.component";
import { translationConfig } from "./translations/config";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [FormButtonUiComponent],
  imports: [CommonModule, LoggerUtilModule, TranslateModule, TranslationManagerUtilModule],
  exports: [FormButtonUiComponent]
})
export class FormButtonUiModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
