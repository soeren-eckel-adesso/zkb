import { moduleMetadata, storiesOf } from "@storybook/angular";
import { NewsDetailUiComponent, NewsDetailUiModule } from "@adesso/ui-news-detail";
import { StorybookTranslateModule } from "../../../../../../.storybook/StorybookTranslateModule";
import { RouterTestingModule } from "@angular/router/testing";

storiesOf("@Adesso / UI / NewsDetail", module)
  .addDecorator(moduleMetadata({ imports: [StorybookTranslateModule, RouterTestingModule, NewsDetailUiModule] }))
  .add("Empty", () => ({
    component: NewsDetailUiComponent,
    props: {},
  }));
