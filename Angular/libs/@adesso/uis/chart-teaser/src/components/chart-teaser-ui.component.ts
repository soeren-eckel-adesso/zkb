import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { ChartTeaserValuesModel } from "../models/chart-teaser-values.model";
import { BehaviorSubject, Subject } from "rxjs";
import { PushFieldEnum } from "@adesso/util-contracts";

@Component({
  selector: "ui-chart-teaser",
  templateUrl: "./chart-teaser-ui.component.html",
  styleUrls: ["./chart-teaser-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartTeaserUiComponent {
  @Input() set values(data: ChartTeaserValuesModel | undefined | null) {
    if (data) {
      this.dataValue = data;
      this.data$.next(data);
      if (data.changeAbsolute && data.changeAbsolute < 0) {
        this.isPositive = false;
      } else if (data.changeRelative && data.changeRelative < 0) {
        this.isPositive = false;
      }
    }
  }

  public isPositive = true;
  private dataValue: ChartTeaserValuesModel;
  public data$: Subject<ChartTeaserValuesModel> = new BehaviorSubject<ChartTeaserValuesModel>({});
  public pf = PushFieldEnum;

  constructor(public translate: TranslateService, private router: Router) {}

  public redirect() {
    const url = this.translate.instant(this.dataValue.assetClass + "-detail-page").replace("{{instrumentId}}", this.dataValue.valor);
    this.router.navigateByUrl(url);
  }
}
