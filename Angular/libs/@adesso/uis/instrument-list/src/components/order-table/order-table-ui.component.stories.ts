import { moduleMetadata, storiesOf } from "@storybook/angular";
import { RouterTestingModule } from "@angular/router/testing";
import { InstrumentListUiModule } from "@adesso/ui-instrument-list";
import { FormatUtilModule } from "@base/util-format";
import { StorybookTranslateModule } from "../../../../../../../.storybook/StorybookTranslateModule";
import { OrderTableUiComponent } from "./order-table-ui.component";
import { OrderInstrumentTableInterface } from "./interfaces/order-instrument-table.interface";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

storiesOf("@Adesso / UI / Instrument List / Order", module)
  .addDecorator(
    moduleMetadata({
      imports: [InstrumentListUiModule, StorybookTranslateModule, RouterTestingModule, FormatUtilModule, BrowserAnimationsModule],
    })
  )
  .add("Filled List", () => ({
    component: OrderTableUiComponent,
    props: {
      listItems: [
        {
          isin: "DE0007100000",
          name: "Daimler",
          valor: 965756,
          wkn: "710000",
          bid: 57.68,
          ask: 57.59,
          orders: 5433,
          currencyCode: "EUR",
          changePercent: 2.46,
        },
        {
          isin: "DE0007100000",
          name: "Daimler",
          valor: 965756,
          wkn: "710000",
          bid: 57.68,
          ask: 57.59,
          orders: 5433,
          currencyCode: "USD",
          changePercent: -2.46,
        },
      ] as OrderInstrumentTableInterface[],
    },
  }))
  .add("Empty List", () => ({
    component: OrderTableUiComponent,
    props: {
      listItems: [],
    },
  }));
