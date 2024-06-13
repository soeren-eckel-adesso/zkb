import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoggerUtilModule } from "@base/util-logger";
import { TranslateModule } from "@ngx-translate/core";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { translationConfig } from "./translations/config";

@NgModule({
  imports: [CommonModule, LoggerUtilModule, TranslateModule, TranslationManagerUtilModule],
})
export class FormUtilModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
