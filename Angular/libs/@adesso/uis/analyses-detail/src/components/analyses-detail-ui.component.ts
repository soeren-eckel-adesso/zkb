import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { KeyValueListDesignEnum } from "@adesso/util-contracts";
import { AnalyseDetailViewModel } from "../models/analyse-detail-view.model";

@Component({
  selector: "ui-analyses-detail",
  templateUrl: "./analyses-detail-ui.component.html",
  styleUrls: ["./analyses-detail-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalysesDetailUiComponent {
  @Input() analyse: AnalyseDetailViewModel | undefined;
  public keyValueDesign = KeyValueListDesignEnum.list;
}
