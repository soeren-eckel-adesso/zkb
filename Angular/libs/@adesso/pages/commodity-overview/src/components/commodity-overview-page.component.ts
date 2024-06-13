import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { InstrumentValorEnum, UiInstrumentListTypeEnum } from "@adesso/util-contracts";
import { InstrumentListViewModel } from "@adesso/ui-instrument-list";
import { InstrumentListService } from "@adesso/service-instrument-list";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "page-commodity-overview",
  templateUrl: "./commodity-overview-page.component.html",
  styleUrls: ["./commodity-overview-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommodityOverviewPageComponent implements OnInit {
  public nobleMetals$: Observable<InstrumentListViewModel[]>;
  public energy$: Observable<InstrumentListViewModel[]>;
  public fuel$: Observable<InstrumentListViewModel[]>;
  public industrialMetals$: Observable<InstrumentListViewModel[]>;
  public tableType$: UiInstrumentListTypeEnum = UiInstrumentListTypeEnum.performance;

  public slides = [
    { src: "assets/slider/commodity/WhatsApp-Image-2018-02-05-at-11.00.52-1200x740.jpeg" },
    { src: "assets/slider/commodity/rohstoffe-collage_30pro-hellblau.jpg" },
    { src: "assets/slider/commodity/1438849273_1397039796_rohstoffe.jpg" },
    { src: "assets/slider/commodity/csm_2002a_Rohstoffe_cb38d5660c.jpg" },
  ];

  constructor(public instrumentListService: InstrumentListService) {}

  ngOnInit() {
    this.nobleMetals$ = this.loadInstruments([
      InstrumentValorEnum.gold.toString(),
      InstrumentValorEnum.palladium.toString(),
      InstrumentValorEnum.platin.toString(),
      InstrumentValorEnum.silver.toString(),
    ]);

    this.energy$ = this.loadInstruments([
      InstrumentValorEnum.naturalGas.toString(),
      InstrumentValorEnum.ethanol.toString(),
      InstrumentValorEnum.heatingOil.toString(),
      InstrumentValorEnum.coal.toString(),
      InstrumentValorEnum.oilWti.toString(),
      InstrumentValorEnum.oilBrent.toString(),
      InstrumentValorEnum.rbobGasoline.toString(),
      InstrumentValorEnum.uran.toString(),
    ]);

    this.fuel$ = this.loadInstruments([InstrumentValorEnum.diesel.toString()]);

    this.industrialMetals$ = this.loadInstruments([
      InstrumentValorEnum.lead.toString(),
      InstrumentValorEnum.copper.toString(),
      InstrumentValorEnum.ironOre.toString(),
    ]);
  }

  private loadInstruments(ids: string[]): Observable<InstrumentListViewModel[]> {
    return this.instrumentListService.getInstrumentTable(ids, this.tableType$).pipe(map((result) => (result ? result.result : [])));
  }
}
