import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServiceBestQuoteModule } from "@adesso/service-best-quote";
import { LoggerUtilModule } from "@base/util-logger";
import { ChartService } from "./services/chart.service";
import { ChartRepositoryModule } from "@stroeer/repository-chart";
import { QuotesRepositoryModule } from "@stroeer/repository-quotes";

@NgModule({
  imports: [CommonModule, ChartRepositoryModule, QuotesRepositoryModule, ServiceBestQuoteModule, LoggerUtilModule],
  providers: [ChartService],
})
export class ChartServiceModule {}
