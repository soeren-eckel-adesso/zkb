import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoggerUtilModule } from "@base/util-logger";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { ExchangeRateDetailPageComponent } from "./components/exchange-rate-detail-page.component";
import { translationConfig } from "./translations/config";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { InstrumentDetailHeaderFeatureModule } from "@adesso/feature-instrument-detail-header";
import { InstrumentDetailServiceModule } from "@adesso/service-instrument-detail";

const routes: Routes = [
  {
    path: "",
    component: ExchangeRateDetailPageComponent,
  },
];

@NgModule({
  declarations: [ExchangeRateDetailPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoggerUtilModule,
    TranslateModule,
    TranslationManagerUtilModule,
    InstrumentDetailHeaderFeatureModule,
    InstrumentDetailServiceModule,
  ],
})
export class ExchangeRateDetailPageModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
