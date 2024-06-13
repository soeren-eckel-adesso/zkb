import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoggerUtilModule } from "@base/util-logger";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { EtfDetailPageComponent } from "./components/etf-detail-page.component";
import { translationConfig } from "./translations/config";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { InstrumentDetailHeaderFeatureModule } from "@adesso/feature-instrument-detail-header";
import { InstrumentDetailServiceModule } from "@adesso/service-instrument-detail";
import { ContentBoxUiModule } from "@adesso/ui-content-box";
import { KeyValueListUiModule } from "@adesso/ui-key-value-list";
import { CompositionUiModule } from "@adesso/ui-composition";

const routes: Routes = [
  {
    path: "",
    component: EtfDetailPageComponent,
  },
];

@NgModule({
  declarations: [EtfDetailPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoggerUtilModule,
    TranslateModule,
    TranslationManagerUtilModule,
    InstrumentDetailHeaderFeatureModule,
    InstrumentDetailServiceModule,
    ContentBoxUiModule,
    KeyValueListUiModule,
    CompositionUiModule,
  ],
})
export class EtfDetailPageModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
