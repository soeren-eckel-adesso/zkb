import { DoBootstrap, Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { BrowserModule } from "@angular/platform-browser";
import { DescriptionBoxUiModule } from "@ing/ui-description-box";
import { TranslateModule } from "@ngx-translate/core";
import { ServiceDescriptionModule } from "@ing/service-description";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { StroeerHttpInterceptor } from "@stroeer/util-stroeer-http-interceptor";
import { ElementDescriptionComponent } from "../components/element-description.component";

@NgModule({
  declarations: [ElementDescriptionComponent],
  imports: [BrowserModule, HttpClientModule, DescriptionBoxUiModule, ServiceDescriptionModule, TranslateModule.forRoot()],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StroeerHttpInterceptor,
      multi: true,
    },
  ],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const descriptionBox = createCustomElement(ElementDescriptionComponent, { injector: this.injector });
    customElements.define("adesso-ing-description", descriptionBox);
  }
}
