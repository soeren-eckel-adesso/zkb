import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "date-or-time-formatter-wrapper-component",
  templateUrl: "./date-or-time-formatter-wrapper.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateOrTimeFormatterWrapperComponent {
  @Input() value;
  @Input() params;
}
