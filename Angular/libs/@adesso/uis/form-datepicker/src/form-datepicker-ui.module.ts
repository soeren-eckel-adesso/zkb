import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoggerUtilModule } from "@base/util-logger";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { FormDatepickerUiComponent } from "./components/form-datepicker-ui.component";
import { translationConfig } from "./translations/config";
import { TranslateModule } from "@ngx-translate/core";
import { FormatUtilModule } from "@base/util-format";

@NgModule({
  declarations: [FormDatepickerUiComponent],
  imports: [CommonModule, LoggerUtilModule, TranslateModule, TranslationManagerUtilModule, FormatUtilModule],
  exports: [FormDatepickerUiComponent],
})
export class FormDatepickerUiModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
