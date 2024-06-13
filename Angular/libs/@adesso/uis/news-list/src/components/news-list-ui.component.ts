import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { PageTypeEnum } from "@adesso/util-contracts";
import { NewsListItemModel } from "../models/news-list-item.model";
import { LoggerUtil } from "@base/util-logger";

@Component({
  selector: "ui-news-list",
  templateUrl: "./news-list-ui.component.html",
  styleUrls: ["./news-list-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListUiComponent {
  @Input() headline: string;
  @Input() items: NewsListItemModel[];
  public pageType = PageTypeEnum;
  constructor(public logger: LoggerUtil) {}
}
