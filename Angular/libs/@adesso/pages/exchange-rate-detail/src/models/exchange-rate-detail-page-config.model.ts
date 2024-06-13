import { BreadcrumbItemModel } from "@adesso/ui-bread-crumb";
import { InstrumentHeaderPropsModel, UiChartQuoteBoxModel } from "@adesso/util-contracts";

export class ExchangeRateDetailPageConfigModel {
  breadCrumbItems: BreadcrumbItemModel[];
  chartQuoteBoxValues?: UiChartQuoteBoxModel;
  instrumentHeader?: InstrumentHeaderPropsModel;
}
