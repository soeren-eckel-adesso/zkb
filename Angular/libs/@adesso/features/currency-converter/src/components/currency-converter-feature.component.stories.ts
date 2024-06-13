import {moduleMetadata, storiesOf} from "@storybook/angular";
import {CurrencyConverterFeatureComponent, CurrencyConverterFeatureModule} from "@adesso/feature-currency-converter";
import {StorybookTranslateModule} from "../../../../../../.storybook/StorybookTranslateModule";
import {RouterTestingModule} from "@angular/router/testing";


storiesOf("@Adesso / Feature / CurrencyConverter", module)
  .addDecorator(moduleMetadata({ imports: [
      StorybookTranslateModule,
      RouterTestingModule,
      CurrencyConverterFeatureModule
  ]}))
  .add("Empty", () => ({
    component: CurrencyConverterFeatureComponent,
    props: {
    },
  }));
