import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { SortableFieldTopFlopEnum, TopFlopIndexEnum, UiInstrumentListTypeEnum } from "@adesso/util-contracts";
import { InstrumentListService, InstrumentTableResult } from "@adesso/service-instrument-list";
import { Observable } from "rxjs";

@Component({
  selector: "page-share-overview",
  templateUrl: "./share-overview-page.component.html",
  styleUrls: ["./share-overview-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareOverviewPageComponent implements OnInit {
  public topDaxShares$: Observable<InstrumentTableResult>;
  public flopDaxShares$: Observable<InstrumentTableResult>;
  public topDaxSharesOneYear$: Observable<InstrumentTableResult>;
  public flopDaxSharesOneYear$: Observable<InstrumentTableResult>;

  public slides = [
    { src: "assets/slider/shares/Tech-Aktien-658x370-6eb4ddc82a94bd2c.jpg" },
    { src: "assets/slider/shares/Keine-Angst-vor-Aktien-Altersvorsorge.jpg" },
  ];

  constructor(public instrumentListService: InstrumentListService) {}

  ngOnInit() {
    const sort = SortableFieldTopFlopEnum;
    const tableType = UiInstrumentListTypeEnum;
    this.topDaxShares$ = this.loadTopFlops(sort.performanceToday, true, tableType.performance);
    this.flopDaxShares$ = this.loadTopFlops(sort.performanceToday, false, tableType.performance);

    this.topDaxSharesOneYear$ = this.loadTopFlops(sort.performanceOneYear, true, tableType.performanceOneYear);
    this.flopDaxSharesOneYear$ = this.loadTopFlops(sort.performanceOneYear, false, tableType.performanceOneYear);
  }

  private loadTopFlops(
    orderBy: SortableFieldTopFlopEnum,
    isDescendingOrder: boolean,
    tableType: UiInstrumentListTypeEnum
  ): Observable<InstrumentTableResult> {
    return this.instrumentListService.getTopFlop(
      {
        top: 5,
        skip: 0,
        orderBy,
        isDescendingOrder,
        topFlopIndex: TopFlopIndexEnum.dax,
      },
      tableType
    );
  }
}
