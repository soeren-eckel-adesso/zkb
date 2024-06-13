import { moduleMetadata, storiesOf } from "@storybook/angular";
import { InputPasswordUiComponent } from "@adesso/ui-formular";
import { FormsModule } from "@angular/forms";

storiesOf("@Adesso / UI / Formular / Input Password", module)
  .addDecorator(moduleMetadata({ imports: [FormsModule] }))
  .add("With Value", () => ({
    component: InputPasswordUiComponent,
    props: {
      label: "Textbox:",
      value: "Mein Text",
      placeholder: "Mein Placeholder",
    },
  }))
  .add("Without Value", () => ({
    component: InputPasswordUiComponent,
    props: {
      label: "Textbox:",
      placeholder: "Mein Placeholder",
    },
  }))
  .add("Empty", () => ({
    component: InputPasswordUiComponent,
    props: {},
  }));
