import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { LoggerUtil } from "@base/util-logger";

@Component({
  selector: "ui-star-rating",
  templateUrl: "./star-rating-ui.component.html",
  styleUrls: ["./star-rating-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingUiComponent implements OnInit {
  @Input() rating: number | undefined;
  @Input() maxStars: number | undefined = 5;

  public numbers: number[];

  constructor(public logger: LoggerUtil) {}
  ngOnInit(): void {
    if (!this.maxStars) {
      this.maxStars = 5;
    }
    this.numbers = Array(this.maxStars)
      .fill(null)
      .map((_, i) => i);
  }
}
