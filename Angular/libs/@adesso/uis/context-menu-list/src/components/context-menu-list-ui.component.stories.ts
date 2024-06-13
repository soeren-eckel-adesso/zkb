import { moduleMetadata, storiesOf } from "@storybook/angular";
import { ContextMenuListUiComponent, ContextMenuListUiModule } from "@adesso/ui-context-menu-list";
import { RouterTestingModule } from "@angular/router/testing";
import { StorybookTranslateModule } from "../../../../../../.storybook/StorybookTranslateModule";

storiesOf("@Adesso / UI / Context Menu List", module)
  .addDecorator(moduleMetadata({ imports: [ContextMenuListUiModule, StorybookTranslateModule, RouterTestingModule] }))
  .add("Filled", () => ({
    component: ContextMenuListUiComponent,
    props: {
      items: [
        {
          label: "Börse & Märkte",
          items: [
            { label: "Aktien", url: "/aktien" },
            { label: "Indizes", url: "/indizes" },
            { label: "Fonds", url: "/fonds" },
            { label: "ETFs", url: "/etfs" },
          ],
        },
        {
          label: "Mein Bereich",
          items: [{ label: "Ausloggen", url: "/logout" }],
        },
      ],
    },
  }))
  .add("Empty", () => ({
    component: ContextMenuListUiComponent,
    props: {},
  }));
