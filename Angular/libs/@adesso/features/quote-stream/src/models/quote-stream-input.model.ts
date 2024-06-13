import { AssetClassEnum, PushFieldEnum } from "@adesso/util-contracts";

export class QuoteStreamInputModel {
  pushField: PushFieldEnum;
  valor?: number;
  value?: number;
  valueDate?: Date;
  close?: number;
  suffix?: string;
  isin?: string;
  assetClass?: AssetClassEnum;
  factor?: number;
  decimals?: number;
}
