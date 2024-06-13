import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class StringUtil {
	replaceAll(value: string | undefined, searchValue: string, replaceValue: string) {
		if (!value) {
			return "";
		}
		value = value + "";
		return value.split(searchValue).join(replaceValue);
	}

	replaceWhenStartWith(value: string, searchValue: string, replaceValue: string) {
		if (value.startsWith(searchValue)) {
			return replaceValue + value.substr(searchValue.length, value.length - searchValue.length);
		} else {
			return value;
		}
	}

	replaceWhenEndWith(value: string, searchValue: string, replaceValue: string) {
		if (value.endsWith(searchValue)) {
			return value.substr(0, value.length - searchValue.length) + replaceValue;
		} else {
			return value;
		}
	}

	replaceFromEditorToFrontendVersion(value): string {
		let result = value;
		result = this.replaceHtml(result, '<span class="color-blue">', '<font color="#00A3EF">', "</span>", "</font>");
		result = this.replaceHtml(result, "<p>", "<br>", "</p>", "<br>");
		result = this.replaceHtml(result, "<h3>", "", "</h3>", "");
		return result;
	}

	replaceFromFrontendToEditorVersion(value): string {
		return this.replaceHtml(value, '<font color="#00A3EF">', '<span class="color-blue">', "</font>", "</span>");
	}

	replaceHtml(value: string, searchOpenTag: string, replaceOpenTag: string, searchCloseTag: string, replaceCloseTag: string) {
		let result = value;
		while (result.indexOf(searchOpenTag) >= 0) {
			const indexStartTag = result.indexOf(searchOpenTag);
			result =
				result.substr(0, indexStartTag) +
				replaceOpenTag +
				result.substr(indexStartTag + searchOpenTag.length, result.length - indexStartTag - searchOpenTag.length);
			const indexCloseTag = result.indexOf(searchCloseTag, indexStartTag);
			if (indexCloseTag >= 0) {
				result =
					result.substr(0, indexCloseTag) +
					replaceCloseTag +
					result.substr(indexCloseTag + searchCloseTag.length, result.length - indexCloseTag - searchCloseTag.length);
			}
		}
		return result;
	}

	copyString(val?: string) {
		if (val) {
			const selBox = document.createElement("textarea");
			selBox.style.position = "fixed";
			selBox.style.left = "0";
			selBox.style.top = "0";
			selBox.style.opacity = "0";
			selBox.value = val;
			document.body.appendChild(selBox);
			selBox.focus();
			selBox.select();
			document.execCommand("copy");
			document.body.removeChild(selBox);
		}
	}

	formatIban(value?: string | null): string {
		if (!value) {
			return "";
		}
		value = this.replaceAll(value, " ", "");
		if (!value) {
			return "";
		}
		let iban = "";
		for (let i = 0; i < value.length; i++) {
			iban = iban + value.charAt(i);
			if (i % 4 === 3) {
				iban = iban + " ";
			}
		}
		return iban.trim();
	}

	formatTaxId(value?: string | null): string {
		if (!value) {
			return "";
		}
		value = this.replaceAll(value, " ", "");
		if (!value) {
			return "";
		}
		let taxId = "";
		for (let i = 0; i < value.length; i++) {
			taxId = taxId + value.charAt(i);
			if (i === 1 || i % 3 === 1) {
				taxId = taxId + " ";
			}
		}
		return taxId.trim();
	}

	parseGermanNumberStringToNumber(value?: string): number | undefined {
		if (value === undefined || value === "") {
			return undefined;
		}
		const numberValue = +this.replaceAll(value, ".", "").replace(",", ".");
		if (isNaN(numberValue)) {
			return undefined;
		} else {
			return numberValue;
		}
	}

	isStringAnValidGermanNumber(stringValue?: string): boolean {
		if (stringValue === undefined) {
			return false;
		}
		const value = this.parseGermanNumberStringToNumber(stringValue);
		if (value === undefined) {
			return false;
		}
		const numberParts = stringValue.split(".");
		if (numberParts.length > 1) {
			for (let i = 0; i <= numberParts.length - 1; i++) {
				if (i === 0 && numberParts[i].length > 3) {
					return false;
				}
				if (i > 0) {
					const lastParts = numberParts[i].split(",");
					if (lastParts[0].length !== 3) {
						return false;
					}
				}
			}
			return true;
		} else {
			return true;
		}
	}
}
