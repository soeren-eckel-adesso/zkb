import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { SuggestSearchDesignEnum } from "@adesso/feature-suggest-search";

@Component({
  selector: "feature-carousel-with-search",
  templateUrl: "./carousel-with-search-feature.component.html",
  styleUrls: ["./carousel-with-search-feature.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselWithSearchFeatureComponent {
  @Input() slides;
  public suggestSearchDesign = SuggestSearchDesignEnum.carouselInclude;
}
