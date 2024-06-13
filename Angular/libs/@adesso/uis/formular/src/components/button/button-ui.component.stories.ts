import { moduleMetadata, storiesOf } from "@storybook/angular";
import { FormularUiModule } from "@adesso/ui-formular";
import { ButtonUiComponent } from "./button-ui.component";

storiesOf("@Adesso / UI / Formular / Button", module)
  .addDecorator(moduleMetadata({ imports: [FormularUiModule] }))
  .add("Filled", () => ({
    component: ButtonUiComponent,
    props: {
      label: "Speichern",
    },
  }))
  .add("Empty", () => ({
    component: ButtonUiComponent,
    props: {},
  }));
