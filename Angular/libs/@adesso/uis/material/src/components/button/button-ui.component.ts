import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { StyleIncludeService } from "../../services/style-include.service";

@Component({
  selector: "ui-material-button",
  templateUrl: "./button-ui.component.html",
  styleUrls: ["./button-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMaterialButtonComponent {
  @Input() label: string;
  @Output() submitted = new EventEmitter();
  public includeStyles = false;

  constructor(private styleIncludeService: StyleIncludeService) {
    this.includeStyles = this.styleIncludeService.stylesMustBeIncluded();
  }
}
