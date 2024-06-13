import {QuotesModelInterface} from "./quotes-model.interface";

export interface QuotesInterface {
  ask?: QuotesModelInterface;
  bid?: QuotesModelInterface;
  last?: QuotesModelInterface;
  nav?: QuotesModelInterface;
  valuation?: QuotesModelInterface;
}
