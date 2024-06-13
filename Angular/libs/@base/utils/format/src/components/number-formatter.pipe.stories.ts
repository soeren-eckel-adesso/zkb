import { moduleMetadata, storiesOf } from "@storybook/angular";
import { RouterTestingModule } from "@angular/router/testing";
import { FormatUtilModule } from "@base/util-format";
import { StorybookTranslateModule } from "../../../../../../.storybook/StorybookTranslateModule";
import { NumberFormatterWrapperComponent } from "./number-formatter-wrapper.component";
import { boolean, number, text } from "@storybook/addon-knobs";

storiesOf("@Adesso / Util / Value Formatter / Number", module)
  .addDecorator(moduleMetadata({ imports: [FormatUtilModule, StorybookTranslateModule, RouterTestingModule] }))
  .add("Dynamic", () => ({
    component: NumberFormatterWrapperComponent,
    props: {
      value: number("value", 1230),
      params: {
        suffix: text("suffix", "EUR"),
        omitEmptyDecimalPlaces: boolean("omitEmptyDecimalPlaces", true),
        ignoreLargeNumbers: boolean("ignoreLargeNumbers", true),
      },
    },
  }))
  .add("Large number (millions)", () => ({
    component: NumberFormatterWrapperComponent,
    props: {
      value: number("value", 123000000),
    },
  }))
  .add("Large number (billions)", () => ({
    component: NumberFormatterWrapperComponent,
    props: {
      value: number("value", 123000000000),
    },
  }))
  .add("Without large number formatting", () => ({
    component: NumberFormatterWrapperComponent,
    props: {
      value: number("value", 123000000000),
      params: {
        ignoreLargeNumbers: true,
      },
    },
  }))
  .add("Without decimals", () => ({
    component: NumberFormatterWrapperComponent,
    props: {
      value: number("value", 123000000000),
      params: {
        omitEmptyDecimalPlaces: true,
      },
    },
  }))
  .add("Custom suffix", () => ({
    component: NumberFormatterWrapperComponent,
    props: {
      value: number("value", 1230),
      params: {
        suffix: text("suffix", "EUR"),
        omitEmptyDecimalPlaces: boolean("omitEmptyDecimalPlaces", true),
        ignoreLargeNumbers: boolean("ignoreLargeNumbers", true),
      },
    },
  }));
