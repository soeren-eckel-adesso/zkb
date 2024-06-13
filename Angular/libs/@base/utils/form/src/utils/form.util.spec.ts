import { FormUtil } from "./form.util";
import { TestBed } from "@angular/core/testing";
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
import { AbstractControl, FormControl } from "@angular/forms";

describe("FormUtil", () => {
	let formUtil: FormUtil;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				TranslateModule.forRoot({
					defaultLanguage: "de",
					loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
				}),
			],
			providers: [FormUtil, TranslateService],
		});

		formUtil = TestBed.inject(FormUtil);
	});

	describe("validateIbanDE", () => {
		it("Iban Valid", () => {
			const ibanValidation = formUtil.validateIbanDE("DE91100000000123456789");
			expect(ibanValidation).toEqual(null);
		});

		it("Iban Invalid", () => {
			const ibanValidation = formUtil.validateIbanDE("DE02120300000000202052");
			expect(ibanValidation).toEqual({ ibanInvalid: true });
		});

		it("5 Valid Ibans", () => {
			const ibans: string[] = [
				"DE07500105176823188813",
				"DE31500105176115777178",
				"DE50500105177645258383",
				"DE52500105172888253411",
				"DE26500105174671594417",
			];
			ibans.forEach((iban) => {
				const ibanValidation = formUtil.validateIbanDE(iban);
				expect(ibanValidation).toEqual(null);
			});
		});
	});

	describe("validatorIsSameString", () => {
		it("Same String", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorIsSameString("test")]);
			control.setValue("test");
			expect(control.valid).toEqual(true);
			expect(control.errors).toEqual(null);
		});

		it("Same String Big and small letters", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorIsSameString("Test")]);
			control.setValue("Test");
			expect(control.valid).toEqual(true);
			expect(control.errors).toEqual(null);
		});

		it("Different String Big and small letters", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorIsSameString("Test")]);
			control.setValue("test");
			expect(control.valid).toEqual(false);
			expect(control.errors).toEqual({ isSameString: true });
		});
	});

	describe("validatorMaxGermanNumber", () => {
		it("Number with comma", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorMaxGermanNumber(100)]);
			control.setValue("10,5");
			expect(control.valid).toEqual(true);
			expect(control.errors).toEqual(null);
		});

		it("Number with dot bigger than max", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorMaxGermanNumber(100)]);
			control.setValue("10.500");
			expect(control.valid).toEqual(false);
			expect(control.errors).toEqual({ maxGermanNumber: true, value: 100 });
		});

		it("Number with dot", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorMaxGermanNumber(1200)]);
			control.setValue("1.100");
			expect(control.valid).toEqual(true);
			expect(control.errors).toEqual(null);
		});

		it("Number bigger than max", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorMaxGermanNumber(100)]);
			control.setValue("100,5");
			expect(control.valid).toEqual(false);
			expect(control.errors).toEqual({ maxGermanNumber: true, value: 100 });
		});

		it("Number isNotSame", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorMaxGermanNumber(100, true)]);
			control.setValue("100");
			expect(control.valid).toEqual(false);
			expect(control.errors).toEqual({ maxGermanNumber: true, value: 100 });
		});
	});

	describe("validatorMinGermanNumber", () => {
		it("Number with comma", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorMinGermanNumber(10)]);
			control.setValue("10,5");
			expect(control.valid).toEqual(true);
			expect(control.errors).toEqual(null);
		});

		it("Number with dot", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorMinGermanNumber(10)]);
			control.setValue("10.500");
			expect(control.valid).toEqual(true);
			expect(control.errors).toEqual(null);
		});

		it("Number lower than min", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorMinGermanNumber(10)]);
			control.setValue("9,5");
			expect(control.valid).toEqual(false);
			expect(control.errors).toEqual({ minGermanNumber: true, value: 10 });
		});

		it("Number isNotSame", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorMinGermanNumber(10, true)]);
			control.setValue("10");
			expect(control.valid).toEqual(false);
			expect(control.errors).toEqual({ minGermanNumber: true, value: 10 });
		});
	});

	describe("validatorIsGermanInteger", () => {
		it("Number", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorIsGermanInteger()]);
			control.setValue("10");
			expect(control.valid).toEqual(true);
			expect(control.errors).toEqual(null);
		});

		it("Number with comma", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorIsGermanInteger()]);
			control.setValue("10,5");
			expect(control.valid).toEqual(false);
			expect(control.errors).toEqual({ isGermanInteger: false });
		});

		it("Number with comma zero", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorIsGermanInteger()]);
			control.setValue("10,0");
			expect(control.valid).toEqual(true);
			expect(control.errors).toEqual(null);
		});

		it("Number with dot", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorIsGermanInteger()]);
			control.setValue("10.500");
			expect(control.valid).toEqual(true);
			expect(control.errors).toEqual(null);
		});
	});

	describe("validatorIsGermanNumber", () => {
		it("Number with comma", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorIsGermanNumber()]);
			control.setValue("10,5");
			expect(control.valid).toEqual(true);
			expect(control.errors).toEqual(null);
		});

		it("Number with dot", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorIsGermanNumber()]);
			control.setValue("10.500");
			expect(control.valid).toEqual(true);
			expect(control.errors).toEqual(null);
		});

		it("Number with dot on false possiton", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorIsGermanNumber()]);
			control.setValue("1.5");
			expect(control.valid).toEqual(false);
			expect(control.errors).toEqual({ isGermanNumber: false });
		});

		it("Number with letters", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorIsGermanNumber()]);
			control.setValue("a105");
			expect(control.valid).toEqual(false);
			expect(control.errors).toEqual({ isGermanNumber: false });
		});

		it("big Number with dot", () => {
			const control: AbstractControl = new FormControl();
			control.setValidators([formUtil.validatorIsGermanNumber()]);
			control.setValue("10.500,5");
			expect(control.valid).toEqual(true);
			expect(control.errors).toEqual(null);
		});
	});

	describe("validatorOfLegalAge", () => {
		it("date now 17", () => {
			const control: AbstractControl = new FormControl("", [formUtil.validatorOfLegalAge]);
			const nowDate = new Date(Date.now());
			const compareDate: Date = new Date(nowDate.getFullYear() - 18, nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);
			compareDate.setDate(compareDate.getDate() + 1);
			control.setValue(compareDate);
			expect(control.valid).toEqual(false);
			expect(control.errors).toEqual({ ofLegalAge: { requiredYear: compareDate.getFullYear() } });
		});

		it("date now 18", () => {
			const control: AbstractControl = new FormControl("", [formUtil.validatorOfLegalAge]);
			const nowDate = new Date(Date.now());
			const compareDate: Date = new Date(nowDate.getFullYear() - 18, nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);
			compareDate.setDate(compareDate.getDate() - 1);
			control.setValue(compareDate);
			expect(control.valid).toEqual(true);
			expect(control.errors).toEqual(null);
		});
	});

	describe("validatorMinDate", () => {
		it("date now -1 day", () => {
			const control: AbstractControl = new FormControl();
			const nowDate = new Date(Date.now());
			control.setValidators([formUtil.validatorMinDate(nowDate)]);
			const compareDate: Date = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 1, 0, 0, 0, 0);
			compareDate.setDate(compareDate.getDate());
			control.setValue(compareDate);
			expect(control.valid).toEqual(false);
			expect(control.errors).toEqual({ minDate: true, value: nowDate });
		});

		it("date now", () => {
			const control: AbstractControl = new FormControl();
			const nowDate = new Date(Date.now());
			control.setValidators([formUtil.validatorMinDate(nowDate)]);
			const compareDate: Date = new Date(nowDate);
			compareDate.setDate(compareDate.getDate());
			control.setValue(compareDate);
			expect(control.valid).toEqual(true);
			expect(control.errors).toEqual(null);
		});
	});
});
