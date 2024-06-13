import {AssetClassEnum} from "@adesso/util-contracts";
import {BaseInterface} from "@adesso/util-contracts";

export class InstrumentMasterDataModel implements BaseInterface {
  name: string;
  originalName?: string;
  valor?: number;
  isin?: string;
  wkn?: string;
  assetClass: AssetClassEnum;
}
