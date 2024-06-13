import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { ReplaySubject, Subject, Subscription } from "rxjs";
import { InstrumentDetailService } from "@adesso/service-instrument-detail";
import { TranslateService } from "@ngx-translate/core";
import { LoggerUtil } from "@base/util-logger";
import { BreadcrumbItemModel } from "@adesso/ui-bread-crumb";
import { KeyValueListOptionEnum, PageTypeEnum, UiChartQuoteBoxModel } from "@adesso/util-contracts";
import { ExchangeRateDetailPageConfigModel } from "../models/exchange-rate-detail-page-config.model";

@Component({
  selector: "page-exchange-rate-detail",
  templateUrl: "./exchange-rate-detail-page.component.html",
  styleUrls: ["./exchange-rate-detail-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExchangeRateDetailPageComponent implements OnDestroy {
  public pageConfig$: Subject<ExchangeRateDetailPageConfigModel> = new ReplaySubject<ExchangeRateDetailPageConfigModel>();
  private routerSubscription: Subscription;

  constructor(public instrumentDetailService: InstrumentDetailService, public translate: TranslateService, public logger: LoggerUtil) {
    this.routerSubscription = this.instrumentDetailService.routerInstrument$().subscribe((instrument) => {
      if (instrument) {
        const config: ExchangeRateDetailPageConfigModel = {
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
        url: this.translate.instant(PageTypeEnum.exchangeRateOverviewPage),
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
