import { CompositionItemInterface, InstrumentHeaderPropsModel, KeyValueListItemModel, UiChartQuoteBoxModel } from "@adesso/util-contracts";
import { BreadcrumbItemModel } from "@adesso/ui-bread-crumb";
import { NewsListItemModel } from "@adesso/ui-news-list";
import { Observable } from "rxjs";
import { AnalysesListItemModel } from "@adesso/ui-analyses-list";

export class ShareDetailPageConfigModel {
  breadCrumbItems: BreadcrumbItemModel[];
  chartQuoteBoxValues?: UiChartQuoteBoxModel;
  instrumentHeader?: InstrumentHeaderPropsModel;
  baseData: KeyValueListItemModel[];
  shareholderCompositions: CompositionItemInterface[];
  companyDescription?: string;
  news$: Observable<NewsListItemModel[]>;
  analyses$: Observable<AnalysesListItemModel[]>;
}
