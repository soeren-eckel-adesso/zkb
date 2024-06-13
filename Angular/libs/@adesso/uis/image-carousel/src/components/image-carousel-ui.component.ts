import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "ui-image-carousel",
  templateUrl: "./image-carousel-ui.component.html",
  styleUrls: ["./image-carousel-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCarouselUiComponent {
  @Input() slides;
  public idPrefix = "slide_";

  getBackId(id: number) {
    if (id > 0) {
      return this.idPrefix + (id - 1);
    } else {
      return this.idPrefix + this.slides.length;
    }
  }
  getNextId(id: number) {
    if (id < this.slides.length - 1) {
      return this.idPrefix + (id + 1);
    } else {
      return this.idPrefix + "0";
    }
  }
}
