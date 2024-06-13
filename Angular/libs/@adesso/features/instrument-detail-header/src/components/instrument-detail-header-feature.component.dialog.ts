import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
import { endWith } from "rxjs/operators";

@Component({
	selector: "instrument-detail-header-feature.component.dialog",
	templateUrl: "instrument-detail-header-feature.component.dialog.html",
})
export class InstrumentDetailHeaderFeatureDialogComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
		console.log(data);
	}

	formatCamelCase(camelCaseString) {
		return camelCaseString
			.replace(/([a-z])([A-Z])/g, "$1 $2") // Trenne Großbuchstaben mit Leerzeichen
			.replace(/([A-Z])([A-Z][a-z])/g, "$1 $2"); // In Kleinbuchstaben umwandeln
	}

	public convertProps(input, type: number) {
		const result = [];

		for (const key in input) {
			if (typeof input[key] !== "object" && typeof input[key] !== "boolean" && input.hasOwnProperty(key)) {
				if (type === 0 && key === "originalName") continue;

				if (type === 1 && (key.startsWith("bid") || key.startsWith("ask") || key.startsWith("last") || key.startsWith("quote"))) continue;

				if (type === 2 && typeof input[key] !== "number") continue;

				if (type === 4 && !key.startsWith("quote")) continue;

				const formattedKey = this.formatCamelCase(key);
				const isDate = typeof input[key] === "string" && type !== 0 && input[key].endsWith("Z");

				result.push([formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1), input[key], isDate] as never);
			}
		}

		return result;
	}
}
