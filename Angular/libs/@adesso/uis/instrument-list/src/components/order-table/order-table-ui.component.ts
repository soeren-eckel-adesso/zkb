import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { OrderInstrumentTableInterface } from "./interfaces/order-instrument-table.interface";
import { LoggerUtil } from "@base/util-logger";
import { PushFieldEnum } from "@adesso/util-contracts";

@Component({
  selector: "ui-order-instrument-table",
  templateUrl: "./order-table-ui.component.html",
  styleUrls: ["./order-table-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderTableUiComponent {
  @Input() listItems: OrderInstrumentTableInterface[];
  public locale: string;
  public pf = PushFieldEnum;

  constructor(public logger: LoggerUtil) {}
}
