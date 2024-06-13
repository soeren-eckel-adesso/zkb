import { moduleMetadata, storiesOf } from "@storybook/angular";
import { PagingUiComponent } from "@adesso/ui-paging";
import { number } from "@storybook/addon-knobs";

storiesOf("@Adesso / UI / Paging", module)
  .addDecorator(moduleMetadata({ imports: [] }))
  .add("Dynamic", () => ({
    component: PagingUiComponent,
    props: {
      currentPage: number("currentPage", 1),
      pageCount: number("pageCount", 5),
    },
  }))
  .add("Page 1 of 5", () => ({
    component: PagingUiComponent,
    props: {
      currentPage: 1,
      pageCount: 5,
    },
  }))
  .add("Page 3 of 5", () => ({
    component: PagingUiComponent,
    props: {
      currentPage: 3,
      pageCount: 5,
    },
  }))
  .add("Page 5 of 5", () => ({
    component: PagingUiComponent,
    props: {
      currentPage: 5,
      pageCount: 5,
    },
  }))
  .add("Page 1 of 100", () => ({
    component: PagingUiComponent,
    props: {
      currentPage: 1,
      pageCount: 100,
    },
  }))
  .add("Page 40 of 100", () => ({
    component: PagingUiComponent,
    props: {
      currentPage: 40,
      pageCount: 100,
    },
  }))
  .add("Page 100 of 100", () => ({
    component: PagingUiComponent,
    props: {
      currentPage: 100,
      pageCount: 100,
    },
  }))
  .add("Page 1 of 1", () => ({
    component: PagingUiComponent,
    props: {
      currentPage: 1,
      pageCount: 1,
    },
  }));
