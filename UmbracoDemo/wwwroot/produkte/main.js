"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["main"],{

/***/ 361:
/*!*******************************************************!*\
  !*** ./apps/web-adesso-demo/src/app/app.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _adesso_util_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/util-environment */ 56489);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translations/config */ 48177);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 55218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _libs_adesso_features_template_src_components_template_feature_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../libs/@adesso/features/template/src/components/template-feature.component */ 64571);












class AppComponent {
  translationService;
  constructor(translationManager, translationService, router, environmentService) {
    this.translationService = translationService;
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_2__.translationConfig);
    router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivationEnd) {
        if (event.snapshot.data.culture) {
          this.switchTranslation(event.snapshot.data.culture);
        }
      }
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production && environmentService.isBrowserRendering) {
          gtag("config", "G-GGQ91JW8ZL", {
            // eslint-disable-next-line camelcase
            page_path: event.urlAfterRedirects
          });
        }
      }
    });
  }
  switchTranslation(culture) {
    if (culture === this.translationService.currentLang) {
      return;
    }
    this.translationService.use(culture);
  }
  static ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_0__.TranslationManagerUtil), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_adesso_util_environment__WEBPACK_IMPORTED_MODULE_1__.EnvironmentService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 2,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "feature-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_libs_adesso_features_template_src_components_template_feature_component__WEBPACK_IMPORTED_MODULE_4__.TemplateFeatureComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet]
  });
}

/***/ }),

/***/ 62225:
/*!****************************************************!*\
  !*** ./apps/web-adesso-demo/src/app/app.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 11481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ 21489);
/* harmony import */ var _adesso_feature_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/feature-template */ 9722);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _adesso_util_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @adesso/util-environment */ 56489);
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nguniversal/common */ 67488);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 80529);
/* harmony import */ var _stroeer_util_stroeer_http_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stroeer/util-stroeer-http-interceptor */ 80186);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../translations/config */ 48177);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 55218);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ 361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94650);























function extractUrl(page, culture) {
  let url;
  const translation = _translations_config__WEBPACK_IMPORTED_MODULE_7__.translationConfig.find(x => x.term === page);
  if (!translation) {
    return "";
  }
  switch (culture) {
    case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.CulturesEnum.deDe:
      url = translation.deDe;
      break;
    case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.CulturesEnum.enUs:
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
function extractUrlByName(url) {
  url = url.replace("}}", "").replace("{{", ":");
  url = url.substring(1, url.length);
  return url;
}
const p = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.PageTypeEnum;
const c = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.CulturesEnum;
const routes = [{
  path: extractUrl(p.home, c.deDe),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("libs_adesso_pages_home_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-home */ 72311)).then(m => m.HomePageModule),
  pathMatch: "full",
  data: {
    culture: c.deDe,
    translationTerm: p.home
  }
}, {
  path: extractUrl(p.home, c.enUs),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("libs_adesso_pages_home_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-home */ 72311)).then(m => m.HomePageModule),
  pathMatch: "full",
  data: {
    culture: c.enUs,
    translationTerm: p.home
  }
}, {
  path: extractUrl(p.commodityDetailPage, c.deDe),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_uis_key-value-list_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_instrument-detail-header_src_public-api_ts-libs_adesso_services_-3fcafd"), __webpack_require__.e("libs_adesso_pages_commodity-detail_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-commodity-detail */ 56579)).then(m => m.CommodityDetailPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.commodityDetailPage
  }
}, {
  path: extractUrl(p.commodityDetailPage, c.enUs),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_uis_key-value-list_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_instrument-detail-header_src_public-api_ts-libs_adesso_services_-3fcafd"), __webpack_require__.e("libs_adesso_pages_commodity-detail_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-commodity-detail */ 56579)).then(m => m.CommodityDetailPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.commodityDetailPage
  }
}, {
  path: extractUrl(p.commodityOverviewPage, c.deDe),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("default-libs_adesso_features_carousel-with-search_src_public-api_ts"), __webpack_require__.e("libs_adesso_pages_commodity-overview_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-commodity-overview */ 53494)).then(m => m.CommodityOverviewPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.commodityOverviewPage
  }
}, {
  path: extractUrl(p.commodityOverviewPage, c.enUs),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("default-libs_adesso_features_carousel-with-search_src_public-api_ts"), __webpack_require__.e("libs_adesso_pages_commodity-overview_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-commodity-overview */ 53494)).then(m => m.CommodityOverviewPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.commodityOverviewPage
  }
}, {
  path: extractUrl(p.derivativeDetailPage, c.deDe),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_uis_key-value-list_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_instrument-detail-header_src_public-api_ts-libs_adesso_services_-3fcafd"), __webpack_require__.e("libs_adesso_pages_derivative-detail_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-derivative-detail */ 60379)).then(m => m.DerivativeDetailPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.derivativeDetailPage
  }
}, {
  path: extractUrlByName("/suche/detail/{{instrumentId}}"),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_uis_key-value-list_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_instrument-detail-header_src_public-api_ts-libs_adesso_services_-3fcafd"), __webpack_require__.e("libs_adesso_pages_derivative-detail_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-derivative-detail */ 60379)).then(m => m.DerivativeDetailPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.derivativeDetailPage
  }
}, {
  path: extractUrlByName("/anlageprodukte/detail/{{instrumentId}}"),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_uis_key-value-list_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_instrument-detail-header_src_public-api_ts-libs_adesso_services_-3fcafd"), __webpack_require__.e("libs_adesso_pages_derivative-detail_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-derivative-detail */ 60379)).then(m => m.DerivativeDetailPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.derivativeDetailPage
  }
}, {
  path: extractUrl(p.derivativeDetailPage, c.enUs),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_uis_key-value-list_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_instrument-detail-header_src_public-api_ts-libs_adesso_services_-3fcafd"), __webpack_require__.e("libs_adesso_pages_derivative-detail_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-derivative-detail */ 60379)).then(m => m.DerivativeDetailPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.derivativeDetailPage
  }
}, {
  path: extractUrl(p.derivativeOverviewPage, c.deDe),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("libs_adesso_pages_derivative-overview_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-derivative-overview */ 66580)).then(m => m.DerivativeOverviewPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.derivativeOverviewPage
  }
}, {
  path: extractUrlByName("/suche"),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("libs_adesso_pages_derivative-overview_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-derivative-overview */ 66580)).then(m => m.DerivativeOverviewPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.derivativeOverviewPage
  }
}, {
  path: extractUrlByName("/anlageprodukte"),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("libs_adesso_pages_derivative-overview_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-derivative-overview */ 66580)).then(m => m.DerivativeOverviewPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.derivativeOverviewPage
  }
}, {
  path: extractUrl(p.derivativeOverviewPage, c.enUs),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("libs_adesso_pages_derivative-overview_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-derivative-overview */ 66580)).then(m => m.DerivativeOverviewPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.derivativeOverviewPage
  }
}, {
  path: extractUrl(p.derivativeSearchPage, c.deDe),
  loadChildren: () => __webpack_require__.e(/*! import() */ "libs_adesso_pages_derivative-search_src_public-api_ts").then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-derivative-search */ 80190)).then(m => m.DerivativeSearchPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.derivativeSearchPage
  }
}, {
  path: extractUrl(p.derivativeSearchPage, c.enUs),
  loadChildren: () => __webpack_require__.e(/*! import() */ "libs_adesso_pages_derivative-search_src_public-api_ts").then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-derivative-search */ 80190)).then(m => m.DerivativeSearchPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.derivativeSearchPage
  }
}, {
  path: extractUrl(p.etfDetailPage, c.deDe),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_uis_key-value-list_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_instrument-detail-header_src_public-api_ts-libs_adesso_services_-3fcafd"), __webpack_require__.e("common"), __webpack_require__.e("libs_adesso_pages_etf-detail_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-etf-detail */ 83120)).then(m => m.EtfDetailPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.etfDetailPage
  }
}, {
  path: extractUrl(p.etfDetailPage, c.enUs),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_uis_key-value-list_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_instrument-detail-header_src_public-api_ts-libs_adesso_services_-3fcafd"), __webpack_require__.e("common"), __webpack_require__.e("libs_adesso_pages_etf-detail_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-etf-detail */ 83120)).then(m => m.EtfDetailPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.etfDetailPage
  }
}, {
  path: extractUrl(p.etfOverviewPage, c.deDe),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("default-libs_adesso_features_carousel-with-search_src_public-api_ts"), __webpack_require__.e("libs_adesso_pages_etf-overview_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-etf-overview */ 4578)).then(m => m.EtfOverviewPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.etfOverviewPage
  }
}, {
  path: extractUrl(p.etfOverviewPage, c.enUs),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("default-libs_adesso_features_carousel-with-search_src_public-api_ts"), __webpack_require__.e("libs_adesso_pages_etf-overview_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-etf-overview */ 4578)).then(m => m.EtfOverviewPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.etfOverviewPage
  }
}, {
  path: extractUrl(p.etfSearchPage, c.deDe),
  loadChildren: () => __webpack_require__.e(/*! import() */ "libs_adesso_pages_etf-search_src_public-api_ts").then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-etf-search */ 78792)).then(m => m.EtfSearchPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.etfSearchPage
  }
}, {
  path: extractUrl(p.etfSearchPage, c.enUs),
  loadChildren: () => __webpack_require__.e(/*! import() */ "libs_adesso_pages_etf-search_src_public-api_ts").then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-etf-search */ 78792)).then(m => m.EtfSearchPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.etfSearchPage
  }
}, {
  path: extractUrl(p.exchangeRateDetailPage, c.deDe),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_uis_key-value-list_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_instrument-detail-header_src_public-api_ts-libs_adesso_services_-3fcafd"), __webpack_require__.e("libs_adesso_pages_exchange-rate-detail_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-exchange-rate-detail */ 12392)).then(m => m.ExchangeRateDetailPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.exchangeRateDetailPage
  }
}, {
  path: extractUrl(p.exchangeRateDetailPage, c.enUs),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_uis_key-value-list_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_instrument-detail-header_src_public-api_ts-libs_adesso_services_-3fcafd"), __webpack_require__.e("libs_adesso_pages_exchange-rate-detail_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-exchange-rate-detail */ 12392)).then(m => m.ExchangeRateDetailPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.exchangeRateDetailPage
  }
}, {
  path: extractUrl(p.exchangeRateOverviewPage, c.deDe),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_carousel-with-search_src_public-api_ts"), __webpack_require__.e("libs_adesso_pages_exchange-rate-overview_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-exchange-rate-overview */ 98315)).then(m => m.ExchangeRateOverviewPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.exchangeRateOverviewPage
  }
}, {
  path: extractUrl(p.exchangeRateOverviewPage, c.enUs),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_carousel-with-search_src_public-api_ts"), __webpack_require__.e("libs_adesso_pages_exchange-rate-overview_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-exchange-rate-overview */ 98315)).then(m => m.ExchangeRateOverviewPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.exchangeRateOverviewPage
  }
}, {
  path: extractUrl(p.fundDetailPage, c.deDe),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_uis_key-value-list_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_instrument-detail-header_src_public-api_ts-libs_adesso_services_-3fcafd"), __webpack_require__.e("common"), __webpack_require__.e("libs_adesso_pages_fund-detail_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-fund-detail */ 91490)).then(m => m.FundDetailPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.fundDetailPage
  }
}, {
  path: extractUrl(p.fundDetailPage, c.enUs),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_uis_key-value-list_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_instrument-detail-header_src_public-api_ts-libs_adesso_services_-3fcafd"), __webpack_require__.e("common"), __webpack_require__.e("libs_adesso_pages_fund-detail_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-fund-detail */ 91490)).then(m => m.FundDetailPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.fundDetailPage
  }
}, {
  path: extractUrl(p.fundOverviewPage, c.deDe),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("default-libs_adesso_features_carousel-with-search_src_public-api_ts"), __webpack_require__.e("libs_adesso_pages_fund-overview_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-fund-overview */ 24038)).then(m => m.FundOverviewPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.fundOverviewPage
  }
}, {
  path: extractUrl(p.fundOverviewPage, c.enUs),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("default-libs_adesso_features_carousel-with-search_src_public-api_ts"), __webpack_require__.e("libs_adesso_pages_fund-overview_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-fund-overview */ 24038)).then(m => m.FundOverviewPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.fundOverviewPage
  }
}, {
  path: extractUrl(p.fundSearchPage, c.deDe),
  loadChildren: () => __webpack_require__.e(/*! import() */ "libs_adesso_pages_fund-search_src_public-api_ts").then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-fund-search */ 84485)).then(m => m.FundSearchPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.fundSearchPage
  }
}, {
  path: extractUrl(p.fundSearchPage, c.enUs),
  loadChildren: () => __webpack_require__.e(/*! import() */ "libs_adesso_pages_fund-search_src_public-api_ts").then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-fund-search */ 84485)).then(m => m.FundSearchPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.fundSearchPage
  }
}, {
  path: extractUrl(p.indexDetailPage, c.deDe),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("default-libs_adesso_uis_key-value-list_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_instrument-detail-header_src_public-api_ts-libs_adesso_services_-3fcafd"), __webpack_require__.e("libs_adesso_pages_index-detail_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-index-detail */ 32153)).then(m => m.IndexDetailPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.indexDetailPage
  }
}, {
  path: extractUrl(p.indexDetailPage, c.enUs),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("default-libs_adesso_uis_key-value-list_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_instrument-detail-header_src_public-api_ts-libs_adesso_services_-3fcafd"), __webpack_require__.e("libs_adesso_pages_index-detail_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-index-detail */ 32153)).then(m => m.IndexDetailPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.indexDetailPage
  }
}, {
  path: extractUrl(p.indexOverviewPage, c.deDe),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("default-libs_adesso_features_carousel-with-search_src_public-api_ts"), __webpack_require__.e("libs_adesso_pages_index-overview_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-index-overview */ 53344)).then(m => m.IndexOverviewPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.indexOverviewPage
  }
}, {
  path: extractUrl(p.indexOverviewPage, c.enUs),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("default-libs_adesso_features_carousel-with-search_src_public-api_ts"), __webpack_require__.e("libs_adesso_pages_index-overview_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-index-overview */ 53344)).then(m => m.IndexOverviewPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.indexOverviewPage
  }
}, {
  path: extractUrl(p.indexSearchPage, c.deDe),
  loadChildren: () => __webpack_require__.e(/*! import() */ "libs_adesso_pages_index-search_src_public-api_ts").then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-index-search */ 34046)).then(m => m.IndexSearchPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.indexSearchPage
  }
}, {
  path: extractUrl(p.indexSearchPage, c.enUs),
  loadChildren: () => __webpack_require__.e(/*! import() */ "libs_adesso_pages_index-search_src_public-api_ts").then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-index-search */ 34046)).then(m => m.IndexSearchPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.indexSearchPage
  }
}, {
  path: extractUrl(p.shareDetailPage, c.deDe),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_uis_key-value-list_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_instrument-detail-header_src_public-api_ts-libs_adesso_services_-3fcafd"), __webpack_require__.e("common"), __webpack_require__.e("libs_adesso_pages_share-detail_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-share-detail */ 82381)).then(m => m.ShareDetailPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.shareDetailPage
  }
}, {
  path: extractUrl(p.shareDetailPage, c.enUs),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_uis_key-value-list_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_instrument-detail-header_src_public-api_ts-libs_adesso_services_-3fcafd"), __webpack_require__.e("common"), __webpack_require__.e("libs_adesso_pages_share-detail_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-share-detail */ 82381)).then(m => m.ShareDetailPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.shareDetailPage
  }
}, {
  path: extractUrl(p.shareOverviewPage, c.deDe),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("default-libs_adesso_features_carousel-with-search_src_public-api_ts"), __webpack_require__.e("libs_adesso_pages_share-overview_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-share-overview */ 33905)).then(m => m.ShareOverviewPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.shareOverviewPage
  }
}, {
  path: extractUrl(p.shareOverviewPage, c.enUs),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_suggest-search_src_public-api_ts-libs_base_utils_ng-let_src_publ-fd87d6"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("default-libs_adesso_features_carousel-with-search_src_public-api_ts"), __webpack_require__.e("libs_adesso_pages_share-overview_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-share-overview */ 33905)).then(m => m.ShareOverviewPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.shareOverviewPage
  }
}, {
  path: extractUrl(p.shareSearchPage, c.deDe),
  loadChildren: () => __webpack_require__.e(/*! import() */ "libs_adesso_pages_share-search_src_public-api_ts").then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-share-search */ 86146)).then(m => m.ShareSearchPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.shareSearchPage
  }
}, {
  path: extractUrl(p.shareSearchPage, c.enUs),
  loadChildren: () => __webpack_require__.e(/*! import() */ "libs_adesso_pages_share-search_src_public-api_ts").then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-share-search */ 86146)).then(m => m.ShareSearchPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.shareSearchPage
  }
}, {
  path: extractUrl(p.newsDetailPage, c.deDe),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("common"), __webpack_require__.e("libs_adesso_pages_news-detail_src_public-api_ts-libs_base_utils_ng-let_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-news-detail */ 6438)).then(m => m.NewsDetailPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.newsDetailPage
  }
}, {
  path: extractUrl(p.newsDetailPage, c.enUs),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"), __webpack_require__.e("default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"), __webpack_require__.e("common"), __webpack_require__.e("libs_adesso_pages_news-detail_src_public-api_ts-libs_base_utils_ng-let_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-news-detail */ 6438)).then(m => m.NewsDetailPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.newsDetailPage
  }
}, {
  path: extractUrl(p.analysesDetailPage, c.deDe),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_uis_key-value-list_src_public-api_ts"), __webpack_require__.e("common"), __webpack_require__.e("libs_adesso_pages_analyses-detail_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-analyses-detail */ 10715)).then(m => m.AnalysesDetailPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.analysesDetailPage
  }
}, {
  path: extractUrl(p.analysesDetailPage, c.enUs),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"), __webpack_require__.e("default-libs_adesso_uis_key-value-list_src_public-api_ts"), __webpack_require__.e("common"), __webpack_require__.e("libs_adesso_pages_analyses-detail_src_public-api_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-analyses-detail */ 10715)).then(m => m.AnalysesDetailPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.analysesDetailPage
  }
}, {
  path: extractUrl(p.notFoundPage, c.deDe),
  loadChildren: () => __webpack_require__.e(/*! import() */ "libs_adesso_pages_not-found_src_public-api_ts").then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-not-found */ 54019)).then(m => m.NotFoundPageModule),
  data: {
    culture: c.deDe,
    translationTerm: p.notFoundPage
  }
}, {
  path: extractUrl(p.notFoundPage, c.enUs),
  loadChildren: () => __webpack_require__.e(/*! import() */ "libs_adesso_pages_not-found_src_public-api_ts").then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-not-found */ 54019)).then(m => m.NotFoundPageModule),
  data: {
    culture: c.enUs,
    translationTerm: p.notFoundPage
  }
}, {
  path: "**",
  loadChildren: () => __webpack_require__.e(/*! import() */ "libs_adesso_pages_not-found-redirect_src_public-api_ts").then(__webpack_require__.bind(__webpack_require__, /*! @adesso/page-not-found-redirect */ 95490)).then(m => m.NotFoundRedirectPageModule),
  data: {
    translationTerm: p.notFoundRedirectPage
  }
}];
class AppModule {
  constructor(translationService, translationManager, environmentService) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_7__.translationConfig);
    translationService.use(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.CulturesEnum.deDe);
    translationService.setDefaultLang(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.CulturesEnum.deDe);
    environmentService.setEnvironment(_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment);
  }
  static ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtil), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_adesso_util_environment__WEBPACK_IMPORTED_MODULE_3__.EnvironmentService));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__.AppComponent]
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    providers: [_base_util_logger__WEBPACK_IMPORTED_MODULE_6__.LoggerUtil, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtil, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
      useClass: _stroeer_util_stroeer_http_interceptor__WEBPACK_IMPORTED_MODULE_5__.StroeerHttpInterceptor,
      multi: true
    }],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule.withServerTransition({
      appId: "serverApp"
    }), _nguniversal_common__WEBPACK_IMPORTED_MODULE_4__.TransferHttpCacheModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _adesso_feature_template__WEBPACK_IMPORTED_MODULE_0__.TemplateFeatureModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forRoot(), _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(routes, {
      initialNavigation: "enabledBlocking"
    }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__.ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production
    }), _adesso_util_environment__WEBPACK_IMPORTED_MODULE_3__.EnvironmentUtilModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_6__.LoggerUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__.AppComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _nguniversal_common__WEBPACK_IMPORTED_MODULE_4__.TransferHttpCacheModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _adesso_feature_template__WEBPACK_IMPORTED_MODULE_0__.TemplateFeatureModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__.ServiceWorkerModule, _adesso_util_environment__WEBPACK_IMPORTED_MODULE_3__.EnvironmentUtilModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_6__.LoggerUtilModule]
  });
})();

