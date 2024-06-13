import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormatUtilModule } from "@base/util-format";
import { NewsDetailUiComponent } from "./components/news-detail-ui.component";

@NgModule({
  declarations: [NewsDetailUiComponent],
  imports: [CommonModule, FormatUtilModule],
  exports: [NewsDetailUiComponent],
})
export class NewsDetailUiModule {}
