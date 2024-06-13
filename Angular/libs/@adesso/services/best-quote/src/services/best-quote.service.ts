import { Injectable } from "@angular/core";
import { PriceFieldEnum, QuotesInterface, QuotesModelInterface } from "@adesso/util-contracts";
import { LoggerUtil } from "@base/util-logger";

@Injectable({
  providedIn: "root",
})
export class BestQuoteService {
  constructor(logger: LoggerUtil) {
    logger.serviceConstructor("BestQuoteService");
  }
  getBestQuote(quotes: QuotesInterface): QuotesModelInterface | undefined {
    if (quotes.last?.quote !== undefined) {
      quotes.last.priceField = PriceFieldEnum.last;
      return quotes.last;
    }
    if (quotes.valuation?.quote !== undefined) {
      quotes.valuation.priceField = PriceFieldEnum.valuation;
      return quotes.valuation;
    }
    if (quotes.nav?.quote !== undefined) {
      quotes.nav.priceField = PriceFieldEnum.nav;
      return quotes.nav;
    }
    if (quotes.bid?.quote !== undefined) {
      quotes.bid.priceField = PriceFieldEnum.bid;
      return quotes.bid;
    }
    if (quotes.ask?.quote !== undefined) {
      quotes.ask.priceField = PriceFieldEnum.ask;
      return quotes.ask;
    }
    return undefined;
  }
}