/***/ }),

/***/ 55218:
/*!**************************************************************!*\
  !*** ./apps/web-adesso-demo/src/environments/environment.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  port: 4200,
  colorPositive: "#36C9A5",
  colorNegative: "#D86988",
  enabledPush: true,
  enabledLogging: true,
  useHighCharts: true,
  loggingEnabledFor: {
    serviceConstructor: false,
    routerEvents: false,
    repositoryConstructor: false,
    repositoryRequests: false,
    uiUpdate: false
    //  filter: ["TemplateFeatureComponent", "HeaderFeatureComponent"],
  }
};

/***/ }),

/***/ 40388:
/*!******************************************!*\
  !*** ./apps/web-adesso-demo/src/main.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 11481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 62225);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 55218);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 48177:
/*!*********************************************************!*\
  !*** ./apps/web-adesso-demo/src/translations/config.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);

const translationConfig = [{
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.home,
  deDe: "/",
  enUs: "/home"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.etfDetailPage,
  deDe: "/etf/detail/{{instrumentId}}",
  enUs: "/etf/details/{{instrumentId}}"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.etfOverviewPage,
  deDe: "/etf/uebersicht",
  enUs: "/etf/overview"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.etfSearchPage,
  deDe: "/etf/suche",
  enUs: "/etf/search"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.fundDetailPage,
  deDe: "/fonds/detail/{{instrumentId}}",
  enUs: "/fund/details/{{instrumentId}}"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.fundOverviewPage,
  deDe: "/fonds/uebersicht",
  enUs: "/fund/overview"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.fundSearchPage,
  deDe: "/fonds/suche",
  enUs: "/fund/search"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.indexDetailPage,
  deDe: "/index/detail/{{instrumentId}}",
  enUs: "/indices/details/{{instrumentId}}"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.indexOverviewPage,
  deDe: "/index/uebersicht",
  enUs: "/indices/overview"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.indexSearchPage,
  deDe: "/index/suche",
  enUs: "/indices/search"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.shareDetailPage,
  deDe: "/aktien/detail/{{instrumentId}}",
  enUs: "/share/details/{{instrumentId}}"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.shareOverviewPage,
  deDe: "/aktien/uebersicht",
  enUs: "/share/overview"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.shareSearchPage,
  deDe: "/aktien/suche",
  enUs: "/share/search"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.commodityDetailPage,
  deDe: "/rohstoff/detail/{{instrumentId}}",
  enUs: "/commodity/details/{{instrumentId}}"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.commodityOverviewPage,
  deDe: "/rohstoff/uebersicht",
  enUs: "/commodity/overview"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.exchangeRateDetailPage,
  deDe: "/waehrung/detail/{{instrumentId}}",
  enUs: "/exchangerate/details/{{instrumentId}}"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.exchangeRateOverviewPage,
  deDe: "/waehrung/uebersicht",
  enUs: "/exchangerate/overview"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.derivativeDetailPage,
  deDe: "/produkte/detail/{{instrumentId}}",
  enUs: "/derivative/details/{{instrumentId}}"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.derivativeOverviewPage,
  deDe: "/hebelprodukte",
  enUs: "/derivative/overview"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.derivativeSearchPage,
  deDe: "/zertifikate/suche",
  enUs: "/derivative/search"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.notFoundPage,
  deDe: "/seite-nicht-gefunden",
  enUs: "/page-note-found"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.newsDetailPage,
  deDe: "/nachrichten/{{newsId}}",
  enUs: "/nachrichten/{{newsId}}"
}, {
  term: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.analysesDetailPage,
  deDe: "/analyse/{{analyseId}}",
  enUs: "/analyse/{{analyseId}}"
}, {
  term: "no-data",
  deDe: "Keine Daten vorhanden",
  enUs: "No data available"
}];

/***/ }),

/***/ 71029:
/*!*********************************************************************************!*\
  !*** ./libs/@adesso/features/header/src/components/header-feature.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderFeatureComponent": () => (/* binding */ HeaderFeatureComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 37340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 92198);
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 42466);











