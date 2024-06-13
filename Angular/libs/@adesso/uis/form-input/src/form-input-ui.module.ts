import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormInputUiComponent } from "./components/form-input-ui.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NgLetUtilModule } from "@base/util-ng-let";

@NgModule({
  declarations: [FormInputUiComponent],
  imports: [CommonModule, ReactiveFormsModule, NgLetUtilModule],
  exports: [FormInputUiComponent],
})
export class FormInputUiModule {}
