import { moduleMetadata, storiesOf } from "@storybook/angular";
import { ImageCarouselUiComponent } from "@adesso/ui-image-carousel";

storiesOf("@Adesso / UI / Image Carousel", module)
  .addDecorator(moduleMetadata({ imports: [] }))
  .add("5 Slides", () => ({
    component: ImageCarouselUiComponent,
    props: {
      slides: [
        { src: "assets/slider/etf/etf-home-hero_3.jpg" },
        { src: "assets/slider/etf/ETF.jpg" },
        { src: "assets/slider/etf/etf-cosa-1200x675.jpg" },
        { src: "assets/slider/etf/etf-teaser.jpg" },
        { src: "assets/slider/etf/kryptomoney.jpg" },
      ],
    },
  }))
  .add("1 Slide", () => ({
    component: ImageCarouselUiComponent,
    props: {
      slides: [{ src: "assets/slider/etf/etf-home-hero_3.jpg" }],
    },
  }))
  .add("3 Slides", () => ({
    component: ImageCarouselUiComponent,
    props: {
      slides: [
        { src: "assets/slider/etf/etf-cosa-1200x675.jpg" },
        { src: "assets/slider/etf/etf-teaser.jpg" },
        { src: "assets/slider/etf/kryptomoney.jpg" },
      ],
    },
  }));
