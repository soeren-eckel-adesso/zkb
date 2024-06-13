import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContentBoxUiModule } from "@adesso/ui-content-box";
import { RouterModule } from "@angular/router";
import { FormatUtilModule } from "@base/util-format";
import { TranslateModule } from "@ngx-translate/core";
import { NewsListUiComponent } from "./components/news-list-ui.component";
import { LoggerUtilModule } from "@base/util-logger";

@NgModule({
  declarations: [NewsListUiComponent],
  imports: [CommonModule, ContentBoxUiModule, RouterModule, FormatUtilModule, TranslateModule, LoggerUtilModule],
  exports: [NewsListUiComponent],
})
export class NewsListUiModule {}
