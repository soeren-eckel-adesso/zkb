import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { InstrumentListUiModule } from "@adesso/ui-instrument-list";
import { InstrumentListServiceModule } from "@adesso/service-instrument-list";
import { TranslateModule } from "@ngx-translate/core";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { CarouselWithSearchFeatureModule } from "@adesso/feature-carousel-with-search";
import { EtfOverviewPageComponent } from "./components/etf-overview-page.component";
import { translationConfig } from "./translations/config";

const routes: Routes = [
  {
    path: "",
    component: EtfOverviewPageComponent,
  },
];

@NgModule({
  declarations: [EtfOverviewPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    CarouselWithSearchFeatureModule,
    InstrumentListUiModule,
    InstrumentListServiceModule,
    TranslationManagerUtilModule,
  ],
})
export class EtfOverviewPageModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
