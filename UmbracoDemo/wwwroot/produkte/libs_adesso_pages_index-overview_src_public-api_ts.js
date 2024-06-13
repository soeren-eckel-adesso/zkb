"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_index-overview_src_public-api_ts"],{

/***/ 14370:
/*!*******************************************************************************************!*\
  !*** ./libs/@adesso/pages/index-overview/src/components/index-overview-page.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexOverviewPageComponent": () => (/* binding */ IndexOverviewPageComponent)
/* harmony export */ });
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 24850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../uis/instrument-list/src/components/instrument-list/instrument-list-ui.component */ 38541);
/* harmony import */ var _features_carousel_with_search_src_components_carousel_with_search_feature_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../features/carousel-with-search/src/components/carousel-with-search-feature.component */ 60719);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 42466);









function IndexOverviewPageComponent_ui_instrument_list_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ui-instrument-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, ctx_r0.germanIndices))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 5, "german-headline"))("tableType", ctx_r0.tableType);
  }
}
function IndexOverviewPageComponent_ui_instrument_list_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ui-instrument-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, ctx_r1.europeIndices))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 5, "europa-headline"))("tableType", ctx_r1.tableType);
  }
}
function IndexOverviewPageComponent_ui_instrument_list_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ui-instrument-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, ctx_r2.usaAndAsiaIndices))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 5, "usa-and-asia-headline"))("tableType", ctx_r2.tableType);
  }
}
class IndexOverviewPageComponent {
  instrumentListService;
  germanIndices;
  europeIndices;
  usaAndAsiaIndices;
  tableType = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.UiInstrumentListTypeEnum.performance;
  slides = [{
    src: "assets/slider/indices/dax-verlust.jpg"
  }, {
    src: "assets/slider/indices/800px_COLOURBOX5632685.jpg"
  }, {
    src: "assets/slider/indices/images.jpg"
  }, {
    src: "assets/slider/indices/wasistdieboerse-300x169.jpg"
  }];
  constructor(instrumentListService) {
    this.instrumentListService = instrumentListService;
  }
  ngOnInit() {
    this.germanIndices = this.loadInstruments([_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.dax.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.tecDax.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.mDax.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.sDax.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.hDax.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.cDax.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.divDax.toString()]);
    this.europeIndices = this.loadInstruments([_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.stoxxEurope50.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.euroStoxx50.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.ftse100.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.smi.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.cac40.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.ibex35.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.atx.toString()]);
    this.usaAndAsiaIndices = this.loadInstruments([_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.dowJones.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.sp500.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.nasdaq100.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.nikkei225.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.hangSeng.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.kospi200.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.spBseSensex.toString()]);
  }
  loadInstruments(ids) {
    return this.instrumentListService.getInstrumentTable(ids, this.tableType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(result => result ? result.result : []));
  }
  static ɵfac = function IndexOverviewPageComponent_Factory(t) {
    return new (t || IndexOverviewPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: IndexOverviewPageComponent,
    selectors: [["page-index-overview"]],
    decls: 9,
    vars: 4,
    consts: [[3, "slides"], [1, "inner-content-area"], [1, "content-columns"], [1, "content-column"], [3, "listItems", "headline", "tableType", 4, "ngIf"], [3, "listItems", "headline", "tableType"]],
    template: function IndexOverviewPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "feature-carousel-with-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, IndexOverviewPageComponent_ui_instrument_list_4_Template, 3, 7, "ui-instrument-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, IndexOverviewPageComponent_ui_instrument_list_6_Template, 3, 7, "ui-instrument-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, IndexOverviewPageComponent_ui_instrument_list_8_Template, 3, 7, "ui-instrument-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("slides", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.germanIndices);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.europeIndices);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.usaAndAsiaIndices);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_2__.InstrumentListUiComponent, _features_carousel_with_search_src_components_carousel_with_search_feature_component__WEBPACK_IMPORTED_MODULE_3__.CarouselWithSearchFeatureComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    changeDetection: 0
  });
}

/***/ }),

/***/ 42163:
/*!*****************************************************************************!*\
  !*** ./libs/@adesso/pages/index-overview/src/index-overview-page.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexOverviewPageModule": () => (/* binding */ IndexOverviewPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/ui-instrument-list */ 20372);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _adesso_feature_carousel_with_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @adesso/feature-carousel-with-search */ 33779);
/* harmony import */ var _components_index_overview_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/index-overview-page.component */ 14370);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translations/config */ 77599);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);












const routes = [{
  path: "",
  component: _components_index_overview_page_component__WEBPACK_IMPORTED_MODULE_4__.IndexOverviewPageComponent
}];
class IndexOverviewPageModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_5__.translationConfig);
  }
  static ɵfac = function IndexOverviewPageModule_Factory(t) {
    return new (t || IndexOverviewPageModule)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: IndexOverviewPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_0__.InstrumentListUiModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListServiceModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtilModule, _adesso_feature_carousel_with_search__WEBPACK_IMPORTED_MODULE_3__.CarouselWithSearchFeatureModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](IndexOverviewPageModule, {
    declarations: [_components_index_overview_page_component__WEBPACK_IMPORTED_MODULE_4__.IndexOverviewPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_0__.InstrumentListUiModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListServiceModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtilModule, _adesso_feature_carousel_with_search__WEBPACK_IMPORTED_MODULE_3__.CarouselWithSearchFeatureModule]
  });
})();

/***/ }),

/***/ 53344:
/*!*************************************************************!*\
  !*** ./libs/@adesso/pages/index-overview/src/public-api.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexOverviewPageComponent": () => (/* reexport safe */ _components_index_overview_page_component__WEBPACK_IMPORTED_MODULE_1__.IndexOverviewPageComponent),
/* harmony export */   "IndexOverviewPageModule": () => (/* reexport safe */ _index_overview_page_module__WEBPACK_IMPORTED_MODULE_0__.IndexOverviewPageModule)
/* harmony export */ });
/* harmony import */ var _index_overview_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-overview-page.module */ 42163);
/* harmony import */ var _components_index_overview_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/index-overview-page.component */ 14370);



/***/ }),

/***/ 77599:
/*!**********************************************************************!*\
  !*** ./libs/@adesso/pages/index-overview/src/translations/config.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [{
  term: "german-headline",
  deDe: "Deutschland",
  enUs: "Germany"
}, {
  term: "europa-headline",
  deDe: "Europa",
  enUs: "Europe"
}, {
  term: "usa-and-asia-headline",
  deDe: "USA & Asien",
  enUs: "USA & Asia"
}];

/***/ })

}]);