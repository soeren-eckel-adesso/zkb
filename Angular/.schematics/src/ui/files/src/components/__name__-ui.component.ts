import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: "ui-<%= name %>",
  templateUrl: "./<%= name %>-ui.component.html",
  styleUrls: ["./<%= name %>-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>UiComponent {
}
