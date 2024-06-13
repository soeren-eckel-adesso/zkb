import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoggerUtilModule } from "@base/util-logger";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { CurrencyConverterFeatureComponent } from "./components/currency-converter-feature.component";
import { translationConfig } from "./translations/config";
import { TranslateModule } from "@ngx-translate/core";
import { FormInputUiModule } from "@adesso/ui-form-input";
import { FormularUiModule } from "@adesso/ui-formular";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [CurrencyConverterFeatureComponent],
  imports: [
    CommonModule,
    LoggerUtilModule,
    TranslateModule,
    TranslationManagerUtilModule,
    FormInputUiModule,
    FormularUiModule,
    ReactiveFormsModule,
  ],
  exports: [CurrencyConverterFeatureComponent],
})
export class CurrencyConverterFeatureModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
