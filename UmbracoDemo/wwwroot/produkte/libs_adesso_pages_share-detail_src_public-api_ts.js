"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_share-detail_src_public-api_ts"],{

/***/ 54960:
/*!***************************************************************************************!*\
  !*** ./libs/@adesso/pages/share-detail/src/components/share-detail-page.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareDetailPageComponent": () => (/* binding */ ShareDetailPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 30839);
/* harmony import */ var _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/service-instrument-detail */ 65124);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _adesso_service_news__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @adesso/service-news */ 25048);
/* harmony import */ var _adesso_service_analyses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @adesso/service-analyses */ 29194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uis_content_box_src_components_content_box_ui_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../uis/content-box/src/components/content-box-ui.component */ 79661);
/* harmony import */ var _uis_key_value_list_src_components_key_value_list_key_value_list_ui_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../uis/key-value-list/src/components/key-value-list/key-value-list-ui.component */ 20559);
/* harmony import */ var _features_instrument_detail_header_src_components_instrument_detail_header_feature_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../features/instrument-detail-header/src/components/instrument-detail-header-feature.component */ 67739);
/* harmony import */ var _uis_composition_src_components_composition_ui_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../uis/composition/src/components/composition-ui.component */ 77037);
/* harmony import */ var _uis_news_list_src_components_news_list_ui_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../uis/news-list/src/components/news-list-ui.component */ 77787);
/* harmony import */ var _uis_analyses_list_src_components_analyses_list_ui_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../uis/analyses-list/src/components/analyses-list-ui.component */ 10680);




















