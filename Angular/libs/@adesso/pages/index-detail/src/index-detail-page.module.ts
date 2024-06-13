import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoggerUtilModule } from "@base/util-logger";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { IndexDetailPageComponent } from "./components/index-detail-page.component";
import { translationConfig } from "./translations/config";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { InstrumentDetailHeaderFeatureModule } from "@adesso/feature-instrument-detail-header";
import { InstrumentDetailServiceModule } from "@adesso/service-instrument-detail";
import { InstrumentListUiModule } from "@adesso/ui-instrument-list";
import { NgLetUtilModule } from "@base/util-ng-let";
import { InstrumentListServiceModule } from "@adesso/service-instrument-list";
import { ConstituentsFeatureModule } from "@adesso/feature-constituents";

const routes: Routes = [
  {
    path: "",
    component: IndexDetailPageComponent,
  },
];

@NgModule({
  declarations: [IndexDetailPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoggerUtilModule,
    TranslateModule,
    TranslationManagerUtilModule,
    InstrumentDetailHeaderFeatureModule,
    InstrumentDetailServiceModule,
    InstrumentListUiModule,
    NgLetUtilModule,
    InstrumentListServiceModule,
    ConstituentsFeatureModule,
  ],
})
export class IndexDetailPageModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
