import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ContextMenuListUiComponent } from "./components/context-menu-list-ui.component";
import { LoggerUtilModule } from "@base/util-logger";

@NgModule({
  declarations: [ContextMenuListUiComponent],
  imports: [CommonModule, RouterModule, LoggerUtilModule],
  exports: [ContextMenuListUiComponent],
})
export class ContextMenuListUiModule {}
