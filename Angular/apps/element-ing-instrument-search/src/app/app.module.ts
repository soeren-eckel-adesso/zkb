import { DoBootstrap, Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";

import { BrowserModule } from "@angular/platform-browser";
import { InstrumentSearchFeatureComponent, InstrumentSearchFeatureModule } from "@ing/feature-instrument-search";
import { TranslateModule } from "@ngx-translate/core";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, InstrumentSearchFeatureModule, TranslateModule.forRoot(), HttpClientModule],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const adessoContentBox = createCustomElement(InstrumentSearchFeatureComponent, { injector: this.injector });
    customElements.define("ing-instrument-search", adessoContentBox);
  }
}
