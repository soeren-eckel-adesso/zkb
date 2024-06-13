import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoggerUtilModule } from "@base/util-logger";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { translationConfig } from "./translations/config";
import { SuggestSearchRepositoryModule } from "@stroeer/repository-suggest-search";

@NgModule({
  imports: [CommonModule, LoggerUtilModule, TranslationManagerUtilModule, SuggestSearchRepositoryModule],
})
export class SuggestSearchServiceModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
