import { moduleMetadata, storiesOf } from "@storybook/angular";
import { RouterTestingModule } from "@angular/router/testing";
import { FormatUtilModule } from "@base/util-format";
import { StorybookTranslateModule } from "../../../../../../.storybook/StorybookTranslateModule";
import { DateOrTimeFormatterWrapperComponent } from "./date-or-time-formatter-wrapper.component";
import { date } from "@storybook/addon-knobs";

const d = new Date();

storiesOf("@Adesso / Util / Value Formatter / Date or Time", module)
  .addDecorator(moduleMetadata({ imports: [FormatUtilModule, StorybookTranslateModule, RouterTestingModule] }))
  .add("Dynamic", () => ({
    component: DateOrTimeFormatterWrapperComponent,
    props: {
      value: date("value", new Date()),
    },
  }))
  .add("Current day", () => ({
    component: DateOrTimeFormatterWrapperComponent,
    props: {
      value: date("value", new Date()),
    },
  }))
  .add("Any other day", () => ({
    component: DateOrTimeFormatterWrapperComponent,
    props: {
      value: date("value", new Date(d.setDate(d.getDate() - 5))),
    },
  }));
