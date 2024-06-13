"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_home_src_public-api_ts"],{

/***/ 3458:
/*!***********************************************************************!*\
  !*** ./libs/@adesso/pages/home/src/components/home-page.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 24850);
/* harmony import */ var _adesso_feature_suggest_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adesso/feature-suggest-search */ 93473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../uis/instrument-list/src/components/instrument-list/instrument-list-ui.component */ 38541);
/* harmony import */ var _features_suggest_search_src_components_suggest_search_feature_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../features/suggest-search/src/components/suggest-search-feature.component */ 24277);
/* harmony import */ var _uis_bread_crumb_src_components_bread_crumb_ui_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../uis/bread-crumb/src/components/bread-crumb-ui.component */ 66241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 42466);











class HomePageComponent {
  instrumentListService;
  title = "web-adesso-demo";
  tableType = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.UiInstrumentListTypeEnum.performance;
  suggestSearchDesign = _adesso_feature_suggest_search__WEBPACK_IMPORTED_MODULE_2__.SuggestSearchDesignEnum.carouselInclude;
  bestIndices$;
  bestFunds$;
  bestETFs$;
  bestCommodities$;
  bestCurrencies$;
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
  getBreadCrumbItems() {
    return [{
      label: "Startseite",
      url: "/"
    }, {
      label: "Märkte"
    }];
  }
  ngOnInit() {
    this.bestIndices$ = this.loadInstruments([_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.dax.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.mDax.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.tecDax.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.euroStoxx50.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.smi.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.cac40.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.dowJones.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.nasdaq100.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.hangSeng.toString()]);
    this.bestCurrencies$ = this.loadInstruments([_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.eurusd.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.eurgbp.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.eurjpy.toString()]);
    this.bestCommodities$ = this.loadInstruments([_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.gold.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.silver.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.oilBrent.toString()]);
    this.bestFunds$ = this.loadInstruments([_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.dwsAkkumula.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.volatilityWorldFund.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.germanEquityFund.toString()]);
    this.bestETFs$ = this.loadInstruments([_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.msciSaudiArabiaCappedUcitsETF.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.iSharesEURCorpBondExFinancials15yrUCITSETF.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.iSharesEdgeMSCIEuropeQualityFactorUCITSETF.toString()]);
  }
  loadInstruments(ids) {
    return this.instrumentListService.getInstrumentTable(ids, this.tableType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(result => result ? result.result : []));
  }
  static ɵfac = function HomePageComponent_Factory(t) {
    return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: HomePageComponent,
    selectors: [["page-home"]],
    decls: 27,
    vars: 37,
    consts: [[1, "breadcrumb-area", "d-none", "d-lg-block"], [3, "items"], [1, "inner-content-area", "content"], ["src", "assets/maerkte.jpeg", "width", "100%", 1, "mb-5"], [1, "search"], [3, "design"], [1, "row"], [1, "col-12", "col-xl-6"], [3, "listItems", "headline", "tableType"], [1, "table-1", 3, "listItems", "headline", "tableType"]],
    template: function HomePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ui-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "feature-suggest-search", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "ui-instrument-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "ui-instrument-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "ui-instrument-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 6)(19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "ui-instrument-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "ui-instrument-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.getBreadCrumbItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("design", ctx.suggestSearchDesign);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 17, ctx.bestIndices$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 19, "market-overview-headline"))("tableType", ctx.tableType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 21, ctx.bestCommodities$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 23, "most-important-commodites-headline"))("tableType", ctx.tableType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 25, ctx.bestCurrencies$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 27, "most-important-currencies-headline"))("tableType", ctx.tableType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 29, ctx.bestFunds$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 31, "most-important-fund-headline"))("tableType", ctx.tableType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](25, 33, ctx.bestETFs$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 35, "most-important-etfs-headline"))("tableType", ctx.tableType);
      }
    },
    dependencies: [_uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_3__.InstrumentListUiComponent, _features_suggest_search_src_components_suggest_search_feature_component__WEBPACK_IMPORTED_MODULE_4__.SuggestSearchFeatureComponent, _uis_bread_crumb_src_components_bread_crumb_ui_component__WEBPACK_IMPORTED_MODULE_5__.BreadCrumbUiComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
    styles: ["@media screen and (min-width: 769px) {\n  .double-content[_ngcontent-%COMP%]   .first-content[_ngcontent-%COMP%], .double-content[_ngcontent-%COMP%]   .second-content[_ngcontent-%COMP%] {\n    width: calc(50% - 10px);\n  }\n  .double-content[_ngcontent-%COMP%]   .first-content[_ngcontent-%COMP%] {\n    float: left;\n  }\n  .double-content[_ngcontent-%COMP%]   .second-content[_ngcontent-%COMP%] {\n    float: right;\n  }\n}\n.carousel-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  margin-top: -30px;\n  margin-bottom: 30px;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 97645:
/*!*********************************************************!*\
  !*** ./libs/@adesso/pages/home/src/home-page.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/ui-instrument-list */ 20372);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _components_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home-page.component */ 3458);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translations/config */ 34962);
