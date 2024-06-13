import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { InputTextUiComponent } from "./components/input-text/input-text-ui.component";
import { ButtonUiComponent } from "./components/button/button-ui.component";
import { InputPasswordUiComponent } from "./components/input-password/input-password-ui.component";
import { SelectUiComponent } from "./components/select/select-ui.component";
import { InputTextareaUiComponent } from "./components/input-text-area/input-textarea-ui.component";

@NgModule({
  declarations: [InputTextUiComponent, InputTextareaUiComponent, InputPasswordUiComponent, ButtonUiComponent, SelectUiComponent],
  imports: [CommonModule, FormsModule],
  exports: [InputTextUiComponent, InputTextareaUiComponent, InputPasswordUiComponent, ButtonUiComponent, SelectUiComponent],
})
export class FormularUiModule {}
