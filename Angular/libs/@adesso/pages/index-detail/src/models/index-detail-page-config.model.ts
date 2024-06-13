import { BreadcrumbItemModel } from "@adesso/ui-bread-crumb";
import { InstrumentHeaderPropsModel, UiChartQuoteBoxModel } from "@adesso/util-contracts";
import { Observable } from "rxjs";
import { InstrumentListViewModel } from "@adesso/ui-instrument-list";

export class IndexDetailPageConfigModel {
  breadCrumbItems: BreadcrumbItemModel[];
  chartQuoteBoxValues?: UiChartQuoteBoxModel;
  instrumentHeader?: InstrumentHeaderPropsModel;
  valor?: number;
  germanIndices: Observable<InstrumentListViewModel[]>;
  europeIndices: Observable<InstrumentListViewModel[]>;
  usaAndAsiaIndices: Observable<InstrumentListViewModel[]>;
}
