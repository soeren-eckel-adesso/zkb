import { DoBootstrap, Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { InstrumentDetailConfigFeatureComponent, InstrumentDetailConfigFeatureModule } from "@adesso/feature-instrument-detail-config";
import { InstrumentDetailKeyValueListFeatureModule, KeyValueListFeatureComponent } from "@adesso/feature-instrument-detail-key-value-list";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [InstrumentDetailConfigFeatureModule, InstrumentDetailKeyValueListFeatureModule, TranslateModule.forRoot()],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const adessoConfigInstrumentDetailElement = createCustomElement(InstrumentDetailConfigFeatureComponent, { injector: this.injector });
    customElements.define("adesso-config-instrument-detail", adessoConfigInstrumentDetailElement);

    const adessoKeyValueList = createCustomElement(KeyValueListFeatureComponent, {
      injector: this.injector,
    });
    customElements.define("adesso-key-value-list", adessoKeyValueList);
  }
}
