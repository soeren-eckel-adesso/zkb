import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { InputTypeEnum } from "../enums/input-type.enum";
import { AbstractControl, FormControl } from "@angular/forms";
import { Guid } from "guid-typescript";

@Component({
  selector: "ui-form-input",
  templateUrl: "./form-input-ui.component.html",
  styleUrls: ["./form-input-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputUiComponent implements OnInit {
  @Input() type: InputTypeEnum;
  @Input() label: string;
  @Input()
  set control(value: AbstractControl) {
    this.formControl = value as FormControl;
  }
  public formControl: FormControl;
  @Input() hasError: boolean;
  @Input() errorMessage: string | undefined | null;

  @Output() submitted = new EventEmitter<void>();
  @Output() focusChanged = new EventEmitter<boolean>();

  public id: string;
  public isFocused = false;
  public useFilledDesign = false;
  public inputReadOnly = true;
  constructor() {
    this.id = Guid.create().toString();
  }

  ngOnInit(): void {
    if (this.formControl && this.formControl.value && this.formControl.value !== "") {
      this.useFilledDesign = true;
    }
    this.formControl.valueChanges.subscribe(() => {
      if (this.formControl && this.formControl.value && this.formControl.value !== "") {
        this.useFilledDesign = true;
      }
    });
  }

  setFocus(value: boolean) {
    if (this.formControl && this.formControl.value && this.formControl.value !== "") {
      this.useFilledDesign = true;
    } else {
      this.useFilledDesign = value;
    }
    this.isFocused = value;
    this.focusChanged.emit(value);
  }

  keypress(event: any) {
    if (event.code === "Enter") {
      this.submitted.emit();
    }
  }
}
