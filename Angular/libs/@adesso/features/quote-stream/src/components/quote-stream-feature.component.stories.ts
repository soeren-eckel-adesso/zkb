import { moduleMetadata, storiesOf } from "@storybook/angular";
import { QuoteStreamFeatureComponent } from "@adesso/feature-quote-stream";
import { FormatUtilModule } from "@base/util-format";
import { StorybookTranslateModule } from "../../../../../../.storybook/StorybookTranslateModule";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PushFieldEnum } from "@adesso/util-contracts";
import { NgLetUtilModule } from "@base/util-ng-let";

storiesOf("@Adesso / Elements / QuoteStream", module)
  .addDecorator(
    moduleMetadata({
      imports: [FormatUtilModule, StorybookTranslateModule, BrowserAnimationsModule, NgLetUtilModule],
    })
  )
  .add("Number", () => ({
    component: QuoteStreamFeatureComponent,
    props: {
      options: {
        value: 15641.13,
        suffix: "EUR",
        pushField: PushFieldEnum.bid,
      },
    },
  }))
  .add("ChangePercent Positive", () => ({
    component: QuoteStreamFeatureComponent,
    props: {
      options: {
        value: 1.13,
        pushField: PushFieldEnum.bidChangeRelative,
      },
    },
  }))
  .add("ChangePercent Negative", () => ({
    component: QuoteStreamFeatureComponent,
    props: {
      options: {
        value: -1.13,
        pushField: PushFieldEnum.bidChangeRelative,
      },
    },
  }))
  .add("ChangePercent Zero", () => ({
    component: QuoteStreamFeatureComponent,
    props: {
      options: {
        value: 0,
        pushField: PushFieldEnum.bidChangeRelative,
      },
    },
  }))
  .add("ChangeAbsolute Positive", () => ({
    component: QuoteStreamFeatureComponent,
    props: {
      options: {
        value: 1.13,
        suffix: "EUR",
        pushField: PushFieldEnum.bidChangeAbsolute,
      },
    },
  }))
  .add("ChangeAbsolute Negative", () => ({
    component: QuoteStreamFeatureComponent,
    props: {
      options: {
        value: -1.13,
        suffix: "EUR",
        pushField: PushFieldEnum.bidChangeAbsolute,
      },
    },
  }))
  .add("ChangeAbsolute Zero", () => ({
    component: QuoteStreamFeatureComponent,
    props: {
      options: {
        value: 0,
        suffix: "EUR",
        pushField: PushFieldEnum.bidChangeAbsolute,
      },
    },
  }))
  .add("Date", () => ({
    component: QuoteStreamFeatureComponent,
    props: {
      options: {
        valueDate: new Date(2020, 7, 9, 10, 56, 13),
        pushField: PushFieldEnum.lastUpdateDate,
      },
    },
  }))
  .add("Empty", () => ({
    component: QuoteStreamFeatureComponent,
    props: {},
  }));
