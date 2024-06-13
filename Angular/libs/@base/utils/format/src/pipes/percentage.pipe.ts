import { Pipe, PipeTransform } from "@angular/core";
import { FormatUtil } from "../utils/format.util";

@Pipe({
	name: "percentage",
	pure: false,
})
export class PercentagePipe implements PipeTransform {
	constructor(private formatService: FormatUtil) {}

	transform(value: number | undefined): string {
		return this.formatService.asPercentage(value);
	}
}
