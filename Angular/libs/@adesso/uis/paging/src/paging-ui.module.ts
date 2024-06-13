import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagingUiComponent } from "./components/paging-ui.component";

@NgModule({
  declarations: [PagingUiComponent],
  imports: [CommonModule],
  exports: [PagingUiComponent],
})
export class PagingUiModule {}
