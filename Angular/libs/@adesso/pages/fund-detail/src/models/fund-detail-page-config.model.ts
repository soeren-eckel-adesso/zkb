import { BreadcrumbItemModel } from "@adesso/ui-bread-crumb";
import { InstrumentHeaderPropsModel, KeyValueListItemModel, UiChartQuoteBoxModel } from "@adesso/util-contracts";
import { CompositionItemModel } from "@stroeer/repository-instrument-detail";

export class FundDetailPageConfigModel {
  breadCrumbItems: BreadcrumbItemModel[];
  chartQuoteBoxValues?: UiChartQuoteBoxModel;
  instrumentHeader?: InstrumentHeaderPropsModel;
  baseData: KeyValueListItemModel[];
  costs: KeyValueListItemModel[];
  strategy?: string;
  countryCompositions: CompositionItemModel[];
  industryCompositions: CompositionItemModel[];
  equityCompositions: CompositionItemModel[];
}
