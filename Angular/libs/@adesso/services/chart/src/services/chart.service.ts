import { Injectable } from "@angular/core";
import { combineLatest, Observable } from "rxjs";
import { ChartDataPayloadModel, ChartTeaserPayloadModel, QuotesModelInterface } from "@adesso/util-contracts";
import { ChartTeaserValuesModel } from "@adesso/ui-chart-teaser";
import { map } from "rxjs/operators";
import { BestQuoteService } from "@adesso/service-best-quote";
import { LoggerUtil } from "@base/util-logger";
import { ChartRepository } from "@stroeer/repository-chart";
import { QuotesRepository } from "@stroeer/repository-quotes";

@Injectable({
  providedIn: "root",
})
export class ChartService {
  constructor(
    private chartRepository: ChartRepository,
    private quotesRepository: QuotesRepository,
    private bestQuoteService: BestQuoteService,
    logger: LoggerUtil
  ) {
    logger.serviceConstructor("ChartService");
  }

  public loadChartData(payload: ChartDataPayloadModel): Observable<Array<[number, number]>> {
    return this.chartRepository.loadChartData(payload).pipe(
      map((requestResult) => {
        if (requestResult && requestResult.results && requestResult.results.length > 0) {
          return requestResult.results[0].data;
        }
        return [];
      })
    );
  }

  public loadChartTeaserData(payload: ChartTeaserPayloadModel): Observable<ChartTeaserValuesModel> {
    const triples = [`${payload.chartDataPayload.valor},${payload.chartDataPayload.exchangeId},${payload.chartDataPayload.currencyId}`];
    return combineLatest([this.chartRepository.loadChartData(payload.chartDataPayload), this.quotesRepository.loadQuotes(triples)]).pipe(
      map(([chartData, quotes]) => {
        let bestQuote: QuotesModelInterface | undefined;
        if (quotes && quotes.length > 0) {
          bestQuote = this.bestQuoteService.getBestQuote(quotes[0]);
        }
        const result: ChartTeaserValuesModel = {
          assetClass: payload.assetClass,
          name: payload.name,
          isin: payload.isin,
          quote: bestQuote?.quote,
          close: bestQuote?.close,
          changeRelative: bestQuote?.changePercent,
          changeAbsolute: bestQuote?.changeAbsolute,
          valor: payload.chartDataPayload.valor,
          chartSeriesData: chartData?.results[0].data,
        };
        return result;
      })
    );
  }
}
