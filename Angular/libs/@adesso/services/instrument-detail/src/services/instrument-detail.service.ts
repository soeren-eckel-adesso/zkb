import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import {
  CompositionTypeEnum,
  InstrumentHeaderPropsModel,
  KeyValueListItemModel,
  KeyValueListOptionEnum,
  KeyValueListRequestItemModel,
  UiChartQuoteBoxModel,
} from "@adesso/util-contracts";
import { BestQuoteService } from "@adesso/service-best-quote";
import { ValueFormatterConverter } from "@base/util-format";
import { LoggerUtil } from "@base/util-logger";
import { distinctUntilChanged, filter, map, switchMap, tap } from "rxjs/operators";
import { ActivationEnd, Router } from "@angular/router";
import {
  CompositionItemModel,
  InstrumentDetailRepository,
  InstrumentDetailViewModel,
  InstrumentListingModel,
} from "@stroeer/repository-instrument-detail";

@Injectable({
  providedIn: "root",
})
export class InstrumentDetailService {
  public instrument?: InstrumentDetailViewModel;
  private valueFormatterConverter: ValueFormatterConverter = new ValueFormatterConverter();

  constructor(
    logger: LoggerUtil,
    public instrumentDetailRepository: InstrumentDetailRepository,
    private translate: TranslateService,
    private bestQuoteService: BestQuoteService,
    private router: Router
  ) {
    logger.serviceConstructor("InstrumentDetailService");
  }

