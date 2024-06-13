import { moduleMetadata, storiesOf } from "@storybook/angular";
import { ChartQuoteBoxUiComponent, ChartQuoteUiModule } from "@adesso/ui-chart-quote-box";
import { KeyValueListUiModule } from "@adesso/ui-key-value-list";
import { KeyValueTypeEnum } from "@adesso/util-contracts";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { QuoteStreamFeatureModule } from "@adesso/feature-quote-stream";
import { StorybookTranslateModule } from "../../../../../../.storybook/StorybookTranslateModule";

storiesOf("@Adesso / UI / Chart Quote Box", module)
  .addDecorator(
    moduleMetadata({
      imports: [
        ChartQuoteUiModule,
        StorybookTranslateModule,
        KeyValueListUiModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        QuoteStreamFeatureModule,
      ],
    })
  )
  .add("Complete", () => ({
    component: ChartQuoteBoxUiComponent,
    props: {
      values: {
        name: "Daimler",
        bid: 25.646578,
        bidSize: 8654,
        ask: 26.63489,
        askSize: 8750,
        currency: "EUR",
        keyValues: [
          {
            name: "Börse",
            value: {
              valueString: "Frankfurt",
              hasValue: true,
              type: KeyValueTypeEnum.valueFormatterItem,
            },
          },
        ],
      },
      chartData: [
        [new Date(2020, 1, 1, 17, 50, 0).getTime(), 5],
        [new Date(2020, 1, 1, 17, 51, 0).getTime(), 6],
        [new Date(2020, 1, 1, 17, 52, 0).getTime(), 4],
      ],
    },
  }))
  .add("Without Chart Data", () => ({
    component: ChartQuoteBoxUiComponent,
    props: {
      values: {
        name: "Daimler",
        bid: 25.646578,
        bidSize: 8654,
        ask: 26.63489,
        askSize: 8750,
        currency: "EUR",
        keyValues: [
          {
            name: "Börse",
            value: {
              valueString: "Frankfurt",
              hasValue: true,
              type: KeyValueTypeEnum.valueFormatterItem,
            },
          },
        ],
      },
    },
  }))
  .add("Without Key Values", () => ({
    component: ChartQuoteBoxUiComponent,
    props: {
      values: {
        name: "Daimler",
        bid: 25.646578,
        bidSize: 8654,
        ask: 26.63489,
        askSize: 8750,
        currency: "EUR",
      },
      chartData: [
        [new Date(2020, 1, 1, 17, 50, 0).getTime(), 5],
        [new Date(2020, 1, 1, 17, 51, 0).getTime(), 6],
        [new Date(2020, 1, 1, 17, 52, 0).getTime(), 4],
      ],
    },
  }))
  .add("Without Bid and Ask", () => ({
    component: ChartQuoteBoxUiComponent,
    props: {
      values: {
        name: "Daimler",
        bidSize: 8654,
        askSize: 8750,
        currency: "EUR",
        keyValues: [
          {
            name: "Börse",
            value: {
              valueString: "Frankfurt",
              hasValue: true,
              type: KeyValueTypeEnum.valueFormatterItem,
            },
          },
        ],
      },
      chartData: [
        [new Date(2020, 1, 1, 17, 50, 0).getTime(), 5],
        [new Date(2020, 1, 1, 17, 51, 0).getTime(), 6],
        [new Date(2020, 1, 1, 17, 52, 0).getTime(), 4],
      ],
    },
  }))
  .add("With Many KeyValues", () => ({
    component: ChartQuoteBoxUiComponent,
    props: {
      values: {
        name: "Daimler",
        bid: 25.646578,
        bidSize: 8654,
        ask: 26.63489,
        askSize: 8750,
        currency: "EUR",
        keyValues: [
          {
            name: "Börse",
            value: {
              valueString: "Frankfurt",
              hasValue: true,
              type: KeyValueTypeEnum.valueFormatterItem,
            },
          },
          {
            name: "Börse",
            value: {
              valueString: "Frankfurt",
              hasValue: true,
              type: KeyValueTypeEnum.valueFormatterItem,
            },
          },
          {
            name: "Börse",
            value: {
              valueString: "Frankfurt",
              hasValue: true,
              type: KeyValueTypeEnum.valueFormatterItem,
            },
          },
          {
            name: "Börse",
            value: {
              valueString: "Frankfurt",
              hasValue: true,
              type: KeyValueTypeEnum.valueFormatterItem,
            },
          },
          {
            name: "Börse",
            value: {
              valueString: "Frankfurt",
              hasValue: true,
              type: KeyValueTypeEnum.valueFormatterItem,
            },
          },
          {
            name: "Börse",
            value: {
              valueString: "Frankfurt",
              hasValue: true,
              type: KeyValueTypeEnum.valueFormatterItem,
            },
          },
          {
            name: "Börse",
            value: {
              valueString: "Frankfurt",
              hasValue: true,
              type: KeyValueTypeEnum.valueFormatterItem,
            },
          },
          {
            name: "Börse",
            value: {
              valueString: "Frankfurt",
              hasValue: true,
              type: KeyValueTypeEnum.valueFormatterItem,
            },
          },
          {
            name: "Börse",
            value: {
              valueString: "Frankfurt",
              hasValue: true,
              type: KeyValueTypeEnum.valueFormatterItem,
            },
          },
          {
            name: "Börse",
            value: {
              valueString: "Frankfurt",
              hasValue: true,
              type: KeyValueTypeEnum.valueFormatterItem,
            },
          },
          {
            name: "Börse",
            value: {
              valueString: "Frankfurt",
              hasValue: true,
              type: KeyValueTypeEnum.valueFormatterItem,
            },
          },
          {
            name: "Börse",
            value: {
              valueString: "Frankfurt",
              hasValue: true,
              type: KeyValueTypeEnum.valueFormatterItem,
            },
          },
          {
            name: "Börse",
            value: {
              valueString: "Frankfurt",
              hasValue: true,
              type: KeyValueTypeEnum.valueFormatterItem,
            },
          },
          {
            name: "Börse",
            value: {
              valueString: "Frankfurt",
              hasValue: true,
              type: KeyValueTypeEnum.valueFormatterItem,
            },
          },
        ],
      },
      chartData: [
        [new Date(2020, 1, 1, 17, 50, 0).getTime(), 5],
        [new Date(2020, 1, 1, 17, 51, 0).getTime(), 6],
        [new Date(2020, 1, 1, 17, 52, 0).getTime(), 4],
      ],
    },
  }));
