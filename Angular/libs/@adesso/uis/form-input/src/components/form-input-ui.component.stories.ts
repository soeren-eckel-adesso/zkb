import { moduleMetadata, storiesOf } from "@storybook/angular";
import { FormInputUiComponent, FormInputUiModule, InputTypeEnum } from "@adesso/ui-form-input";
import { FormControl, Validators } from "@angular/forms";

const formControlEmpty: FormControl = new FormControl();

const formControlWithText: FormControl = new FormControl();
formControlWithText.setValue("my input text");

const formControlWithError: FormControl = new FormControl("", Validators.required);
formControlWithError.markAsTouched();

storiesOf("@Adesso / UI / Form / Input", module)
  .addDecorator(moduleMetadata({ imports: [FormInputUiModule] }))
  .add("Text Filled", () => ({
    component: FormInputUiComponent,
    props: {
      type: InputTypeEnum.text,
      label: "Name",
      control: formControlWithText,
    },
  }))
  .add("Text Error", () => ({
    component: FormInputUiComponent,
    props: {
      type: InputTypeEnum.text,
      label: "Name",
      control: formControlWithError,
      hasError: true,
      errorMessage: "Der Name ist nicht schön",
    },
  }))
  .add("Text Empty", () => ({
    component: FormInputUiComponent,
    props: {
      type: InputTypeEnum.text,
      label: "Name",
      control: formControlEmpty,
    },
  }))
  .add("Password", () => ({
    component: FormInputUiComponent,
    props: {
      type: InputTypeEnum.password,
      label: "Passwort",
      control: formControlEmpty,
    },
  }))
  .add("Email", () => ({
    component: FormInputUiComponent,
    props: {
      type: InputTypeEnum.email,
      label: "Email",
      control: formControlEmpty,
    },
  }));
