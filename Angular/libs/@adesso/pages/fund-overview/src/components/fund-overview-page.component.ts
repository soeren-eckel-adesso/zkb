import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { AssetClassEnum, FundTypeClassEnum, FundTypeFocusEnum, SortableFieldEnum, UiInstrumentListTypeEnum } from "@adesso/util-contracts";
import { InstrumentListViewModel } from "@adesso/ui-instrument-list";
import { InstrumentListService } from "@adesso/service-instrument-list";
import { map, take } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "page-fund-overview",
  templateUrl: "./fund-overview-page.component.html",
  styleUrls: ["./fund-overview-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FundOverviewPageComponent implements OnInit {
  public tableType: UiInstrumentListTypeEnum = UiInstrumentListTypeEnum.performance;

  public commodityFunds$: Observable<InstrumentListViewModel[]>;
  public equityFunds$: Observable<InstrumentListViewModel[]>;
  public mixedFunds$: Observable<InstrumentListViewModel[]>;
  public miscellaneousFunds$: Observable<InstrumentListViewModel[]>;
  public moneyMarketFunds$: Observable<InstrumentListViewModel[]>;
  public pensionFunds$: Observable<InstrumentListViewModel[]>;
  public realEstateFunds$: Observable<InstrumentListViewModel[]>;
  public umbrellaFunds$: Observable<InstrumentListViewModel[]>;

  public slides = [{ src: "assets/slider/fonds/22692.0.1080p.jpg" }, { src: "assets/slider/fonds/fonds-kaufen-660.jpg" }];

  constructor(public instrumentListService: InstrumentListService) {}

  ngOnInit() {
    this.commodityFunds$ = this.searchInstruments(FundTypeClassEnum.commodityFund);
    this.equityFunds$ = this.searchInstruments(FundTypeClassEnum.equityFund, undefined, 4, 5);
    this.mixedFunds$ = this.searchInstruments(FundTypeClassEnum.mixedFund, undefined, 4, 5);
    this.miscellaneousFunds$ = this.searchInstruments(FundTypeClassEnum.miscellaneousFunds, undefined, 4, 5);
    this.moneyMarketFunds$ = this.searchInstruments(FundTypeClassEnum.moneyMarketFund, undefined, 4, 5);
    this.pensionFunds$ = this.searchInstruments(FundTypeClassEnum.pensionFund, undefined, 4, 5);
    this.realEstateFunds$ = this.searchInstruments(FundTypeClassEnum.realEstateFund, FundTypeFocusEnum.europe, 4, 5);
    this.umbrellaFunds$ = this.searchInstruments(FundTypeClassEnum.umbrellaFund, undefined, 4, 5);
  }

  private searchInstruments(
    fundTypeClass: FundTypeClassEnum,
    fundTypeFocus?: FundTypeFocusEnum,
    morningStarRatingFrom?: number,
    morningStarRatingTo?: number
  ): Observable<InstrumentListViewModel[]> {
    return this.instrumentListService
      .searchInstrument(
        {
          top: 5,
          skip: 0,
          orderBy: SortableFieldEnum.name,
          isDescendingOrder: false,
          assetClasses: AssetClassEnum.fund,
          fundTypeClass,
          fundTypeFocus,
          morningStarRatingFrom,
          morningStarRatingTo,
        },
        UiInstrumentListTypeEnum.performance
      )
      .pipe(
        take(1),
        map((x) => (x ? x.result : []))
      );
  }
}
