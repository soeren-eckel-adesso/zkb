import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoggerUtilModule } from "@base/util-logger";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { ShareDetailPageComponent } from "./components/share-detail-page.component";
import { translationConfig } from "./translations/config";
import { RouterModule, Routes } from "@angular/router";
import { ContentBoxUiModule } from "@adesso/ui-content-box";
import { KeyValueListUiModule } from "@adesso/ui-key-value-list";
import { TranslateModule } from "@ngx-translate/core";
import { InstrumentDetailServiceModule } from "@adesso/service-instrument-detail";
import { InstrumentDetailHeaderFeatureModule } from "@adesso/feature-instrument-detail-header";
import { CompositionUiModule } from "@adesso/ui-composition";
import { NewsListUiModule } from "@adesso/ui-news-list";
import { AnalysesListUiModule } from "@adesso/ui-analyses-list";

const routes: Routes = [
  {
    path: "",
    component: ShareDetailPageComponent,
  },
];

@NgModule({
  declarations: [ShareDetailPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoggerUtilModule,
    TranslateModule,
    TranslationManagerUtilModule,
    InstrumentDetailServiceModule,
    ContentBoxUiModule,
    KeyValueListUiModule,
    InstrumentDetailHeaderFeatureModule,
    CompositionUiModule,
    NewsListUiModule,
    AnalysesListUiModule,
  ],
})
export class ShareDetailPageModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
