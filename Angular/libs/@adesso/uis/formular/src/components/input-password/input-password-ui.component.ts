import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "ui-input-password",
  templateUrl: "./input-password-ui.component.html",
  styleUrls: ["./input-password-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputPasswordUiComponent {
  @Input() label: string;
  @Input() value: string;
  @Input() placeholder: string;
  @Output() changeValue = new EventEmitter<string>();
  @Output() submitted = new EventEmitter();

  public inputChanged() {
    this.changeValue.emit(this.value);
  }
}
