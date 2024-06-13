import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { BreadcrumbItemModel } from "../models/bread-crumb-item.model";

@Component({
  selector: "ui-breadcrumb",
  templateUrl: "./bread-crumb-ui.component.html",
  styleUrls: ["./bread-crumb-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadCrumbUiComponent {
  @Input() items: BreadcrumbItemModel[];
}
