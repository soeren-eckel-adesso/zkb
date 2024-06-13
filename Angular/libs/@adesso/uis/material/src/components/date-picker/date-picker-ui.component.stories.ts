import { moduleMetadata, storiesOf } from "@storybook/angular";
import { UiMaterialDatePickerComponent, MaterialUiModule } from "@adesso/ui-material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

storiesOf("@Adesso / UI / Material / Datepicker", module)
  .addDecorator(moduleMetadata({ imports: [BrowserAnimationsModule, MaterialUiModule] }))
  .add("Filled", () => ({
    component: UiMaterialDatePickerComponent,
    props: {
      label: "Datum",
      value: new Date(2020, 8, 8),
      placeholder: "tt.mm.jjjj",
      includeStyles: true,
    },
  }))
  .add("Empty", () => ({
    component: UiMaterialDatePickerComponent,
    props: {
      label: "Datum",
      placeholder: "tt.mm.jjjj",
      includeStyles: true,
    },
  }));
