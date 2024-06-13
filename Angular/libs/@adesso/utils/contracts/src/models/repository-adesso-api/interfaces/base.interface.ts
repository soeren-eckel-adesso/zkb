import {AssetClassEnum} from "../../../enums/asset-class.enum";

export interface BaseInterface {
  name: string;
  originalName?: string;
  valor?: number;
  isin?: string;
  wkn?: string;
  assetClass: AssetClassEnum;
}