function ShareDetailPageComponent_ng_container_2_ui_content_box_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ui-content-box", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pageConfig_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("headline", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 2, "company-description-headline"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](pageConfig_r1.companyDescription);
  }
}
function ShareDetailPageComponent_ng_container_2_ui_news_list_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ui-news-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const news_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("headline", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 2, "news-headline"))("items", news_r6);
  }
}
function ShareDetailPageComponent_ng_container_2_ui_analyses_list_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ui-analyses-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const analyses_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("headline", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 2, "analyses-headline"))("items", analyses_r7);
  }
}
function ShareDetailPageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "feature-instrument-detail-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "ui-composition", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 7)(7, "ui-content-box", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "ui-key-value-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, ShareDetailPageComponent_ng_container_2_ui_content_box_10_Template, 3, 4, "ui-content-box", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 4)(12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, ShareDetailPageComponent_ng_container_2_ui_news_list_13_Template, 2, 4, "ui-news-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, ShareDetailPageComponent_ng_container_2_ui_analyses_list_16_Template, 2, 4, "ui-analyses-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const pageConfig_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("breadCrumbItems", pageConfig_r1.breadCrumbItems)("chartQuoteBoxValues", pageConfig_r1.chartQuoteBoxValues)("instrumentHeader", pageConfig_r1.instrumentHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("compositions", pageConfig_r1.shareholderCompositions)("headline", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 10, "composition-shareholder-headline"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("headline", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 12, "base-data-headline"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", pageConfig_r1.baseData);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", pageConfig_r1.companyDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 14, pageConfig_r1.news$));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](17, 16, pageConfig_r1.analyses$));
  }
}
class ShareDetailPageComponent {
  instrumentDetailService;
  translate;
  logger;
  pageConfig$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.ReplaySubject();
  routerSubscription;
  constructor(instrumentDetailService, translate, logger, newsService, analysesService) {
    this.instrumentDetailService = instrumentDetailService;
    this.translate = translate;
    this.logger = logger;
    this.routerSubscription = this.instrumentDetailService.routerInstrument$().subscribe(instrument => {
      if (instrument) {
        const isin = instrument.base?.isin || "";
        const analysisFrom = new Date(Date.now());
        analysisFrom.setMonth(analysisFrom.getMonth() - 6);
        const config = {
          breadCrumbItems: this.getBreadCrumbItems(),
          baseData: this.getBaseData(),
          chartQuoteBoxValues: this.getChartQuoteBoxValues(),
          instrumentHeader: instrumentDetailService.instrumentHeader(),
          shareholderCompositions: instrumentDetailService.composition(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.CompositionTypeEnum.shareholder),
          companyDescription: instrumentDetailService.companyDescription(),
          news$: newsService.getNewsList({
            companyIsin: isin,
            top: 7,
            skip: 0,
            isDescendingOrder: true
          }),
          analyses$: analysesService.getAnalysesList({
            companyIsin: isin,
            top: 5,
            skip: 0,
            from: analysisFrom
          })
        };
        this.pageConfig$.next(config);
      }
    });
  }
  getBreadCrumbItems() {
    return [{
      label: this.translate.instant("bread-crumb-label-home"),
      url: this.translate.instant(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.PageTypeEnum.home)
    }, {
      label: this.translate.instant("bread-crumb-label-overview"),
      url: this.translate.instant(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.PageTypeEnum.shareOverviewPage)
    }, {
      label: this.translate.instant("bread-crumb-label-search"),
      url: this.translate.instant(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.PageTypeEnum.shareSearchPage)
    }, {
      label: this.translate.instant("bread-crumb-label-detail")
    }];
  }
  getChartQuoteBoxValues() {
    const result = this.instrumentDetailService.createChartQuoteBoxValues();
    if (!result) {
      return undefined;
    }
    const key = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.KeyValueListOptionEnum;
    result.keyValues = this.instrumentDetailService.extractKeyValueListValues([{
      option: key.domicile
    }, {
      option: key.shareSector
    }, {
      option: key.homepage
    }]);
    return result;
  }
  getBaseData() {
    const key = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.KeyValueListOptionEnum;
    return this.instrumentDetailService.extractKeyValueListValues([{
      option: key.name
    }, {
      option: key.isin
    }, {
      option: key.domicile
    }, {
      option: key.shareSector
    }, {
      option: key.homepage
    }]);
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
  static ɵfac = function ShareDetailPageComponent_Factory(t) {
    return new (t || ShareDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_0__.InstrumentDetailService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_1__.LoggerUtil), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_adesso_service_news__WEBPACK_IMPORTED_MODULE_3__.NewsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_adesso_service_analyses__WEBPACK_IMPORTED_MODULE_4__.AnalysesService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: ShareDetailPageComponent,
    selectors: [["page-share-detail"]],
    decls: 4,
    vars: 3,
    consts: [[1, "main-content-background"], [1, "inner-content-area"], [4, "ngIf"], [3, "breadCrumbItems", "chartQuoteBoxValues", "instrumentHeader"], [1, "content-columns"], [1, "content-column"], [3, "compositions", "headline"], [1, "content-column", "column-composition-height"], [3, "headline"], [3, "items"], [3, "headline", 4, "ngIf"], [3, "headline", "items", 4, "ngIf"], [3, "headline", "items"]],
    template: function ShareDetailPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ShareDetailPageComponent_ng_container_2_Template, 18, 18, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, ctx.pageConfig$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _uis_content_box_src_components_content_box_ui_component__WEBPACK_IMPORTED_MODULE_5__.ContentBoxUiComponent, _uis_key_value_list_src_components_key_value_list_key_value_list_ui_component__WEBPACK_IMPORTED_MODULE_6__.KeyValueListUiComponent, _features_instrument_detail_header_src_components_instrument_detail_header_feature_component__WEBPACK_IMPORTED_MODULE_7__.InstrumentDetailHeaderFeatureComponent, _uis_composition_src_components_composition_ui_component__WEBPACK_IMPORTED_MODULE_8__.CompositionUiComponent, _uis_news_list_src_components_news_list_ui_component__WEBPACK_IMPORTED_MODULE_9__.NewsListUiComponent, _uis_analyses_list_src_components_analyses_list_ui_component__WEBPACK_IMPORTED_MODULE_10__.AnalysesListUiComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
    styles: [".loading-page[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  vertical-align: center;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 2;\n}\n.loading-page[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  padding-top: 40vh;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 82381:
/*!***********************************************************!*\
  !*** ./libs/@adesso/pages/share-detail/src/public-api.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareDetailPageComponent": () => (/* reexport safe */ _components_share_detail_page_component__WEBPACK_IMPORTED_MODULE_1__.ShareDetailPageComponent),
/* harmony export */   "ShareDetailPageModule": () => (/* reexport safe */ _share_detail_page_module__WEBPACK_IMPORTED_MODULE_0__.ShareDetailPageModule)
/* harmony export */ });
/* harmony import */ var _share_detail_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share-detail-page.module */ 76755);
/* harmony import */ var _components_share_detail_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/share-detail-page.component */ 54960);



