import { KeyValueListUiComponent, KeyValueListUiModule } from "@adesso/ui-key-value-list";
import { moduleMetadata, storiesOf } from "@storybook/angular";
import { ValueFormatterConverter } from "@base/util-format";
import { StorybookTranslateModule } from "../../../../../../../.storybook/StorybookTranslateModule";
import { RouterTestingModule } from "@angular/router/testing";

const convert: ValueFormatterConverter = new ValueFormatterConverter();

storiesOf("@Adesso / UI / Key Value List", module)
  .addDecorator(moduleMetadata({ imports: [KeyValueListUiModule, StorybookTranslateModule, RouterTestingModule] }))
  .add("Filled List", () => ({
    component: KeyValueListUiComponent,
    props: {
      items: [
        {
          name: "Zahl (fix 2 Kommastellen)",
          value: convert.convertNumber(123456.789, 2, "EUR"),
        },
        {
          name: "Zahl",
          value: convert.convertNumber(123456.789),
        },
        {
          name: "Zahl in %",
          value: convert.convertNumberPercent(6.789),
        },
        {
          name: "FIX Datum",
          value: convert.convertDateTime(new Date(2020, 1, 3)),
        },
        {
          name: "Datum jetzt",
          value: convert.convertDateTime(new Date(Date.now())),
        },
      ],
    },
  }))
  .add("Empty List", () => ({
    component: KeyValueListUiComponent,
    props: {
      items: [],
    },
  }));
