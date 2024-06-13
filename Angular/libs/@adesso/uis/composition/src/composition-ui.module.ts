import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormatUtilModule } from "@base/util-format";
import { ContentBoxUiModule } from "@adesso/ui-content-box";
import { ChartUiModule } from "@adesso/ui-chart";
import { CompositionUiComponent } from "./components/composition-ui.component";
import { LoggerUtilModule } from "@base/util-logger";

@NgModule({
  declarations: [CompositionUiComponent],
  imports: [CommonModule, FormatUtilModule, ContentBoxUiModule, ChartUiModule, LoggerUtilModule],
  exports: [CompositionUiComponent],
})
export class CompositionUiModule {}
