import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoggerUtilModule } from "@base/util-logger";
import { BestQuoteService } from "./services/best-quote.service";
import { ContractUtilModule } from "@adesso/util-contracts";

@NgModule({
  imports: [CommonModule, LoggerUtilModule, ContractUtilModule],
  providers: [BestQuoteService],
})
export class ServiceBestQuoteModule {}
