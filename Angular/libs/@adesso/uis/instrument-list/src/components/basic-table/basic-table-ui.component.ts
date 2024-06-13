import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import { BasicInstrumentTableInterface } from "./interfaces/basic-instrument-table.interface";
import { LoggerUtil } from "@base/util-logger";
import { PushFieldEnum } from "@adesso/util-contracts";

@Component({
  selector: "ui-basic-instrument-table",
  templateUrl: "./basic-table-ui.component.html",
  styleUrls: ["./basic-table-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicTableUiComponent {
  @Input() listItems: BasicInstrumentTableInterface[];
  public locale: string;
  public pf = PushFieldEnum;

  constructor(public logger: LoggerUtil) {}
}
