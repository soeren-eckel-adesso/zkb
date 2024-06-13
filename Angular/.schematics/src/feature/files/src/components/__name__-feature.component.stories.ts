import {moduleMetadata, storiesOf} from "@storybook/angular";
import {<%= classify(name) %>FeatureComponent, <%= classify(name) %>FeatureModule} from "@<%= customer %>/feature-<%= name %>";
import {StorybookTranslateModule} from "../../../../../../.storybook/StorybookTranslateModule";
import {RouterTestingModule} from "@angular/router/testing";


storiesOf("@<%= classify(customer) %> / Feature / <%= classify(name) %>", module)
  .addDecorator(moduleMetadata({ imports: [
      StorybookTranslateModule,
      RouterTestingModule,
      <%= classify(name) %>FeatureModule
  ]}))
  .add("Empty", () => ({
    component: <%= classify(name) %>FeatureComponent,
    props: {
    },
  }));
