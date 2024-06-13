import { Pipe, PipeTransform } from "@angular/core";
import { FormatUtil } from "../utils/format.util";

@Pipe({
	name: "dateOrTime",
	pure: false,
})
export class DateOrTimePipe implements PipeTransform {
	constructor(private formatService: FormatUtil) {}

	transform(date: Date | undefined): string {
		if (!date) {
			return "";
		}

		const d = new Date(date);
		return this.formatService.dateToDateOrTime(d);
	}
}
