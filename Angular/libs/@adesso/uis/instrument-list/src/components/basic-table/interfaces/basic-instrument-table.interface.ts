import {AssetClassEnum} from "@adesso/util-contracts";

export class BasicInstrumentTableInterface {
  assetClass: AssetClassEnum;
  name: string;
  isin?: string;
  valor: number;
  wkn?: string;
  quote?: number;
  quoteDate?: Date;
  currencyCode?: string;
}
