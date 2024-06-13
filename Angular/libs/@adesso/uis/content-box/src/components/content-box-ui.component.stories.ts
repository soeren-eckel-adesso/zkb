import { moduleMetadata, storiesOf } from "@storybook/angular";
import { ContentBoxUiComponent } from "./content-box-ui.component";
import { text } from "@storybook/addon-knobs";
import { ContentBoxUiModule } from "../content-box-ui.module";

storiesOf("@Adesso / UI / Content Box", module)
  .addDecorator(moduleMetadata({ imports: [ContentBoxUiModule] }))
  .add("Dynamic", () => ({
    component: ContentBoxUiComponent,
    props: {
      headline: text("headline", "Meine Überschrift"),
    },
  }))
  .add("With Headline", () => ({
    component: ContentBoxUiComponent,
    props: {
      headline: "Stammdaten",
    },
  }))
  .add("Empty", () => ({
    component: ContentBoxUiComponent,
    props: {},
  }));
