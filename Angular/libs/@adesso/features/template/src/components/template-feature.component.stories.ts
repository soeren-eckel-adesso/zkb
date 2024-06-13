import { moduleMetadata, storiesOf } from "@storybook/angular";
import { TemplateFeatureComponent, TemplateFeatureModule } from "@adesso/feature-template";
import { RouterTestingModule } from "@angular/router/testing";
import { StorybookTranslateModule } from "../../../../../../.storybook/StorybookTranslateModule";

storiesOf("@Adesso / Elements / Template", module)
  .addDecorator(
    moduleMetadata({
      imports: [TemplateFeatureModule, StorybookTranslateModule, RouterTestingModule],
    })
  )
  .add("Empty", () => ({
    component: TemplateFeatureComponent,
    props: {},
  }));
