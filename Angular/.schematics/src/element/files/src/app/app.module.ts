import { DoBootstrap, Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";

import { BrowserModule } from "@angular/platform-browser";
import { ContentBoxUiComponent, ContentBoxUiModule } from "@adesso/ui-content-box";

@NgModule({
  imports: [BrowserModule, ContentBoxUiModule],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const adessoContentBox = createCustomElement(ContentBoxUiComponent, { injector: this.injector });
    customElements.define("adesso-content-box", adessoContentBox);
  }
}
