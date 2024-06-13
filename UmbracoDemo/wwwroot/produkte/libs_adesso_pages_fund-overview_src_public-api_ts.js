"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_fund-overview_src_public-api_ts"],{

/***/ 28941:
/*!*****************************************************************************************!*\
  !*** ./libs/@adesso/pages/fund-overview/src/components/fund-overview-page.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundOverviewPageComponent": () => (/* binding */ FundOverviewPageComponent)
/* harmony export */ });
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 72986);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 24850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../uis/instrument-list/src/components/instrument-list/instrument-list-ui.component */ 38541);
/* harmony import */ var _features_carousel_with_search_src_components_carousel_with_search_feature_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../features/carousel-with-search/src/components/carousel-with-search-feature.component */ 60719);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 42466);









class FundOverviewPageComponent {
  instrumentListService;
  tableType = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.UiInstrumentListTypeEnum.performance;
  commodityFunds$;
  equityFunds$;
  mixedFunds$;
  miscellaneousFunds$;
  moneyMarketFunds$;
  pensionFunds$;
  realEstateFunds$;
  umbrellaFunds$;
  slides = [{
    src: "assets/slider/fonds/22692.0.1080p.jpg"
  }, {
    src: "assets/slider/fonds/fonds-kaufen-660.jpg"
  }];
  constructor(instrumentListService) {
    this.instrumentListService = instrumentListService;
  }
  ngOnInit() {
    this.commodityFunds$ = this.searchInstruments(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.FundTypeClassEnum.commodityFund);
    this.equityFunds$ = this.searchInstruments(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.FundTypeClassEnum.equityFund, undefined, 4, 5);
    this.mixedFunds$ = this.searchInstruments(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.FundTypeClassEnum.mixedFund, undefined, 4, 5);
    this.miscellaneousFunds$ = this.searchInstruments(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.FundTypeClassEnum.miscellaneousFunds, undefined, 4, 5);
    this.moneyMarketFunds$ = this.searchInstruments(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.FundTypeClassEnum.moneyMarketFund, undefined, 4, 5);
    this.pensionFunds$ = this.searchInstruments(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.FundTypeClassEnum.pensionFund, undefined, 4, 5);
    this.realEstateFunds$ = this.searchInstruments(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.FundTypeClassEnum.realEstateFund, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.FundTypeFocusEnum.europe, 4, 5);
    this.umbrellaFunds$ = this.searchInstruments(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.FundTypeClassEnum.umbrellaFund, undefined, 4, 5);
  }
  searchInstruments(fundTypeClass, fundTypeFocus, morningStarRatingFrom, morningStarRatingTo) {
    return this.instrumentListService.searchInstrument({
      top: 5,
      skip: 0,
      orderBy: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.SortableFieldEnum.name,
      isDescendingOrder: false,
      assetClasses: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.AssetClassEnum.fund,
      fundTypeClass,
      fundTypeFocus,
      morningStarRatingFrom,
      morningStarRatingTo
    }, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.UiInstrumentListTypeEnum.performance).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(x => x ? x.result : []));
  }
  static ɵfac = function FundOverviewPageComponent_Factory(t) {
    return new (t || FundOverviewPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: FundOverviewPageComponent,
    selectors: [["page-fund-overview"]],
    decls: 29,
    vars: 57,
    consts: [[3, "slides"], [1, "inner-content-area"], [1, "content-columns"], [1, "content-column"], [3, "listItems", "headline", "tableType"]],
    template: function FundOverviewPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "feature-carousel-with-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ui-instrument-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ui-instrument-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "ui-instrument-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "ui-instrument-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "ui-instrument-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "ui-instrument-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "ui-instrument-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "ui-instrument-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("slides", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 25, ctx.commodityFunds$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 27, "commodity-fund-headline"))("tableType", ctx.tableType);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 29, ctx.mixedFunds$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 31, "mixed-fund-headline"))("tableType", ctx.tableType);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 33, ctx.moneyMarketFunds$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 35, "money-market-fund-headline"))("tableType", ctx.tableType);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 37, ctx.umbrellaFunds$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 39, "umbrella-fund-headline"))("tableType", ctx.tableType);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 41, ctx.equityFunds$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 43, "equity-fund-headline"))("tableType", ctx.tableType);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 45, ctx.pensionFunds$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 47, "pension-fund-headline"))("tableType", ctx.tableType);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 49, ctx.realEstateFunds$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](25, 51, "real-estate-fund-headline"))("tableType", ctx.tableType);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 53, ctx.miscellaneousFunds$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 55, "miscellaneous-fund-headline"))("tableType", ctx.tableType);
      }
    },
    dependencies: [_uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_2__.InstrumentListUiComponent, _features_carousel_with_search_src_components_carousel_with_search_feature_component__WEBPACK_IMPORTED_MODULE_3__.CarouselWithSearchFeatureComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
    changeDetection: 0
  });
}

