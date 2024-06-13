import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { InstrumentHeaderPropsModel } from "@adesso/util-contracts";

@Component({
	selector: "ui-instrument-header",
	templateUrl: "./instrument-header-ui.component.html",
	styleUrls: ["./instrument-header-ui.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstrumentHeaderUiComponent {
	@Input() instrument: InstrumentHeaderPropsModel | undefined;
}
