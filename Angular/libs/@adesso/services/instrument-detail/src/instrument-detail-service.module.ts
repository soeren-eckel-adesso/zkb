import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { LoggerUtilModule } from "@base/util-logger";
import { InstrumentDetailService } from "./services/instrument-detail.service";
import { translationConfig } from "./translations/config";
import { RouterModule } from "@angular/router";
import { InstrumentDetailRepositoryModule } from "@stroeer/repository-instrument-detail";

@NgModule({
  imports: [CommonModule, LoggerUtilModule, TranslationManagerUtilModule, InstrumentDetailRepositoryModule, RouterModule],
  providers: [InstrumentDetailService],
})
export class InstrumentDetailServiceModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
