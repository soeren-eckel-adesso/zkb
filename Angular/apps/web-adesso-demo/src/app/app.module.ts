import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { ServiceWorkerModule } from "@angular/service-worker";
import { TemplateFeatureModule } from "@adesso/feature-template";
import { TranslationManagerUtil, TranslationManagerUtilModule } from "@base/util-translation-manager";
import { CulturesEnum, PageTypeEnum } from "@adesso/util-contracts";
import { EnvironmentService, EnvironmentUtilModule } from "@adesso/util-environment";
import { TransferHttpCacheModule } from "@nguniversal/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { StroeerHttpInterceptor } from "@stroeer/util-stroeer-http-interceptor";
import { LoggerUtil, LoggerUtilModule } from "@base/util-logger";
import { translationConfig } from "../translations/config";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";

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

function extractUrlByName(url: string): string {
	url = url.replace("}}", "").replace("{{", ":");
	url = url.substring(1, url.length);
	return url;
}

const p = PageTypeEnum;
const c = CulturesEnum;

export const routes: Routes = [
	{
		path: extractUrl(p.home, c.deDe),
		loadChildren: () => import("@adesso/page-home").then((m) => m.HomePageModule),
		pathMatch: "full",
		data: { culture: c.deDe, translationTerm: p.home },
	},
	{
		path: extractUrl(p.home, c.enUs),
		loadChildren: () => import("@adesso/page-home").then((m) => m.HomePageModule),
		pathMatch: "full",
		data: { culture: c.enUs, translationTerm: p.home },
	},

	{
		path: extractUrl(p.commodityDetailPage, c.deDe),
		loadChildren: () => import("@adesso/page-commodity-detail").then((m) => m.CommodityDetailPageModule),
		data: { culture: c.deDe, translationTerm: p.commodityDetailPage },
	},
	{
		path: extractUrl(p.commodityDetailPage, c.enUs),
		loadChildren: () => import("@adesso/page-commodity-detail").then((m) => m.CommodityDetailPageModule),
		data: { culture: c.enUs, translationTerm: p.commodityDetailPage },
	},

	{
		path: extractUrl(p.commodityOverviewPage, c.deDe),
		loadChildren: () => import("@adesso/page-commodity-overview").then((m) => m.CommodityOverviewPageModule),
		data: { culture: c.deDe, translationTerm: p.commodityOverviewPage },
	},
	{
		path: extractUrl(p.commodityOverviewPage, c.enUs),
		loadChildren: () => import("@adesso/page-commodity-overview").then((m) => m.CommodityOverviewPageModule),
		data: { culture: c.enUs, translationTerm: p.commodityOverviewPage },
	},

	{
		path: extractUrl(p.derivativeDetailPage, c.deDe),
		loadChildren: () => import("@adesso/page-derivative-detail").then((m) => m.DerivativeDetailPageModule),
		data: { culture: c.deDe, translationTerm: p.derivativeDetailPage },
	},
	{
		path: extractUrlByName("/suche/detail/{{instrumentId}}"),
		loadChildren: () => import("@adesso/page-derivative-detail").then((m) => m.DerivativeDetailPageModule),
		data: { culture: c.deDe, translationTerm: p.derivativeDetailPage },
	},
	{
		path: extractUrlByName("/anlageprodukte/detail/{{instrumentId}}"),
		loadChildren: () => import("@adesso/page-derivative-detail").then((m) => m.DerivativeDetailPageModule),
		data: { culture: c.deDe, translationTerm: p.derivativeDetailPage },
	},
	{
		path: extractUrl(p.derivativeDetailPage, c.enUs),
		loadChildren: () => import("@adesso/page-derivative-detail").then((m) => m.DerivativeDetailPageModule),
		data: { culture: c.enUs, translationTerm: p.derivativeDetailPage },
	},

	{
		path: extractUrl(p.derivativeOverviewPage, c.deDe),
		loadChildren: () => import("@adesso/page-derivative-overview").then((m) => m.DerivativeOverviewPageModule),
		data: { culture: c.deDe, translationTerm: p.derivativeOverviewPage },
	},
	{
		path: extractUrlByName("/suche"),
		loadChildren: () => import("@adesso/page-derivative-overview").then((m) => m.DerivativeOverviewPageModule),
		data: { culture: c.deDe, translationTerm: p.derivativeOverviewPage },
	},
	{
		path: extractUrlByName("/anlageprodukte"),
		loadChildren: () => import("@adesso/page-derivative-overview").then((m) => m.DerivativeOverviewPageModule),
		data: { culture: c.deDe, translationTerm: p.derivativeOverviewPage },
	},
	{
		path: extractUrl(p.derivativeOverviewPage, c.enUs),
		loadChildren: () => import("@adesso/page-derivative-overview").then((m) => m.DerivativeOverviewPageModule),
		data: { culture: c.enUs, translationTerm: p.derivativeOverviewPage },
	},

	{
		path: extractUrl(p.derivativeSearchPage, c.deDe),
		loadChildren: () => import("@adesso/page-derivative-search").then((m) => m.DerivativeSearchPageModule),
		data: { culture: c.deDe, translationTerm: p.derivativeSearchPage },
	},
	{
		path: extractUrl(p.derivativeSearchPage, c.enUs),
		loadChildren: () => import("@adesso/page-derivative-search").then((m) => m.DerivativeSearchPageModule),
		data: { culture: c.enUs, translationTerm: p.derivativeSearchPage },
	},

	{
		path: extractUrl(p.etfDetailPage, c.deDe),
		loadChildren: () => import("@adesso/page-etf-detail").then((m) => m.EtfDetailPageModule),
		data: { culture: c.deDe, translationTerm: p.etfDetailPage },
	},
	{
		path: extractUrl(p.etfDetailPage, c.enUs),
		loadChildren: () => import("@adesso/page-etf-detail").then((m) => m.EtfDetailPageModule),
		data: { culture: c.enUs, translationTerm: p.etfDetailPage },
	},

	{
		path: extractUrl(p.etfOverviewPage, c.deDe),
		loadChildren: () => import("@adesso/page-etf-overview").then((m) => m.EtfOverviewPageModule),
		data: { culture: c.deDe, translationTerm: p.etfOverviewPage },
	},
	{
		path: extractUrl(p.etfOverviewPage, c.enUs),
		loadChildren: () => import("@adesso/page-etf-overview").then((m) => m.EtfOverviewPageModule),
		data: { culture: c.enUs, translationTerm: p.etfOverviewPage },
	},

	{
		path: extractUrl(p.etfSearchPage, c.deDe),
		loadChildren: () => import("@adesso/page-etf-search").then((m) => m.EtfSearchPageModule),
		data: { culture: c.deDe, translationTerm: p.etfSearchPage },
	},
	{
		path: extractUrl(p.etfSearchPage, c.enUs),
		loadChildren: () => import("@adesso/page-etf-search").then((m) => m.EtfSearchPageModule),
		data: { culture: c.enUs, translationTerm: p.etfSearchPage },
	},

	{
		path: extractUrl(p.exchangeRateDetailPage, c.deDe),
		loadChildren: () => import("@adesso/page-exchange-rate-detail").then((m) => m.ExchangeRateDetailPageModule),
		data: { culture: c.deDe, translationTerm: p.exchangeRateDetailPage },
	},
	{
		path: extractUrl(p.exchangeRateDetailPage, c.enUs),
		loadChildren: () => import("@adesso/page-exchange-rate-detail").then((m) => m.ExchangeRateDetailPageModule),
		data: { culture: c.enUs, translationTerm: p.exchangeRateDetailPage },
	},

	{
		path: extractUrl(p.exchangeRateOverviewPage, c.deDe),
		loadChildren: () => import("@adesso/page-exchange-rate-overview").then((m) => m.ExchangeRateOverviewPageModule),
		data: { culture: c.deDe, translationTerm: p.exchangeRateOverviewPage },
	},
	{
		path: extractUrl(p.exchangeRateOverviewPage, c.enUs),
		loadChildren: () => import("@adesso/page-exchange-rate-overview").then((m) => m.ExchangeRateOverviewPageModule),
		data: { culture: c.enUs, translationTerm: p.exchangeRateOverviewPage },
	},

	{
		path: extractUrl(p.fundDetailPage, c.deDe),
		loadChildren: () => import("@adesso/page-fund-detail").then((m) => m.FundDetailPageModule),
		data: { culture: c.deDe, translationTerm: p.fundDetailPage },
	},
	{
		path: extractUrl(p.fundDetailPage, c.enUs),
		loadChildren: () => import("@adesso/page-fund-detail").then((m) => m.FundDetailPageModule),
		data: { culture: c.enUs, translationTerm: p.fundDetailPage },
	},

	{
		path: extractUrl(p.fundOverviewPage, c.deDe),
		loadChildren: () => import("@adesso/page-fund-overview").then((m) => m.FundOverviewPageModule),
		data: { culture: c.deDe, translationTerm: p.fundOverviewPage },
	},
	{
		path: extractUrl(p.fundOverviewPage, c.enUs),
		loadChildren: () => import("@adesso/page-fund-overview").then((m) => m.FundOverviewPageModule),
		data: { culture: c.enUs, translationTerm: p.fundOverviewPage },
	},

	{
		path: extractUrl(p.fundSearchPage, c.deDe),
		loadChildren: () => import("@adesso/page-fund-search").then((m) => m.FundSearchPageModule),
		data: { culture: c.deDe, translationTerm: p.fundSearchPage },
	},
	{
		path: extractUrl(p.fundSearchPage, c.enUs),
		loadChildren: () => import("@adesso/page-fund-search").then((m) => m.FundSearchPageModule),
		data: { culture: c.enUs, translationTerm: p.fundSearchPage },
	},

	{
		path: extractUrl(p.indexDetailPage, c.deDe),
		loadChildren: () => import("@adesso/page-index-detail").then((m) => m.IndexDetailPageModule),
		data: { culture: c.deDe, translationTerm: p.indexDetailPage },
	},
	{
		path: extractUrl(p.indexDetailPage, c.enUs),
		loadChildren: () => import("@adesso/page-index-detail").then((m) => m.IndexDetailPageModule),
		data: { culture: c.enUs, translationTerm: p.indexDetailPage },
	},

	{
		path: extractUrl(p.indexOverviewPage, c.deDe),
		loadChildren: () => import("@adesso/page-index-overview").then((m) => m.IndexOverviewPageModule),
		data: { culture: c.deDe, translationTerm: p.indexOverviewPage },
	},
	{
		path: extractUrl(p.indexOverviewPage, c.enUs),
		loadChildren: () => import("@adesso/page-index-overview").then((m) => m.IndexOverviewPageModule),
		data: { culture: c.enUs, translationTerm: p.indexOverviewPage },
	},

	{
		path: extractUrl(p.indexSearchPage, c.deDe),
		loadChildren: () => import("@adesso/page-index-search").then((m) => m.IndexSearchPageModule),
		data: { culture: c.deDe, translationTerm: p.indexSearchPage },
	},
	{
		path: extractUrl(p.indexSearchPage, c.enUs),
		loadChildren: () => import("@adesso/page-index-search").then((m) => m.IndexSearchPageModule),
		data: { culture: c.enUs, translationTerm: p.indexSearchPage },
	},

	{
		path: extractUrl(p.shareDetailPage, c.deDe),
		loadChildren: () => import("@adesso/page-share-detail").then((m) => m.ShareDetailPageModule),
		data: { culture: c.deDe, translationTerm: p.shareDetailPage },
	},
	{
		path: extractUrl(p.shareDetailPage, c.enUs),
		loadChildren: () => import("@adesso/page-share-detail").then((m) => m.ShareDetailPageModule),
		data: { culture: c.enUs, translationTerm: p.shareDetailPage },
	},

	{
		path: extractUrl(p.shareOverviewPage, c.deDe),
		loadChildren: () => import("@adesso/page-share-overview").then((m) => m.ShareOverviewPageModule),
		data: { culture: c.deDe, translationTerm: p.shareOverviewPage },
	},
	{
		path: extractUrl(p.shareOverviewPage, c.enUs),
		loadChildren: () => import("@adesso/page-share-overview").then((m) => m.ShareOverviewPageModule),
		data: { culture: c.enUs, translationTerm: p.shareOverviewPage },
	},

	{
		path: extractUrl(p.shareSearchPage, c.deDe),
		loadChildren: () => import("@adesso/page-share-search").then((m) => m.ShareSearchPageModule),
		data: { culture: c.deDe, translationTerm: p.shareSearchPage },
	},
	{
		path: extractUrl(p.shareSearchPage, c.enUs),
		loadChildren: () => import("@adesso/page-share-search").then((m) => m.ShareSearchPageModule),
		data: { culture: c.enUs, translationTerm: p.shareSearchPage },
	},

	{
		path: extractUrl(p.newsDetailPage, c.deDe),
		loadChildren: () => import("@adesso/page-news-detail").then((m) => m.NewsDetailPageModule),
		data: { culture: c.deDe, translationTerm: p.newsDetailPage },
	},
	{
		path: extractUrl(p.newsDetailPage, c.enUs),
		loadChildren: () => import("@adesso/page-news-detail").then((m) => m.NewsDetailPageModule),
		data: { culture: c.enUs, translationTerm: p.newsDetailPage },
	},

	{
		path: extractUrl(p.analysesDetailPage, c.deDe),
		loadChildren: () => import("@adesso/page-analyses-detail").then((m) => m.AnalysesDetailPageModule),
		data: { culture: c.deDe, translationTerm: p.analysesDetailPage },
	},
	{
		path: extractUrl(p.analysesDetailPage, c.enUs),
		loadChildren: () => import("@adesso/page-analyses-detail").then((m) => m.AnalysesDetailPageModule),
		data: { culture: c.enUs, translationTerm: p.analysesDetailPage },
	},

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
		TransferHttpCacheModule,
		HttpClientModule,
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
	providers: [
		LoggerUtil,
		TranslationManagerUtil,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: StroeerHttpInterceptor,
			multi: true,
		},
	],
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
