import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { TranslateModule } from "@ngx-translate/core";
import { FormularUiModule } from "@adesso/ui-formular";
import { LoginUiComponent } from "./components/login-ui.component";
import { translationConfig } from "./translations/config";
import { FormInputUiModule } from "@adesso/ui-form-input";
import { ReactiveFormsModule } from "@angular/forms";
import { FormButtonUiModule } from "@adesso/ui-form-button";
import { FormUtilModule } from "@base/util-form";

@NgModule({
  declarations: [LoginUiComponent],
  imports: [
    CommonModule,
    TranslationManagerUtilModule,
    TranslateModule,
    FormularUiModule,
    FormInputUiModule,
    FormButtonUiModule,
    ReactiveFormsModule,
    FormUtilModule,
  ],
  exports: [LoginUiComponent],
})
export class LoginUiModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
