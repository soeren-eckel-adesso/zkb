import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { KeyValueListUiModule } from "@adesso/ui-key-value-list";
import { InstrumentDetailServiceModule } from "@adesso/service-instrument-detail";
import { InstrumentDetailConfigFeatureComponent } from "./components/instrument-detail-config-feature.component";

@NgModule({
    declarations: [InstrumentDetailConfigFeatureComponent],
    imports: [CommonModule, BrowserModule, KeyValueListUiModule, InstrumentDetailServiceModule],
    bootstrap: [],
    exports: [InstrumentDetailConfigFeatureComponent]
})
export class InstrumentDetailConfigFeatureModule {}
