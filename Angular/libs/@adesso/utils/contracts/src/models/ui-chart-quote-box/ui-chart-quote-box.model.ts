import { KeyValueListItemModel } from "../key-value-list/key-value-list-item.model";
import { AssetClassEnum } from "../../enums/asset-class.enum";
import { ChartDataPayloadModel } from "./chart-data-payload.model";

export class UiChartQuoteBoxModel {
  chartPayload?: ChartDataPayloadModel;

  name: string;
  last?: number;
  bid?: number;
  bidSize?: number;
  ask?: number;
  askSize?: number;
  currency?: string;
  assetClass?: AssetClassEnum;
  keyValues?: KeyValueListItemModel[];
}
