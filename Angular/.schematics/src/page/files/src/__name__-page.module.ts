import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoggerUtilModule } from "@base/util-logger";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { <%= classify(name) %>PageComponent } from "./components/<%= name %>-page.component";
import { translationConfig } from "./translations/config";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

const routes: Routes = [
  {
    path: "",
    component: <%= classify(name) %>PageComponent,
  },
];

@NgModule({
  declarations: [<%= classify(name) %>PageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), LoggerUtilModule, TranslateModule, TranslationManagerUtilModule]
})
export class <%= classify(name) %>PageModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
