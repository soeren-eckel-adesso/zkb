import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImageCarouselUiComponent } from "./components/image-carousel-ui.component";

@NgModule({
  declarations: [ImageCarouselUiComponent],
  imports: [CommonModule],
  exports: [ImageCarouselUiComponent],
})
export class ImageCarouselUiModule {}
