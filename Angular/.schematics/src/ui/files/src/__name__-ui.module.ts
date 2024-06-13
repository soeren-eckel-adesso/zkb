import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoggerUtilModule } from "@base/util-logger";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { <%= classify(name) %>UiComponent } from "./components/<%= name %>-ui.component";
import { translationConfig } from "./translations/config";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [<%= classify(name) %>UiComponent],
  imports: [CommonModule, LoggerUtilModule, TranslateModule, TranslationManagerUtilModule],
  exports: [<%= classify(name) %>UiComponent]
})
export class <%= classify(name) %>UiModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