/***/ }),

/***/ 76755:
/*!*************************************************************************!*\
  !*** ./libs/@adesso/pages/share-detail/src/share-detail-page.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareDetailPageModule": () => (/* binding */ ShareDetailPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _components_share_detail_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/share-detail-page.component */ 54960);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/config */ 49363);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @adesso/ui-content-box */ 96524);
/* harmony import */ var _adesso_ui_key_value_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @adesso/ui-key-value-list */ 68147);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @adesso/service-instrument-detail */ 65124);
/* harmony import */ var _adesso_feature_instrument_detail_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @adesso/feature-instrument-detail-header */ 7681);
/* harmony import */ var _adesso_ui_composition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @adesso/ui-composition */ 87317);
/* harmony import */ var _adesso_ui_news_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @adesso/ui-news-list */ 89507);
/* harmony import */ var _adesso_ui_analyses_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @adesso/ui-analyses-list */ 47626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 94650);

















const routes = [{
  path: "",
  component: _components_share_detail_page_component__WEBPACK_IMPORTED_MODULE_2__.ShareDetailPageComponent
}];
class ShareDetailPageModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_3__.translationConfig);
  }
  static ɵfac = function ShareDetailPageModule_Factory(t) {
    return new (t || ShareDetailPageModule)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: ShareDetailPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_6__.InstrumentDetailServiceModule, _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_4__.ContentBoxUiModule, _adesso_ui_key_value_list__WEBPACK_IMPORTED_MODULE_5__.KeyValueListUiModule, _adesso_feature_instrument_detail_header__WEBPACK_IMPORTED_MODULE_7__.InstrumentDetailHeaderFeatureModule, _adesso_ui_composition__WEBPACK_IMPORTED_MODULE_8__.CompositionUiModule, _adesso_ui_news_list__WEBPACK_IMPORTED_MODULE_9__.NewsListUiModule, _adesso_ui_analyses_list__WEBPACK_IMPORTED_MODULE_10__.AnalysesListUiModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ShareDetailPageModule, {
    declarations: [_components_share_detail_page_component__WEBPACK_IMPORTED_MODULE_2__.ShareDetailPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_6__.InstrumentDetailServiceModule, _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_4__.ContentBoxUiModule, _adesso_ui_key_value_list__WEBPACK_IMPORTED_MODULE_5__.KeyValueListUiModule, _adesso_feature_instrument_detail_header__WEBPACK_IMPORTED_MODULE_7__.InstrumentDetailHeaderFeatureModule, _adesso_ui_composition__WEBPACK_IMPORTED_MODULE_8__.CompositionUiModule, _adesso_ui_news_list__WEBPACK_IMPORTED_MODULE_9__.NewsListUiModule, _adesso_ui_analyses_list__WEBPACK_IMPORTED_MODULE_10__.AnalysesListUiModule]
  });
})();

/***/ }),

/***/ 49363:
/*!********************************************************************!*\
  !*** ./libs/@adesso/pages/share-detail/src/translations/config.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [{
  term: "base-data-headline",
  deDe: "Stammdaten",
  enUs: "Base data"
}, {
  term: "company-description-headline",
  deDe: "Beschreibung",
  enUs: "Description"
}, {
  term: "news-headline",
  deDe: "Nachrichten",
  enUs: "News"
}, {
  term: "analyses-headline",
  deDe: "Analysen",
  enUs: "Analyses"
}, {
  term: "composition-shareholder-headline",
  deDe: "Aktionärsstruktur",
  enUs: "Shareholders"
}];

/***/ }),

/***/ 64007:
/*!***********************************************************************!*\
  !*** ./libs/@adesso/uis/analyses-list/src/analyses-list-ui.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysesListUiModule": () => (/* binding */ AnalysesListUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/ui-content-box */ 96524);
/* harmony import */ var _base_util_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-format */ 84094);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _components_analyses_list_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/analyses-list-ui.component */ 10680);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translations/config */ 13736);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);











class AnalysesListUiModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_4__.translationConfig);
  }
  static ɵfac = function AnalysesListUiModule_Factory(t) {
    return new (t || AnalysesListUiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AnalysesListUiModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_0__.ContentBoxUiModule, _base_util_format__WEBPACK_IMPORTED_MODULE_1__.FormatUtilModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtilModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_5__.LoggerUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AnalysesListUiModule, {
    declarations: [_components_analyses_list_ui_component__WEBPACK_IMPORTED_MODULE_3__.AnalysesListUiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_0__.ContentBoxUiModule, _base_util_format__WEBPACK_IMPORTED_MODULE_1__.FormatUtilModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtilModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_5__.LoggerUtilModule],
    exports: [_components_analyses_list_ui_component__WEBPACK_IMPORTED_MODULE_3__.AnalysesListUiComponent]
  });
})();

/***/ }),

/***/ 10680:
/*!*************************************************************************************!*\
  !*** ./libs/@adesso/uis/analyses-list/src/components/analyses-list-ui.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysesListUiComponent": () => (/* binding */ AnalysesListUiComponent)
/* harmony export */ });
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _content_box_src_components_content_box_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../content-box/src/components/content-box-ui.component */ 79661);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _base_utils_format_src_pipes_date_or_time_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@base/utils/format/src/pipes/date-or-time.pipe */ 62812);
/* harmony import */ var _base_utils_format_src_pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@base/utils/format/src/pipes/number-formatter.pipe */ 51830);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 42466);










const _c0 = function (a0) {
  return {
    analyseId: a0
  };
};
const _c1 = function (a0) {
  return [a0];
};
function AnalysesListUiComponent_ui_content_box_0_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "dateOrTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "numberFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](23, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](1, 10, ctx_r1.pageType.analysesDetailPage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](21, _c0, item_r2.id))));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 13, item_r2.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r2.headline);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("analyses-recommendation recommendation-", item_r2.recommendation == null ? null : item_r2.recommendation.toLowerCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 15, "recommendation-" + (item_r2.recommendation == null ? null : item_r2.recommendation.toLowerCase())));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 17, "priceTarget"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 19, item_r2.priceTarget), " ", item_r2.priceCurrency, "");
  }
}
function AnalysesListUiComponent_ui_content_box_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ui-content-box", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AnalysesListUiComponent_ui_content_box_0_a_2_Template, 16, 25, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("headline", ctx_r0.headline);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.items);
  }
}
class AnalysesListUiComponent {
  logger;
  headline;
  items;
  pageType = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum;
  constructor(logger) {
    this.logger = logger;
  }
  static ɵfac = function AnalysesListUiComponent_Factory(t) {
    return new (t || AnalysesListUiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_1__.LoggerUtil));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AnalysesListUiComponent,
    selectors: [["ui-analyses-list"]],
    inputs: {
      headline: "headline",
      items: "items"
    },
    decls: 2,
    vars: 2,
    consts: [[3, "headline", 4, "ngIf"], [3, "headline"], [1, "analyses-list"], ["class", "analyses-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "analyses-item", 3, "routerLink"], [1, "analyses-date"], [1, "analyses-headline"], [1, "analyses-target"]],
    template: function AnalysesListUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AnalysesListUiComponent_ui_content_box_0_Template, 3, 2, "ui-content-box", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\n", ctx.logger.uiUpdate("AnalysesListUiComponent"), "\n");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _content_box_src_components_content_box_ui_component__WEBPACK_IMPORTED_MODULE_2__.ContentBoxUiComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _base_utils_format_src_pipes_date_or_time_pipe__WEBPACK_IMPORTED_MODULE_3__.DateOrTimePipe, _base_utils_format_src_pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__.NumberFormatterPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
    styles: [".clear[_ngcontent-%COMP%] {\n  clear: both;\n}\n\n.dottedText[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media screen and (min-width: 769px) {\n  .hide-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 768px) {\n  .hide-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.analyses-list[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n}\n.analyses-list[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .analyses-list[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .analyses-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .analyses-list[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\n.analyses-item[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  padding: 5px;\n  margin-bottom: 10px;\n  border-radius: 4px;\n  display: block;\n  text-decoration: none;\n}\n\n.analyses-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n  border-bottom: none;\n}\n\n.analyses-headline[_ngcontent-%COMP%] {\n  color: #003cb4;\n  display: block;\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  font-weight: bold;\n}\n\n.analyses-date[_ngcontent-%COMP%] {\n  color: #003cb4;\n  font-size: 11px;\n}\n\n.analyses-recommendation[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px;\n  margin-top: 5px;\n  color: #003cb4;\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  font-weight: bold;\n  border-radius: 4px;\n  width: 80px;\n  font-size: 11px;\n  text-align: center;\n}\n\n.recommendation-buy[_ngcontent-%COMP%] {\n  background-color: #003cb4;\n  color: #FFFFFF;\n  border: 1px solid green;\n}\n\n.recommendation-hold[_ngcontent-%COMP%], .recommendation-none[_ngcontent-%COMP%], .recommendation-unknown[_ngcontent-%COMP%] {\n  background-color: #003cb4;\n  border: 1px solid green;\n}\n\n.recommendation-sell[_ngcontent-%COMP%] {\n  background-color: #003cb4;\n  color: #FFFFFF;\n  border: 1px solid green;\n}\n\n.analyses-target[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px;\n  margin-top: 5px;\n  color: #003cb4;\n  border-radius: 4px;\n  width: 300px;\n  margin-left: 5px;\n  border: 1px solid green;\n  font-size: 11px;\n}\n.analyses-target[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  font-weight: bold;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 46658:
/*!*******************************************************************************!*\
  !*** ./libs/@adesso/uis/analyses-list/src/models/analyses-list-item.model.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysesListItemModel": () => (/* binding */ AnalysesListItemModel)
/* harmony export */ });
class AnalysesListItemModel {
  id;
  headline;
  date;
  recommendation;
  priceTarget;
  priceCurrency;
}

/***/ }),

