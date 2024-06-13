import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "number-formatter-wrapper-component",
  templateUrl: "./number-formatter-wrapper.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberFormatterWrapperComponent {
  @Input() value;
  @Input() params;
}
