import {RecommendationEnum} from "@adesso/util-contracts";
import {AnalysisSearchResultItemModel} from "./analysis-search-result-item.model";

export class AnalysisModel implements AnalysisSearchResultItemModel{
  id: string;
  date: Date;
  headline: string;
  companyName?: string;
  companyIsin?: string;
  analystName?: string;
  instituteName?: string;
  priceTarget?: number;
  priceTargetPrevious?: number;
  priceCurrency?: string;
  timeFrameInMonth?: number;
  recommendation?: RecommendationEnum;
  recommendationPrevious?: RecommendationEnum;
  recommendationSource?: string;
  body: string;
}
