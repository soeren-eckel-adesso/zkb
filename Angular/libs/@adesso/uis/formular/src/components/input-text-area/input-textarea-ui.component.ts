import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "ui-input-textarea",
  templateUrl: "./input-textarea-ui.component.html",
  styleUrls: ["./input-textarea-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextareaUiComponent {
  @Input() label: string;
  @Input() value: string;
  @Input() rows = 10;
  @Input() placeholder = "";
  @Output() changeValue = new EventEmitter<string>();
  @Output() submitted = new EventEmitter();

  public inputChanged() {
    this.changeValue.emit(this.value);
  }
}
