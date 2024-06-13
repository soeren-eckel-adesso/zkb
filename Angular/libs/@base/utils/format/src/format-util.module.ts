import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { FormatUtil } from "./utils/format.util";
import { translationConfig } from "./translations/config";
import { DateOrTimePipe } from "./pipes/date-or-time.pipe";
import { ValueFormatterPipe } from "./pipes/value-formatter.pipe";
import { NumberFormatterPipe } from "./pipes/number-formatter.pipe";
import { PercentagePipe } from "./pipes/percentage.pipe";
import { CapitalizeFirstWordPipe } from "./pipes/capitalize-first-word.pipe";
import { NumberFormatterWrapperComponent } from "./components/number-formatter-wrapper.component";
import { DateOrTimeFormatterWrapperComponent } from "./components/date-or-time-formatter-wrapper.component";
import { PercentageFormatterWrapperComponent } from "./components/percentage-formatter-wrapper.component";
import { ChangeAbsolutePipe } from "./pipes/change-absolute.pipe";

@NgModule({
	declarations: [
		DateOrTimePipe,
		ValueFormatterPipe,
		NumberFormatterPipe,
		PercentagePipe,
		ChangeAbsolutePipe,
		CapitalizeFirstWordPipe,
		NumberFormatterWrapperComponent,
		DateOrTimeFormatterWrapperComponent,
		PercentageFormatterWrapperComponent,
	],
	imports: [CommonModule, TranslationManagerUtilModule],
	exports: [
		DateOrTimePipe,
		ValueFormatterPipe,
		NumberFormatterPipe,
		PercentagePipe,
		ChangeAbsolutePipe,
		CapitalizeFirstWordPipe,
		NumberFormatterWrapperComponent,
		DateOrTimeFormatterWrapperComponent,
		PercentageFormatterWrapperComponent,
	],
	providers: [FormatUtil],
})
export class FormatUtilModule {
	constructor(translationManager: TranslationManagerUtil) {
		translationManager.importTranslations(translationConfig);
	}
}
