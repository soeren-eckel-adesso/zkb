import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "ui-material-styles",
  templateUrl: "./material-styles-ui.component.html",
  styleUrls: ["./material-styles-ui.component.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialStylesUiComponent {}
