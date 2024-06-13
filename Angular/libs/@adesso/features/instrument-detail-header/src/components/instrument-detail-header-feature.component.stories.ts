import { moduleMetadata, storiesOf } from "@storybook/angular";
import { InstrumentDetailHeaderFeatureComponent, InstrumentDetailHeaderFeatureModule } from "@adesso/feature-instrument-detail-header";
import { StorybookTranslateModule } from "../../../../../../.storybook/StorybookTranslateModule";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";

storiesOf("@Adesso / Feature / InstrumentDetailHeader", module)
  .addDecorator(
    moduleMetadata({ imports: [StorybookTranslateModule, RouterTestingModule, InstrumentDetailHeaderFeatureModule, HttpClientModule] })
  )
  .add("Empty", () => ({
    component: InstrumentDetailHeaderFeatureComponent,
    props: {},
  }));
