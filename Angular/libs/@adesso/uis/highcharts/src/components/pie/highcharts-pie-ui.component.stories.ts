import { moduleMetadata, storiesOf } from "@storybook/angular";
import { HighchartsUiModule, HighchartsPieUiComponent } from "@adesso/ui-highcharts";
import { StorybookTranslateModule } from "../../../../../../../.storybook/StorybookTranslateModule";
import { RouterTestingModule } from "@angular/router/testing";

storiesOf("@Adesso / UI / Charts / Highcharts / Pie", module)
  .addDecorator(
    moduleMetadata({
      imports: [HighchartsUiModule, StorybookTranslateModule, RouterTestingModule.withRoutes([])],
    })
  )
  .add("Filled", () => ({
    component: HighchartsPieUiComponent,
    props: {
      items: [
        { portion: 80, name: "Peter" },
        { portion: 20, name: "Till" },
      ],
    },
  }))
  .add("DWS Country", () => ({
    component: HighchartsPieUiComponent,
    props: {
      items: [
        { name: "Korea, Republik (Südkorea)", portion: 2.2 },
        { name: "Großbritannien", portion: 2.2 },
        { name: "Irland", portion: 2.3 },
        { name: "Kanada", portion: 3.0 },
        { name: "China", portion: 3.1 },
        { name: "Niederlande", portion: 3.9 },
        { name: "Deutschland", portion: 4.2 },
        { name: "Schweiz", portion: 5.4 },
        { name: "Japan", portion: 6.7 },
        { name: "USA", portion: 58.0 },
      ],
    },
  }))
  .add("DWS Industry", () => ({
    component: HighchartsPieUiComponent,
    props: {
      items: [
        { name: "Grundstoffe", portion: 0.6 },
        { name: "Energie", portion: 1.4 },
        { name: "Industrie", portion: 8.3 },
        { name: "Kommunikationsdienstleist.", portion: 9.7 },
        { name: "Hauptverbrauchsgüter", portion: 10.4 },
        { name: "Dauerhafte Konsumgüter", portion: 11.5 },
        { name: "Finanzsektor", portion: 15.5 },
        { name: "Gesundheitswesen", portion: 18.6 },
        { name: "Informationstechnologie", portion: 21.3 },
      ],
    },
  }))
  .add("DWS Equity", () => ({
    component: HighchartsPieUiComponent,
    props: {
      items: [
        { name: "Taiwan Semicond. Manufacturing", portion: 2.0 },
        { name: "Samsung Electronics", portion: 2.2 },
        { name: "Tencent Holdings", portion: 2.3 },
        { name: "VISA INC", portion: 2.4 },
        { name: "Roche Holdings AG", portion: 2.4 },
        { name: "Booking Holdings Inc ", portion: 2.5 },
        { name: "Nestle SA", portion: 2.8 },
        { name: "Microsoft", portion: 2.8 },
        { name: "Apple Inc.", portion: 3.2 },
        { name: "Alphabet Inc", portion: 5.7 },
      ],
    },
  }))
  .add("Empty", () => ({
    component: HighchartsPieUiComponent,
    props: {},
  }));
