import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServiceBestQuoteModule } from "@adesso/service-best-quote";
import { ServiceCalculationModule } from "@adesso/service-calculation";
import { LoggerUtilModule } from "@base/util-logger";
import { InstrumentListService } from "./services/instrument-list.service";

@NgModule({
  imports: [CommonModule, ServiceBestQuoteModule, ServiceCalculationModule, LoggerUtilModule],
  providers: [InstrumentListService],
})
export class InstrumentListServiceModule {}
