import { moduleMetadata, storiesOf } from "@storybook/angular";
import { CompositionUiComponent } from "@adesso/ui-composition";
import { FormatUtilModule } from "@base/util-format";
import { StorybookTranslateModule } from "../../../../../../.storybook/StorybookTranslateModule";
import { ChartUiModule } from "@adesso/ui-chart";
import { LoggerUtilModule } from "@base/util-logger";
import { RouterTestingModule } from "@angular/router/testing";

storiesOf("@Adesso / UI / Composition", module)
  .addDecorator(
    moduleMetadata({ imports: [ChartUiModule, FormatUtilModule, StorybookTranslateModule, RouterTestingModule, LoggerUtilModule] })
  )
  .add("Filled 100%", () => ({
    component: CompositionUiComponent,
    props: {
      headline: "Beste Entwickler",
      compositions: [
        { name: "Peter Ludwig", portion: 40 },
        { name: "Till Schürmann", portion: 35 },
        { name: "David Hall", portion: 25 },
      ],
    },
  }))
  .add("Filled 80%", () => ({
    component: CompositionUiComponent,
    props: {
      headline: "Beste Entwickler",
      compositions: [
        { name: "Peter Ludwig", portion: 30 },
        { name: "Till Schürmann", portion: 30 },
        { name: "David Hall", portion: 20 },
      ],
    },
  }))
  .add("Very Long list", () => ({
    component: CompositionUiComponent,
    props: {
      headline: "Beste Entwickler",
      compositions: [
        { name: "Value 01", portion: 2 },
        { name: "Value 02", portion: 2 },
        { name: "Value 03", portion: 2 },
        { name: "Value 04", portion: 2 },
        { name: "Value 05", portion: 2 },
        { name: "Value 06", portion: 2 },
        { name: "Value 07", portion: 2 },
        { name: "Value 08", portion: 2 },
        { name: "Value 09", portion: 2 },
        { name: "Value 10", portion: 2 },
        { name: "Value 11", portion: 2 },
        { name: "Value 12", portion: 2 },
        { name: "Value 13", portion: 2 },
        { name: "Value 14", portion: 2 },
        { name: "Value 15", portion: 2 },
        { name: "Value 16", portion: 2 },
        { name: "Value 17", portion: 2 },
        { name: "Value 18", portion: 2 },
        { name: "Value 19", portion: 2 },
        { name: "Value 20", portion: 2 },
        { name: "Value 21", portion: 2 },
        { name: "Value 22", portion: 2 },
        { name: "Value 23", portion: 2 },
        { name: "Value 24", portion: 2 },
        { name: "Value 25", portion: 2 },
        { name: "Value 26", portion: 2 },
        { name: "Value 27", portion: 2 },
        { name: "Value 28", portion: 2 },
        { name: "Value 29", portion: 2 },
        { name: "Value 30", portion: 2 },
        { name: "Value 31", portion: 2 },
        { name: "Value 32", portion: 2 },
        { name: "Value 33", portion: 2 },
        { name: "Value 34", portion: 2 },
        { name: "Value 35", portion: 2 },
        { name: "Value 36", portion: 2 },
        { name: "Value 37", portion: 2 },
        { name: "Value 38", portion: 2 },
        { name: "Value 39", portion: 2 },
      ],
    },
  }))
  .add("Empty", () => ({
    component: CompositionUiComponent,
    props: {
      headline: "Beste Entwickler",
      compositions: [],
    },
  }));