class HeaderFeatureComponent {
  router;
  translate;
  elementRef;
  logger;
  isMenuOpen = false;
  isNavigationOpen = false;
  currentCulture = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.CulturesEnum.deDe;
  contextMenuItems;
  routeTranslationTerm;
  lastParams;
  constructor(router, translate, elementRef, logger) {
    this.router = router;
    this.translate = translate;
    this.elementRef = elementRef;
    this.logger = logger;
    this.setupContextMenu();
    router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivationEnd)).subscribe(routerEvent => {
      this.currentCulture = routerEvent.snapshot.data.culture;
      this.routeTranslationTerm = routerEvent.snapshot.data.translationTerm;
      this.lastParams = routerEvent.snapshot.params;
      this.setupContextMenu();
    });
  }
  clickout(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
      this.isNavigationOpen = false;
    }
  }
  setupContextMenu() {
    this.contextMenuItems = [{
      label: this.translate.instant("header-context-menu-quotes-and-markets"),
      items: [{
        label: this.translate.instant("header-context-menu-indices"),
        url: this.translate.instant(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.indexOverviewPage)
      }, {
        label: this.translate.instant("header-context-menu-shares"),
        url: this.translate.instant(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.shareOverviewPage)
      }, {
        label: this.translate.instant("header-context-menu-funds"),
        url: this.translate.instant(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.fundOverviewPage)
      }, {
        label: this.translate.instant("header-context-menu-etf"),
        url: this.translate.instant(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.etfOverviewPage)
      }, {
        label: this.translate.instant("header-context-menu-commodities"),
        url: this.translate.instant(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.commodityOverviewPage)
      }, {
        label: this.translate.instant("header-context-menu-exchange-rates"),
        url: this.translate.instant(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.exchangeRateOverviewPage)
      }, {
        label: this.translate.instant("header-context-menu-derivatives"),
        url: this.translate.instant(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.derivativeOverviewPage)
      }]
    }];
  }
  toggleNavigation() {
    this.isNavigationOpen = !this.isNavigationOpen;
    this.isMenuOpen = this.isNavigationOpen;
  }
  switchTranslation(culture) {
    if (culture === this.translate.currentLang) {
      return;
    }
    this.currentCulture = culture;
    this.translate.use(culture);
    let url = this.translate.instant(this.routeTranslationTerm);
    if (this.lastParams) {
      Object.keys(this.lastParams).forEach(key => {
        url = url.replace("{{" + key + "}}", this.lastParams[key]);
      });
    }
    this.router.navigate([url]);
  }
  static ɵfac = function HeaderFeatureComponent_Factory(t) {
    return new (t || HeaderFeatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_1__.LoggerUtil));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HeaderFeatureComponent,
    selectors: [["feature-header"]],
    hostBindings: function HeaderFeatureComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderFeatureComponent_click_HostBindingHandler($event) {
          return ctx.clickout($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"]);
      }
    },
    decls: 0,
    vars: 0,
    template: function HeaderFeatureComponent_Template(rf, ctx) {},
    styles: [".clear[_ngcontent-%COMP%] {\n  clear: both;\n}\n\n.dottedText[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media screen and (min-width: 769px) {\n  .hide-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 768px) {\n  .hide-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.header-top[_ngcontent-%COMP%] {\n  background-color: #e7e7e7;\n  font-size: 12px;\n  line-height: 24px;\n  color: #22405D;\n}\n\n@media screen and (min-width: 769px) {\n  .header-top[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n}\n.header-seperator[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 10px;\n  color: #D5D8D8;\n}\n\n.header-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 1350px;\n}\n\n.adesso-logo[_ngcontent-%COMP%]:hover, .adesso-logo[_ngcontent-%COMP%]:focus, .adesso-logo[_ngcontent-%COMP%]:active, .adesso-logo[_ngcontent-%COMP%]:visited {\n  text-decoration: none;\n}\n\n.adesso-logo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 10px;\n  z-index: 2;\n  display: block;\n  background-size: cover;\n  height: 24px;\n}\n\n@media screen and (min-width: 769px) {\n  .adesso-logo[_ngcontent-%COMP%] {\n    left: 0px;\n    top: 15px;\n    height: 48px;\n  }\n}\n.header[_ngcontent-%COMP%] {\n  z-index: 42;\n  height: 20px;\n  padding: 15px;\n  position: relative;\n}\n\n@media screen and (min-width: 769px) {\n  .header[_ngcontent-%COMP%] {\n    height: 45px;\n    padding: 15px;\n  }\n}\n.container.adesso-rectangle-wrap[_ngcontent-%COMP%] {\n  z-index: 42;\n  position: absolute;\n  top: 35px;\n  background-color: transparent;\n  padding-left: 0;\n  width: calc(100% - 350px);\n}\n\n.adesso-rectangle[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  z-index: 1;\n  top: 15px;\n  height: 25px;\n}\n\n@media screen and (min-width: 769px) {\n  .container.adesso-rectangle-wrap[_ngcontent-%COMP%] {\n    width: calc(100% - 400px);\n  }\n  .adesso-rectangle[_ngcontent-%COMP%] {\n    top: 40px;\n    height: 25px;\n  }\n}\n.adesso-rectangle[_ngcontent-%COMP%]::before {\n  height: 0;\n  border-top: 25px solid #f4f4f4;\n  border-top: 25px solid #f4f4f4;\n  border-right: 25px solid transparent;\n  float: left;\n  margin-left: 0;\n  content: \"\";\n  width: 100%;\n}\n\n.header-menu-header[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.adesso-language-selection[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 20px 5px 0;\n  line-height: 24px;\n  color: #857971;\n  cursor: pointer;\n  font-size: 16px;\n}\n.adesso-language-selection[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  color: #0071b9;\n  font-weight: bold;\n}\n\n.adesso-breadcrumb[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 105px;\n  left: 20px;\n  z-index: 50;\n  font-size: 14px;\n  color: #857971;\n}\n.adesso-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .adesso-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, .adesso-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: #857971;\n}\n\n.header-menu[_ngcontent-%COMP%] {\n  overflow: hidden;\n  z-index: 40;\n  background-color: #fDfDfD;\n  position: absolute;\n  width: 350px;\n  right: 0;\n  box-shadow: 0px 0px 7px 0px rgba(186, 186, 186, 0.75);\n}\n.header-menu[_ngcontent-%COMP%]   .header-menu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: 0;\n  padding-left: 0;\n}\n.header-menu[_ngcontent-%COMP%]   .header-menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-left: 0;\n  padding-left: 20px;\n}\n.header-menu[_ngcontent-%COMP%]   .header-menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   .header-menu-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0071b9;\n  border-bottom: 2px solid #e8e4e1;\n  display: block;\n  width: calc(100% - 40px);\n  text-decoration: none;\n  padding: 1.25rem 0 0.3125rem 0;\n  font-size: 20px;\n  overflow: hidden;\n  font-weight: bold;\n}\n\n@media screen and (min-width: 769px) {\n  .header-menu[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n}\n.adesso-main-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 46px;\n  border-bottom: 4px solid #bbb2ac;\n  text-align: center;\n  cursor: pointer;\n}\n.adesso-main-menu[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: none;\n}\n.adesso-main-menu[_ngcontent-%COMP%]   .adesso-main-menu-item[_ngcontent-%COMP%] {\n  height: 71px;\n}\n.adesso-main-menu[_ngcontent-%COMP%]   .adesso-nav-icon[_ngcontent-%COMP%] {\n  display: block;\n  width: 50px;\n  text-align: center;\n  padding-top: 9px;\n  color: #857971;\n  cursor: pointer;\n}\n\n@media screen and (min-width: 769px) {\n  .adesso-main-menu[_ngcontent-%COMP%] {\n    height: 71px;\n  }\n  .adesso-main-menu[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: inline;\n    font-size: 14px;\n    color: #0071b9;\n    cursor: pointer;\n  }\n  .adesso-main-menu[_ngcontent-%COMP%]   .adesso-nav-icon[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    width: 100px;\n  }\n}\n.adesso-main-menu[_ngcontent-%COMP%]:hover {\n  border-bottom: 4px solid #f9e700;\n  background-color: #FFFFFF;\n}\n.adesso-main-menu[_ngcontent-%COMP%]:hover   .adesso-nav-icon[_ngcontent-%COMP%] {\n  color: #0071b9;\n}\n\n.adesso-nav-icon[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n}\n\n@media screen and (min-width: 769px) {\n  .adesso-nav-icon[_ngcontent-%COMP%] {\n    height: 20px;\n    width: 20px;\n  }\n}"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)("openClose", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)("open", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        height: "410px"
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)("closed", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        height: "0"
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)("open => closed", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)("0.2s")]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)("closed => open", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)("0.4s")])])]
    },
    changeDetection: 0
  });
}

/***/ }),

/***/ 64271:
/*!*******************************************************************!*\
  !*** ./libs/@adesso/features/header/src/header-feature.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderFeatureModule": () => (/* binding */ HeaderFeatureModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 11481);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _adesso_ui_context_menu_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/ui-context-menu-list */ 29708);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 84934);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _components_header_feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header-feature.component */ 71029);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/config */ 48335);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);












class HeaderFeatureModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_3__.translationConfig);
  }
  static ɵfac = function HeaderFeatureModule_Factory(t) {
    return new (t || HeaderFeatureModule)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: HeaderFeatureModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _adesso_ui_context_menu_list__WEBPACK_IMPORTED_MODULE_0__.ContextMenuListUiModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_4__.LoggerUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HeaderFeatureModule, {
    declarations: [_components_header_feature_component__WEBPACK_IMPORTED_MODULE_2__.HeaderFeatureComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _adesso_ui_context_menu_list__WEBPACK_IMPORTED_MODULE_0__.ContextMenuListUiModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_4__.LoggerUtilModule],
    exports: [_components_header_feature_component__WEBPACK_IMPORTED_MODULE_2__.HeaderFeatureComponent]
  });
})();

/***/ }),

/***/ 72049:
/*!********************************************************!*\
  !*** ./libs/@adesso/features/header/src/public-api.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderFeatureComponent": () => (/* reexport safe */ _components_header_feature_component__WEBPACK_IMPORTED_MODULE_1__.HeaderFeatureComponent),
/* harmony export */   "HeaderFeatureModule": () => (/* reexport safe */ _header_feature_module__WEBPACK_IMPORTED_MODULE_0__.HeaderFeatureModule)
/* harmony export */ });
/* harmony import */ var _header_feature_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-feature.module */ 64271);
/* harmony import */ var _components_header_feature_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header-feature.component */ 71029);



/***/ }),

/***/ 48335:
/*!*****************************************************************!*\
  !*** ./libs/@adesso/features/header/src/translations/config.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [{
  term: "header-context-menu-quotes-and-markets",
  deDe: "Kurse & Märkte",
  enUs: "Quotes & Markets"
}, {
  term: "header-context-menu-indices",
  deDe: "Indizes",
  enUs: "Indices"
}, {
  term: "header-context-menu-shares",
  deDe: "Aktien",
  enUs: "Shares"
}, {
  term: "header-context-menu-funds",
  deDe: "Fonds",
  enUs: "Funds"
}, {
  term: "header-context-menu-etf",
  deDe: "ETFs",
  enUs: "ETFs"
}, {
  term: "header-context-menu-commodities",
  deDe: "Rohstoffe",
  enUs: "Commodities"
}, {
  term: "header-context-menu-exchange-rates",
  deDe: "Währungen",
  enUs: "Exchange Rates"
}, {
  term: "header-context-menu-derivatives",
  deDe: "Zertifikate",
  enUs: "Derivative"
}, {
  term: "navigate-menu",
  deDe: "Navigieren",
  enUs: "Menu"
}, {
  term: "header-menu-adesso",
  deDe: "adesso",
  enUs: "adesso"
}, {
  term: "header-menu-abaut",
  deDe: "Impressum",
  enUs: "About"
}, {
  term: "header-menu-contact",
  deDe: "Kontakt",
  enUs: "Contact"
}];

/***/ }),

/***/ 64571:
/*!*************************************************************************************!*\
  !*** ./libs/@adesso/features/template/src/components/template-feature.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateFeatureComponent": () => (/* binding */ TemplateFeatureComponent)
/* harmony export */ });
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _header_src_components_header_feature_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../header/src/components/header-feature.component */ 71029);




const _c0 = ["*"];
class TemplateFeatureComponent {
  logger;
  constructor(logger) {
    this.logger = logger;
  }
  static ɵfac = function TemplateFeatureComponent_Factory(t) {
    return new (t || TemplateFeatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtil));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TemplateFeatureComponent,
    selectors: [["feature-template"]],
    ngContentSelectors: _c0,
    decls: 8,
    vars: 1,
    consts: [["id", "adesso-content", 1, "main-content-area"], [1, "adesso-content-area"], [2, "clear", "both"]],
    template: function TemplateFeatureComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "feature-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\n", ctx.logger.uiUpdate("TemplateFeatureComponent"), "\n");
      }
    },
    dependencies: [_header_src_components_header_feature_component__WEBPACK_IMPORTED_MODULE_1__.HeaderFeatureComponent],
    styles: [".clear[_ngcontent-%COMP%] {\n  clear: both;\n}\n\n.dottedText[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media screen and (min-width: 769px) {\n  .hide-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 768px) {\n  .hide-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\n\n@media screen and (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 80.625rem;\n  }\n}\n@media screen and (min-width: 769px) {\n  .col-md-1[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%] {\n    float: left;\n  }\n}\n.adesso-content-area[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n}\n\n@media screen and (min-width: 769px) {\n  .adesso-content-area[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n  }\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 9722:
/*!**********************************************************!*\
  !*** ./libs/@adesso/features/template/src/public-api.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateFeatureComponent": () => (/* reexport safe */ _components_template_feature_component__WEBPACK_IMPORTED_MODULE_0__.TemplateFeatureComponent),
/* harmony export */   "TemplateFeatureModule": () => (/* reexport safe */ _template_feature_module__WEBPACK_IMPORTED_MODULE_1__.TemplateFeatureModule)
/* harmony export */ });
/* harmony import */ var _components_template_feature_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/template-feature.component */ 64571);
/* harmony import */ var _template_feature_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-feature.module */ 38080);



/***/ }),

/***/ 38080:
/*!***********************************************************************!*\
  !*** ./libs/@adesso/features/template/src/template-feature.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateFeatureModule": () => (/* binding */ TemplateFeatureModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _adesso_feature_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/feature-header */ 72049);
/* harmony import */ var _components_template_feature_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/template-feature.component */ 64571);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);





