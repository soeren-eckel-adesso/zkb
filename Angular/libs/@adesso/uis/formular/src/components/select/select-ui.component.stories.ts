import { moduleMetadata, storiesOf } from "@storybook/angular";
import { SelectItemModel } from "@adesso/ui-formular";
import { SelectUiComponent } from "./select-ui.component";

storiesOf("@Adesso / UI / Formular / Select", module)
  .addDecorator(moduleMetadata({ imports: [] }))
  .add("Filled", () => ({
    component: SelectUiComponent,
    props: {
      label: "Meine Auswahl",
      items: [
        { id: "1", label: "Auswahl 1" },
        { id: "2", label: "Auswahl 2" },
        { id: "3", label: "Auswahl 3" },
        { id: "4", label: "Auswahl 4" },
        { id: "5", label: "Auswahl 5" },
      ] as SelectItemModel[],
    },
  }))
  .add("Filled with one Item", () => ({
    component: SelectUiComponent,
    props: {
      label: "Meine Auswahl",
      items: [{ id: "1", label: "Auswahl 1" }] as SelectItemModel[],
    },
  }))
  .add("Empty", () => ({
    component: SelectUiComponent,
    props: {},
  }));
