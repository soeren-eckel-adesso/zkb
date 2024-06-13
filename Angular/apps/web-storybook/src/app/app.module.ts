import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

import { EnvironmentService, EnvironmentUtilModule } from "@adesso/util-environment";

import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { CulturesEnum } from "@adesso/util-contracts";

import { environment } from "../environments/environment";
import { translationConfig } from "../translations/config";
import { AppComponent } from "./app.component";
import { LoggerUtil, LoggerUtilModule } from "@base/util-logger";
import { TemplateFeatureModule } from "@adesso/feature-template";

export const routes: Routes = [];

@NgModule({
	declarations: [AppComponent],
	imports: [
		CommonModule,
		BrowserModule,
		TemplateFeatureModule,
		TranslateModule.forRoot(),
		TranslationManagerUtilModule,
		RouterModule.forRoot(routes, {
			initialNavigation: "enabledBlocking",
		}),
		EnvironmentUtilModule,
		LoggerUtilModule,
	],
	providers: [LoggerUtil, TranslationManagerUtil],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor(translationService: TranslateService, translationManager: TranslationManagerUtil, environmentService: EnvironmentService) {
		translationManager.importTranslations(translationConfig);
		translationService.use(CulturesEnum.deDe);
		translationService.setDefaultLang(CulturesEnum.deDe);
		environmentService.setEnvironment(environment);
	}
}
