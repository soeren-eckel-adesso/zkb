import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { NewsDetailUiModule } from "@adesso/ui-news-detail";
import { ServiceNewsModule } from "@adesso/service-news";
import { InstrumentListUiModule } from "@adesso/ui-instrument-list";
import { InstrumentListServiceModule } from "@adesso/service-instrument-list";
import { NewsDetailPageComponent } from "./components/news-detail-page.component";
import { translationConfig } from "./translations/config";

const routes: Routes = [
  {
    path: "",
    component: NewsDetailPageComponent,
  },
];

@NgModule({
  declarations: [NewsDetailPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslationManagerUtilModule,
    NewsDetailUiModule,
    ServiceNewsModule,
    InstrumentListUiModule,
    InstrumentListServiceModule,
  ],
})
export class NewsDetailPageModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