/***/ 47626:
/*!**********************************************************!*\
  !*** ./libs/@adesso/uis/analyses-list/src/public-api.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysesListItemModel": () => (/* reexport safe */ _models_analyses_list_item_model__WEBPACK_IMPORTED_MODULE_1__.AnalysesListItemModel),
/* harmony export */   "AnalysesListUiComponent": () => (/* reexport safe */ _components_analyses_list_ui_component__WEBPACK_IMPORTED_MODULE_0__.AnalysesListUiComponent),
/* harmony export */   "AnalysesListUiModule": () => (/* reexport safe */ _analyses_list_ui_module__WEBPACK_IMPORTED_MODULE_2__.AnalysesListUiModule)
/* harmony export */ });
/* harmony import */ var _components_analyses_list_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/analyses-list-ui.component */ 10680);
/* harmony import */ var _models_analyses_list_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/analyses-list-item.model */ 46658);
/* harmony import */ var _analyses_list_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analyses-list-ui.module */ 64007);




/***/ }),

/***/ 13736:
/*!*******************************************************************!*\
  !*** ./libs/@adesso/uis/analyses-list/src/translations/config.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [{
  term: "recommendation-buy",
  deDe: "Kaufen",
  enUs: "Buy"
}, {
  term: "recommendation-hold",
  deDe: "Halten",
  enUs: "Hold"
}, {
  term: "recommendation-sell",
  deDe: "Verkaufen",
  enUs: "Sell"
}, {
  term: "recommendation-none",
  deDe: " ",
  enUs: " "
}, {
  term: "recommendation-unknown",
  deDe: "Unbekannt",
  enUs: "Unbekannt"
}, {
  term: "priceTarget",
  deDe: "Prognose",
  enUs: "Forecasting"
}];

/***/ }),

/***/ 77787:
/*!*****************************************************************************!*\
  !*** ./libs/@adesso/uis/news-list/src/components/news-list-ui.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsListUiComponent": () => (/* binding */ NewsListUiComponent)
/* harmony export */ });
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _content_box_src_components_content_box_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../content-box/src/components/content-box-ui.component */ 79661);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _base_utils_format_src_pipes_date_or_time_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@base/utils/format/src/pipes/date-or-time.pipe */ 62812);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 42466);









