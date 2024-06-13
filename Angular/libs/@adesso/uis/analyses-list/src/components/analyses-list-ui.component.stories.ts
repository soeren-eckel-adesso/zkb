import { moduleMetadata, storiesOf } from "@storybook/angular";
import { AnalysesListUiComponent, AnalysesListUiModule } from "@adesso/ui-analyses-list";
import { StorybookTranslateModule } from "../../../../../../.storybook/StorybookTranslateModule";
import { RouterTestingModule } from "@angular/router/testing";

storiesOf("@Adesso / UI / AnalysesList", module)
  .addDecorator(moduleMetadata({ imports: [StorybookTranslateModule, RouterTestingModule, AnalysesListUiModule] }))
  .add("Empty", () => ({
    component: AnalysesListUiComponent,
    props: {},
  }));
