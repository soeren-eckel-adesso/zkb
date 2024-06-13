import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { InstrumentListViewModel } from "@adesso/ui-instrument-list";
import { InstrumentValorEnum, UiInstrumentListTypeEnum } from "@adesso/util-contracts";
import { InstrumentListService } from "@adesso/service-instrument-list";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "page-index-overview",
  templateUrl: "./index-overview-page.component.html",
  styleUrls: ["./index-overview-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexOverviewPageComponent implements OnInit {
  public germanIndices: Observable<InstrumentListViewModel[]>;
  public europeIndices: Observable<InstrumentListViewModel[]>;
  public usaAndAsiaIndices: Observable<InstrumentListViewModel[]>;
  public tableType: UiInstrumentListTypeEnum = UiInstrumentListTypeEnum.performance;

  public slides = [
    { src: "assets/slider/indices/dax-verlust.jpg" },
    { src: "assets/slider/indices/800px_COLOURBOX5632685.jpg" },
    { src: "assets/slider/indices/images.jpg" },
    { src: "assets/slider/indices/wasistdieboerse-300x169.jpg" },
  ];

  constructor(public instrumentListService: InstrumentListService) {}

  ngOnInit() {
    this.germanIndices = this.loadInstruments([
      InstrumentValorEnum.dax.toString(),
      InstrumentValorEnum.tecDax.toString(),
      InstrumentValorEnum.mDax.toString(),
      InstrumentValorEnum.sDax.toString(),
      InstrumentValorEnum.hDax.toString(),
      InstrumentValorEnum.cDax.toString(),
      InstrumentValorEnum.divDax.toString(),
    ]);

    this.europeIndices = this.loadInstruments([
      InstrumentValorEnum.stoxxEurope50.toString(),
      InstrumentValorEnum.euroStoxx50.toString(),
      InstrumentValorEnum.ftse100.toString(),
      InstrumentValorEnum.smi.toString(),
      InstrumentValorEnum.cac40.toString(),
      InstrumentValorEnum.ibex35.toString(),
      InstrumentValorEnum.atx.toString(),
    ]);

    this.usaAndAsiaIndices = this.loadInstruments([
      InstrumentValorEnum.dowJones.toString(),
      InstrumentValorEnum.sp500.toString(),
      InstrumentValorEnum.nasdaq100.toString(),
      InstrumentValorEnum.nikkei225.toString(),
      InstrumentValorEnum.hangSeng.toString(),
      InstrumentValorEnum.kospi200.toString(),
      InstrumentValorEnum.spBseSensex.toString(),
    ]);
  }

  private loadInstruments(ids: string[]): Observable<InstrumentListViewModel[]> {
    return this.instrumentListService.getInstrumentTable(ids, this.tableType).pipe(map((result) => (result ? result.result : [])));
  }
}
