import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { InstrumentListUiModule } from "@adesso/ui-instrument-list";
import { InstrumentListServiceModule } from "@adesso/service-instrument-list";
import { TranslateModule } from "@ngx-translate/core";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { CarouselWithSearchFeatureModule } from "@adesso/feature-carousel-with-search";
import { HomePageComponent } from "./components/home-page.component";
import { translationConfig } from "./translations/config";
import { SuggestSearchFeatureComponent, SuggestSearchFeatureModule } from "@adesso/feature-suggest-search";
import { BreadCrumbUiModule } from "@adesso/ui-bread-crumb";

const routes: Routes = [
	{
		path: "",
		component: HomePageComponent,
	},
];

@NgModule({
	declarations: [HomePageComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		TranslateModule,
		InstrumentListUiModule,
		InstrumentListServiceModule,
		TranslationManagerUtilModule,
		SuggestSearchFeatureModule,
		BreadCrumbUiModule,
	],
})
export class HomePageModule {
	constructor(translationManager: TranslationManagerUtil) {
		translationManager.importTranslations(translationConfig);
	}
}
