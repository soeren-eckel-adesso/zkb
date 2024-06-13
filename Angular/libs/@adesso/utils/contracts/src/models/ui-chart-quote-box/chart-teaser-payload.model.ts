import {AssetClassEnum} from "../../enums/asset-class.enum";
import {ChartDataPayloadModel} from "./chart-data-payload.model";


export class ChartTeaserPayloadModel {
  assetClass: AssetClassEnum;
  name: string;
  isin?: string;
  chartDataPayload: ChartDataPayloadModel;
}
