import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormatUtilModule } from "@base/util-format";
import { StarRatingUiComponent } from "./components/star-rating/star-rating-ui.component";
import { KeyValueListUiComponent } from "./components/key-value-list/key-value-list-ui.component";
import { LoggerUtilModule } from "@base/util-logger";

@NgModule({
  declarations: [KeyValueListUiComponent, StarRatingUiComponent],
  imports: [CommonModule, FormatUtilModule, LoggerUtilModule],
  exports: [KeyValueListUiComponent, StarRatingUiComponent],
})
export class KeyValueListUiModule {}
