import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: "page-<%= name %>",
  templateUrl: "./<%= name %>-page.component.html",
  styleUrls: ["./<%= name %>-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>PageComponent {
}
