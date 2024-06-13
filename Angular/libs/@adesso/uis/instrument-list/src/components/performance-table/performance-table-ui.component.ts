import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import { PerformanceInstrumentTableInterface } from "./interfaces/performance-instrument-table.interface";
import { LoggerUtil } from "@base/util-logger";
import { PushFieldEnum } from "@adesso/util-contracts";

@Component({
  selector: "ui-performance-instrument-table",
  templateUrl: "./performance-table-ui.component.html",
  styleUrls: ["./performance-table-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerformanceTableUiComponent {
  @Input() listItems: PerformanceInstrumentTableInterface[];
  public locale: string;
  public pf = PushFieldEnum;

  constructor(public logger: LoggerUtil) {}
}
