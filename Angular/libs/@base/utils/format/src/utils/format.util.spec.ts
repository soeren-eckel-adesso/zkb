import { TestBed } from "@angular/core/testing";
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
import { FormatUtil } from "./format.util";
import { FormatUtilModule } from "../format-util.module";
import { CulturesEnum } from "@adesso/util-contracts";

describe("FormatService", () => {
	let formatService: FormatUtil;
	let translateService: TranslateService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				TranslateModule.forRoot({
					defaultLanguage: CulturesEnum.deDe,
					loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
				}),
				FormatUtilModule,
			],
			providers: [FormatUtil, TranslateService],
		});

		formatService = TestBed.inject(FormatUtil);
		translateService = TestBed.inject(TranslateService);
	});

	describe("English", () => {
		beforeEach(() => {
			translateService.use(CulturesEnum.enUs);
		});

		it("null input returns empty string", () => {
			const target = undefined;

			const result = formatService.formatNumber(target);
			expect(result).toBe("");
		});

		it("NAN input returns empty string", () => {
			const target = "aaaaa";

			const result = formatService.formatNumber(+target);
			expect(result).toBe("");
		});

		it("omitEmptyDecimalPlaces skips trailing zeros", () => {
			const target = 12345;

			const result = formatService.formatNumber(target, undefined, true);
			expect(result).toBe("12,345");
		});

		it("omitEmptyDecimalPlaces skips single trailing zero", () => {
			const target = 12345.1;

			const result = formatService.formatNumber(target, undefined, true);
			expect(result).toBe("12,345.1");
		});

		it("omitEmptyDecimalPlaces does not remove signifigant places", () => {
			const target = 12345.12;

			const result = formatService.formatNumber(target, undefined, true);
			expect(result).toBe("12,345.12");
		});

		it("toFixed - -0.498220640569395", () => {
			const target = -0.49;

			const fixed = formatService.toFixed(target, 2);
			expect(fixed).toBe(-0.49);
		});

		it("toFixed - 23.051351044798785", () => {
			const target = 23.051351044798785;

			const fixed = formatService.toFixed(target, 2);
			expect(fixed).toBe(23.05);
		});

		it("formatNumber - 1,000,000 has text suffix", () => {
			const formatted = formatService.formatNumber(1000000);
			expect(formatted).toBe("1.00 millions");
		});

		it("formatNumber - 1,000,000,000 has text suffix", () => {
			const formatted = formatService.formatNumber(1000000000);
			expect(formatted).toBe("1.00 billions");
		});

		it("formatNumber - 1,000,000,000 overrides suffix", () => {
			const formatted = formatService.formatNumber(1000000000, "EUR");
			expect(formatted).toBe("1.00 billions");
		});

		it("formatNumber - 1,000,000 ignores large numbers", () => {
			const formatted = formatService.formatNumber(1000000, undefined, undefined, true);

			expect(formatted).toEqual("1,000,000.00");
		});

		it("formatNumber - 1,000,000 ignores large numbers and uses suffix", () => {
			const formatted = formatService.formatNumber(1000000, "EUR", undefined, true);

			expect(formatted).toEqual("1,000,000.00 EUR");
		});

		it("asPercentage returns expected value", () => {
			const formatted = formatService.asPercentage(2.1);

			expect(formatted).toEqual("+2.10 %");
		});
	});

	describe("German", () => {
		beforeEach(() => {
			translateService.use(CulturesEnum.deDe);
		});

		it("toFixed - -0.498220640569395", () => {
			const target = -0.49;

			const fixed = formatService.toFixed(target, 2);
			expect(fixed).toBe(-0.49);
		});

		it("toFixed - 23.051351044798785", () => {
			const target = 23.051351044798785;

			const fixed = formatService.toFixed(target, 2);
			expect(fixed).toBe(23.05);
		});

		it("formatNumber - 1,000,000 has text suffix", () => {
			const formatted = formatService.formatNumber(1000000);
			expect(formatted).toBe("1,00 Mio.");
		});

		it("formatNumber - 1,000,000,000 has text suffix", () => {
			const formatted = formatService.formatNumber(1000000000);
			expect(formatted).toBe("1,00 Mrd.");
		});

		it("formatNumber - 1,000,000 ignores large numbers", () => {
			const formatted = formatService.formatNumber(1000000, undefined, undefined, true);

			expect(formatted).toEqual("1.000.000,00");
		});

		it("asPercentage returns expected value", () => {
			const formatted = formatService.asPercentage(2.1);

			expect(formatted).toEqual("+2,10 %");
		});
	});
});
