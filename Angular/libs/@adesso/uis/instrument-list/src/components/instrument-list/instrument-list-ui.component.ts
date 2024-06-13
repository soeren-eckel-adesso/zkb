import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { UiInstrumentListTypeEnum } from "@adesso/util-contracts";
import { InstrumentListViewModel } from "../../models/instrument-list-view.model";
import { LoggerUtil } from "@base/util-logger";

@Component({
  selector: "ui-instrument-list",
  templateUrl: "./instrument-list-ui.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstrumentListUiComponent {
  public listItemsValue: InstrumentListViewModel[];
  @Input()
  set listItems(value: InstrumentListViewModel[] | null) {
    if (value) {
      this.listItemsValue = value;
    }
  }
  @Input() headline: string;
  @Input() tableType: UiInstrumentListTypeEnum;

  public tableTypes = UiInstrumentListTypeEnum;
  constructor(public logger: LoggerUtil) {}
}
