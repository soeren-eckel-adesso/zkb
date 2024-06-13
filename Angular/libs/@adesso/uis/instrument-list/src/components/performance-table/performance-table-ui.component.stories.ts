import { moduleMetadata, storiesOf } from "@storybook/angular";
import { RouterTestingModule } from "@angular/router/testing";
import { InstrumentListUiModule } from "@adesso/ui-instrument-list";
import { FormatUtilModule } from "@base/util-format";
import { StorybookTranslateModule } from "../../../../../../../.storybook/StorybookTranslateModule";
import { PerformanceTableUiComponent } from "./performance-table-ui.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

storiesOf("@Adesso / UI / Instrument List / Performance", module)
  .addDecorator(
    moduleMetadata({
      imports: [InstrumentListUiModule, StorybookTranslateModule, RouterTestingModule, FormatUtilModule, BrowserAnimationsModule],
    })
  )
  .add("Filled List", () => ({
    component: PerformanceTableUiComponent,
    props: {
      listItems: [
        {
          isin: "DE0007100000",
          name: "Daimler",
          valor: 965756,
          wkn: "710000",
          quote: 57.68,
          quoteDate: new Date(2020, 1, 3, 5, 1, 1),
          currencyCode: "EUR",
        },
        {
          isin: "DE0015315360",
          name: "Siemens",
          valor: 954985,
          wkn: "734831",
          quote: 108.46,
          quoteDate: new Date(2020, 2, 8, 1, 10, 1),
          currencyCode: "EUR",
        },
      ],
    },
  }))
  .add("Empty List", () => ({
    component: PerformanceTableUiComponent,
    props: {
      listItems: [],
    },
  }));
