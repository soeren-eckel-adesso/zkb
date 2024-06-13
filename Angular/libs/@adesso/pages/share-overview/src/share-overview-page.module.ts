import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { InstrumentListUiModule } from "@adesso/ui-instrument-list";
import { InstrumentListServiceModule } from "@adesso/service-instrument-list";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { CarouselWithSearchFeatureModule } from "@adesso/feature-carousel-with-search";
import { ShareOverviewPageComponent } from "./components/share-overview-page.component";
import { translationConfig } from "./translations/config";
import { NgLetUtilModule } from "@base/util-ng-let";

const routes: Routes = [
  {
    path: "",
    component: ShareOverviewPageComponent,
  },
];

@NgModule({
  declarations: [ShareOverviewPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    InstrumentListUiModule,
    InstrumentListServiceModule,
    TranslationManagerUtilModule,
    CarouselWithSearchFeatureModule,
    NgLetUtilModule,
  ],
})
export class ShareOverviewPageModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
