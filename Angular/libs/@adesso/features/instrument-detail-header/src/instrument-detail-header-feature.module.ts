import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoggerUtilModule } from "@base/util-logger";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { InstrumentDetailHeaderFeatureComponent } from "./components/instrument-detail-header-feature.component";
import { translationConfig } from "./translations/config";
import { TranslateModule } from "@ngx-translate/core";
import { BreadCrumbUiModule } from "@adesso/ui-bread-crumb";
import { SuggestSearchFeatureModule } from "@adesso/feature-suggest-search";
import { ChartQuoteUiModule } from "@adesso/ui-chart-quote-box";
import { InstrumentHeaderUiModule } from "@adesso/ui-instrument-header";
import { QuoteStreamFeatureModule } from "../../quote-stream/src/quote-stream-feature.module";
import { MatDialogModule } from "@angular/material/dialog";
import { InstrumentDetailHeaderFeatureDialogComponent } from "./components/instrument-detail-header-feature.component.dialog";

@NgModule({
	declarations: [InstrumentDetailHeaderFeatureComponent, InstrumentDetailHeaderFeatureDialogComponent],
	imports: [
		CommonModule,
		LoggerUtilModule,
		TranslateModule,
		TranslationManagerUtilModule,
		BreadCrumbUiModule,
		SuggestSearchFeatureModule,
		ChartQuoteUiModule,
		InstrumentHeaderUiModule,
		QuoteStreamFeatureModule,
		MatDialogModule,
	],
	exports: [InstrumentDetailHeaderFeatureComponent],
})
export class InstrumentDetailHeaderFeatureModule {
	constructor(translationManager: TranslationManagerUtil) {
		translationManager.importTranslations(translationConfig);
	}
}
