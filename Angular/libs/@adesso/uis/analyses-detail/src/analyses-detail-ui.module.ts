import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormatUtilModule } from "@base/util-format";
import { KeyValueListUiModule } from "@adesso/ui-key-value-list";
import { ContentBoxUiModule } from "@adesso/ui-content-box";
import { AnalysesDetailUiComponent } from "./components/analyses-detail-ui.component";

@NgModule({
  declarations: [AnalysesDetailUiComponent],
  imports: [CommonModule, FormatUtilModule, KeyValueListUiModule, ContentBoxUiModule],
  exports: [AnalysesDetailUiComponent],
})
export class AnalysesDetailUiModule {}
