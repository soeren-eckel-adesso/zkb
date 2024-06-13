import { moduleMetadata, storiesOf } from "@storybook/angular";
import { InputTextUiComponent } from "@adesso/ui-formular";
import { FormsModule } from "@angular/forms";

storiesOf("@Adesso / UI / Formular / Input Text", module)
  .addDecorator(moduleMetadata({ imports: [FormsModule] }))
  .add("With Value", () => ({
    component: InputTextUiComponent,
    props: {
      label: "Textbox:",
      value: "Mein Text",
      placeholder: "Mein Placeholder",
    },
  }))
  .add("Without Value", () => ({
    component: InputTextUiComponent,
    props: {
      label: "Textbox:",
      placeholder: "Mein Placeholder",
    },
  }))
  .add("Empty", () => ({
    component: InputTextUiComponent,
    props: {},
  }));
