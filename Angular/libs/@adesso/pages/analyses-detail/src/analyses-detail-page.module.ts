import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { AnalysesDetailUiModule } from "@adesso/ui-analyses-detail";
import { ServiceAnalysesModule } from "@adesso/service-analyses";
import { AnalysesDetailPageComponent } from "./components/analyses-detail-page.component";
import { translationConfig } from "./translations/config";

const routes: Routes = [
  {
    path: "",
    component: AnalysesDetailPageComponent,
  },
];

@NgModule({
  declarations: [AnalysesDetailPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TranslationManagerUtilModule, AnalysesDetailUiModule, ServiceAnalysesModule],
})
export class AnalysesDetailPageModule {
  constructor(translationManager: TranslationManagerUtil) {
    translationManager.importTranslations(translationConfig);
  }
}