const _c0 = function (a0) {
  return {
    newsId: a0
  };
};
const _c1 = function (a0) {
  return [a0];
};
function NewsListUiComponent_ui_content_box_0_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "dateOrTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 3, ctx_r1.pageType.newsDetailPage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, item_r2.id))));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, item_r2.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.headline);
  }
}
function NewsListUiComponent_ui_content_box_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ui-content-box", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NewsListUiComponent_ui_content_box_0_a_2_Template, 7, 12, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("headline", ctx_r0.headline);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.items);
  }
}
class NewsListUiComponent {
  logger;
  headline;
  items;
  pageType = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum;
  constructor(logger) {
    this.logger = logger;
  }
  static ɵfac = function NewsListUiComponent_Factory(t) {
    return new (t || NewsListUiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_1__.LoggerUtil));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NewsListUiComponent,
    selectors: [["ui-news-list"]],
    inputs: {
      headline: "headline",
      items: "items"
    },
    decls: 2,
    vars: 2,
    consts: [[3, "headline", 4, "ngIf"], [3, "headline"], [1, "news-list"], ["class", "news-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "news-item", 3, "routerLink"], [1, "news-date"], [1, "news-headline"]],
    template: function NewsListUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NewsListUiComponent_ui_content_box_0_Template, 3, 2, "ui-content-box", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\n", ctx.logger.uiUpdate("NewsListUiComponent"), "\n");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _content_box_src_components_content_box_ui_component__WEBPACK_IMPORTED_MODULE_2__.ContentBoxUiComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _base_utils_format_src_pipes_date_or_time_pipe__WEBPACK_IMPORTED_MODULE_3__.DateOrTimePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: [".clear[_ngcontent-%COMP%] {\n  clear: both;\n}\n\n.dottedText[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media screen and (min-width: 769px) {\n  .hide-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 768px) {\n  .hide-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.news-list[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n}\n.news-list[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .news-list[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .news-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .news-list[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\n.news-item[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  padding: 5px;\n  margin-bottom: 10px;\n  border-radius: 4px;\n  display: block;\n  text-decoration: none;\n}\n\n.news-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n  border-bottom: none;\n}\n\n.news-headline[_ngcontent-%COMP%] {\n  color: #003cb4;\n  display: block;\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  font-weight: bold;\n}\n\n.news-date[_ngcontent-%COMP%] {\n  color: #003cb4;\n  font-size: 11px;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 91709:
/*!***********************************************************************!*\
  !*** ./libs/@adesso/uis/news-list/src/models/news-list-item.model.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsListItemModel": () => (/* binding */ NewsListItemModel)
/* harmony export */ });
class NewsListItemModel {
  id;
  headline;
  date;
}

/***/ }),

/***/ 85587:
/*!***************************************************************!*\
  !*** ./libs/@adesso/uis/news-list/src/news-list-ui.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsListUiModule": () => (/* binding */ NewsListUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/ui-content-box */ 96524);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _base_util_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-format */ 84094);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _components_news_list_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/news-list-ui.component */ 77787);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);








class NewsListUiModule {
  static ɵfac = function NewsListUiModule_Factory(t) {
    return new (t || NewsListUiModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: NewsListUiModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_0__.ContentBoxUiModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _base_util_format__WEBPACK_IMPORTED_MODULE_1__.FormatUtilModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_3__.LoggerUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NewsListUiModule, {
    declarations: [_components_news_list_ui_component__WEBPACK_IMPORTED_MODULE_2__.NewsListUiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_0__.ContentBoxUiModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _base_util_format__WEBPACK_IMPORTED_MODULE_1__.FormatUtilModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_3__.LoggerUtilModule],
    exports: [_components_news_list_ui_component__WEBPACK_IMPORTED_MODULE_2__.NewsListUiComponent]
  });
})();

/***/ }),

/***/ 89507:
/*!******************************************************!*\
  !*** ./libs/@adesso/uis/news-list/src/public-api.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsListItemModel": () => (/* reexport safe */ _models_news_list_item_model__WEBPACK_IMPORTED_MODULE_1__.NewsListItemModel),
/* harmony export */   "NewsListUiComponent": () => (/* reexport safe */ _components_news_list_ui_component__WEBPACK_IMPORTED_MODULE_0__.NewsListUiComponent),
/* harmony export */   "NewsListUiModule": () => (/* reexport safe */ _news_list_ui_module__WEBPACK_IMPORTED_MODULE_2__.NewsListUiModule)
/* harmony export */ });
/* harmony import */ var _components_news_list_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/news-list-ui.component */ 77787);
/* harmony import */ var _models_news_list_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/news-list-item.model */ 91709);
/* harmony import */ var _news_list_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-list-ui.module */ 85587);




/***/ })

}]);