import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "page-not-found",
  templateUrl: "./not-found-page.component.html",
  styleUrls: ["./not-found-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent {}
