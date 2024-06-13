import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { ReplaySubject, Subject, Subscription } from "rxjs";
import { CommodityDetailPageConfigModel } from "../models/commodity-detail-page-config.model";
import { InstrumentDetailService } from "@adesso/service-instrument-detail";
import { TranslateService } from "@ngx-translate/core";
import { LoggerUtil } from "@base/util-logger";
import { KeyValueListOptionEnum, PageTypeEnum, UiChartQuoteBoxModel } from "@adesso/util-contracts";
import { BreadcrumbItemModel } from "@adesso/ui-bread-crumb";

@Component({
  selector: "page-commodity-detail",
  templateUrl: "./commodity-detail-page.component.html",
  styleUrls: ["./commodity-detail-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommodityDetailPageComponent implements OnDestroy {
  public pageConfig$: Subject<CommodityDetailPageConfigModel> = new ReplaySubject<CommodityDetailPageConfigModel>();
  private routerSubscription: Subscription;

  constructor(public instrumentDetailService: InstrumentDetailService, public translate: TranslateService, public logger: LoggerUtil) {
    this.routerSubscription = this.instrumentDetailService.routerInstrument$().subscribe((instrument) => {
      if (instrument) {
        const config: CommodityDetailPageConfigModel = {
          breadCrumbItems: this.getBreadCrumbItems(),
          chartQuoteBoxValues: this.getChartQuoteBoxValues(),
          instrumentHeader: instrumentDetailService.instrumentHeader(),
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
        url: this.translate.instant(PageTypeEnum.commodityOverviewPage),
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
    result.keyValues = this.instrumentDetailService.extractKeyValueListValues([{ option: key.domicile }]);
    return result;
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
