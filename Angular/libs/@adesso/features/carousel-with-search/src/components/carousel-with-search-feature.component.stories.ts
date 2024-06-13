import { moduleMetadata, storiesOf } from "@storybook/angular";
import { CarouselWithSearchFeatureComponent, CarouselWithSearchFeatureModule } from "@adesso/feature-carousel-with-search";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { AssetClassEnum } from "@adesso/util-contracts";
import { Observable, of } from "rxjs";
import { StorybookTranslateModule } from "../../../../../../.storybook/StorybookTranslateModule";
import { SuggestSearchItemModel, SuggestSearchRepository } from "@stroeer/repository-suggest-search";

const suggestSearchResponse: SuggestSearchItemModel[] = [
  {
    isin: "IE00B9KNR336",
    name: "SPDR Asia Div USD",
    type: AssetClassEnum.etf,
  },
  {
    isin: "IE00B9KNR336",
    name: "Daimler",
    type: AssetClassEnum.share,
  },
  {
    isin: "IE00B9KNR336",
    name: "DAX",
    type: AssetClassEnum.index,
  },
];

const adessoRepositoryServiceStub = {
  suggestSearch: (_: string): Observable<SuggestSearchItemModel[]> => of(suggestSearchResponse),
};

storiesOf("@Adesso / Feature / CarouselWithSearch", module)
  .addDecorator(
    moduleMetadata({
      imports: [BrowserAnimationsModule, RouterTestingModule, CarouselWithSearchFeatureModule, StorybookTranslateModule],
      providers: [
        {
          provide: SuggestSearchRepository,
          useValue: adessoRepositoryServiceStub,
        },
      ],
    })
  )
  .add("Filled", () => ({
    component: CarouselWithSearchFeatureComponent,
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
  .add("Empty", () => ({
    component: CarouselWithSearchFeatureComponent,
    props: {},
  }));