class TemplateFeatureModule {
  static ɵfac = function TemplateFeatureModule_Factory(t) {
    return new (t || TemplateFeatureModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: TemplateFeatureModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _adesso_feature_header__WEBPACK_IMPORTED_MODULE_0__.HeaderFeatureModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_2__.LoggerUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TemplateFeatureModule, {
    declarations: [_components_template_feature_component__WEBPACK_IMPORTED_MODULE_1__.TemplateFeatureComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _adesso_feature_header__WEBPACK_IMPORTED_MODULE_0__.HeaderFeatureModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_2__.LoggerUtilModule],
    exports: [_components_template_feature_component__WEBPACK_IMPORTED_MODULE_1__.TemplateFeatureComponent]
  });
})();

/***/ }),

/***/ 55487:
/*!*********************************************************************************************!*\
  !*** ./libs/@adesso/uis/context-menu-list/src/components/context-menu-list-ui.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextMenuListUiComponent": () => (/* binding */ ContextMenuListUiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);






function ContextMenuListUiComponent_div_0_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.label);
  }
}
function ContextMenuListUiComponent_div_0_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContextMenuListUiComponent_div_0_ng_container_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.clicked.emit(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", item_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.label);
  }
}
function ContextMenuListUiComponent_div_0_ng_container_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContextMenuListUiComponent_div_0_ng_container_1_ng_container_3_ng_container_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.clicked.emit(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const subItem_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", subItem_r11.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](subItem_r11.label);
  }
}
function ContextMenuListUiComponent_div_0_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContextMenuListUiComponent_div_0_ng_container_1_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r2.items);
  }
}
function ContextMenuListUiComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContextMenuListUiComponent_div_0_ng_container_1_span_1_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContextMenuListUiComponent_div_0_ng_container_1_a_2_Template, 2, 2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ContextMenuListUiComponent_div_0_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r2.items);
  }
}
function ContextMenuListUiComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContextMenuListUiComponent_div_0_ng_container_1_Template, 4, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.items);
  }
}
class ContextMenuListUiComponent {
  logger;
  items;
  clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  constructor(logger) {
    this.logger = logger;
  }
  static ɵfac = function ContextMenuListUiComponent_Factory(t) {
    return new (t || ContextMenuListUiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtil));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ContextMenuListUiComponent,
    selectors: [["ui-context-menu-list"]],
    inputs: {
      items: "items"
    },
    outputs: {
      clicked: "clicked"
    },
    decls: 2,
    vars: 2,
    consts: [["class", "ui-context-menu-list", 4, "ngIf"], [1, "ui-context-menu-list"], [4, "ngFor", "ngForOf"], ["class", "ui-context-menu-list-item ui-context-menu-list-main-item", 4, "ngIf"], ["class", "ui-context-menu-list-item ui-context-menu-list-main-item", 3, "routerLink", "click", 4, "ngIf"], [4, "ngIf"], [1, "ui-context-menu-list-item", "ui-context-menu-list-main-item"], [1, "ui-context-menu-list-item", "ui-context-menu-list-main-item", 3, "routerLink", "click"], [1, "ui-context-menu-list-item", "ui-context-menu-list-sub-item", 3, "routerLink", "click"]],
    template: function ContextMenuListUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ContextMenuListUiComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n", ctx.logger.uiUpdate("ContextMenuListUiComponent"), "\n");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: [".ui-context-menu-list[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  box-sizing: border-box;\n}\n.ui-context-menu-list[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ui-context-menu-list[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .ui-context-menu-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .ui-context-menu-list[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\n.ui-context-menu-list-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  line-height: 42px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-decoration: none;\n  padding-left: 13px;\n}\n\n.ui-context-menu-list-main-item[_ngcontent-%COMP%] {\n  color: #003cb4;\n  font-size: 19px;\n  font-weight: bold;\n  border-bottom: 1px solid #e7e7e7;\n}\n\n.ui-context-menu-list-sub-item[_ngcontent-%COMP%] {\n  color: #565656;\n  font-size: 15px;\n  padding-left: 23px;\n  border-bottom: 1px solid #e7e7e7;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 79149:
/*!*******************************************************************************!*\
  !*** ./libs/@adesso/uis/context-menu-list/src/context-menu-list-ui.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextMenuListUiModule": () => (/* binding */ ContextMenuListUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _components_context_menu_list_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/context-menu-list-ui.component */ 55487);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);





class ContextMenuListUiModule {
  static ɵfac = function ContextMenuListUiModule_Factory(t) {
    return new (t || ContextMenuListUiModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ContextMenuListUiModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_1__.LoggerUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ContextMenuListUiModule, {
    declarations: [_components_context_menu_list_ui_component__WEBPACK_IMPORTED_MODULE_0__.ContextMenuListUiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_1__.LoggerUtilModule],
    exports: [_components_context_menu_list_ui_component__WEBPACK_IMPORTED_MODULE_0__.ContextMenuListUiComponent]
  });
})();

/***/ }),

/***/ 24283:
/*!**********************************************************************************************!*\
  !*** ./libs/@adesso/uis/context-menu-list/src/models/ui-context-menu-list-sub-item.model.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiContextMenuListSubItemModel": () => (/* binding */ UiContextMenuListSubItemModel)
/* harmony export */ });
class UiContextMenuListSubItemModel {
  label;
  url;
}

/***/ }),

/***/ 70820:
/*!*************************************************************************************!*\
  !*** ./libs/@adesso/uis/context-menu-list/src/models/ui-context-menu-list.model.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiContextMenuListModel": () => (/* binding */ UiContextMenuListModel)
/* harmony export */ });
class UiContextMenuListModel {
  label;
  url;
  items;
}

/***/ }),

/***/ 29708:
/*!**************************************************************!*\
  !*** ./libs/@adesso/uis/context-menu-list/src/public-api.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextMenuListUiComponent": () => (/* reexport safe */ _components_context_menu_list_ui_component__WEBPACK_IMPORTED_MODULE_0__.ContextMenuListUiComponent),
/* harmony export */   "ContextMenuListUiModule": () => (/* reexport safe */ _context_menu_list_ui_module__WEBPACK_IMPORTED_MODULE_1__.ContextMenuListUiModule),
/* harmony export */   "UiContextMenuListModel": () => (/* reexport safe */ _models_ui_context_menu_list_model__WEBPACK_IMPORTED_MODULE_3__.UiContextMenuListModel),
/* harmony export */   "UiContextMenuListSubItemModel": () => (/* reexport safe */ _models_ui_context_menu_list_sub_item_model__WEBPACK_IMPORTED_MODULE_2__.UiContextMenuListSubItemModel)
/* harmony export */ });
/* harmony import */ var _components_context_menu_list_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/context-menu-list-ui.component */ 55487);
/* harmony import */ var _context_menu_list_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context-menu-list-ui.module */ 79149);
/* harmony import */ var _models_ui_context_menu_list_sub_item_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/ui-context-menu-list-sub-item.model */ 24283);
/* harmony import */ var _models_ui_context_menu_list_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/ui-context-menu-list.model */ 70820);





/***/ }),

/***/ 14704:
/*!******************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/contract-util.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractUtilModule": () => (/* binding */ ContractUtilModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);


class ContractUtilModule {
  static ɵfac = function ContractUtilModule_Factory(t) {
    return new (t || ContractUtilModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: ContractUtilModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContractUtilModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
})();

/***/ }),

/***/ 33833:
/*!********************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/enums/asset-class.enum.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetClassEnum": () => (/* binding */ AssetClassEnum)
/* harmony export */ });
var AssetClassEnum;
(function (AssetClassEnum) {
  AssetClassEnum["index"] = "Index";
  AssetClassEnum["commodity"] = "Commodity";
  AssetClassEnum["exchangeRate"] = "ExchangeRate";
  AssetClassEnum["share"] = "Share";
  AssetClassEnum["etf"] = "ETF";
  AssetClassEnum["fund"] = "Fund";
  AssetClassEnum["interestRate"] = "InterestRate";
  AssetClassEnum["derivative"] = "Derivative";
})(AssetClassEnum || (AssetClassEnum = {}));

/***/ }),

/***/ 76241:
/*!*************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/enums/composition-type.enum.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompositionTypeEnum": () => (/* binding */ CompositionTypeEnum)
/* harmony export */ });
var CompositionTypeEnum;
(function (CompositionTypeEnum) {
  CompositionTypeEnum["country"] = "Country";
  CompositionTypeEnum["industry"] = "Industry";
  CompositionTypeEnum["equity"] = "Equity";
  CompositionTypeEnum["shareholder"] = "Shareholder";
})(CompositionTypeEnum || (CompositionTypeEnum = {}));

/***/ }),

/***/ 87811:
/*!*****************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/enums/cultures.enum.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CulturesEnum": () => (/* binding */ CulturesEnum)
/* harmony export */ });
var CulturesEnum;
(function (CulturesEnum) {
  CulturesEnum["deDe"] = "de-DE";
  CulturesEnum["enUs"] = "en-US";
})(CulturesEnum || (CulturesEnum = {}));

/***/ }),

/***/ 87434:
/*!************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/enums/fund-type-class.enum.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundTypeClassEnum": () => (/* binding */ FundTypeClassEnum)
/* harmony export */ });
var FundTypeClassEnum;
(function (FundTypeClassEnum) {
  FundTypeClassEnum["equityFund"] = "EquityFund";
  FundTypeClassEnum["pensionFund"] = "PensionFund";
  FundTypeClassEnum["mixedFund"] = "MixedFund";
  FundTypeClassEnum["umbrellaFund"] = "UmbrellaFund";
  FundTypeClassEnum["miscellaneousFunds"] = "MiscallaneousFunds";
  FundTypeClassEnum["moneyMarketFund"] = "MoneyMarketFund";
  FundTypeClassEnum["realEstateFund"] = "RealEstateFund";
  FundTypeClassEnum["commodityFund"] = "CommodityFund";
})(FundTypeClassEnum || (FundTypeClassEnum = {}));

/***/ }),

/***/ 80680:
/*!************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/enums/fund-type-focus.enum.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundTypeFocusEnum": () => (/* binding */ FundTypeFocusEnum)
/* harmony export */ });
var FundTypeFocusEnum;
(function (FundTypeFocusEnum) {
  FundTypeFocusEnum["europe"] = "Europa";
  FundTypeFocusEnum["topics"] = "Themen";
  FundTypeFocusEnum["global"] = "Global";
  FundTypeFocusEnum["asia"] = "Asien";
  FundTypeFocusEnum["shareAndBond"] = "Aktien & Anleihen";
  FundTypeFocusEnum["emergingMarkets"] = "Emerging Markets ";
  FundTypeFocusEnum["usa"] = "Nordamerika/USA ";
  FundTypeFocusEnum["primaryBond"] = "prim\u00E4r Anleihen";
  FundTypeFocusEnum["primaryShare"] = "prim\u00E4r Aktien";
  FundTypeFocusEnum["absoluteReturn"] = "Absolute Return";
  FundTypeFocusEnum["latin"] = "Lateinamerika ";
  FundTypeFocusEnum["africa"] = "Mittlerer Osten/Afrika ";
  FundTypeFocusEnum["australia"] = "Australien";
})(FundTypeFocusEnum || (FundTypeFocusEnum = {}));

/***/ }),

/***/ 85755:
/*!************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/enums/identifier-type.enum.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdentifierTypeEnum": () => (/* binding */ IdentifierTypeEnum)
/* harmony export */ });
var IdentifierTypeEnum;
(function (IdentifierTypeEnum) {
  IdentifierTypeEnum["valor"] = "Valor";
  IdentifierTypeEnum["isin"] = "ISIN";
})(IdentifierTypeEnum || (IdentifierTypeEnum = {}));

/***/ }),

