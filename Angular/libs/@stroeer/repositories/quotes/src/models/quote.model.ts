import {QuotesModelInterface} from "@adesso/util-contracts";

export class QuoteModel implements QuotesModelInterface {
  quote?: number;
  quoteDate?: Date;
  close?: number;
  changeAbsolute?: number;
  changePercent?: number;
  size?: number;
  priceField?: number;
}
