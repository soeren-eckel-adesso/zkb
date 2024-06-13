import {moduleMetadata, storiesOf} from "@storybook/angular";
import {<%= classify(name) %>UiComponent, <%= classify(name) %>UiModule} from "@<%= customer %>/ui-<%= name %>";
import {StorybookTranslateModule} from "../../../../../../.storybook/StorybookTranslateModule";
import {RouterTestingModule} from "@angular/router/testing";


storiesOf("@<%= classify(customer) %> / UI / <%= classify(name) %>", module)
  .addDecorator(moduleMetadata({ imports: [
      StorybookTranslateModule,
      RouterTestingModule,
      <%= classify(name) %>UiModule
  ]}))
  .add("Empty", () => ({
    component: <%= classify(name) %>UiComponent,
    props: {
    },
  }));