/***/ 32469:
/*!**************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/enums/instrument-result-data-fields.enum.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentResultDataFieldsEnum": () => (/* binding */ InstrumentResultDataFieldsEnum)
/* harmony export */ });
var InstrumentResultDataFieldsEnum;
(function (InstrumentResultDataFieldsEnum) {
  InstrumentResultDataFieldsEnum["name"] = "name";
  InstrumentResultDataFieldsEnum["isin"] = "isin";
  InstrumentResultDataFieldsEnum["wkn"] = "wkn";
  InstrumentResultDataFieldsEnum["valor"] = "valor";
  InstrumentResultDataFieldsEnum["assetClass"] = "assetClass";
  InstrumentResultDataFieldsEnum["domicile"] = "domicile";
  InstrumentResultDataFieldsEnum["instrumentType"] = "instrumentType";
  InstrumentResultDataFieldsEnum["currencyId"] = "currencyId";
  InstrumentResultDataFieldsEnum["currencyCode"] = "currencyCode";
  InstrumentResultDataFieldsEnum["exchangeId"] = "exchangeId";
  InstrumentResultDataFieldsEnum["exchangeCode"] = "exchangeCode";
  InstrumentResultDataFieldsEnum["exchangeName"] = "exchangeName";
  InstrumentResultDataFieldsEnum["volume"] = "volume";
  InstrumentResultDataFieldsEnum["last"] = "last";
  InstrumentResultDataFieldsEnum["bid"] = "bid";
  InstrumentResultDataFieldsEnum["ask"] = "ask";
  InstrumentResultDataFieldsEnum["nav"] = "NAV";
  InstrumentResultDataFieldsEnum["valuation"] = "valuation";
  InstrumentResultDataFieldsEnum["dailyHigh"] = "dailyHigh";
  InstrumentResultDataFieldsEnum["dailyHighDate"] = "dailyHighDate";
  InstrumentResultDataFieldsEnum["dailyLow"] = "dailyLow";
  InstrumentResultDataFieldsEnum["dailyLowDate"] = "dailyLowDate";
  InstrumentResultDataFieldsEnum["changeOneWeekPercent"] = "changeOneWeekPercent";
  InstrumentResultDataFieldsEnum["oneWeekHigh"] = "oneWeekHigh";
  InstrumentResultDataFieldsEnum["oneWeekHighDate"] = "oneWeekHighDate";
  InstrumentResultDataFieldsEnum["oneWeekLow"] = "oneWeekLow";
  InstrumentResultDataFieldsEnum["oneWeekLowDate"] = "oneWeekLowDate";
  InstrumentResultDataFieldsEnum["changeOneMonthPercent"] = "changeOneMonthPercent";
  InstrumentResultDataFieldsEnum["oneMonthHigh"] = "oneMonthHigh";
  InstrumentResultDataFieldsEnum["oneMonthHighDate"] = "oneMonthHighDate";
  InstrumentResultDataFieldsEnum["oneMonthLow"] = "oneMonthLow";
  InstrumentResultDataFieldsEnum["oneMonthLowDate"] = "oneMonthLowDate";
  InstrumentResultDataFieldsEnum["changeThreeMonthPercent"] = "changeThreeMonthPercent";
  InstrumentResultDataFieldsEnum["threeMonthHigh"] = "threeMonthHigh";
  InstrumentResultDataFieldsEnum["threeMonthHighDate"] = "threeMonthHighDate";
  InstrumentResultDataFieldsEnum["threeMonthLow"] = "threeMonthLow";
  InstrumentResultDataFieldsEnum["threeMonthLowDate"] = "threeMonthLowDate";
  InstrumentResultDataFieldsEnum["changeSixMonthPercent"] = "changeSixMonthPercent";
  InstrumentResultDataFieldsEnum["changeOneYearPercent"] = "changeOneYearPercent";
  InstrumentResultDataFieldsEnum["yearHigh"] = "yearHigh";
  InstrumentResultDataFieldsEnum["yearHighDate"] = "yearHighDate";
  InstrumentResultDataFieldsEnum["yearLow"] = "yearLow";
  InstrumentResultDataFieldsEnum["yearLowDate"] = "yearLowDate";
  InstrumentResultDataFieldsEnum["changeYearToDatePercent"] = "changeYearToDatePercent";
  InstrumentResultDataFieldsEnum["changeYearToDateAbsolute"] = "changeYearToDateAbsolute";
  InstrumentResultDataFieldsEnum["changeTwoYearsPercent"] = "changeTwoYearsPercent";
  InstrumentResultDataFieldsEnum["changeThreeYearsPercent"] = "changeThreeYearsPercent";
  InstrumentResultDataFieldsEnum["changeFiveYearsPercent"] = "changeFiveYearsPercent";
  InstrumentResultDataFieldsEnum["changeTenYearsPercent"] = "changeTenYearsPercent";
  InstrumentResultDataFieldsEnum["morningStarRating"] = "morningStarRating";
  InstrumentResultDataFieldsEnum["compositions"] = "compositions";
})(InstrumentResultDataFieldsEnum || (InstrumentResultDataFieldsEnum = {}));

/***/ }),

/***/ 23097:
/*!*************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/enums/instrument-valor.enum.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentValorEnum": () => (/* binding */ InstrumentValorEnum)
/* harmony export */ });
var InstrumentValorEnum;
(function (InstrumentValorEnum) {
  InstrumentValorEnum[InstrumentValorEnum["dax"] = 998032] = "dax";
  InstrumentValorEnum[InstrumentValorEnum["mDax"] = 252367] = "mDax";
  InstrumentValorEnum[InstrumentValorEnum["sDax"] = 701259] = "sDax";
  InstrumentValorEnum[InstrumentValorEnum["hDax"] = 220022] = "hDax";
  InstrumentValorEnum[InstrumentValorEnum["cDax"] = 65774] = "cDax";
  InstrumentValorEnum[InstrumentValorEnum["divDax"] = 2081072] = "divDax";
  InstrumentValorEnum[InstrumentValorEnum["stoxxEurope50"] = 846421] = "stoxxEurope50";
  InstrumentValorEnum[InstrumentValorEnum["tecDax"] = 1548840] = "tecDax";
  InstrumentValorEnum[InstrumentValorEnum["euroStoxx50"] = 846480] = "euroStoxx50";
  InstrumentValorEnum[InstrumentValorEnum["smi"] = 998089] = "smi";
  InstrumentValorEnum[InstrumentValorEnum["cac40"] = 998033] = "cac40";
  InstrumentValorEnum[InstrumentValorEnum["dowJones"] = 998313] = "dowJones";
  InstrumentValorEnum[InstrumentValorEnum["nasdaq100"] = 985336] = "nasdaq100";
  InstrumentValorEnum[InstrumentValorEnum["hangSeng"] = 998396] = "hangSeng";
  InstrumentValorEnum[InstrumentValorEnum["ftse100"] = 998185] = "ftse100";
  InstrumentValorEnum[InstrumentValorEnum["ibex35"] = 998683] = "ibex35";
  InstrumentValorEnum[InstrumentValorEnum["atx"] = 998663] = "atx";
  InstrumentValorEnum[InstrumentValorEnum["sp500"] = 998434] = "sp500";
  InstrumentValorEnum[InstrumentValorEnum["nikkei225"] = 998407] = "nikkei225";
  InstrumentValorEnum[InstrumentValorEnum["kospi200"] = 615489] = "kospi200";
  InstrumentValorEnum[InstrumentValorEnum["spBseSensex"] = 998275] = "spBseSensex";
  InstrumentValorEnum[InstrumentValorEnum["eurusd"] = 946681] = "eurusd";
  InstrumentValorEnum[InstrumentValorEnum["eurgbp"] = 946684] = "eurgbp";
  InstrumentValorEnum[InstrumentValorEnum["eurjpy"] = 946686] = "eurjpy";
  InstrumentValorEnum[InstrumentValorEnum["eurchf"] = 897789] = "eurchf";
  InstrumentValorEnum[InstrumentValorEnum["eurcad"] = 946690] = "eurcad";
  InstrumentValorEnum[InstrumentValorEnum["euraud"] = 946687] = "euraud";
  InstrumentValorEnum[InstrumentValorEnum["gold"] = 274702] = "gold";
  InstrumentValorEnum[InstrumentValorEnum["palladium"] = 287633] = "palladium";
  InstrumentValorEnum[InstrumentValorEnum["platin"] = 274690] = "platin";
  InstrumentValorEnum[InstrumentValorEnum["silver"] = 274720] = "silver";
  InstrumentValorEnum[InstrumentValorEnum["naturalGas"] = 274551] = "naturalGas";
  InstrumentValorEnum[InstrumentValorEnum["ethanol"] = 2046721] = "ethanol";
  InstrumentValorEnum[InstrumentValorEnum["heatingOil"] = 274214] = "heatingOil";
  InstrumentValorEnum[InstrumentValorEnum["coal"] = 2590857] = "coal";
  InstrumentValorEnum[InstrumentValorEnum["oilWti"] = 1594836] = "oilWti";
  InstrumentValorEnum[InstrumentValorEnum["oilBrent"] = 274207] = "oilBrent";
  InstrumentValorEnum[InstrumentValorEnum["rbobGasoline"] = 2291143] = "rbobGasoline";
  InstrumentValorEnum[InstrumentValorEnum["uran"] = 3080635] = "uran";
  InstrumentValorEnum[InstrumentValorEnum["diesel"] = 10458426] = "diesel";
  InstrumentValorEnum[InstrumentValorEnum["lead"] = 274604] = "lead";
  InstrumentValorEnum[InstrumentValorEnum["copper"] = 205843] = "copper";
  InstrumentValorEnum[InstrumentValorEnum["ironOre"] = 11501530] = "ironOre";
  InstrumentValorEnum[InstrumentValorEnum["aluminium"] = 274609] = "aluminium";
  InstrumentValorEnum[InstrumentValorEnum["zinc"] = 274605] = "zinc";
  InstrumentValorEnum[InstrumentValorEnum["dwsAkkumula"] = 328850] = "dwsAkkumula";
  InstrumentValorEnum[InstrumentValorEnum["volatilityWorldFund"] = 3371413] = "volatilityWorldFund";
  InstrumentValorEnum[InstrumentValorEnum["germanEquityFund"] = 30057809] = "germanEquityFund";
  InstrumentValorEnum[InstrumentValorEnum["msciSaudiArabiaCappedUcitsETF"] = 47283883] = "msciSaudiArabiaCappedUcitsETF";
  InstrumentValorEnum[InstrumentValorEnum["iSharesEURCorpBondExFinancials15yrUCITSETF"] = 10608592] = "iSharesEURCorpBondExFinancials15yrUCITSETF";
  InstrumentValorEnum[InstrumentValorEnum["iSharesEdgeMSCIEuropeQualityFactorUCITSETF"] = 26679302] = "iSharesEdgeMSCIEuropeQualityFactorUCITSETF";
  InstrumentValorEnum[InstrumentValorEnum["apple"] = 908440] = "apple";
  InstrumentValorEnum[InstrumentValorEnum["daimler"] = 945657] = "daimler";
  InstrumentValorEnum[InstrumentValorEnum["pfizer"] = 962004] = "pfizer";
  InstrumentValorEnum[InstrumentValorEnum["sap"] = 345952] = "sap";
  InstrumentValorEnum[InstrumentValorEnum["siemens"] = 827766] = "siemens";
})(InstrumentValorEnum || (InstrumentValorEnum = {}));

/***/ }),

/***/ 74158:
/*!******************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/enums/key-value-list-option.enum.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyValueListOptionEnum": () => (/* binding */ KeyValueListOptionEnum)
/* harmony export */ });
var KeyValueListOptionEnum;
(function (KeyValueListOptionEnum) {
  KeyValueListOptionEnum["name"] = "name";
  KeyValueListOptionEnum["wkn"] = "wkn";
  KeyValueListOptionEnum["isin"] = "isin";
  KeyValueListOptionEnum["priceEarningRatio"] = "priceEarningRatio";
  KeyValueListOptionEnum["domicile"] = "domicile";
  KeyValueListOptionEnum["shareSector"] = "shareSector";
  KeyValueListOptionEnum["homepage"] = "homepage";
  KeyValueListOptionEnum["replication"] = "replication";
  KeyValueListOptionEnum["morningstar"] = "morningstar";
  KeyValueListOptionEnum["savingsPlan"] = "savingsPlan";
  KeyValueListOptionEnum["focus"] = "focus";
  KeyValueListOptionEnum["runningCostsPerAnnum"] = "runningCostsPerAnnum";
  KeyValueListOptionEnum["performanceFeePerAnnum"] = "performanceFeePerAnnum";
  KeyValueListOptionEnum["fundCategory"] = "fundCategory";
  KeyValueListOptionEnum["fundTypeFocus"] = "fundTypeFocus";
  KeyValueListOptionEnum["distributionType"] = "distributionType";
  KeyValueListOptionEnum["fundAssets"] = "fundAssets";
  KeyValueListOptionEnum["fundCurrency"] = "fundCurrency";
})(KeyValueListOptionEnum || (KeyValueListOptionEnum = {}));

/***/ }),

/***/ 83424:
/*!***********************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/enums/key-value-type.enum.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyValueTypeEnum": () => (/* binding */ KeyValueTypeEnum)
/* harmony export */ });
var KeyValueTypeEnum;
(function (KeyValueTypeEnum) {
  KeyValueTypeEnum[KeyValueTypeEnum["valueFormatterItem"] = 0] = "valueFormatterItem";
  KeyValueTypeEnum[KeyValueTypeEnum["starFormatterItem"] = 1] = "starFormatterItem";
})(KeyValueTypeEnum || (KeyValueTypeEnum = {}));

/***/ }),

/***/ 88249:
/*!****************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/enums/page-type-volksbank.enum.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTypeVolksbankEnum": () => (/* binding */ PageTypeVolksbankEnum)
/* harmony export */ });
var PageTypeVolksbankEnum;
(function (PageTypeVolksbankEnum) {
  PageTypeVolksbankEnum["addressesPage"] = "addresses-page";
  PageTypeVolksbankEnum["adminDashboardPage"] = "admin-dashboard-page";
  PageTypeVolksbankEnum["adminsPage"] = "admins-page";
  PageTypeVolksbankEnum["bankDetailsPage"] = "bank-details-page";
  PageTypeVolksbankEnum["contactPage"] = "contact-page";
  PageTypeVolksbankEnum["contractsPage"] = "contracts-page";
  PageTypeVolksbankEnum["dashboardPage"] = "dashboard-page";
  PageTypeVolksbankEnum["documentUploadPage"] = "document-upload-page";
  PageTypeVolksbankEnum["eCommAccessPage"] = "e-comm-access-page";
  PageTypeVolksbankEnum["hpUserPage"] = "hp-user-page";
  PageTypeVolksbankEnum["loginPage"] = "login-page";
  PageTypeVolksbankEnum["myDocumentsPage"] = "my-documents-page";
  PageTypeVolksbankEnum["notFoundPage"] = "not-found-page";
  PageTypeVolksbankEnum["notFoundRedirectPage"] = "not-found-redirect-page";
  PageTypeVolksbankEnum["reportPage"] = "report-page";
  PageTypeVolksbankEnum["settingsPage"] = "settings-page";
  PageTypeVolksbankEnum["systemLogsPage"] = "systemLogs-page";
})(PageTypeVolksbankEnum || (PageTypeVolksbankEnum = {}));

