"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_etf-overview_src_public-api_ts"],{

/***/ 71018:
/*!***************************************************************************************!*\
  !*** ./libs/@adesso/pages/etf-overview/src/components/etf-overview-page.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EtfOverviewPageComponent": () => (/* binding */ EtfOverviewPageComponent)
/* harmony export */ });
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 72986);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 24850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _features_carousel_with_search_src_components_carousel_with_search_feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../features/carousel-with-search/src/components/carousel-with-search-feature.component */ 60719);
/* harmony import */ var _uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../uis/instrument-list/src/components/instrument-list/instrument-list-ui.component */ 38541);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 42466);









class EtfOverviewPageComponent {
  instrumentListService;
  tableType = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.UiInstrumentListTypeEnum.performance;
  commodityFunds$;
  equityFunds$;
  mixedFunds$;
  miscellaneousFunds$;
  moneyMarketFunds$;
  pensionFunds$;
  umbrellaFunds$;
  slides = [{
    src: "assets/slider/etf/etf-home-hero_3.jpg"
  }, {
    src: "assets/slider/etf/ETF.jpg"
  }, {
    src: "assets/slider/etf/etf-cosa-1200x675.jpg"
  }, {
    src: "assets/slider/etf/etf-teaser.jpg"
  }, {
    src: "assets/slider/etf/images.jpg"
  }, {
    src: "assets/slider/etf/kryptomoney.jpg"
  }];
  constructor(instrumentListService) {
    this.instrumentListService = instrumentListService;
  }
  ngOnInit() {
    this.commodityFunds$ = this.searchInstruments(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.FundTypeClassEnum.commodityFund);
    this.equityFunds$ = this.searchInstruments(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.FundTypeClassEnum.equityFund);
    this.mixedFunds$ = this.searchInstruments(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.FundTypeClassEnum.mixedFund);
    this.miscellaneousFunds$ = this.searchInstruments(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.FundTypeClassEnum.miscellaneousFunds);
    this.moneyMarketFunds$ = this.searchInstruments(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.FundTypeClassEnum.moneyMarketFund);
    this.pensionFunds$ = this.searchInstruments(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.FundTypeClassEnum.pensionFund);
    this.umbrellaFunds$ = this.searchInstruments(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.FundTypeClassEnum.umbrellaFund);
  }
  searchInstruments(fundTypeClass) {
    return this.instrumentListService.searchInstrument({
      top: 5,
      skip: 0,
      orderBy: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.SortableFieldEnum.name,
      isDescendingOrder: false,
      assetClasses: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.AssetClassEnum.etf,
      fundTypeClass
    }, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.UiInstrumentListTypeEnum.performance).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(x => x ? x.result : []));
  }
  static ɵfac = function EtfOverviewPageComponent_Factory(t) {
    return new (t || EtfOverviewPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: EtfOverviewPageComponent,
    selectors: [["page-etf-overview"]],
    decls: 26,
    vars: 50,
    consts: [[3, "slides"], [1, "inner-content-area"], [1, "content-columns"], [1, "content-column"], [3, "listItems", "headline", "tableType"]],
    template: function EtfOverviewPageComponent_Template(rf, ctx) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("slides", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 22, ctx.commodityFunds$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 24, "commodity-etf-headline"))("tableType", ctx.tableType);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 26, ctx.mixedFunds$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 28, "mixed-etf-headline"))("tableType", ctx.tableType);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 30, ctx.moneyMarketFunds$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 32, "money-market-etf-headline"))("tableType", ctx.tableType);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 34, ctx.umbrellaFunds$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 36, "umbrella-etf-headline"))("tableType", ctx.tableType);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 38, ctx.equityFunds$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 40, "equity-etf-headline"))("tableType", ctx.tableType);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 42, ctx.pensionFunds$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 44, "pension-etf-headline"))("tableType", ctx.tableType);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 46, ctx.miscellaneousFunds$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](25, 48, "miscellaneous-etf-headline"))("tableType", ctx.tableType);
      }
    },
    dependencies: [_features_carousel_with_search_src_components_carousel_with_search_feature_component__WEBPACK_IMPORTED_MODULE_2__.CarouselWithSearchFeatureComponent, _uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_3__.InstrumentListUiComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
    changeDetection: 0
  });
}

/***/ }),

/***/ 21759:
/*!*************************************************************************!*\
  !*** ./libs/@adesso/pages/etf-overview/src/etf-overview-page.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EtfOverviewPageModule": () => (/* binding */ EtfOverviewPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/ui-instrument-list */ 20372);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _adesso_feature_carousel_with_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @adesso/feature-carousel-with-search */ 33779);
/* harmony import */ var _components_etf_overview_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/etf-overview-page.component */ 71018);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translations/config */ 38929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);












const routes = [{
  path: "",
  component: _components_etf_overview_page_component__WEBPACK_IMPORTED_MODULE_4__.EtfOverviewPageComponent
}];
class EtfOverviewPageModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_5__.translationConfig);
  }
  static ɵfac = function EtfOverviewPageModule_Factory(t) {
    return new (t || EtfOverviewPageModule)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: EtfOverviewPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _adesso_feature_carousel_with_search__WEBPACK_IMPORTED_MODULE_3__.CarouselWithSearchFeatureModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_0__.InstrumentListUiModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListServiceModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](EtfOverviewPageModule, {
    declarations: [_components_etf_overview_page_component__WEBPACK_IMPORTED_MODULE_4__.EtfOverviewPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _adesso_feature_carousel_with_search__WEBPACK_IMPORTED_MODULE_3__.CarouselWithSearchFeatureModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_0__.InstrumentListUiModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListServiceModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtilModule]
  });
})();

/***/ }),

/***/ 4578:
/*!***********************************************************!*\
  !*** ./libs/@adesso/pages/etf-overview/src/public-api.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EtfOverviewPageComponent": () => (/* reexport safe */ _components_etf_overview_page_component__WEBPACK_IMPORTED_MODULE_1__.EtfOverviewPageComponent),
/* harmony export */   "EtfOverviewPageModule": () => (/* reexport safe */ _etf_overview_page_module__WEBPACK_IMPORTED_MODULE_0__.EtfOverviewPageModule)
/* harmony export */ });
/* harmony import */ var _etf_overview_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./etf-overview-page.module */ 21759);
/* harmony import */ var _components_etf_overview_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/etf-overview-page.component */ 71018);



/***/ }),

/***/ 38929:
/*!********************************************************************!*\
  !*** ./libs/@adesso/pages/etf-overview/src/translations/config.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [{
  term: "commodity-etf-headline",
  deDe: "Rohstoff ETFs",
  enUs: "Commodity ETFs"
}, {
  term: "mixed-etf-headline",
  deDe: "Misch ETFs",
  enUs: "Mixed ETFs"
}, {
  term: "miscellaneous-etf-headline",
  deDe: "sonstige ETFs",
  enUs: "Miscellaneous ETFs"
}, {
  term: "money-market-etf-headline",
  deDe: "Geldmarkt ETFs",
  enUs: "Money Market ETFs"
}, {
  term: "equity-etf-headline",
  deDe: "Aktien ETFs",
  enUs: "Equity ETFs"
}, {
  term: "pension-etf-headline",
  deDe: "Renten ETFs",
  enUs: "Pension ETFs"
}, {
  term: "umbrella-etf-headline",
  deDe: "Dach ETFs",
  enUs: "Umbrella ETFs"
}];

/***/ })

}]);