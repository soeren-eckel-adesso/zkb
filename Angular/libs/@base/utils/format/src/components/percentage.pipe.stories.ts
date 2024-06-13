import { moduleMetadata, storiesOf } from "@storybook/angular";
import { RouterTestingModule } from "@angular/router/testing";
import { FormatUtilModule } from "@base/util-format";
import { StorybookTranslateModule } from "../../../../../../.storybook/StorybookTranslateModule";
import { PercentageFormatterWrapperComponent } from "./percentage-formatter-wrapper.component";
import { number } from "@storybook/addon-knobs";

storiesOf("@Adesso / Util / Value Formatter / Percentages", module)
  .addDecorator(moduleMetadata({ imports: [FormatUtilModule, StorybookTranslateModule, RouterTestingModule] }))
  .add("Dynamic", () => ({
    component: PercentageFormatterWrapperComponent,
    props: {
      value: number("value", 1.12),
    },
  }))
  .add("Standard", () => ({
    component: PercentageFormatterWrapperComponent,
    props: {
      value: 1.12,
    },
  }));
