import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { KeyValueListUiModule } from "@adesso/ui-key-value-list";
import { InstrumentDetailServiceModule } from "@adesso/service-instrument-detail";
import { ContentBoxUiModule } from "@adesso/ui-content-box";
import { KeyValueListFeatureComponent } from "./components/key-value-list-feature.component";
import { LoggerUtilModule } from "@base/util-logger";

@NgModule({
    declarations: [KeyValueListFeatureComponent],
    imports: [CommonModule, BrowserModule, ContentBoxUiModule, KeyValueListUiModule, InstrumentDetailServiceModule, LoggerUtilModule],
    bootstrap: [],
    exports: [KeyValueListFeatureComponent]
})
export class InstrumentDetailKeyValueListFeatureModule {}
