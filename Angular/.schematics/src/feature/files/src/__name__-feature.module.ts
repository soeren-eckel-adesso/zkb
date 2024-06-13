import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoggerUtilModule } from "@base/util-logger";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { <%= classify(name) %>FeatureComponent } from "./components/<%= name %>-feature.component";
import { translationConfig } from "./translations/config";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [<%= classify(name) %>FeatureComponent],
  imports: [CommonModule, LoggerUtilModule, TranslateModule, TranslationManagerUtilModule],
  exports: [<%= classify(name) %>FeatureComponent]
})
export class <%= classify(name) %>FeatureModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
