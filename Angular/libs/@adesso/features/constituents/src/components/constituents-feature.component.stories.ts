import { moduleMetadata, storiesOf } from "@storybook/angular";
import { ConstituentsFeatureComponent, ConstituentsFeatureModule } from "@adesso/feature-constituents";
import { StorybookTranslateModule } from "../../../../../../.storybook/StorybookTranslateModule";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";

storiesOf("@Adesso / Feature / Constituents", module)
  .addDecorator(moduleMetadata({ imports: [StorybookTranslateModule, RouterTestingModule, ConstituentsFeatureModule, HttpClientModule] }))
  .add("Empty", () => ({
    component: ConstituentsFeatureComponent,
    props: {},
  }));
