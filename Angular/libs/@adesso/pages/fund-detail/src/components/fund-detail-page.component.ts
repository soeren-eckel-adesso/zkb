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
import { BreadcrumbItemModel } from "@adesso/ui-bread-crumb";
import { FundDetailPageConfigModel } from "../models/fund-detail-page-config.model";

@Component({
  selector: "page-fund-detail",
  templateUrl: "./fund-detail-page.component.html",
  styleUrls: ["./fund-detail-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FundDetailPageComponent implements OnDestroy {
  public pageConfig$: Subject<FundDetailPageConfigModel> = new ReplaySubject<FundDetailPageConfigModel>();
  private routerSubscription: Subscription;

  constructor(public instrumentDetailService: InstrumentDetailService, public translate: TranslateService, public logger: LoggerUtil) {
    this.routerSubscription = this.instrumentDetailService.routerInstrument$().subscribe((instrument) => {
      if (instrument) {
        const config: FundDetailPageConfigModel = {
          breadCrumbItems: this.getBreadCrumbItems(),
          chartQuoteBoxValues: this.getChartQuoteBoxValues(),
          instrumentHeader: instrumentDetailService.instrumentHeader(),
          baseData: this.getBaseData(),
          costs: this.getCostData(),
          countryCompositions: instrumentDetailService.composition(CompositionTypeEnum.country),
          industryCompositions: instrumentDetailService.composition(CompositionTypeEnum.industry),
          equityCompositions: instrumentDetailService.composition(CompositionTypeEnum.equity),
          strategy: instrumentDetailService.strategy(),
        };
        this.pageConfig$.next(config);
      }
    });
  }

  private getBaseData(): KeyValueListItemModel[] {
    const key = KeyValueListOptionEnum;
    return this.instrumentDetailService.extractKeyValueListValues([
      { option: key.distributionType },
      { option: key.replication },
      { option: key.fundAssets },
      { option: key.fundCurrency },
      { option: key.savingsPlan },
    ]);
  }

  private getCostData(): KeyValueListItemModel[] {
    const key = KeyValueListOptionEnum;
    return this.instrumentDetailService.extractKeyValueListValues([
      { option: key.runningCostsPerAnnum },
      { option: key.performanceFeePerAnnum },
    ]);
  }

  private getBreadCrumbItems(): BreadcrumbItemModel[] {
    return [
      {
        label: this.translate.instant("bread-crumb-label-home"),
        url: this.translate.instant(PageTypeEnum.home),
      },
      {
        label: this.translate.instant("bread-crumb-label-overview"),
        url: this.translate.instant(PageTypeEnum.fundOverviewPage),
      },
      {
        label: this.translate.instant("bread-crumb-label-search"),
        url: this.translate.instant(PageTypeEnum.fundSearchPage),
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
      { option: key.fundCategory },
      { option: key.fundTypeFocus },
      { option: key.morningstar },
    ]);
    return result;
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
