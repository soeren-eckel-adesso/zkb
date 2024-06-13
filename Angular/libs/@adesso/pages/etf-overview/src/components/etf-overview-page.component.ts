import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { AssetClassEnum, FundTypeClassEnum, SortableFieldEnum, UiInstrumentListTypeEnum } from "@adesso/util-contracts";
import { InstrumentListViewModel } from "@adesso/ui-instrument-list";
import { InstrumentListService } from "@adesso/service-instrument-list";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";

@Component({
  selector: "page-etf-overview",
  templateUrl: "./etf-overview-page.component.html",
  styleUrls: ["./etf-overview-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EtfOverviewPageComponent implements OnInit {
  public tableType: UiInstrumentListTypeEnum = UiInstrumentListTypeEnum.performance;

  public commodityFunds$: Observable<InstrumentListViewModel[]>;
  public equityFunds$: Observable<InstrumentListViewModel[]>;
  public mixedFunds$: Observable<InstrumentListViewModel[]>;
  public miscellaneousFunds$: Observable<InstrumentListViewModel[]>;
  public moneyMarketFunds$: Observable<InstrumentListViewModel[]>;
  public pensionFunds$: Observable<InstrumentListViewModel[]>;
  public umbrellaFunds$: Observable<InstrumentListViewModel[]>;

  public slides = [
    { src: "assets/slider/etf/etf-home-hero_3.jpg" },
    { src: "assets/slider/etf/ETF.jpg" },
    { src: "assets/slider/etf/etf-cosa-1200x675.jpg" },
    { src: "assets/slider/etf/etf-teaser.jpg" },
    { src: "assets/slider/etf/images.jpg" },
    { src: "assets/slider/etf/kryptomoney.jpg" },
  ];

  constructor(public instrumentListService: InstrumentListService) {}

  ngOnInit() {
    this.commodityFunds$ = this.searchInstruments(FundTypeClassEnum.commodityFund);
    this.equityFunds$ = this.searchInstruments(FundTypeClassEnum.equityFund);
    this.mixedFunds$ = this.searchInstruments(FundTypeClassEnum.mixedFund);
    this.miscellaneousFunds$ = this.searchInstruments(FundTypeClassEnum.miscellaneousFunds);
    this.moneyMarketFunds$ = this.searchInstruments(FundTypeClassEnum.moneyMarketFund);
    this.pensionFunds$ = this.searchInstruments(FundTypeClassEnum.pensionFund);
    this.umbrellaFunds$ = this.searchInstruments(FundTypeClassEnum.umbrellaFund);
  }

  private searchInstruments(fundTypeClass: FundTypeClassEnum): Observable<InstrumentListViewModel[]> {
    return this.instrumentListService
      .searchInstrument(
        {
          top: 5,
          skip: 0,
          orderBy: SortableFieldEnum.name,
          isDescendingOrder: false,
          assetClasses: AssetClassEnum.etf,
          fundTypeClass,
        },
        UiInstrumentListTypeEnum.performance
      )
      .pipe(
        take(1),
        map((x) => (x ? x.result : []))
      );
  }
}
