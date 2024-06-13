import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { KeyValueListDesignEnum, KeyValueListItemModel, KeyValueTypeEnum } from "@adesso/util-contracts";
import { LoggerUtil } from "@base/util-logger";

@Component({
  selector: "ui-key-value-list",
  templateUrl: "./key-value-list-ui.component.html",
  styleUrls: ["./key-value-list-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyValueListUiComponent {
  @Input() items: KeyValueListItemModel[];
  @Input() design: KeyValueListDesignEnum;
  public valueType = KeyValueTypeEnum;
  public designs = KeyValueListDesignEnum;

  constructor(public logger: LoggerUtil) {
    this.design = KeyValueListDesignEnum.list;
  }
}
