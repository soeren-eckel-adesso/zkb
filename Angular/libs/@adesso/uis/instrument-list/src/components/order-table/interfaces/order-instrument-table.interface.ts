import {AssetClassEnum} from "@adesso/util-contracts";

export class OrderInstrumentTableInterface {
  assetClass: AssetClassEnum;
  name: string;
  isin?: string;
  valor: number;
  wkn?: string;
  bid?: number;
  bidClose?: number;
  ask?: number;
  askClose?: number;
  orders?: number;
  changePercent?: number;
  currencyCode?: string;
  chartImageId?: number;
}
