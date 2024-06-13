import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { TranslateModule } from "@ngx-translate/core";
import { translationConfig } from "./translations/config";
import { NotFoundPageComponent } from "./components/not-found-page.component";
import { LoggerUtilModule } from "@base/util-logger";

const routes: Routes = [
  {
    path: "",
    component: NotFoundPageComponent,
  },
];

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TranslateModule, TranslationManagerUtilModule, LoggerUtilModule],
})
export class NotFoundPageModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
