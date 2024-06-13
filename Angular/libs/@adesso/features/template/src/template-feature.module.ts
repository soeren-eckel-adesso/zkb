import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderFeatureModule } from "@adesso/feature-header";
import { TemplateFeatureComponent } from "./components/template-feature.component";
import { LoggerUtilModule } from "@base/util-logger";

@NgModule({
  declarations: [TemplateFeatureComponent],
  imports: [CommonModule, HeaderFeatureModule, LoggerUtilModule],
  exports: [TemplateFeatureComponent],
})
export class TemplateFeatureModule {}
