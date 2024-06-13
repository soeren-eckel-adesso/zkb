import {moduleMetadata, storiesOf} from "@storybook/angular";
import {FormButtonUiComponent, FormButtonUiModule} from "@adesso/ui-form-button";
import {StorybookTranslateModule} from "../../../../../../.storybook/StorybookTranslateModule";
import {RouterTestingModule} from "@angular/router/testing";


storiesOf("@Adesso / UI / FormButton", module)
  .addDecorator(moduleMetadata({ imports: [
      StorybookTranslateModule,
      RouterTestingModule,
      FormButtonUiModule
  ]}))
  .add("Empty", () => ({
    component: FormButtonUiComponent,
    props: {
    },
  }));