/* harmony import */ var _adesso_feature_suggest_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @adesso/feature-suggest-search */ 93473);
/* harmony import */ var _adesso_ui_bread_crumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @adesso/ui-bread-crumb */ 80524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);













const routes = [{
  path: "",
  component: _components_home_page_component__WEBPACK_IMPORTED_MODULE_3__.HomePageComponent
}];
class HomePageModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_4__.translationConfig);
  }
  static ɵfac = function HomePageModule_Factory(t) {
    return new (t || HomePageModule)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: HomePageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_0__.InstrumentListUiModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListServiceModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtilModule, _adesso_feature_suggest_search__WEBPACK_IMPORTED_MODULE_5__.SuggestSearchFeatureModule, _adesso_ui_bread_crumb__WEBPACK_IMPORTED_MODULE_6__.BreadCrumbUiModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](HomePageModule, {
    declarations: [_components_home_page_component__WEBPACK_IMPORTED_MODULE_3__.HomePageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_0__.InstrumentListUiModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListServiceModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtilModule, _adesso_feature_suggest_search__WEBPACK_IMPORTED_MODULE_5__.SuggestSearchFeatureModule, _adesso_ui_bread_crumb__WEBPACK_IMPORTED_MODULE_6__.BreadCrumbUiModule]
  });
})();

/***/ }),

/***/ 72311:
/*!***************************************************!*\
  !*** ./libs/@adesso/pages/home/src/public-api.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* reexport safe */ _components_home_page_component__WEBPACK_IMPORTED_MODULE_1__.HomePageComponent),
/* harmony export */   "HomePageModule": () => (/* reexport safe */ _home_page_module__WEBPACK_IMPORTED_MODULE_0__.HomePageModule)
/* harmony export */ });
/* harmony import */ var _home_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.module */ 97645);
/* harmony import */ var _components_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home-page.component */ 3458);



/***/ }),

/***/ 34962:
/*!************************************************************!*\
  !*** ./libs/@adesso/pages/home/src/translations/config.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [{
  term: "market-overview-headline",
  deDe: "Marktüberblick",
  enUs: "Markted overview"
}, {
  term: "most-important-fund-headline",
  deDe: "Beliebteste Fonds",
  enUs: "Most important Funds"
}, {
  term: "most-important-etfs-headline",
  deDe: "Beliebteste ETFs",
  enUs: "Most important ETFs"
}, {
  term: "most-important-commodites-headline",
  deDe: "Wichtigste Rohstoffe",
  enUs: "Most important commodities"
}, {
  term: "most-important-currencies-headline",
  deDe: "Wichtigste Wechselkurse",
  enUs: "Most important currencies"
}];

/***/ }),

/***/ 49010:
/*!*******************************************************************!*\
  !*** ./libs/@adesso/uis/bread-crumb/src/bread-crumb-ui.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadCrumbUiModule": () => (/* binding */ BreadCrumbUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _components_bread_crumb_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/bread-crumb-ui.component */ 66241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);




