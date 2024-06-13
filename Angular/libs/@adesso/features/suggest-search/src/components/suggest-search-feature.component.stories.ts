import { moduleMetadata, storiesOf } from "@storybook/angular";

import { SuggestSearchFeatureComponent, SuggestSearchFeatureModule, SuggestSearchDesignEnum } from "@adesso/feature-suggest-search";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { Observable, of } from "rxjs";
import { StorybookTranslateModule } from "../../../../../../.storybook/StorybookTranslateModule";
import { UiContextMenuListModel } from "@adesso/ui-context-menu-list";
import { SuggestSearchService } from "@adesso/service-suggest-search";

const suggestSearchResponse: UiContextMenuListModel[] = [
  {
    label: "Akiten",
    items: [
      {
        label: "Daimler",
        url: "/AktienDetail/Daimler",
      },
      {
        label: "Siemens",
        url: "/AktienDetail/Siemens",
      },
    ],
  },
];

const suggestSearchServiceStub = {
  search: (_: string): Observable<UiContextMenuListModel[]> => of(suggestSearchResponse),
};

storiesOf("@Adesso / Feature / Suggest Search", module)
  .addDecorator(
    moduleMetadata({
      imports: [BrowserAnimationsModule, SuggestSearchFeatureModule, StorybookTranslateModule, RouterTestingModule],
      providers: [
        {
          provide: SuggestSearchService,
          useValue: suggestSearchServiceStub,
        },
      ],
    })
  )
  .add("In carousel", () => ({
    component: SuggestSearchFeatureComponent,
    props: {
      design: SuggestSearchDesignEnum.carouselInclude,
    },
  }))
  .add("In navigation area", () => ({
    component: SuggestSearchFeatureComponent,
    props: {
      design: SuggestSearchDesignEnum.navigationArea,
    },
  }));
