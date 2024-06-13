import { moduleMetadata, storiesOf } from "@storybook/angular";
import { MaterialUiModule } from "@adesso/ui-material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UiMaterialButtonComponent } from "./button-ui.component";

storiesOf("@Adesso / UI / Material / Button", module)
  .addDecorator(moduleMetadata({ imports: [BrowserAnimationsModule, MaterialUiModule] }))
  .add("Filled", () => ({
    component: UiMaterialButtonComponent,
    props: {
      label: "Speichern",
    },
  }));
