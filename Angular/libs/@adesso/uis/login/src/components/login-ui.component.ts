import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { InputTypeEnum } from "@adesso/ui-form-input";
import { FormUtil } from "@base/util-form";

@Component({
  selector: "ui-login",
  templateUrl: "./login-ui.component.html",
  styleUrls: ["./login-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginUiComponent {
  @Input() group: FormGroup;
  @Input() logoSrc: string;
  @Input() title: string;
  @Input() errorMessage?: string | null;
  @Input() description: string;
  @Output() submitLogin = new EventEmitter<void>();

  public inputType = InputTypeEnum;

  constructor(public formService: FormUtil) {}
  public login() {
    this.submitLogin.emit();
  }
}
