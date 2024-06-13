import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DerivativeOverviewPageComponent } from "./components/derivative-overview-page.component";
import { SuggestSearchFeatureModule } from "@adesso/feature-suggest-search";
import { InstrumentListUiModule } from "@adesso/ui-instrument-list";
import { InstrumentListServiceModule } from "@adesso/service-instrument-list";
import { TranslationManagerUtilModule } from "@base/util-translation-manager";
import { TranslateModule } from "@ngx-translate/core";
import { BreadCrumbUiModule } from "@adesso/ui-bread-crumb";

const routes: Routes = [
	{
		path: "",
		component: DerivativeOverviewPageComponent,
	},
];

@NgModule({
	declarations: [DerivativeOverviewPageComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		SuggestSearchFeatureModule,
		TranslateModule,
		InstrumentListUiModule,
		InstrumentListServiceModule,
		TranslationManagerUtilModule,
		BreadCrumbUiModule,
	],
})
export class DerivativeOverviewPageModule {}
