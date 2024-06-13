import { moduleMetadata, storiesOf } from "@storybook/angular";
import { AnalysesDetailUiComponent, AnalysesDetailUiModule } from "@adesso/ui-analyses-detail";
import { StorybookTranslateModule } from "../../../../../../.storybook/StorybookTranslateModule";
import { RouterTestingModule } from "@angular/router/testing";

storiesOf("@Adesso / UI / AnalysesDetail", module)
  .addDecorator(moduleMetadata({ imports: [StorybookTranslateModule, RouterTestingModule, AnalysesDetailUiModule] }))
  .add("Empty", () => ({
    component: AnalysesDetailUiComponent,
    props: {},
  }));
