import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "ui-content-box",
  templateUrl: "./content-box-ui.component.html",
  styleUrls: ["./content-box-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentBoxUiComponent {
  @Input() headline: string;
  @Input() noPadding = false;
  @Input()
  set backgroundColor(color: string) {
    this.style = this.style + "background-color:" + color + ";";
  }

  public style = "";

  constructor() {}
}
