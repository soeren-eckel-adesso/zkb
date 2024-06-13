import { NgModule } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { translationConfig } from "../apps/web-adesso-demo/src/translations/config";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { CulturesEnum } from "@adesso/util-contracts";

@NgModule({
  imports: [TranslateModule.forRoot({}), TranslationManagerUtilModule],
})
export class StorybookTranslateModule {
  constructor(translateService: TranslateService, translationManager: TranslationManagerUtil) {
    translateService.setDefaultLang(CulturesEnum.deDe);
    translateService.use(CulturesEnum.deDe);
    translationManager.importTranslations(translationConfig);
  }
}
