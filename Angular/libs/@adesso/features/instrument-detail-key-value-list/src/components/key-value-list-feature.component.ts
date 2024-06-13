import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { KeyValueListItemModel, KeyValueListRequestItemModel } from "@adesso/util-contracts";
import { InstrumentDetailService } from "@adesso/service-instrument-detail";
import { LoggerUtil } from "@base/util-logger";

@Component({
  selector: "feature-key-value-list",
  templateUrl: "./key-value-list-feature.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyValueListFeatureComponent implements OnInit {
  @Input() valor: string | undefined;
  @Input() isin: string | undefined;
  @Input() items: string;
  @Input() headline: string;
  public keyValueListItems: KeyValueListItemModel[] | undefined = undefined;

  constructor(private instrumentDetailService: InstrumentDetailService, private logger: LoggerUtil) {}

  ngOnInit(): void {
    if (this.valor !== undefined) {
      this.instrumentDetailService.loadInstrument(this.valor).subscribe((instrument) => {
        if (instrument) {
          this.loadValues();
        }
      });
    } else if (this.isin !== undefined) {
      this.instrumentDetailService.loadInstrument(this.isin).subscribe((instrument) => {
        if (instrument) {
          this.loadValues();
        }
      });
    }
  }

  loadValues() {
    if (this.items === null || this.items === "") {
      return;
    }
    try {
      const requestItems = JSON.parse(this.items) as KeyValueListRequestItemModel[];
      this.keyValueListItems = this.instrumentDetailService.extractKeyValueListValues(requestItems);
    } catch (e) {
      this.logger.error(e);
    }
    //
  }
}
