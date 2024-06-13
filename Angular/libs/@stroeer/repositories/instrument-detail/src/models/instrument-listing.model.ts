import { QuotesInterface } from "@adesso/util-contracts";
import { PeriodValueModel } from "./period-value.model";
import { IdNameModel } from "./shared/id-name.model";
import { QuoteModel } from "./shared/quote.model";

export class InstrumentListingModel implements QuotesInterface {
  isMainListing: boolean;
  exchangeValue: number;
  tradingSymbol: string;
  currency: IdNameModel;
  exchange: IdNameModel;
  ask?: QuoteModel;
  bid?: QuoteModel;
  last?: QuoteModel;
  nav?: QuoteModel;
  valuation?: QuoteModel;
  periodValues: PeriodValueModel[];
}
