import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "util-percentage-formatter-wrapper-component",
  templateUrl: "./percentage-formatter-wrapper.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PercentageFormatterWrapperComponent {
  @Input() value;
  @Input() params;
}
