import { TestBed } from "@angular/core/testing";
import { StringUtil } from "./string.util";

describe("CalculationUtil", () => {
	let stringUtil: StringUtil;
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [StringUtil],
		});
		stringUtil = TestBed.inject(StringUtil);
	});

	describe("replaceHtml", () => {
		it("replace single finding", () => {
			const result = stringUtil.replaceHtml(
				'Das ist <b>mal </b>eine&#160;<span class="color-blue">Testnachricht</span><div><br></div><div><br></div><div>Mit HTML</div>',
				'<span class="color-blue">',
				'<font color="#00A3EF">',
				"</span>",
				"</font>"
			);
			expect(result).toEqual(
				'Das ist <b>mal </b>eine&#160;<font color="#00A3EF">Testnachricht</font><div><br></div><div><br></div><div>Mit HTML</div>'
			);
		});

		it("replace multi finding", () => {
			const result = stringUtil.replaceHtml(
				'Das ist <b>mal </b>eine&#160;<span class="color-blue">Testnachricht</span><div><br></div><div><br></div><div>Mit HTML</div>Das ist <b>mal </b>eine&#160;<span class="color-blue">Testnachricht</span><div><br></div><div><br></div><div>Mit HTML</div>',
				'<span class="color-blue">',
				'<font color="#00A3EF">',
				"</span>",
				"</font>"
			);
			expect(result).toEqual(
				'Das ist <b>mal </b>eine&#160;<font color="#00A3EF">Testnachricht</font><div><br></div><div><br></div><div>Mit HTML</div>Das ist <b>mal </b>eine&#160;<font color="#00A3EF">Testnachricht</font><div><br></div><div><br></div><div>Mit HTML</div>'
			);
		});
	});
});