/***/ }),

/***/ 19866:
/*!******************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/enums/page-type.enum.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTypeEnum": () => (/* binding */ PageTypeEnum)
/* harmony export */ });
var PageTypeEnum;
(function (PageTypeEnum) {
  PageTypeEnum["home"] = "Home-page";
  PageTypeEnum["commodityDetailPage"] = "Commodity-detail-page";
  PageTypeEnum["commodityOverviewPage"] = "Commodity-overview-page";
  PageTypeEnum["derivativeDetailPage"] = "Derivative-detail-page";
  PageTypeEnum["derivativeOverviewPage"] = "Derivative-overview-page";
  PageTypeEnum["derivativeSearchPage"] = "Derivative-search-page";
  PageTypeEnum["etfDetailPage"] = "ETF-detail-page";
  PageTypeEnum["etfOverviewPage"] = "ETF-overview-page";
  PageTypeEnum["etfSearchPage"] = "ETF-search-page";
  PageTypeEnum["exchangeRateDetailPage"] = "ExchangeRate-detail-page";
  PageTypeEnum["exchangeRateOverviewPage"] = "ExchangeRate-overview-page";
  PageTypeEnum["fundDetailPage"] = "Fund-detail-page";
  PageTypeEnum["fundOverviewPage"] = "Fund-overview-page";
  PageTypeEnum["fundSearchPage"] = "Fund-search-page";
  PageTypeEnum["indexDetailPage"] = "Index-detail-page";
  PageTypeEnum["indexOverviewPage"] = "Index-overview-page";
  PageTypeEnum["indexSearchPage"] = "Index-search-page";
  PageTypeEnum["shareDetailPage"] = "Share-detail-page";
  PageTypeEnum["shareOverviewPage"] = "Share-overview-page";
  PageTypeEnum["shareSearchPage"] = "Share-search-page";
  PageTypeEnum["notFoundPage"] = "not-found-page";
  PageTypeEnum["notFoundRedirectPage"] = "not-found-redirect-page";
  PageTypeEnum["loginPage"] = "login-page";
  PageTypeEnum["portfolioPage"] = "portfolio-page";
  PageTypeEnum["buyInstrumentPage"] = "https://zkb-finance.mdgms.com/disclaimer/trade/index.html?FI_ACTION=buy&FI_ISIN={isin}&FI_ISO_CURRENCY={currency}";
  PageTypeEnum["sellInstrumentPage"] = "https://zkb-finance.mdgms.com/disclaimer/trade/index.html?FI_ACTION=sell&FI_ISIN={isin}&FI_ISO_CURRENCY={currency}";
  PageTypeEnum["newsDetailPage"] = "news-detail-page";
  PageTypeEnum["analysesDetailPage"] = "analyses-detail-page";
})(PageTypeEnum || (PageTypeEnum = {}));

/***/ }),

/***/ 89451:
/*!********************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/enums/price-field.enum.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriceFieldEnum": () => (/* binding */ PriceFieldEnum)
/* harmony export */ });
var PriceFieldEnum;
(function (PriceFieldEnum) {
  PriceFieldEnum[PriceFieldEnum["last"] = 0] = "last";
  PriceFieldEnum[PriceFieldEnum["bid"] = 1] = "bid";
  PriceFieldEnum[PriceFieldEnum["ask"] = 2] = "ask";
  PriceFieldEnum[PriceFieldEnum["valuation"] = 3] = "valuation";
  PriceFieldEnum[PriceFieldEnum["nav"] = 4] = "nav";
})(PriceFieldEnum || (PriceFieldEnum = {}));

/***/ }),

/***/ 81554:
/*!*******************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/enums/push-field.enum.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushFieldEnum": () => (/* binding */ PushFieldEnum)
/* harmony export */ });
var PushFieldEnum;
(function (PushFieldEnum) {
  PushFieldEnum[PushFieldEnum["bid"] = 0] = "bid";
  PushFieldEnum[PushFieldEnum["bidSize"] = 1] = "bidSize";
  PushFieldEnum[PushFieldEnum["bidChangeAbsolute"] = 2] = "bidChangeAbsolute";
  PushFieldEnum[PushFieldEnum["bidChangeRelative"] = 3] = "bidChangeRelative";
  PushFieldEnum[PushFieldEnum["ask"] = 4] = "ask";
  PushFieldEnum[PushFieldEnum["askSize"] = 5] = "askSize";
  PushFieldEnum[PushFieldEnum["askChangeAbsolute"] = 6] = "askChangeAbsolute";
  PushFieldEnum[PushFieldEnum["askChangeRelative"] = 7] = "askChangeRelative";
  PushFieldEnum[PushFieldEnum["lastUpdateDate"] = 8] = "lastUpdateDate";
  PushFieldEnum[PushFieldEnum["valueProperty"] = 9] = "valueProperty";
})(PushFieldEnum || (PushFieldEnum = {}));

/***/ }),

/***/ 91082:
/*!***********************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/enums/recommendation.enum.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecommendationEnum": () => (/* binding */ RecommendationEnum)
/* harmony export */ });
var RecommendationEnum;
(function (RecommendationEnum) {
  RecommendationEnum["buy"] = "buy";
  RecommendationEnum["hold"] = "hold";
  RecommendationEnum["sell"] = "sell";
  RecommendationEnum["none"] = "none";
  RecommendationEnum["unknown"] = "unknown";
})(RecommendationEnum || (RecommendationEnum = {}));

/***/ }),

/***/ 22594:
/*!********************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/enums/sortable-field-top-flop.enum.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortableFieldTopFlopEnum": () => (/* binding */ SortableFieldTopFlopEnum)
/* harmony export */ });
var SortableFieldTopFlopEnum;
(function (SortableFieldTopFlopEnum) {
  SortableFieldTopFlopEnum["performanceToday"] = "PerformanceToday";
  SortableFieldTopFlopEnum["performanceOneMonth"] = "PerformanceOneMonth";
  SortableFieldTopFlopEnum["performanceOneYear"] = "PerformanceOneYear";
  SortableFieldTopFlopEnum["performanceThreeYears"] = "PerformanceThreeYears";
  SortableFieldTopFlopEnum["performanceFiveYears"] = "PerformanceFiveYears";
})(SortableFieldTopFlopEnum || (SortableFieldTopFlopEnum = {}));

/***/ }),

/***/ 22731:
/*!***********************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/enums/sortable-field.enum.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortableFieldEnum": () => (/* binding */ SortableFieldEnum)
/* harmony export */ });
var SortableFieldEnum;
(function (SortableFieldEnum) {
  SortableFieldEnum["name"] = "Name";
})(SortableFieldEnum || (SortableFieldEnum = {}));

/***/ }),

/***/ 13384:
/*!***********************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/enums/top-flop-index.enum.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopFlopIndexEnum": () => (/* binding */ TopFlopIndexEnum)
/* harmony export */ });
var TopFlopIndexEnum;
(function (TopFlopIndexEnum) {
  TopFlopIndexEnum["dax"] = "dax";
  TopFlopIndexEnum["mDax"] = "mDax";
  TopFlopIndexEnum["sDax"] = "sDax";
  TopFlopIndexEnum["tecDax"] = "tecDax";
  TopFlopIndexEnum["euroStoxx50"] = "euroStoxx50";
  TopFlopIndexEnum["sp500"] = "sp500";
  TopFlopIndexEnum["dowJones"] = "dowJones";
  TopFlopIndexEnum["nasdaq100"] = "nasdaq100";
  TopFlopIndexEnum["hangSeng"] = "hangSeng";
})(TopFlopIndexEnum || (TopFlopIndexEnum = {}));

/***/ }),

/***/ 94353:
/*!***************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/interfaces/quote-stream-service.interface.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 92994:
/*!**********************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/chart-color.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartColorModel": () => (/* binding */ ChartColorModel)
/* harmony export */ });
class ChartColorModel {
  from;
  to;
}

/***/ }),

/***/ 3797:
/*!*********************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/key-value-list/key-value-list-item.model.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyValueListItemModel": () => (/* binding */ KeyValueListItemModel)
/* harmony export */ });
class KeyValueListItemModel {
  name;
  value;
}

/***/ }),

/***/ 12642:
/*!*****************************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/key-value-list/key-value-list-request-item.model.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyValueListRequestItemModel": () => (/* binding */ KeyValueListRequestItemModel)
/* harmony export */ });
class KeyValueListRequestItemModel {
  option;
  translation;
  defaultValue;
}

/***/ }),

/***/ 44812:
/*!*****************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/quote-stream/subscription-item.model.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionItemModel": () => (/* binding */ SubscriptionItemModel)
/* harmony export */ });
class SubscriptionItemModel {
  valor;
  count;
  pushSymbol;
  bid;
  bidSize;
  ask;
  askSize;
}

/***/ }),

/***/ 80475:
/*!****************************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/repository-adesso-api/interfaces/base.interface.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 99350:
/*!*******************************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/repository-adesso-api/interfaces/company.interface.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 95865:
/*!****************************************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/repository-adesso-api/interfaces/composition-item.interface.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompositionItemInterface": () => (/* binding */ CompositionItemInterface)
/* harmony export */ });
class CompositionItemInterface {
  name;
  portion;
}

/***/ }),

/***/ 26023:
/*!***********************************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/repository-adesso-api/interfaces/composition.interface.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompositionInterface": () => (/* binding */ CompositionInterface)
/* harmony export */ });
class CompositionInterface {
  type;
  items;
}

/***/ }),

/***/ 67344:
/*!*************************************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/repository-adesso-api/interfaces/etf-fund-data.interface.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EtfFundDataInterface": () => (/* binding */ EtfFundDataInterface)
/* harmony export */ });
class EtfFundDataInterface {
  benchmark;
  currencyIsoCode;
  flatrateFee;
  isDistributing;
  isSaveplanPossible;
  planAssetsInEUR;
  strategy;
  typeClass;
  typeFocus;
  etfReplicationType;
}

/***/ }),

/***/ 23278:
/*!************************************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/repository-adesso-api/interfaces/quotes-model.interface.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 60989:
/*!******************************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/repository-adesso-api/interfaces/quotes.interface.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 53183:
/*!***********************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/service-chart/chart-data.model.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartDataModel": () => (/* binding */ ChartDataModel)
/* harmony export */ });
class ChartDataModel {
  results;
}

/***/ }),

/***/ 83489:
/*!*************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/service-chart/chart-result.model.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartResultModel": () => (/* binding */ ChartResultModel)
/* harmony export */ });
class ChartResultModel {
  identifier;
  data;
}

/***/ }),

/***/ 24629:
/*!************************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/ui-chart-quote-box/chart-data-payload.model.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartDataPayloadModel": () => (/* binding */ ChartDataPayloadModel)
/* harmony export */ });
class ChartDataPayloadModel {
  valor;
  exchangeId;
  currencyId;
  period;
  priceField;
}

/***/ }),

/***/ 53093:
/*!**************************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/ui-chart-quote-box/chart-teaser-payload.model.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartTeaserPayloadModel": () => (/* binding */ ChartTeaserPayloadModel)
/* harmony export */ });
class ChartTeaserPayloadModel {
  assetClass;
  name;
  isin;
  chartDataPayload;
}

/***/ }),

/***/ 47438:
/*!**************************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/ui-chart-quote-box/key-value-list-design.enum.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyValueListDesignEnum": () => (/* binding */ KeyValueListDesignEnum)
/* harmony export */ });
var KeyValueListDesignEnum;
(function (KeyValueListDesignEnum) {
  KeyValueListDesignEnum[KeyValueListDesignEnum["list"] = 0] = "list";
  KeyValueListDesignEnum[KeyValueListDesignEnum["chartBox"] = 1] = "chartBox";
})(KeyValueListDesignEnum || (KeyValueListDesignEnum = {}));

/***/ }),

/***/ 75025:
/*!************************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/ui-chart-quote-box/ui-chart-quote-box.model.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiChartQuoteBoxModel": () => (/* binding */ UiChartQuoteBoxModel)
/* harmony export */ });
class UiChartQuoteBoxModel {
  chartPayload;
  name;
  last;
  bid;
  bidSize;
  ask;
  askSize;
  currency;
  assetClass;
  keyValues;
}

/***/ }),

/***/ 43238:
/*!*******************************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/ui-instrument-header/instrument-header-props.model.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentHeaderPropsModel": () => (/* binding */ InstrumentHeaderPropsModel)
/* harmony export */ });
class InstrumentHeaderPropsModel {
  name;
  wkn;
  isin;
}

/***/ }),

