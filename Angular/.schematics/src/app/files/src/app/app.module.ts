import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { ServiceWorkerModule } from "@angular/service-worker";

import { EnvironmentService, EnvironmentUtilModule } from "@adesso/util-environment";

import { TranslationManagerService, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { CulturesEnum, PageTypeEnum } from "@adesso/util-contracts";

import { environment } from "../environments/environment";
import { translationConfig } from "../translations/config";
import { AppComponent } from "./app.component";
import { LoggerService, LoggerUtilModule } from "@base/util-logger";
import { TemplateFeatureModule } from "@adesso/feature-template";

function extractUrl(page: string, culture: string): string {
	let url: string | undefined;
	const translation = translationConfig.find((x) => x.term === page);

	if (!translation) {
		return "";
	}
	switch (culture) {
		case CulturesEnum.deDe:
			url = translation.deDe;
			break;
		case CulturesEnum.enUs:
			url = translation.enUs;
			break;
	}
	if (!url) {
		return "";
	}
	url = url.replace("}}", "").replace("{{", ":");
	url = url.substring(1, url.length);
	return url;
}

const p = PageTypeEnum;
const c = CulturesEnum;

export const routes: Routes = [
	{
		path: extractUrl(p.notFoundPage, c.deDe),
		loadChildren: () => import("@adesso/page-not-found").then((m) => m.NotFoundPageModule),
		data: { culture: c.deDe, translationTerm: p.notFoundPage },
	},
	{
		path: extractUrl(p.notFoundPage, c.enUs),
		loadChildren: () => import("@adesso/page-not-found").then((m) => m.NotFoundPageModule),
		data: { culture: c.enUs, translationTerm: p.notFoundPage },
	},

	{
		path: "**",
		loadChildren: () => import("@adesso/page-not-found-redirect").then((m) => m.NotFoundRedirectPageModule),
		data: { translationTerm: p.notFoundRedirectPage },
	},
];

@NgModule({
	declarations: [AppComponent],
	imports: [
		CommonModule,
		BrowserModule.withServerTransition({ appId: "serverApp" }),
		TemplateFeatureModule,
		TranslateModule.forRoot(),
		TranslationManagerUtilModule,
		RouterModule.forRoot(routes, {
			initialNavigation: "enabledBlocking",
		}),
		ServiceWorkerModule.register("ngsw-worker.js", {
			enabled: environment.production,
		}),
		EnvironmentUtilModule,
		LoggerUtilModule,
	],
	providers: [LoggerService, TranslationManagerService],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor(translationService: TranslateService, translationManager: TranslationManagerService, environmentService: EnvironmentService) {
		translationManager.importTranslations(translationConfig);
		translationService.use(CulturesEnum.deDe);
		translationService.setDefaultLang(CulturesEnum.deDe);
		environmentService.setEnvironment(environment);
	}
}
