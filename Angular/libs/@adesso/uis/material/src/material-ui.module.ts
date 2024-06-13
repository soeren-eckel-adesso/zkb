import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { UiMaterialDatePickerComponent } from "./components/date-picker/date-picker-ui.component";
import { MaterialStylesUiComponent } from "./components/material-styles/material-styles-ui.component";
import { UiMaterialInputTextComponent } from "./components/input-text/input-text-ui.component";
import { StyleIncludeService } from "./services/style-include.service";
import { UiMaterialButtonComponent } from "./components/button/button-ui.component";

@NgModule({
  declarations: [UiMaterialButtonComponent, UiMaterialDatePickerComponent, UiMaterialInputTextComponent, MaterialStylesUiComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [
    StyleIncludeService,
    {
      provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
      useValue: {
        useUtc: false,
      },
    },
  ],
  exports: [UiMaterialButtonComponent, UiMaterialDatePickerComponent, UiMaterialInputTextComponent, MaterialStylesUiComponent],
})
export class MaterialUiModule {}
