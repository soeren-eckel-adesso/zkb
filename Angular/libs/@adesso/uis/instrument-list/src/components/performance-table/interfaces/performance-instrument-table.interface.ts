import {AssetClassEnum} from "@adesso/util-contracts";

export class PerformanceInstrumentTableInterface {
  assetClass: AssetClassEnum;
  name: string;
  isin?: string;
  valor: number;
  quote?: number;
  quoteDate?: Date;
  close?: number;
  currencyCode?: string;
  changePercent?: number;
  changeAbsolute?: number;
}