/***/ }),

/***/ 26830:
/*!***************************************************************************!*\
  !*** ./libs/@adesso/pages/fund-overview/src/fund-overview-page.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundOverviewPageModule": () => (/* binding */ FundOverviewPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/ui-instrument-list */ 20372);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _adesso_feature_carousel_with_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @adesso/feature-carousel-with-search */ 33779);
/* harmony import */ var _components_fund_overview_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/fund-overview-page.component */ 28941);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translations/config */ 5819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);












const routes = [{
  path: "",
  component: _components_fund_overview_page_component__WEBPACK_IMPORTED_MODULE_4__.FundOverviewPageComponent
}];
class FundOverviewPageModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_5__.translationConfig);
  }
  static ɵfac = function FundOverviewPageModule_Factory(t) {
    return new (t || FundOverviewPageModule)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: FundOverviewPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_0__.InstrumentListUiModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListServiceModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtilModule, _adesso_feature_carousel_with_search__WEBPACK_IMPORTED_MODULE_3__.CarouselWithSearchFeatureModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FundOverviewPageModule, {
    declarations: [_components_fund_overview_page_component__WEBPACK_IMPORTED_MODULE_4__.FundOverviewPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_0__.InstrumentListUiModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListServiceModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtilModule, _adesso_feature_carousel_with_search__WEBPACK_IMPORTED_MODULE_3__.CarouselWithSearchFeatureModule]
  });
})();

/***/ }),

/***/ 24038:
/*!************************************************************!*\
  !*** ./libs/@adesso/pages/fund-overview/src/public-api.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundOverviewPageComponent": () => (/* reexport safe */ _components_fund_overview_page_component__WEBPACK_IMPORTED_MODULE_1__.FundOverviewPageComponent),
/* harmony export */   "FundOverviewPageModule": () => (/* reexport safe */ _fund_overview_page_module__WEBPACK_IMPORTED_MODULE_0__.FundOverviewPageModule)
/* harmony export */ });
/* harmony import */ var _fund_overview_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund-overview-page.module */ 26830);
/* harmony import */ var _components_fund_overview_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/fund-overview-page.component */ 28941);



/***/ }),

/***/ 5819:
/*!*********************************************************************!*\
  !*** ./libs/@adesso/pages/fund-overview/src/translations/config.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [{
  term: "commodity-fund-headline",
  deDe: "Rohstofffonds",
  enUs: "Commodity Funds"
}, {
  term: "mixed-fund-headline",
  deDe: "Mischfonds",
  enUs: "Mixed Funds"
}, {
  term: "miscellaneous-fund-headline",
  deDe: "sonstige Fonds",
  enUs: "Miscellaneous Funds"
}, {
  term: "money-market-fund-headline",
  deDe: "Geldmarktfonds",
  enUs: "Money Market Funds"
}, {
  term: "equity-fund-headline",
  deDe: "Aktienfonds",
  enUs: "Equity Funds"
}, {
  term: "pension-fund-headline",
  deDe: "Rentenfonds",
  enUs: "Pension Funds"
}, {
  term: "real-estate-fund-headline",
  deDe: "Immobilienfonds",
  enUs: "Real Estate Funds"
}, {
  term: "umbrella-fund-headline",
  deDe: "Dachfonds",
  enUs: "Umbrella Funds"
}];

/***/ })

}]);