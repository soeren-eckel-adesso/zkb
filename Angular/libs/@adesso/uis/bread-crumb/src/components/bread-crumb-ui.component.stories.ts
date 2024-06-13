import { moduleMetadata, storiesOf } from "@storybook/angular";
import { BreadCrumbUiComponent } from "@adesso/ui-bread-crumb";
import { RouterTestingModule } from "@angular/router/testing";

storiesOf("@Adesso / UI / BreadCrumb", module)
  .addDecorator(moduleMetadata({ imports: [RouterTestingModule] }))
  .add("Detail Page", () => ({
    component: BreadCrumbUiComponent,
    props: {
      items: [
        {
          label: "Startseite",
          url: "/",
        },
        {
          label: "Übersicht",
          url: "/uebersicht",
        },
        {
          label: "Suche",
          url: "/suche",
        },
        {
          label: "Detail",
        },
      ],
    },
  }))
  .add("One Item", () => ({
    component: BreadCrumbUiComponent,
    props: {
      items: [
        {
          label: "Startseite",
          url: "/",
        },
      ],
    },
  }))
  .add("Empty", () => ({
    component: BreadCrumbUiComponent,
    props: {},
  }));
