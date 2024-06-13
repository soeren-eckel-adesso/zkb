import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "ui-button",
  templateUrl: "./button-ui.component.html",
  styleUrls: ["./button-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonUiComponent {
  @Input() label: string;
  @Input() disabled = false;
  @Output() submitted = new EventEmitter();

  submit() {
    if (!this.disabled) {
      this.submitted.emit();
    }
  }
}
