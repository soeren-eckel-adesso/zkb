import { PageTypeEnum } from "@adesso/util-contracts";
import { TranslationModel } from "@base/util-translation-manager";
export const translationConfig: TranslationModel[] = [
	{ term: PageTypeEnum.home, deDe: "/", enUs: "/home" },
	{
		term: PageTypeEnum.etfDetailPage,
		deDe: "/etf/detail/{{instrumentId}}",
		enUs: "/etf/details/{{instrumentId}}",
	},
	{
		term: PageTypeEnum.etfOverviewPage,
		deDe: "/etf/uebersicht",
		enUs: "/etf/overview",
	},
	{ term: PageTypeEnum.etfSearchPage, deDe: "/etf/suche", enUs: "/etf/search" },
	{
		term: PageTypeEnum.fundDetailPage,
		deDe: "/fonds/detail/{{instrumentId}}",
		enUs: "/fund/details/{{instrumentId}}",
	},
	{
		term: PageTypeEnum.fundOverviewPage,
		deDe: "/fonds/uebersicht",
		enUs: "/fund/overview",
	},
	{
		term: PageTypeEnum.fundSearchPage,
		deDe: "/fonds/suche",
		enUs: "/fund/search",
	},
	{
		term: PageTypeEnum.indexDetailPage,
		deDe: "/index/detail/{{instrumentId}}",
		enUs: "/indices/details/{{instrumentId}}",
	},
	{
		term: PageTypeEnum.indexOverviewPage,
		deDe: "/index/uebersicht",
		enUs: "/indices/overview",
	},
	{
		term: PageTypeEnum.indexSearchPage,
		deDe: "/index/suche",
		enUs: "/indices/search",
	},
	{
		term: PageTypeEnum.shareDetailPage,
		deDe: "/aktien/detail/{{instrumentId}}",
		enUs: "/share/details/{{instrumentId}}",
	},
	{
		term: PageTypeEnum.shareOverviewPage,
		deDe: "/aktien/uebersicht",
		enUs: "/share/overview",
	},
	{
		term: PageTypeEnum.shareSearchPage,
		deDe: "/aktien/suche",
		enUs: "/share/search",
	},
	{
		term: PageTypeEnum.commodityDetailPage,
		deDe: "/rohstoff/detail/{{instrumentId}}",
		enUs: "/commodity/details/{{instrumentId}}",
	},
	{
		term: PageTypeEnum.commodityOverviewPage,
		deDe: "/rohstoff/uebersicht",
		enUs: "/commodity/overview",
	},
	{
		term: PageTypeEnum.exchangeRateDetailPage,
		deDe: "/waehrung/detail/{{instrumentId}}",
		enUs: "/exchangerate/details/{{instrumentId}}",
	},
	{
		term: PageTypeEnum.exchangeRateOverviewPage,
		deDe: "/waehrung/uebersicht",
		enUs: "/exchangerate/overview",
	},
	{
		term: PageTypeEnum.derivativeDetailPage,
		deDe: "/produkte/detail/{{instrumentId}}",
		enUs: "/derivative/details/{{instrumentId}}",
	},
	{
		term: PageTypeEnum.derivativeOverviewPage,
		deDe: "/hebelprodukte",
		enUs: "/derivative/overview",
	},
	{
		term: PageTypeEnum.derivativeSearchPage,
		deDe: "/zertifikate/suche",
		enUs: "/derivative/search",
	},
	{
		term: PageTypeEnum.notFoundPage,
		deDe: "/seite-nicht-gefunden",
		enUs: "/page-note-found",
	},
	{
		term: PageTypeEnum.newsDetailPage,
		deDe: "/nachrichten/{{newsId}}",
		enUs: "/nachrichten/{{newsId}}",
	},
	{
		term: PageTypeEnum.analysesDetailPage,
		deDe: "/analyse/{{analyseId}}",
		enUs: "/analyse/{{analyseId}}",
	},

	{ term: "no-data", deDe: "Keine Daten vorhanden", enUs: "No data available" },
];
