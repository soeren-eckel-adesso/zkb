import { moduleMetadata, storiesOf } from "@storybook/angular";
import { InputTextUiComponent } from "@adesso/ui-formular";
import { FormsModule } from "@angular/forms";

storiesOf("@Adesso / UI / Formular / Input TextArea", module)
  .addDecorator(moduleMetadata({ imports: [FormsModule] }))
  .add("Empty", () => ({
    component: InputTextUiComponent,
    props: {},
  }));
