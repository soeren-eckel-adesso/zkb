import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LoggerUtil } from "@base/util-logger";

@Component({
  selector: "feature-template",
  templateUrl: "./template-feature.component.html",
  styleUrls: ["./template-feature.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateFeatureComponent {
  constructor(public logger: LoggerUtil) {}
}
