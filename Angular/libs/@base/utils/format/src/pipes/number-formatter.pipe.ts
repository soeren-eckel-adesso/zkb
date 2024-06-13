import { Pipe, PipeTransform } from "@angular/core";
import { AssetClassEnum } from "@adesso/util-contracts";
import { FormatUtil } from "../utils/format.util";

@Pipe({
	name: "numberFormatter",
	pure: false,
})
export class NumberFormatterPipe implements PipeTransform {
	constructor(private formatService: FormatUtil) {}

	transform(
		item: number | undefined,
		params: {
			suffix?: string;
			omitEmptyDecimalPlaces?: boolean;
			ignoreLargeNumbers?: boolean;
			decimals?: number;
			assetClass?: AssetClassEnum;
		} = {}
	): string {
		return this.formatService.formatNumber(
			item,
			params.suffix,
			params.omitEmptyDecimalPlaces,
			params.ignoreLargeNumbers,
			params.decimals,
			params.assetClass
		);
	}
}
