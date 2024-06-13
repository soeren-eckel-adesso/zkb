import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule } from "@angular/router";
import { ContextMenuListUiModule } from "@adesso/ui-context-menu-list";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { HeaderFeatureComponent } from "./components/header-feature.component";
import { translationConfig } from "./translations/config";
import { LoggerUtilModule } from "@base/util-logger";

@NgModule({
  declarations: [HeaderFeatureComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule,
    RouterModule,
    ContextMenuListUiModule,
    TranslationManagerUtilModule,
    LoggerUtilModule,
  ],
  bootstrap: [],
  exports: [HeaderFeatureComponent],
})
export class HeaderFeatureModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
