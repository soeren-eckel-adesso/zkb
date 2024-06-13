import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { UiContextMenuListModel } from "../models/ui-context-menu-list.model";
import { LoggerUtil } from "@base/util-logger";

@Component({
  selector: "ui-context-menu-list",
  templateUrl: "./context-menu-list-ui.component.html",
  styleUrls: ["./context-menu-list-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuListUiComponent {
  @Input() items: UiContextMenuListModel[];
  @Output() clicked = new EventEmitter<boolean>();

  constructor(public logger: LoggerUtil) {}
}
