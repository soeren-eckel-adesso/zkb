import {Injectable} from "@angular/core";
import {AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {PatternEnum} from "../enums/pattern.enum";
import {StringUtil} from "@base/util-string";

function enumKeys<T>(e: T): (keyof T)[] {
	return Object.keys(e as object) as (keyof T)[];
}

@Injectable({
	providedIn: "root",
})
export class FormUtil {
	public readonly passwordPatterns: string;
	public that = this;

	constructor(private translate: TranslateService, private stringUtil: StringUtil) {
		this.passwordPatterns = this.buildPattern([
			PatternEnum.oneOrMoreLowercaseLetter,
			PatternEnum.oneOrMoreUppercaseLetter,
			PatternEnum.oneOrMoreNumbers,
			PatternEnum.oneOrMoreSpecialCharacter,
		]);
	}

	fg(abstractControl): FormGroup {
		return abstractControl as FormGroup;
	}

	fc(abstractControl): FormControl {
		return abstractControl as FormControl;
	}

	isFormGroupValid(formGroup?: FormGroup, withTouch?: boolean): boolean {
		if (!formGroup) {
			return false;
		}
		Object.keys(formGroup.controls).forEach((field) => {
			const control = formGroup.get(field);
			if (control instanceof FormControl) {
				if (withTouch === undefined || withTouch === true) {
					control.markAsTouched({onlySelf: true});
				}
				control.updateValueAndValidity({emitEvent: true});
			}
			if (control instanceof FormArray) {
				Object.keys(control.controls).forEach((subField) => {
					const subControl = control.get(subField);
					if (subControl instanceof FormControl) {
						if (withTouch === undefined || withTouch === true) {
							subControl.markAsTouched({onlySelf: true});
							subControl.updateValueAndValidity({emitEvent: false});
						}
					}
				});
			}
		});
		return !formGroup.invalid;
	}

	hasFormControlErrors(control: AbstractControl): boolean {
		if (control && control.invalid && control.errors && (control.dirty || control.touched)) {
			return true;
		}
		return false;
	}

	formControlErrorMessage(control: AbstractControl, label: string, extraHandling?: string): string | undefined {
		if (!this.hasFormControlErrors(control)) {
			return "";
		}
		label = label.replace("*", "").replace("(optional)", "").replace("(wie in Ihrem Ausweis)", "").trim();
		for (const propertyName in control.errors) {
			const pattern = control.errors?.pattern?.requiredPattern;
			const value = control.errors?.pattern?.actualValue;

			if (control.errors.hasOwnProperty(propertyName)) {
				switch (propertyName) {
					case "required":
					case "email":
						if (extraHandling === "furtherTaxResidences") {
							return this.translate.instant("error-furtherTaxResidences-required");
						}
						return this.translate.instant("error-" + propertyName, {name: label});
					case "pattern":
						if (pattern === PatternEnum.onlyNumber) {
							if (extraHandling === "telephone") {
								return this.translate.instant("error-telephone-onlyNumber");
							}
							return this.translate.instant("error-onlyNumber", {name: label});
						}
						for (const key of enumKeys(PatternEnum)) {
							if (pattern.indexOf(PatternEnum[key]) >= 0 && !value.match(".*[" + PatternEnum[key] + "].*")) {
								return this.translate.instant("error-" + key, {name: label});
							}
						}

						return this.translate.instant("error-pattern", {name: label});
					case "onlyNumber":
						return this.translate.instant("error-onlyNumber", {name: label});
					case "minlength":
						if (extraHandling === "telephone") {
							return this.translate.instant("error-minlength-telephone");
						}
						return this.translate.instant("error-minlength", {
							name: label,
							length: control.errors.minlength.requiredLength,
						});
					case "maxlength":
						return this.translate.instant("error-maxlength", {
							name: label,
							length: control.errors.maxlength.requiredLength,
						});
					case "loginFailed":
						return this.translate.instant("error-loginFailed");
					case "ofLegalAge":
						return this.translate.instant("error-ofLegalAge");
					case "isSameString":
						return this.translate.instant("error-isSameString", {
							name: label,
						});
					case "minGermanNumber":
						return this.translate.instant("min-german-number");
					case "maxGermanNumber":
						return this.translate.instant("max-german-number");
					case "maxGermanDecimals":
						return this.translate.instant("max-german-decimals");
					case "firstCharZero":
						return this.translate.instant("error-firstCharZero");
					case "minDate":
						return this.translate.instant("error-minDate");
					case "isDate":
						return this.translate.instant("error-isDate");
				}
			}
		}
		return label + " ist nicht korrekt";
	}

	buildPattern(patterns: PatternEnum[]): string {
		let patterResult = "^{0}[{1}]*$";
		if (patterns.length === 0) {
			return "";
		}
		patterns.forEach((pattern) => {
			patterResult = patterResult.replace("{0}", "(?=.*[" + pattern.toString() + "]){0}").replace("{1}", pattern.toString() + "{1}");
		});
		patterResult = patterResult.replace("{0}", "").replace("{1}", "");
		return patterResult;
	}

	validatorOfLegalAge(control: AbstractControl) {
		const birthdate = new Date(control.value);
		if (!birthdate) {
			return null;
		}

		let month = "";
		if (birthdate.getMonth() < 9) {
			month = "0" + (birthdate.getMonth() + 1).toString();
		} else {
			month = (birthdate.getMonth() + 1).toString();
		}
		let day = "";
		if (birthdate.getDate() < 10) {
			day = "0" + birthdate.getDate().toString();
		} else {
			day = birthdate.getDate().toString();
		}
		let dateString = birthdate.getFullYear() + "-" + month + "-" + day + "T00:00:00.000Z";
		const compareBirthdate = new Date(dateString);

		const nowDate = new Date(Date.now());
		const minDate: Date = new Date(nowDate.getFullYear() - 18, nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);
		if (minDate.getMonth() < 9) {
			month = "0" + (minDate.getMonth() + 1).toString();
		} else {
			month = (minDate.getMonth() + 1).toString();
		}
		if (minDate.getDate() < 10) {
			day = "0" + minDate.getDate().toString();
		} else {
			day = minDate.getDate().toString();
		}
		dateString = minDate.getFullYear() + "-" + month + "-" + day + "T00:00:00.000Z";
		const compareDate = new Date(dateString);

		let result;
		if (compareDate.getTime() < compareBirthdate.getTime()) {
			result = {
				ofLegalAge: {
					requiredYear: birthdate.getFullYear(),
				},
			};
		}
		return result;
	}

	validatorIsGermanNumber() {
		return (control: AbstractControl): { [key: string]: any } | null => {
			if (!control.value) {
				return null;
			}
			const stringValue = control.value + "";
			if (this.stringUtil.isStringAnValidGermanNumber(stringValue)) {
				return null;
			} else {
				return {
					isGermanNumber: false,
				};
			}
		};
	}

	validatorIsGermanInteger() {
		return (control: AbstractControl): { [key: string]: any } | null => {
			if (control.value === undefined || control.value === "" || control.value === null) {
				return null;
			}
			const value = this.stringUtil.parseGermanNumberStringToNumber(control.value);
			if (value === undefined || value === Math.floor(value)) {
				return null;
			}

			return {
				isGermanInteger: false,
			};
		};
	}

	validatorMinGermanNumber(min: number, isNotSame?: boolean) {
		return (control: AbstractControl): { [key: string]: any } | null => {
			if (control.value === undefined || control.value === "" || control.value === null) {
				return null;
			}
			const value = this.stringUtil.parseGermanNumberStringToNumber(control.value);
			if (value === undefined || value < min) {
				return {minGermanNumber: true, value: min};
			}
			if (isNotSame && value === min) {
				return {minGermanNumber: true, value: min};
			}
			return null;
		};
	}

	validatorMaxGermanNumber(max: number, isNotSame?: boolean) {
		return (control: AbstractControl): { [key: string]: any } | null => {
			if (control.value === undefined || control.value === "" || control.value === null) {
				return null;
			}
			const value = this.stringUtil.parseGermanNumberStringToNumber(control.value);
			if (value === undefined || value > max) {
				return {maxGermanNumber: true, value: max};
			}
			if (isNotSame && value === max) {
				return {maxGermanNumber: true, value: max};
			}
			return null;
		};
	}

	validatorMaxGermanDecimals(max: number) {
		return (control: AbstractControl): { [key: string]: any } | null => {
			if (control.value === undefined || control.value === "" || control.value === null) {
				return null;
			}
			const value = this.stringUtil.parseGermanNumberStringToNumber(control.value);
			if (value === undefined || value !== +value.toFixed(max)) {
				return {maxGermanDecimals: true};
			}
			return null;
		};
	}

	validatorIsSameString(compareValue: string) {
		return (control: AbstractControl): { [key: string]: any } | null => {
			const value = control.value;
			if (value !== compareValue) {
				return {isSameString: true};
			}
			return null;
		};
	}

	validatorIbanValidation(countryCode: string, min?: number, max?: number) {
		return (control: AbstractControl): { [key: string]: any } | null => {
			const value = countryCode + control.value.split(" ").join("");
			if (min && value.length < min) {
				return {minLength: true};
			}

			if (max && value.length > max) {
				return {maxLength: true};
			}
			switch (countryCode.toLowerCase()) {
				case "de":
					return this.validateIbanDE(value);
			}
			return null;
		};
	}

	validatorMinDate(compareDate: Date) {
		return (control: AbstractControl): { [key: string]: any } | null => {
			if (!control.value) {
				return null;
			} else if (!(control.value instanceof Date) || isNaN(control.value.getTime())) {
				return null;
			} else {
				const value = new Date(control.value);
				value.setHours(0);
				compareDate.setHours(0);
				value.setMinutes(0);
				compareDate.setMinutes(0);
				value.setSeconds(0);
				compareDate.setSeconds(0);
				value.setMilliseconds(0);
				compareDate.setMilliseconds(0);

				if (value.getTime() < compareDate.getTime()) {
					return {minDate: true, value: compareDate};
				}
			}

			return null;
		};
	}

	validatorMaxDate(compareDate: Date) {
		return (control: AbstractControl): { [key: string]: any } | null => {
			if (!control.value) {
				return null;
			} else if (!(control.value instanceof Date) || isNaN(control.value.getTime())) {
				return null;
			} else {
				const value = new Date(control.value);
				value.setHours(0);
				compareDate.setHours(0);
				value.setMinutes(0);
				compareDate.setMinutes(0);
				value.setSeconds(0);
				compareDate.setSeconds(0);
				value.setMilliseconds(0);
				compareDate.setMilliseconds(0);
				if (value.getTime() > compareDate.getTime()) {
					return {maxDate: true, value: compareDate};
				}
			}
			return null;
		};
	}

	validatorIsDate() {
		return (control: AbstractControl): { [key: string]: any } | null => {
			if (!control.value) {
				return null;
			}

			if (!(control.value instanceof Date) || isNaN(control.value.getTime())) {
				return {isDate: true};
			}
			return null;
		};
	}

	validatorFirstCharZero(control: AbstractControl) {
		const value = control.value;
		if (!value) {
			return null;
		}
		let result;
		if (value.match("^[?!0].*")) {
			result = {
				firstCharZero: {
					firstCharZero: true,
				},
			};
		}
		return result;
	}

	validatorEmailValidation(control: AbstractControl) {
		const value = control?.value?.toLowerCase();
		if (!value) {
			return null;
		}
		let result;
		if (!value.match(PatternEnum.email)) {
			result = {
				email: true,
			};
		}
		return result;
	}

	public validateIbanDE(value: string) {
		const newValue = this.ibanReplaceChar(value.substring(4, value.length) + value.substring(0, 4));
		if (newValue && this.modulo(newValue, 97) !== 1) {
			return {ibanInvalid: true};
		}
		return null;
	}

	public validateTaxIdDe(control: AbstractControl) {
		let value = control.value;
		if (!value) {
			return null;
		}
		value = value.split(" ").join("");
		let result;
		if (value.length < 11) {
			result = {
				minlength: {
					requiredLength: 11,
				},
			};
		} else if (value.length > 11) {
			result = {
				maxlength: {
					requiredLength: 11,
				},
			};
		} else if (!value.match("^[0-9]*$")) {
			result = {
				onlyNumber: {
					error: true,
				},
			};
		}
		return result;
	}

	isinValidation(isin: string, isNullable: boolean = false): boolean {
		const regex = "\\b([A-Z]{2})((?![A-Z]{10}\\b)[A-Z0-9]{10})\\b";
		if (isNullable && !isin) {
			return true;
		}
		if (isin && isin.match(regex)) {
			return true;
		}
		return false;
	}

	passwordValidators(passwordPatterns: string): ValidatorFn[] {
		return [Validators.required, Validators.minLength(8), Validators.pattern(passwordPatterns)];
	}

	private modulo(dividend: string, divisor: number): number {
		const partLength = 10;
		while (dividend.length > partLength) {
			const part = dividend.substring(0, partLength);
			dividend = (+part % divisor) + dividend.substring(partLength);
		}
		return +dividend % divisor;
	}

	private ibanReplaceChar(value: string): string | undefined {
		if (!value) {
			return undefined;
		}
		let returnValue: string = this.ibanReplaceCharSwitch(value[0]);
		for (let i = 1; i < value.length; i++) {
			returnValue += this.ibanReplaceCharSwitch(value[i]);
		}
		return returnValue;
	}

	private ibanReplaceCharSwitch(char: string): string {
		if (isNaN(+char)) {
			return char.toLowerCase().charCodeAt(0) - 87 + "";
		} else {
			return char;
		}
	}
}
