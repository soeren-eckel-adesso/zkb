import { moduleMetadata, storiesOf } from "@storybook/angular";
import { LoginUiComponent, LoginUiModule } from "@adesso/ui-login";
import { StorybookTranslateModule } from "../../../../../../.storybook/StorybookTranslateModule";

storiesOf("@Adesso / UI / Login", module)
  .addDecorator(moduleMetadata({ imports: [LoginUiModule, StorybookTranslateModule] }))
  .add("Empty", () => ({
    component: LoginUiComponent,
    props: {},
  }));
