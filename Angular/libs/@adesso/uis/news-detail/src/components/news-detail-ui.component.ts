import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { NewsDetailViewModel } from "../models/news-detail-view.model";

@Component({
  selector: "ui-news-detail",
  templateUrl: "./news-detail-ui.component.html",
  styleUrls: ["./news-detail-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsDetailUiComponent {
  @Input() news: NewsDetailViewModel;
}
