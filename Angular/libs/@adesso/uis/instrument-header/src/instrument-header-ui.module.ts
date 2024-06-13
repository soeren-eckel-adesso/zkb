import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InstrumentHeaderUiComponent } from "./components/instrument-header-ui.component";

@NgModule({
  declarations: [InstrumentHeaderUiComponent],
  imports: [CommonModule],
  exports: [InstrumentHeaderUiComponent],
})
export class InstrumentHeaderUiModule {}
