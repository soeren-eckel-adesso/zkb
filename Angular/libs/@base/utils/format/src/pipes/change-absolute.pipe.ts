import { Pipe, PipeTransform } from "@angular/core";
import { FormatUtil } from "../utils/format.util";

@Pipe({
	name: "changeAbsolute",
	pure: false,
})
export class ChangeAbsolutePipe implements PipeTransform {
	constructor(private formatService: FormatUtil) {}

	transform(
		value: number | undefined,
		params: {
			suffix?: string;
		} = {}
	): string {
		return this.formatService.asChangeAbsolute(value, params.suffix);
	}
}
