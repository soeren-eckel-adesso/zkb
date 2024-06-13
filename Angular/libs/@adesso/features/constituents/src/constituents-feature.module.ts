import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoggerUtilModule } from "@base/util-logger";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { ConstituentsFeatureComponent } from "./components/constituents-feature.component";
import { translationConfig } from "./translations/config";
import { TranslateModule } from "@ngx-translate/core";
import { InstrumentListServiceModule } from "@adesso/service-instrument-list";
import { InstrumentListUiModule } from "@adesso/ui-instrument-list";
import { PagingUiModule } from "@adesso/ui-paging";

@NgModule({
  declarations: [ConstituentsFeatureComponent],
  imports: [
    CommonModule,
    LoggerUtilModule,
    TranslateModule,
    TranslationManagerUtilModule,
    InstrumentListServiceModule,
    InstrumentListUiModule,
    PagingUiModule,
  ],
  exports: [ConstituentsFeatureComponent],
})
export class ConstituentsFeatureModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
