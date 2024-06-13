import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImageCarouselUiModule } from "@adesso/ui-image-carousel";
import { SuggestSearchFeatureModule } from "@adesso/feature-suggest-search";
import { CarouselWithSearchFeatureComponent } from "./components/carousel-with-search-feature.component";

@NgModule({
  declarations: [CarouselWithSearchFeatureComponent],
  imports: [CommonModule, ImageCarouselUiModule, SuggestSearchFeatureModule],
  exports: [CarouselWithSearchFeatureComponent],
})
export class CarouselWithSearchFeatureModule {}
