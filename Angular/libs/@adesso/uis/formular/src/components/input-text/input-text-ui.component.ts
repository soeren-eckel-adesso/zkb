import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "ui-input-text",
  templateUrl: "./input-text-ui.component.html",
  styleUrls: ["./input-text-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextUiComponent {
  @Input() label: string;
  @Input() value: string | undefined;
  @Input() placeholder = "";
  @Output() changeValue = new EventEmitter<string>();
  @Output() submitted = new EventEmitter();

  public inputChanged() {
    this.changeValue.emit(this.value);
  }
}
