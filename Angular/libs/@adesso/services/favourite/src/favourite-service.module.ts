import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoggerUtilModule } from "@base/util-logger";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { translationConfig } from "./translations/config";

@NgModule({
  imports: [CommonModule, LoggerUtilModule, TranslationManagerUtilModule],
})
export class FavouriteServiceModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
