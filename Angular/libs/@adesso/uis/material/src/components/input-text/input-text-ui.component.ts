import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { StyleIncludeService } from "../../services/style-include.service";

@Component({
  selector: "ui-material-input-text",
  templateUrl: "./input-text-ui.component.html",
  styleUrls: ["./input-text-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMaterialInputTextComponent {
  @Input() label: string;
  @Input() value: string;
  @Input() placeholder = "";
  @Output() changeValue = new EventEmitter<string>();
  @Output() submitted = new EventEmitter();
  public includeStyles = false;

  constructor(private styleIncludeService: StyleIncludeService) {
    this.includeStyles = this.styleIncludeService.stylesMustBeIncluded();
  }

  public inputChanged() {
    this.changeValue.emit(this.value);
  }
}
