import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { PageTypeEnum } from "@adesso/util-contracts";
import { AnalysesListItemModel } from "../models/analyses-list-item.model";
import { LoggerUtil } from "@base/util-logger";

@Component({
  selector: "ui-analyses-list",
  templateUrl: "./analyses-list-ui.component.html",
  styleUrls: ["./analyses-list-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalysesListUiComponent {
  @Input() headline: string;
  @Input() items: AnalysesListItemModel[];
  public pageType = PageTypeEnum;

  constructor(public logger: LoggerUtil) {}
}
