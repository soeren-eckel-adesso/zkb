import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormatUtilModule } from "@base/util-format";
import { QuoteStreamFeatureComponent } from "./components/quote-stream-feature.component";
import { NgLetUtilModule } from "@base/util-ng-let";

@NgModule({
  declarations: [QuoteStreamFeatureComponent],
  imports: [CommonModule, FormatUtilModule, NgLetUtilModule],
  exports: [QuoteStreamFeatureComponent],
})
export class QuoteStreamFeatureModule {}
