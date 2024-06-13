import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "page-index-search",
  templateUrl: "./index-search-page.component.html",
  styleUrls: ["./index-search-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexSearchPageComponent {}
