import { moduleMetadata, storiesOf } from "@storybook/angular";
import { FormDatepickerUiComponent, FormDatepickerUiModule } from "@adesso/ui-form-datepicker";
import { StorybookTranslateModule } from "../../../../../../.storybook/StorybookTranslateModule";
import { RouterTestingModule } from "@angular/router/testing";
import { FormControl } from "@angular/forms";

storiesOf("@Adesso / UI / FormDatepicker", module)
  .addDecorator(moduleMetadata({ imports: [StorybookTranslateModule, RouterTestingModule, FormDatepickerUiModule] }))
  .add("shor Month", () => ({
    component: FormDatepickerUiComponent,
    props: {
      control: new FormControl(new Date(2021, 1, 1)),
    },
  }))
  .add("long Month", () => ({
    component: FormDatepickerUiComponent,
    props: {
      control: new FormControl(new Date(2021, 4, 1)),
    },
  }))
  .add("normal Month", () => ({
    component: FormDatepickerUiComponent,
    props: {
      control: new FormControl(new Date(2021, 3, 1)),
    },
  }))
  .add("normal Month Position right", () => ({
    component: FormDatepickerUiComponent,
    props: {
      control: new FormControl(new Date(2021, 3, 1)),
      positionRight: true,
    },
  }))
  .add("max year & min Year", () => ({
    component: FormDatepickerUiComponent,
    props: {
      control: new FormControl(new Date(2004, 0, 1)),
      maxYear: 2004,
      minYear: 1954,
    },
  }))
  .add("Empty", () => ({
    component: FormDatepickerUiComponent,
    props: {
      control: new FormControl(),
    },
  }));