class BreadCrumbUiModule {
  static ɵfac = function BreadCrumbUiModule_Factory(t) {
    return new (t || BreadCrumbUiModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: BreadCrumbUiModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BreadCrumbUiModule, {
    declarations: [_components_bread_crumb_ui_component__WEBPACK_IMPORTED_MODULE_0__.BreadCrumbUiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_components_bread_crumb_ui_component__WEBPACK_IMPORTED_MODULE_0__.BreadCrumbUiComponent]
  });
})();

/***/ }),

/***/ 66241:
/*!*********************************************************************************!*\
  !*** ./libs/@adesso/uis/bread-crumb/src/components/bread-crumb-ui.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadCrumbUiComponent": () => (/* binding */ BreadCrumbUiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34793);



function BreadCrumbUiComponent_nav_0_ng_container_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.label);
  }
}
function BreadCrumbUiComponent_nav_0_ng_container_2_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.label);
  }
}
function BreadCrumbUiComponent_nav_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadCrumbUiComponent_nav_0_ng_container_2_li_1_Template, 3, 2, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadCrumbUiComponent_nav_0_ng_container_2_li_2_Template, 2, 1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r2.url);
  }
}
function BreadCrumbUiComponent_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1)(1, "ol", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadCrumbUiComponent_nav_0_ng_container_2_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
  }
}
class BreadCrumbUiComponent {
  items;
  static ɵfac = function BreadCrumbUiComponent_Factory(t) {
    return new (t || BreadCrumbUiComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BreadCrumbUiComponent,
    selectors: [["ui-breadcrumb"]],
    inputs: {
      items: "items"
    },
    decls: 1,
    vars: 1,
    consts: [["aria-label", "breadcrumb", "class", "px-4", 4, "ngIf"], ["aria-label", "breadcrumb", 1, "px-4"], [1, "breadcrumb"], [4, "ngFor", "ngForOf"], ["class", "breadcrumb-item", "aria-current", "page", 4, "ngIf"], ["class", "breadcrumb-item active", "aria-current", "page", 4, "ngIf"], ["aria-current", "page", 1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"]],
    template: function BreadCrumbUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BreadCrumbUiComponent_nav_0_Template, 3, 1, "nav", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: [".ui-breadcrumb[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  line-height: 40px;\n  font-size: 14px;\n}\n.ui-breadcrumb[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ui-breadcrumb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .ui-breadcrumb[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .ui-breadcrumb[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n.ui-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .ui-breadcrumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #565656;\n}\n\n@media screen and (min-width: 769px) {\n  .ui-breadcrumb[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n}\n.breadcrumb-limiter[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 10px;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 29385:
/*!***************************************************************************!*\
  !*** ./libs/@adesso/uis/bread-crumb/src/models/bread-crumb-item.model.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbItemModel": () => (/* binding */ BreadcrumbItemModel)
/* harmony export */ });
class BreadcrumbItemModel {
  label;
  url;
}

/***/ }),

/***/ 80524:
/*!********************************************************!*\
  !*** ./libs/@adesso/uis/bread-crumb/src/public-api.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadCrumbUiComponent": () => (/* reexport safe */ _components_bread_crumb_ui_component__WEBPACK_IMPORTED_MODULE_0__.BreadCrumbUiComponent),
/* harmony export */   "BreadCrumbUiModule": () => (/* reexport safe */ _bread_crumb_ui_module__WEBPACK_IMPORTED_MODULE_1__.BreadCrumbUiModule),
/* harmony export */   "BreadcrumbItemModel": () => (/* reexport safe */ _models_bread_crumb_item_model__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbItemModel)
/* harmony export */ });
/* harmony import */ var _components_bread_crumb_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/bread-crumb-ui.component */ 66241);
/* harmony import */ var _bread_crumb_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bread-crumb-ui.module */ 49010);
/* harmony import */ var _models_bread_crumb_item_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/bread-crumb-item.model */ 29385);




/***/ })

}]);