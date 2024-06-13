import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule } from "@angular/router";

import { ContextMenuListUiModule } from "@adesso/ui-context-menu-list";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { SuggestSearchFeatureComponent } from "./components/suggest-search-feature.component";
import { translationConfig } from "./translations/config";
import { ReactiveFormsModule } from "@angular/forms";
import { SuggestSearchServiceModule } from "@adesso/service-suggest-search";

@NgModule({
    declarations: [SuggestSearchFeatureComponent],
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule,
        ContextMenuListUiModule,
        TranslationManagerUtilModule,
        SuggestSearchServiceModule,
        ReactiveFormsModule,
    ],
    bootstrap: [],
    exports: [SuggestSearchFeatureComponent]
})
export class SuggestSearchFeatureModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
