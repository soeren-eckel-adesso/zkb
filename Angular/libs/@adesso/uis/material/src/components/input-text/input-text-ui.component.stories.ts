import { moduleMetadata, storiesOf } from "@storybook/angular";
import { MaterialUiModule } from "@adesso/ui-material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UiMaterialInputTextComponent } from "./input-text-ui.component";

storiesOf("@Adesso / UI / Material / Input Text", module)
  .addDecorator(moduleMetadata({ imports: [BrowserAnimationsModule, MaterialUiModule] }))
  .add("Filled", () => ({
    component: UiMaterialInputTextComponent,
    props: {
      label: "Textbox Label",
      value: "Inhalt der Textbox",
      placeholder: "Der Placeholder",
      includeStyles: true,
    },
  }))
  .add("Empty", () => ({
    component: UiMaterialInputTextComponent,
    props: {
      label: "Textbox Label",
      placeholder: "Der Placeholder",
      includeStyles: true,
    },
  }));
