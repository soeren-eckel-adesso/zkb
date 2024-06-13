import { moduleMetadata, storiesOf } from "@storybook/angular";
import { InstrumentHeaderUiComponent, InstrumentHeaderUiModule } from "@adesso/ui-instrument-header";

storiesOf("@Adesso / UI / Instrument Header", module)
  .addDecorator(moduleMetadata({ imports: [InstrumentHeaderUiModule] }))
  .add("Complete", () => ({
    component: InstrumentHeaderUiComponent,
    props: {
      instrument: {
        name: "Daimler",
        wkn: "710000",
        isin: "DE0007100000",
      },
    },
  }))
  .add("Without WKN", () => ({
    component: InstrumentHeaderUiComponent,
    props: {
      instrument: {
        name: "Daimler",
        isin: "DE0007100000",
      },
    },
  }))
  .add("Without ISIN", () => ({
    component: InstrumentHeaderUiComponent,
    props: {
      instrument: {
        name: "Daimler",
        wkn: "710000",
      },
    },
  }))
  .add("Empty", () => ({
    component: InstrumentHeaderUiComponent,
    props: {
      instrument: {
        name: "",
      },
    },
  }));
