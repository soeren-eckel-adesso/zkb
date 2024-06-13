import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BreadCrumbUiComponent } from "./components/bread-crumb-ui.component";

@NgModule({
  declarations: [BreadCrumbUiComponent],
  imports: [CommonModule, RouterModule],
  exports: [BreadCrumbUiComponent],
})
export class BreadCrumbUiModule {}
