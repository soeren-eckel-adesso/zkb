import { AssetClassEnum } from "@adesso/util-contracts";

export class ChartTeaserValuesModel {
  assetClass?: AssetClassEnum;
  name?: string;
  isin?: string;
  valor?: number;
  quote?: number;
  close?: number;
  changeRelative?: number;
  changeAbsolute?: number;
  currency?: string;
  chartSeriesData?: Array<[number, number]>;
}
