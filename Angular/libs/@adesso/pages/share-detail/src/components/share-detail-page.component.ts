import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { ReplaySubject, Subject, Subscription } from "rxjs";
import { InstrumentDetailService } from "@adesso/service-instrument-detail";
import { TranslateService } from "@ngx-translate/core";
import { LoggerUtil } from "@base/util-logger";
import {
  CompositionTypeEnum,
  KeyValueListItemModel,
  KeyValueListOptionEnum,
  PageTypeEnum,
  UiChartQuoteBoxModel,
} from "@adesso/util-contracts";
import { ShareDetailPageConfigModel } from "../models/share-detail-page-config.model";
import { BreadcrumbItemModel } from "@adesso/ui-bread-crumb";
import { NewsService } from "@adesso/service-news";
import { AnalysesService } from "@adesso/service-analyses";

@Component({
  selector: "page-share-detail",
  templateUrl: "./share-detail-page.component.html",
  styleUrls: ["./share-detail-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareDetailPageComponent implements OnDestroy {
  public pageConfig$: Subject<ShareDetailPageConfigModel> = new ReplaySubject<ShareDetailPageConfigModel>();
  private routerSubscription: Subscription;

  constructor(
    public instrumentDetailService: InstrumentDetailService,
    public translate: TranslateService,
    public logger: LoggerUtil,
    newsService: NewsService,
    analysesService: AnalysesService
  ) {
    this.routerSubscription = this.instrumentDetailService.routerInstrument$().subscribe((instrument) => {
      if (instrument) {
        const isin = instrument.base?.isin || "";
        const analysisFrom = new Date(Date.now());
        analysisFrom.setMonth(analysisFrom.getMonth() - 6);

        const config: ShareDetailPageConfigModel = {
          breadCrumbItems: this.getBreadCrumbItems(),
          baseData: this.getBaseData(),
          chartQuoteBoxValues: this.getChartQuoteBoxValues(),
          instrumentHeader: instrumentDetailService.instrumentHeader(),
          shareholderCompositions: instrumentDetailService.composition(CompositionTypeEnum.shareholder),
          companyDescription: instrumentDetailService.companyDescription(),
          news$: newsService.getNewsList({ companyIsin: isin, top: 7, skip: 0, isDescendingOrder: true }),
          analyses$: analysesService.getAnalysesList({ companyIsin: isin, top: 5, skip: 0, from: analysisFrom }),
        };
        this.pageConfig$.next(config);
      }
    });
  }

  private getBreadCrumbItems(): BreadcrumbItemModel[] {
    return [
      {
        label: this.translate.instant("bread-crumb-label-home"),
        url: this.translate.instant(PageTypeEnum.home),
      },
      {
        label: this.translate.instant("bread-crumb-label-overview"),
        url: this.translate.instant(PageTypeEnum.shareOverviewPage),
      },
      {
        label: this.translate.instant("bread-crumb-label-search"),
        url: this.translate.instant(PageTypeEnum.shareSearchPage),
      },
      {
        label: this.translate.instant("bread-crumb-label-detail"),
      },
    ];
  }

  private getChartQuoteBoxValues(): UiChartQuoteBoxModel | undefined {
    const result = this.instrumentDetailService.createChartQuoteBoxValues();
    if (!result) {
      return undefined;
    }
    const key = KeyValueListOptionEnum;
    result.keyValues = this.instrumentDetailService.extractKeyValueListValues([
      { option: key.domicile },
      { option: key.shareSector },
      { option: key.homepage },
    ]);
    return result;
  }

  private getBaseData(): KeyValueListItemModel[] {
    const key = KeyValueListOptionEnum;

    return this.instrumentDetailService.extractKeyValueListValues([
      { option: key.name },
      { option: key.isin },
      { option: key.domicile },
      { option: key.shareSector },
      { option: key.homepage },
    ]);
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
