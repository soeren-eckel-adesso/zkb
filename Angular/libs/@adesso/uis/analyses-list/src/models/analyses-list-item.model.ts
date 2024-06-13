import {RecommendationEnum} from "@adesso/util-contracts";

export class AnalysesListItemModel {
  id: string;
  headline: string;
  date: Date;
  recommendation?: RecommendationEnum;
  priceTarget?: number;
  priceCurrency?: string;
}
