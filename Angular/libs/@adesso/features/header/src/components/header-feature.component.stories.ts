import { moduleMetadata, storiesOf } from "@storybook/angular";
import { HeaderFeatureModule, HeaderFeatureComponent } from "@adesso/feature-header";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StorybookTranslateModule } from "../../../../../../.storybook/StorybookTranslateModule";

storiesOf("@Adesso / Elements / Page Header", module)
  .addDecorator(
    moduleMetadata({
      imports: [BrowserAnimationsModule, HeaderFeatureModule, StorybookTranslateModule, RouterTestingModule],
    })
  )
  .add("Default", () => ({
    component: HeaderFeatureComponent,
    props: [],
  }));
