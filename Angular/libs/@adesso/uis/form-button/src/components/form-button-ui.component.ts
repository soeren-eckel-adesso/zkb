import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "ui-form-button",
  templateUrl: "./form-button-ui.component.html",
  styleUrls: ["./form-button-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormButtonUiComponent {
  @Input() label: string;
  @Input() disabled: boolean;
}
