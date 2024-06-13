"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_commodity-overview_src_public-api_ts"],{

/***/ 99268:
/*!*************************************************************************************!*\
  !*** ./libs/@adesso/pages/commodity-overview/src/commodity-overview-page.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommodityOverviewPageModule": () => (/* binding */ CommodityOverviewPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/ui-instrument-list */ 20372);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _adesso_feature_carousel_with_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @adesso/feature-carousel-with-search */ 33779);
/* harmony import */ var _components_commodity_overview_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/commodity-overview-page.component */ 72781);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translations/config */ 76671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);












const routes = [{
  path: "",
  component: _components_commodity_overview_page_component__WEBPACK_IMPORTED_MODULE_4__.CommodityOverviewPageComponent
}];
class CommodityOverviewPageModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_5__.translationConfig);
  }
  static ɵfac = function CommodityOverviewPageModule_Factory(t) {
    return new (t || CommodityOverviewPageModule)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: CommodityOverviewPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_0__.InstrumentListUiModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListServiceModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtilModule, _adesso_feature_carousel_with_search__WEBPACK_IMPORTED_MODULE_3__.CarouselWithSearchFeatureModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CommodityOverviewPageModule, {
    declarations: [_components_commodity_overview_page_component__WEBPACK_IMPORTED_MODULE_4__.CommodityOverviewPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_0__.InstrumentListUiModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListServiceModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtilModule, _adesso_feature_carousel_with_search__WEBPACK_IMPORTED_MODULE_3__.CarouselWithSearchFeatureModule]
  });
})();

/***/ }),

/***/ 72781:
/*!***************************************************************************************************!*\
  !*** ./libs/@adesso/pages/commodity-overview/src/components/commodity-overview-page.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommodityOverviewPageComponent": () => (/* binding */ CommodityOverviewPageComponent)
/* harmony export */ });
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 24850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../uis/instrument-list/src/components/instrument-list/instrument-list-ui.component */ 38541);
/* harmony import */ var _features_carousel_with_search_src_components_carousel_with_search_feature_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../features/carousel-with-search/src/components/carousel-with-search-feature.component */ 60719);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 42466);









function CommodityOverviewPageComponent_ui_instrument_list_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ui-instrument-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, ctx_r0.nobleMetals$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 5, "noblen-metals-headline"))("tableType", ctx_r0.tableType$);
  }
}
function CommodityOverviewPageComponent_ui_instrument_list_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ui-instrument-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, ctx_r1.fuel$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 5, "fuel-headline"))("tableType", ctx_r1.tableType$);
  }
}
function CommodityOverviewPageComponent_ui_instrument_list_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ui-instrument-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, ctx_r2.industrialMetals$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 5, "industrial-metals-headline"))("tableType", ctx_r2.tableType$);
  }
}
function CommodityOverviewPageComponent_ui_instrument_list_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ui-instrument-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, ctx_r3.energy$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 5, "energy-headline"))("tableType", ctx_r3.tableType$);
  }
}
class CommodityOverviewPageComponent {
  instrumentListService;
  nobleMetals$;
  energy$;
  fuel$;
  industrialMetals$;
  tableType$ = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.UiInstrumentListTypeEnum.performance;
  slides = [{
    src: "assets/slider/commodity/WhatsApp-Image-2018-02-05-at-11.00.52-1200x740.jpeg"
  }, {
    src: "assets/slider/commodity/rohstoffe-collage_30pro-hellblau.jpg"
  }, {
    src: "assets/slider/commodity/1438849273_1397039796_rohstoffe.jpg"
  }, {
    src: "assets/slider/commodity/csm_2002a_Rohstoffe_cb38d5660c.jpg"
  }];
  constructor(instrumentListService) {
    this.instrumentListService = instrumentListService;
  }
  ngOnInit() {
    this.nobleMetals$ = this.loadInstruments([_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.gold.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.palladium.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.platin.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.silver.toString()]);
    this.energy$ = this.loadInstruments([_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.naturalGas.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.ethanol.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.heatingOil.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.coal.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.oilWti.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.oilBrent.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.rbobGasoline.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.uran.toString()]);
    this.fuel$ = this.loadInstruments([_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.diesel.toString()]);
    this.industrialMetals$ = this.loadInstruments([_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.lead.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.copper.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentValorEnum.ironOre.toString()]);
  }
  loadInstruments(ids) {
    return this.instrumentListService.getInstrumentTable(ids, this.tableType$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(result => result ? result.result : []));
  }
  static ɵfac = function CommodityOverviewPageComponent_Factory(t) {
    return new (t || CommodityOverviewPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CommodityOverviewPageComponent,
    selectors: [["page-commodity-overview"]],
    decls: 9,
    vars: 5,
    consts: [[3, "slides"], [1, "inner-content-area"], [1, "content-columns"], [1, "content-column"], [3, "listItems", "headline", "tableType", 4, "ngIf"], [3, "listItems", "headline", "tableType"]],
    template: function CommodityOverviewPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "feature-carousel-with-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CommodityOverviewPageComponent_ui_instrument_list_4_Template, 3, 7, "ui-instrument-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CommodityOverviewPageComponent_ui_instrument_list_5_Template, 3, 7, "ui-instrument-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CommodityOverviewPageComponent_ui_instrument_list_6_Template, 3, 7, "ui-instrument-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CommodityOverviewPageComponent_ui_instrument_list_8_Template, 3, 7, "ui-instrument-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("slides", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nobleMetals$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fuel$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.industrialMetals$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.energy$);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_2__.InstrumentListUiComponent, _features_carousel_with_search_src_components_carousel_with_search_feature_component__WEBPACK_IMPORTED_MODULE_3__.CarouselWithSearchFeatureComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    changeDetection: 0
  });
}

/***/ }),

/***/ 53494:
/*!*****************************************************************!*\
  !*** ./libs/@adesso/pages/commodity-overview/src/public-api.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommodityOverviewPageComponent": () => (/* reexport safe */ _components_commodity_overview_page_component__WEBPACK_IMPORTED_MODULE_1__.CommodityOverviewPageComponent),
/* harmony export */   "CommodityOverviewPageModule": () => (/* reexport safe */ _commodity_overview_page_module__WEBPACK_IMPORTED_MODULE_0__.CommodityOverviewPageModule)
/* harmony export */ });
/* harmony import */ var _commodity_overview_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commodity-overview-page.module */ 99268);
/* harmony import */ var _components_commodity_overview_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/commodity-overview-page.component */ 72781);



/***/ }),

/***/ 76671:
/*!**************************************************************************!*\
  !*** ./libs/@adesso/pages/commodity-overview/src/translations/config.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [{
  term: "noblen-metals-headline",
  deDe: "Edelmetalle",
  enUs: "Noblen Metals"
}, {
  term: "fuel-headline",
  deDe: "Benzin",
  enUs: "Fuel"
}, {
  term: "energy-headline",
  deDe: "Energie",
  enUs: "Energy"
}, {
  term: "industrial-metals-headline",
  deDe: "Industriemetalle",
  enUs: "Industrial Metals"
}];

/***/ })

}]);