/***/ 42700:
/*!****************************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/ui-instrument-list/ui-instrument-list-type.enum.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiInstrumentListTypeEnum": () => (/* binding */ UiInstrumentListTypeEnum)
/* harmony export */ });
var UiInstrumentListTypeEnum;
(function (UiInstrumentListTypeEnum) {
  UiInstrumentListTypeEnum[UiInstrumentListTypeEnum["basic"] = 0] = "basic";
  UiInstrumentListTypeEnum[UiInstrumentListTypeEnum["performance"] = 1] = "performance";
  UiInstrumentListTypeEnum[UiInstrumentListTypeEnum["performanceOneYear"] = 2] = "performanceOneYear";
  UiInstrumentListTypeEnum[UiInstrumentListTypeEnum["order"] = 3] = "order";
})(UiInstrumentListTypeEnum || (UiInstrumentListTypeEnum = {}));

/***/ }),

/***/ 14180:
/*!**********************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/value-formatter/star-formatter-item.model.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StarFormatterItemModel": () => (/* binding */ StarFormatterItemModel)
/* harmony export */ });
/* harmony import */ var _enums_key_value_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/key-value-type.enum */ 83424);

class StarFormatterItemModel {
  value;
  maxStars;
  hasValue;
  type = _enums_key_value_type_enum__WEBPACK_IMPORTED_MODULE_0__.KeyValueTypeEnum.starFormatterItem;
  constructor(init) {
    Object.assign(this, init);
  }
}

/***/ }),

/***/ 14953:
/*!***********************************************************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/models/value-formatter/value-formatter-item.model.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValueFormatterItemModel": () => (/* binding */ ValueFormatterItemModel)
/* harmony export */ });
/* harmony import */ var _enums_key_value_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/key-value-type.enum */ 83424);

class ValueFormatterItemModel {
  valueNumber;
  valueDate;
  valueString;
  suffix;
  digits;
  hasValue;
  maxStars;
  value;
  type = _enums_key_value_type_enum__WEBPACK_IMPORTED_MODULE_0__.KeyValueTypeEnum.valueFormatterItem;
}

/***/ }),

/***/ 52955:
/*!********************************************************!*\
  !*** ./libs/@adesso/utils/contracts/src/public-api.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetClassEnum": () => (/* reexport safe */ _enums_asset_class_enum__WEBPACK_IMPORTED_MODULE_13__.AssetClassEnum),
/* harmony export */   "ChartColorModel": () => (/* reexport safe */ _models_chart_color_model__WEBPACK_IMPORTED_MODULE_27__.ChartColorModel),
/* harmony export */   "ChartDataModel": () => (/* reexport safe */ _models_service_chart_chart_data_model__WEBPACK_IMPORTED_MODULE_5__.ChartDataModel),
/* harmony export */   "ChartDataPayloadModel": () => (/* reexport safe */ _models_ui_chart_quote_box_chart_data_payload_model__WEBPACK_IMPORTED_MODULE_9__.ChartDataPayloadModel),
/* harmony export */   "ChartResultModel": () => (/* reexport safe */ _models_service_chart_chart_result_model__WEBPACK_IMPORTED_MODULE_4__.ChartResultModel),
/* harmony export */   "ChartTeaserPayloadModel": () => (/* reexport safe */ _models_ui_chart_quote_box_chart_teaser_payload_model__WEBPACK_IMPORTED_MODULE_11__.ChartTeaserPayloadModel),
/* harmony export */   "CompositionInterface": () => (/* reexport safe */ _models_repository_adesso_api_interfaces_composition_interface__WEBPACK_IMPORTED_MODULE_19__.CompositionInterface),
/* harmony export */   "CompositionItemInterface": () => (/* reexport safe */ _models_repository_adesso_api_interfaces_composition_item_interface__WEBPACK_IMPORTED_MODULE_20__.CompositionItemInterface),
/* harmony export */   "CompositionTypeEnum": () => (/* reexport safe */ _enums_composition_type_enum__WEBPACK_IMPORTED_MODULE_29__.CompositionTypeEnum),
/* harmony export */   "ContractUtilModule": () => (/* reexport safe */ _contract_util_module__WEBPACK_IMPORTED_MODULE_0__.ContractUtilModule),
/* harmony export */   "CulturesEnum": () => (/* reexport safe */ _enums_cultures_enum__WEBPACK_IMPORTED_MODULE_36__.CulturesEnum),
/* harmony export */   "EtfFundDataInterface": () => (/* reexport safe */ _models_repository_adesso_api_interfaces_etf_fund_data_interface__WEBPACK_IMPORTED_MODULE_23__.EtfFundDataInterface),
/* harmony export */   "FundTypeClassEnum": () => (/* reexport safe */ _enums_fund_type_class_enum__WEBPACK_IMPORTED_MODULE_30__.FundTypeClassEnum),
/* harmony export */   "FundTypeFocusEnum": () => (/* reexport safe */ _enums_fund_type_focus_enum__WEBPACK_IMPORTED_MODULE_31__.FundTypeFocusEnum),
/* harmony export */   "IdentifierTypeEnum": () => (/* reexport safe */ _enums_identifier_type_enum__WEBPACK_IMPORTED_MODULE_14__.IdentifierTypeEnum),
/* harmony export */   "InstrumentHeaderPropsModel": () => (/* reexport safe */ _models_ui_instrument_header_instrument_header_props_model__WEBPACK_IMPORTED_MODULE_3__.InstrumentHeaderPropsModel),
/* harmony export */   "InstrumentResultDataFieldsEnum": () => (/* reexport safe */ _enums_instrument_result_data_fields_enum__WEBPACK_IMPORTED_MODULE_32__.InstrumentResultDataFieldsEnum),
/* harmony export */   "InstrumentValorEnum": () => (/* reexport safe */ _enums_instrument_valor_enum__WEBPACK_IMPORTED_MODULE_12__.InstrumentValorEnum),
/* harmony export */   "KeyValueListDesignEnum": () => (/* reexport safe */ _models_ui_chart_quote_box_key_value_list_design_enum__WEBPACK_IMPORTED_MODULE_10__.KeyValueListDesignEnum),
/* harmony export */   "KeyValueListItemModel": () => (/* reexport safe */ _models_key_value_list_key_value_list_item_model__WEBPACK_IMPORTED_MODULE_6__.KeyValueListItemModel),
/* harmony export */   "KeyValueListOptionEnum": () => (/* reexport safe */ _enums_key_value_list_option_enum__WEBPACK_IMPORTED_MODULE_15__.KeyValueListOptionEnum),
/* harmony export */   "KeyValueListRequestItemModel": () => (/* reexport safe */ _models_key_value_list_key_value_list_request_item_model__WEBPACK_IMPORTED_MODULE_7__.KeyValueListRequestItemModel),
/* harmony export */   "KeyValueTypeEnum": () => (/* reexport safe */ _enums_key_value_type_enum__WEBPACK_IMPORTED_MODULE_18__.KeyValueTypeEnum),
/* harmony export */   "PageTypeEnum": () => (/* reexport safe */ _enums_page_type_enum__WEBPACK_IMPORTED_MODULE_37__.PageTypeEnum),
/* harmony export */   "PageTypeVolksbankEnum": () => (/* reexport safe */ _enums_page_type_volksbank_enum__WEBPACK_IMPORTED_MODULE_38__.PageTypeVolksbankEnum),
/* harmony export */   "PriceFieldEnum": () => (/* reexport safe */ _enums_price_field_enum__WEBPACK_IMPORTED_MODULE_16__.PriceFieldEnum),
/* harmony export */   "PushFieldEnum": () => (/* reexport safe */ _enums_push_field_enum__WEBPACK_IMPORTED_MODULE_17__.PushFieldEnum),
/* harmony export */   "RecommendationEnum": () => (/* reexport safe */ _enums_recommendation_enum__WEBPACK_IMPORTED_MODULE_39__.RecommendationEnum),
/* harmony export */   "SortableFieldEnum": () => (/* reexport safe */ _enums_sortable_field_enum__WEBPACK_IMPORTED_MODULE_33__.SortableFieldEnum),
/* harmony export */   "SortableFieldTopFlopEnum": () => (/* reexport safe */ _enums_sortable_field_top_flop_enum__WEBPACK_IMPORTED_MODULE_34__.SortableFieldTopFlopEnum),
/* harmony export */   "StarFormatterItemModel": () => (/* reexport safe */ _models_value_formatter_star_formatter_item_model__WEBPACK_IMPORTED_MODULE_2__.StarFormatterItemModel),
/* harmony export */   "SubscriptionItemModel": () => (/* reexport safe */ _models_quote_stream_subscription_item_model__WEBPACK_IMPORTED_MODULE_28__.SubscriptionItemModel),
/* harmony export */   "TopFlopIndexEnum": () => (/* reexport safe */ _enums_top_flop_index_enum__WEBPACK_IMPORTED_MODULE_35__.TopFlopIndexEnum),
/* harmony export */   "UiChartQuoteBoxModel": () => (/* reexport safe */ _models_ui_chart_quote_box_ui_chart_quote_box_model__WEBPACK_IMPORTED_MODULE_8__.UiChartQuoteBoxModel),
/* harmony export */   "UiInstrumentListTypeEnum": () => (/* reexport safe */ _models_ui_instrument_list_ui_instrument_list_type_enum__WEBPACK_IMPORTED_MODULE_24__.UiInstrumentListTypeEnum),
/* harmony export */   "ValueFormatterItemModel": () => (/* reexport safe */ _models_value_formatter_value_formatter_item_model__WEBPACK_IMPORTED_MODULE_1__.ValueFormatterItemModel)
/* harmony export */ });
/* harmony import */ var _contract_util_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contract-util.module */ 14704);
/* harmony import */ var _models_value_formatter_value_formatter_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/value-formatter/value-formatter-item.model */ 14953);
/* harmony import */ var _models_value_formatter_star_formatter_item_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/value-formatter/star-formatter-item.model */ 14180);
/* harmony import */ var _models_ui_instrument_header_instrument_header_props_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/ui-instrument-header/instrument-header-props.model */ 43238);
/* harmony import */ var _models_service_chart_chart_result_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/service-chart/chart-result.model */ 83489);
/* harmony import */ var _models_service_chart_chart_data_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/service-chart/chart-data.model */ 53183);
/* harmony import */ var _models_key_value_list_key_value_list_item_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/key-value-list/key-value-list-item.model */ 3797);
/* harmony import */ var _models_key_value_list_key_value_list_request_item_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/key-value-list/key-value-list-request-item.model */ 12642);
/* harmony import */ var _models_ui_chart_quote_box_ui_chart_quote_box_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/ui-chart-quote-box/ui-chart-quote-box.model */ 75025);
/* harmony import */ var _models_ui_chart_quote_box_chart_data_payload_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/ui-chart-quote-box/chart-data-payload.model */ 24629);
/* harmony import */ var _models_ui_chart_quote_box_key_value_list_design_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/ui-chart-quote-box/key-value-list-design.enum */ 47438);
/* harmony import */ var _models_ui_chart_quote_box_chart_teaser_payload_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models/ui-chart-quote-box/chart-teaser-payload.model */ 53093);
/* harmony import */ var _enums_instrument_valor_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./enums/instrument-valor.enum */ 23097);
/* harmony import */ var _enums_asset_class_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enums/asset-class.enum */ 33833);
/* harmony import */ var _enums_identifier_type_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./enums/identifier-type.enum */ 85755);
/* harmony import */ var _enums_key_value_list_option_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./enums/key-value-list-option.enum */ 74158);
/* harmony import */ var _enums_price_field_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./enums/price-field.enum */ 89451);
/* harmony import */ var _enums_push_field_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./enums/push-field.enum */ 81554);
/* harmony import */ var _enums_key_value_type_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./enums/key-value-type.enum */ 83424);
/* harmony import */ var _models_repository_adesso_api_interfaces_composition_interface__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./models/repository-adesso-api/interfaces/composition.interface */ 26023);
/* harmony import */ var _models_repository_adesso_api_interfaces_composition_item_interface__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./models/repository-adesso-api/interfaces/composition-item.interface */ 95865);
/* harmony import */ var _models_repository_adesso_api_interfaces_base_interface__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./models/repository-adesso-api/interfaces/base.interface */ 80475);
/* harmony import */ var _models_repository_adesso_api_interfaces_company_interface__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./models/repository-adesso-api/interfaces/company.interface */ 99350);
/* harmony import */ var _models_repository_adesso_api_interfaces_etf_fund_data_interface__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./models/repository-adesso-api/interfaces/etf-fund-data.interface */ 67344);
/* harmony import */ var _models_ui_instrument_list_ui_instrument_list_type_enum__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./models/ui-instrument-list/ui-instrument-list-type.enum */ 42700);
/* harmony import */ var _models_repository_adesso_api_interfaces_quotes_interface__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./models/repository-adesso-api/interfaces/quotes.interface */ 60989);
/* harmony import */ var _models_repository_adesso_api_interfaces_quotes_model_interface__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./models/repository-adesso-api/interfaces/quotes-model.interface */ 23278);
/* harmony import */ var _models_chart_color_model__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./models/chart-color.model */ 92994);
/* harmony import */ var _models_quote_stream_subscription_item_model__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./models/quote-stream/subscription-item.model */ 44812);
/* harmony import */ var _enums_composition_type_enum__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./enums/composition-type.enum */ 76241);
/* harmony import */ var _enums_fund_type_class_enum__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./enums/fund-type-class.enum */ 87434);
/* harmony import */ var _enums_fund_type_focus_enum__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./enums/fund-type-focus.enum */ 80680);
/* harmony import */ var _enums_instrument_result_data_fields_enum__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./enums/instrument-result-data-fields.enum */ 32469);
/* harmony import */ var _enums_sortable_field_enum__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./enums/sortable-field.enum */ 22731);
/* harmony import */ var _enums_sortable_field_top_flop_enum__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./enums/sortable-field-top-flop.enum */ 22594);
/* harmony import */ var _enums_top_flop_index_enum__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./enums/top-flop-index.enum */ 13384);
/* harmony import */ var _enums_cultures_enum__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./enums/cultures.enum */ 87811);
/* harmony import */ var _enums_page_type_enum__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./enums/page-type.enum */ 19866);
/* harmony import */ var _enums_page_type_volksbank_enum__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./enums/page-type-volksbank.enum */ 88249);
/* harmony import */ var _enums_recommendation_enum__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./enums/recommendation.enum */ 91082);
/* harmony import */ var _interfaces_quote_stream_service_interface__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./interfaces/quote-stream-service.interface */ 94353);










































