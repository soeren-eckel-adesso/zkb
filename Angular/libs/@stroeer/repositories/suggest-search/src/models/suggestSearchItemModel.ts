import { AssetClassEnum } from "@adesso/util-contracts";

export interface SuggestSearchItemModel {
  name: string;
  isin: string;
  type: AssetClassEnum;
}