  public routerInstrument$(): Observable<InstrumentDetailViewModel> {
    return this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      map((event: ActivationEnd) => event.snapshot.params.instrumentId),
      distinctUntilChanged(),
      map((instrumentId: string) => this.loadInstrument(instrumentId)),
      switchMap((instrument) =>
        instrument.pipe(
          map((instrument) => {
            if (instrument?.base?.assetClass) {
              const url = this.translate
                .instant(instrument.base.assetClass + "-detail-page")
                .replace("{{instrumentId}}", instrument?.base?.valor);
              if (url !== this.router.url) {
                //Redirect if wrong URL
                this.router.navigateByUrl(url);
              }
            }
            return instrument;
          })
        )
      )
    );
  }

  public loadInstrument(instrumentId: string): Observable<InstrumentDetailViewModel> {
    return this.instrumentDetailRepository.getInstrumentDetail(instrumentId).pipe(
      tap((instrument) => {
        this.instrument = instrument;
      })
    );
  }

  public createChartQuoteBoxValues(): UiChartQuoteBoxModel | undefined {
    const mainListing = this.getMainListing();

    if (!mainListing || !this.instrument?.base?.valor) {
      return undefined;
    }

    const bestQuote = this.bestQuoteService.getBestQuote(mainListing);
    if (!bestQuote) {
      return undefined;
    }
    const result: UiChartQuoteBoxModel = {
      chartPayload: {
        valor: this.instrument.base.valor,
        currencyId: mainListing.currency.id,
        exchangeId: mainListing.exchange.id,
        period: "OneYear",
        priceField: bestQuote.priceField,
      },
      name: this.instrument.base.name,
      assetClass: this.instrument.base.assetClass,
    };

    result.currency = mainListing.currency?.name;
    result.last = bestQuote.quote;
    if (mainListing.bid?.quote) {
      result.bid = mainListing.bid?.quote;
      result.bidSize = mainListing.bid?.size;
    } else if (mainListing.bid?.close) {
      result.bid = mainListing.bid?.close;
    }

    if (mainListing.ask?.quote) {
      result.ask = mainListing.ask?.quote;
      result.askSize = mainListing.ask?.size;
    } else if (mainListing.ask?.close) {
      result.ask = mainListing.ask?.close;
    }
    return result;
  }

  public extractKeyValueListValues(request: KeyValueListRequestItemModel[]): KeyValueListItemModel[] {
    const result: KeyValueListItemModel[] = [];
    request.forEach((requestItem) => {
      const name = requestItem.translation ? requestItem.translation : this.translate.instant("key-value-label-" + requestItem.option);
      switch (requestItem.option) {
        case KeyValueListOptionEnum.distributionType:
          result.push({
            name,
            value: this.valueFormatterConverter.convertString(this.instrument?.domicile),
          });
          break;
        case KeyValueListOptionEnum.domicile:
          if (this.instrument?.domicile) {
            result.push({
              name,
              value: this.valueFormatterConverter.convertString(
                this.translate.instant("domicile-" + this.instrument?.domicile.toLowerCase())
              ),
            });
          }

          break;
        case KeyValueListOptionEnum.fundAssets:
          result.push({
            name,
            value: this.valueFormatterConverter.convertNumber(
              this.instrument?.fundData?.planAssetsInEUR ? this.instrument?.fundData?.planAssetsInEUR / 1000000 : undefined,
              2,
              "Mio. EUR"
            ),
          });
          break;
        case KeyValueListOptionEnum.fundCategory:
          result.push({
            name,
            value: this.valueFormatterConverter.convertString(
              this.instrument?.fundData?.typeClass
                ? this.translate.instant(
                    "fund-type-class-" + this.instrument?.fundData?.typeClass.toLocaleLowerCase().trim().replace(" ", "-")
                  )
                : ""
            ),
          });
          break;
        case KeyValueListOptionEnum.fundCurrency:
          result.push({
            name,
            value: this.valueFormatterConverter.convertString(this.instrument?.fundData?.currencyIsoCode),
          });
          break;
        case KeyValueListOptionEnum.fundTypeFocus:
          result.push({
            name,
            value: this.valueFormatterConverter.convertString(
              this.instrument?.fundData?.typeFocus
                ? this.translate.instant(
                    "fund-type-focus-" + this.instrument?.fundData?.typeFocus.toLocaleLowerCase().trim().replace(" ", "-")
                  )
                : ""
            ),
          });
          break;
        case KeyValueListOptionEnum.focus:
          result.push({
            name,
            value: this.valueFormatterConverter.convertString(this.instrument?.fundData?.typeFocus),
          });
          break;
        case KeyValueListOptionEnum.homepage:
          result.push({
            name,
            value: this.valueFormatterConverter.convertString(this.instrument?.company?.homepage),
          });
          break;
        case KeyValueListOptionEnum.isin:
          result.push({
            name,
            value: this.valueFormatterConverter.convertString(this.instrument?.base?.isin),
          });
          break;
        case KeyValueListOptionEnum.morningstar:
          result.push({
            name,
            value: this.valueFormatterConverter.convertStar(this.instrument?.morningStarRating),
          });
          break;
        case KeyValueListOptionEnum.name:
          result.push({
            name,
            value: this.valueFormatterConverter.convertString(this.instrument?.base?.name),
          });
          break;
        case KeyValueListOptionEnum.performanceFeePerAnnum:
          result.push({
            name,
            value: this.valueFormatterConverter.convertString(this.translate.instant("no")),
          });
          break;
        case KeyValueListOptionEnum.priceEarningRatio:
          if (this.instrument?.yearValues && this.instrument.yearValues.length > 0 && this.instrument.yearValues[0].kgv !== null) {
            result.push({
              name,
              value: this.valueFormatterConverter.convertNumber(this.instrument.yearValues[0].kgv.value, 2, "EUR"),
            });
          } else {
            result.push({
              name,
              value: this.valueFormatterConverter.convertString(requestItem.defaultValue),
            });
          }

          break;
        case KeyValueListOptionEnum.replication:
          if (this.instrument?.fundData?.etfReplicationType) {
            result.push({
              name,
              value: this.valueFormatterConverter.convertString(
                this.translate.instant("fund-replication-type-" + this.instrument.fundData.etfReplicationType.toLowerCase())
              ),
            });
          }

          break;
        case KeyValueListOptionEnum.runningCostsPerAnnum:
          result.push({
            name,
            value: this.valueFormatterConverter.convertNumber(this.instrument?.fundData?.flatrateFee, 2, "%"),
          });
          break;
        case KeyValueListOptionEnum.savingsPlan:
          result.push({
            name,
            value: this.valueFormatterConverter.convertString(
              this.instrument?.fundData?.isSaveplanPossible ? this.translate.instant("yes") : this.translate.instant("no")
            ),
          });
          break;
        case KeyValueListOptionEnum.shareSector:
          result.push({
            name,
            value: this.valueFormatterConverter.convertString(this.instrument?.shareSector),
          });
          break;
        case KeyValueListOptionEnum.wkn:
          result.push({
            name,
            value: this.valueFormatterConverter.convertString(this.instrument?.base?.wkn),
          });
          break;
      }
    });

    return result;
  }

  public instrumentHeader(): InstrumentHeaderPropsModel | undefined {
    if (!this.instrument?.base) {
      return undefined;
    }

    return {
      name: this.instrument.base.name,
      isin: this.instrument.base.isin,
      wkn: this.instrument.base.wkn,
    };
  }

  public getMainListing(): InstrumentListingModel | undefined {
    if (!this.instrument || !this.instrument.listings) {
      return undefined;
    }
    let mainListing = this.instrument.listings.find((x) => x.isMainListing);
    if (mainListing && mainListing.bid?.quote && mainListing.ask?.quote) {
      return mainListing;
    }
    mainListing = this.instrument.listings.find((x) => x.periodValues && x.periodValues.length > 0 && x.bid && x.ask);
    if (mainListing) {
      return mainListing;
    }

    mainListing = this.instrument.listings.find((x) => x.bid && x.ask);
    if (mainListing) {
      return mainListing;
    }

    return this.instrument.listings[0];
  }

  public companyDescription(): string | undefined {
    return this.instrument?.company?.description;
  }

  public strategy(): string | undefined {
    return this.instrument?.fundData?.strategy;
  }

  public composition(compositionType: CompositionTypeEnum): CompositionItemModel[] {
    const result = this.instrument?.compositions
      ?.find((x) => x.type === compositionType)
      ?.items?.filter((y) => y.name)
      ?.sort((a, b) => (a.portion < b.portion ? 1 : b.portion < a.portion ? -1 : 0));
    if (!result) {
      return [];
    }

    let elsePortion = 100;
    result.forEach((x) => {
      elsePortion -= x.portion;
    });
    if (result.length > 0 && +elsePortion.toFixed(2) > 0) {
      result.push({
        name: "Sonstige",
        portion: +elsePortion.toFixed(2),
      });
    }

    return result;
  }
}