/***/ }),

/***/ 72725:
/*!***********************************************************************!*\
  !*** ./libs/@adesso/utils/environment/src/environment-util.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnvironmentUtilModule": () => (/* binding */ EnvironmentUtilModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);


class EnvironmentUtilModule {
  static ɵfac = function EnvironmentUtilModule_Factory(t) {
    return new (t || EnvironmentUtilModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: EnvironmentUtilModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EnvironmentUtilModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
})();

/***/ }),

/***/ 25503:
/*!********************************************************************************!*\
  !*** ./libs/@adesso/utils/environment/src/interfaces/environment.interface.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 56489:
/*!**********************************************************!*\
  !*** ./libs/@adesso/utils/environment/src/public-api.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnvironmentService": () => (/* reexport safe */ _services_environment_service__WEBPACK_IMPORTED_MODULE_0__.EnvironmentService),
/* harmony export */   "EnvironmentUtilModule": () => (/* reexport safe */ _environment_util_module__WEBPACK_IMPORTED_MODULE_1__.EnvironmentUtilModule)
/* harmony export */ });
/* harmony import */ var _services_environment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/environment.service */ 36413);
/* harmony import */ var _environment_util_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment-util.module */ 72725);
/* harmony import */ var _interfaces_environment_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaces/environment.interface */ 25503);




/***/ }),

/***/ 36413:
/*!****************************************************************************!*\
  !*** ./libs/@adesso/utils/environment/src/services/environment.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnvironmentService": () => (/* binding */ EnvironmentService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 591);




class EnvironmentService {
  platformID;
  environment;
  isBrowserRendering = true;
  isServerRendering = false;
  isQuoteStreamJsRequested = false;
  isQuoteStreamJsLoaded$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
  constructor(platformID) {
    this.platformID = platformID;
    this.isBrowserRendering = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformID);
    this.isServerRendering = !this.isBrowserRendering;
  }
  setEnvironment(value) {
    this.environment = value;
    if (this.isServerRendering) {
      this.environment.enabledPush = false;
    }
  }
  static ɵfac = function EnvironmentService_Factory(t) {
    return new (t || EnvironmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: EnvironmentService,
    factory: EnvironmentService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 50386:
/*!***********************************************************!*\
  !*** ./libs/@base/utils/logger/src/logger-util.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggerUtilModule": () => (/* binding */ LoggerUtilModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _adesso_util_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-environment */ 56489);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);




class LoggerUtilModule {
  static ɵfac = function LoggerUtilModule_Factory(t) {
    return new (t || LoggerUtilModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: LoggerUtilModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _adesso_util_environment__WEBPACK_IMPORTED_MODULE_0__.EnvironmentUtilModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoggerUtilModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _adesso_util_environment__WEBPACK_IMPORTED_MODULE_0__.EnvironmentUtilModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 39858:
/*!***************************************************!*\
  !*** ./libs/@base/utils/logger/src/public-api.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggerUtil": () => (/* reexport safe */ _utils_logger_util__WEBPACK_IMPORTED_MODULE_1__.LoggerUtil),
/* harmony export */   "LoggerUtilModule": () => (/* reexport safe */ _logger_util_module__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule)
/* harmony export */ });
/* harmony import */ var _logger_util_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger-util.module */ 50386);
/* harmony import */ var _utils_logger_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/logger.util */ 34963);



/***/ }),

/***/ 34963:
/*!**********************************************************!*\
  !*** ./libs/@base/utils/logger/src/utils/logger.util.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggerUtil": () => (/* binding */ LoggerUtil)
/* harmony export */ });
/* harmony import */ var _adesso_util_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-environment */ 56489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);



class LoggerUtil {
  environmentService;
  serviceConstructors = [];
  repositoryConstructors = [];
  uiUpdates = [];
  constructor(environmentService) {
    this.environmentService = environmentService;
    this.serviceConstructor("LoggerService");
  }
  serviceConstructor(name) {
    if (this.environmentService.environment?.loggingEnabledFor?.serviceConstructor && this.isFilterAllowed(name)) {
      const item = this.serviceConstructors.find(x => x.name === name);
      if (item) {
        item.count += 1;
        this.warn("ServiceConstructor", name, item.count);
      } else {
        this.serviceConstructors.push({
          name,
          count: 1
        });
        this.info("ServiceConstructor", name);
      }
    }
  }
  repositoryConstructor(name) {
    if (this.environmentService.environment?.loggingEnabledFor?.repositoryConstructor && this.isFilterAllowed(name)) {
      const item = this.repositoryConstructors.find(x => x.name === name);
      if (item) {
        item.count += 1;
        this.warn("RepositoryConstructor", name, item.count);
      } else {
        this.repositoryConstructors.push({
          name,
          count: 1
        });
        this.info("RepositoryConstructor", name);
      }
    }
  }
  uiUpdate(name) {
    if (this.environmentService.environment?.loggingEnabledFor?.uiUpdate && this.isFilterAllowed(name)) {
      const item = this.uiUpdates.find(x => x.name === name);
      if (item) {
        item.count += 1;
        if (item.count >= 10) {
          this.error("UiUpdate", name, item.count);
        } else if (item.count >= 5) {
          this.warn("UiUpdate", name, item.count);
        } else {
          this.info("UiUpdate", name, item.count);
        }
      } else {
        this.uiUpdates.push({
          name,
          count: 1
        });
        this.info("UiUpdate", name);
      }
    }
  }
  repositoryRequest(functionName, ...data) {
    if (this.environmentService.environment?.loggingEnabledFor?.repositoryRequests) {
      this.info("RepositoryRequest", functionName, data);
    }
  }
  info(...data) {
    if (this.environmentService.environment?.enabledLogging && console && this.environmentService.isBrowserRendering) {
      // eslint-disable-next-line no-console,no-restricted-syntax
      console.info(data);
    }
  }
  warn(...data) {
    if (this.environmentService.environment?.enabledLogging && console && this.environmentService.isBrowserRendering) {
      // eslint-disable-next-line no-console,no-restricted-syntax
      console.warn(data);
    }
  }
  error(...data) {
    if (this.environmentService.environment?.enabledLogging && console && this.environmentService.isBrowserRendering) {
      // eslint-disable-next-line no-console
      console.error(data);
    }
  }
  isFilterAllowed(name) {
    if (!this.environmentService.environment?.loggingEnabledFor?.filter) {
      return true;
    }
    let result = false;
    this.environmentService.environment?.loggingEnabledFor.filter.forEach(filter => {
      const index = name.toLowerCase().indexOf(filter.toLowerCase());
      if (index >= 0) {
        result = true;
      }
    });
    return result;
  }
  static ɵfac = function LoggerUtil_Factory(t) {
    return new (t || LoggerUtil)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_adesso_util_environment__WEBPACK_IMPORTED_MODULE_0__.EnvironmentService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LoggerUtil,
    factory: LoggerUtil.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 70200:
/*!******************************************************************************!*\
  !*** ./libs/@base/utils/translation-manager/src/models/translation.model.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslationModel": () => (/* binding */ TranslationModel)
/* harmony export */ });
class TranslationModel {
  term;
  deDe;
  enUs;
}

/***/ }),

/***/ 38134:
/*!****************************************************************!*\
  !*** ./libs/@base/utils/translation-manager/src/public-api.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslationManagerUtil": () => (/* reexport safe */ _utils_translation_manager_util__WEBPACK_IMPORTED_MODULE_0__.TranslationManagerUtil),
/* harmony export */   "TranslationManagerUtilModule": () => (/* reexport safe */ _translation_manager_util_module__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtilModule),
/* harmony export */   "TranslationModel": () => (/* reexport safe */ _models_translation_model__WEBPACK_IMPORTED_MODULE_1__.TranslationModel)
/* harmony export */ });
/* harmony import */ var _utils_translation_manager_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/translation-manager.util */ 64486);
/* harmony import */ var _models_translation_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/translation.model */ 70200);
/* harmony import */ var _translation_manager_util_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translation-manager-util.module */ 71321);




/***/ }),

/***/ 71321:
/*!*************************************************************************************!*\
  !*** ./libs/@base/utils/translation-manager/src/translation-manager-util.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslationManagerUtilModule": () => (/* binding */ TranslationManagerUtilModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);



class TranslationManagerUtilModule {
  static ɵfac = function TranslationManagerUtilModule_Factory(t) {
    return new (t || TranslationManagerUtilModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TranslationManagerUtilModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TranslationManagerUtilModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule]
  });
})();

/***/ }),

/***/ 64486:
/*!************************************************************************************!*\
  !*** ./libs/@base/utils/translation-manager/src/utils/translation-manager.util.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslationManagerUtil": () => (/* binding */ TranslationManagerUtil)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 42466);



class TranslationManagerUtil {
  translateService;
  allTranslations;
  constructor(translateService) {
    this.translateService = translateService;
    this.allTranslations = [];
    this.allTranslations.push({
      culture: "de-DE",
      cultureProp: "deDe",
      translation: {}
    });
    this.allTranslations.push({
      culture: "en-US",
      cultureProp: "enUs",
      translation: {}
    });
  }
  importTranslations(translations) {
    this.allTranslations.forEach(translationCulture => {
      this.expandTranslations(translationCulture.culture, translationCulture.cultureProp, translations);
    });
  }
  expandTranslations(culture, cultureProp, translations) {
    const cultureTranslations = this.allTranslations.find(x => x.culture === culture);
    if (!cultureTranslations) {
      return;
    }
    translations.forEach(translation => {
      if (!cultureTranslations.translation[translation.term] && translation[cultureProp]) {
        cultureTranslations.translation[translation.term] = translation[cultureProp];
      }
    });
    this.translateService.setTranslation(culture, cultureTranslations.translation, true);
  }
  static ɵfac = function TranslationManagerUtil_Factory(t) {
    return new (t || TranslationManagerUtil)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TranslationManagerUtil,
    factory: TranslationManagerUtil.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 96129:
/*!***************************************************************************************************!*\
  !*** ./libs/@stroeer/utils/stroeer-http-interceptor/src/interceptors/stroeer-http.interceptor.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StroeerHttpInterceptor": () => (/* binding */ StroeerHttpInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);


class StroeerHttpInterceptor {
  intercept(request, next) {
    request = request.clone({
      setHeaders: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ApiKey: "YmZmZDVmNTUtZDYzNS00NWI4LTgxOWEtODhmY2I1NWE1MDg1"
      }
    });
    return next.handle(request);
  }
  static ɵfac = function StroeerHttpInterceptor_Factory(t) {
    return new (t || StroeerHttpInterceptor)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: StroeerHttpInterceptor,
    factory: StroeerHttpInterceptor.ɵfac
  });
}

/***/ }),

/***/ 80186:
/*!************************************************************************!*\
  !*** ./libs/@stroeer/utils/stroeer-http-interceptor/src/public-api.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StroeerHttpInterceptor": () => (/* reexport safe */ _interceptors_stroeer_http_interceptor__WEBPACK_IMPORTED_MODULE_1__.StroeerHttpInterceptor),
/* harmony export */   "StroeerHttpInterceptorUtilModule": () => (/* reexport safe */ _stroeer_http_interceptor_util_module__WEBPACK_IMPORTED_MODULE_0__.StroeerHttpInterceptorUtilModule)
/* harmony export */ });
/* harmony import */ var _stroeer_http_interceptor_util_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stroeer-http-interceptor-util.module */ 48646);
/* harmony import */ var _interceptors_stroeer_http_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors/stroeer-http.interceptor */ 96129);



/***/ }),

/***/ 48646:
/*!**************************************************************************************************!*\
  !*** ./libs/@stroeer/utils/stroeer-http-interceptor/src/stroeer-http-interceptor-util.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StroeerHttpInterceptorUtilModule": () => (/* binding */ StroeerHttpInterceptorUtilModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);


class StroeerHttpInterceptorUtilModule {
  static ɵfac = function StroeerHttpInterceptorUtilModule_Factory(t) {
    return new (t || StroeerHttpInterceptorUtilModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: StroeerHttpInterceptorUtilModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StroeerHttpInterceptorUtilModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
})();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(40388)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);