import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EnvironmentUtilModule } from "@adesso/util-environment";
import { LoggerUtilModule } from "@base/util-logger";
import { QuoteStreamService } from "./services/quote-stream.service";

@NgModule({
  imports: [CommonModule, EnvironmentUtilModule, LoggerUtilModule],
})
export class ServiceQuoteStreamModule {
  static services = {
    lazy: QuoteStreamService,
  };
  static lazyModule: any;
}
