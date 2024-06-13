import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgLetDirective } from "./directives/ng-let.directive";

@NgModule({
  declarations: [NgLetDirective],
  imports: [CommonModule],
  exports: [NgLetDirective],
})
export class NgLetUtilModule {}
