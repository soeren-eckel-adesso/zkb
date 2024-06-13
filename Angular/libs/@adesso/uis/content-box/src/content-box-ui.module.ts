import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContentBoxUiComponent } from "./components/content-box-ui.component";

@NgModule({
  declarations: [ContentBoxUiComponent],
  imports: [CommonModule],
  exports: [ContentBoxUiComponent],
})
export class ContentBoxUiModule {}
