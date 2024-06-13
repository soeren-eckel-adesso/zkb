import { Pipe, PipeTransform } from "@angular/core";
import { ValueFormatterItemModel } from "@adesso/util-contracts";
import { FormatUtil } from "../utils/format.util";

@Pipe({
	name: "ValueFormatter",
	pure: false,
})
export class ValueFormatterPipe implements PipeTransform {
	constructor(private formatService: FormatUtil) {}

	transform(item: ValueFormatterItemModel): string | undefined {
		let result: string | undefined;

		if (item.valueNumber !== undefined) {
			result = this.formatNumber(item);
		} else if (item.valueDate !== undefined) {
			result = this.formatDateTime(item);
		} else if (item.valueString !== undefined) {
			result = this.formatString(item);
		}

		if (item.suffix !== undefined && item.suffix !== "") {
			result = result + " " + item.suffix;
		}

		return result;
	}

	formatNumber(item: ValueFormatterItemModel): string {
		if (!item.valueNumber) {
			return "";
		}

		return this.formatService.formatNumber(item.valueNumber, undefined, false, false, item.digits);
	}

	formatDateTime(item: ValueFormatterItemModel): string {
		if (!item.valueDate) {
			return "";
		}
		return this.formatService.dateToDateAndTime(item.valueDate);
	}

	formatString(item: ValueFormatterItemModel): string | undefined {
		return item.valueString;
	}
}
