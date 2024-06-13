import { QuotesInterface } from "@adesso/util-contracts";
import { QuoteModel } from "./quote.model";

export class QuoteResultModel implements QuotesInterface {
  valor: number;
  exchangeId: number;
  currencyId: number;
  ask?: QuoteModel;
  bid?: QuoteModel;
  last?: QuoteModel;
  nav?: QuoteModel;
  valuation?: QuoteModel;
}
