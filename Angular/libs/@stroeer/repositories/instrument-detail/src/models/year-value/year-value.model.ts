import { EstimatedQuoteModel } from "../estimated-quote.model";

export class YearValueModel {
  year: number;
  dividendPerShare: EstimatedQuoteModel;
  dividendRatio: EstimatedQuoteModel;
  yieldPerShare: EstimatedQuoteModel;
  kgv: EstimatedQuoteModel;
  kbv: EstimatedQuoteModel;
  bvpsMedian: EstimatedQuoteModel;
  annualNetProfit: EstimatedQuoteModel;
  turnover: EstimatedQuoteModel;
  changeAbsolute: number;
  changePercent: number;
}
