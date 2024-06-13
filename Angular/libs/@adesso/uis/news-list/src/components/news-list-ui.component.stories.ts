import { moduleMetadata, storiesOf } from "@storybook/angular";
import { NewsListUiComponent, NewsListUiModule } from "@adesso/ui-news-list";
import { StorybookTranslateModule } from "../../../../../../.storybook/StorybookTranslateModule";
import { RouterTestingModule } from "@angular/router/testing";
import { NewsListItemModel } from "../models/news-list-item.model";

storiesOf("@Adesso / UI / NewsList", module)
  .addDecorator(moduleMetadata({ imports: [StorybookTranslateModule, RouterTestingModule, NewsListUiModule] }))
  .add("Filled", () => ({
    component: NewsListUiComponent,
    props: {
      headline: "Meine Nachrichten",
      items: [
        {
          headline: "das ist die Headline der ersten Nachricht.",
          date: new Date(2020, 7, 9, 15, 35, 10),
        },
        {
          headline: "das ist die Headline der ersten Nachricht.",
          date: new Date(2020, 7, 9, 15, 35, 10),
        },
        {
          headline: "das ist die Headline der ersten Nachricht.",
          date: new Date(2020, 7, 9, 15, 35, 10),
        },
        {
          headline: "das ist die Headline der ersten Nachricht.",
          date: new Date(2020, 7, 9, 15, 35, 10),
        },
      ] as NewsListItemModel[],
    },
  }))
  .add("Empty", () => ({
    component: NewsListUiComponent,
    props: {},
  }));
