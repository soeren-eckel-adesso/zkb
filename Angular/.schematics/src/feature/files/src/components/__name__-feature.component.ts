import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: "feature-<%= name %>",
  templateUrl: "./<%= name %>-feature.component.html",
  styleUrls: ["./<%= name %>-feature.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>FeatureComponent {
}
