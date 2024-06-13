"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_share-overview_src_public-api_ts"],{

/***/ 45789:
/*!*******************************************************************************************!*\
  !*** ./libs/@adesso/pages/share-overview/src/components/share-overview-page.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareOverviewPageComponent": () => (/* binding */ ShareOverviewPageComponent)
/* harmony export */ });
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../uis/instrument-list/src/components/instrument-list/instrument-list-ui.component */ 38541);
/* harmony import */ var _features_carousel_with_search_src_components_carousel_with_search_feature_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../features/carousel-with-search/src/components/carousel-with-search-feature.component */ 60719);
/* harmony import */ var _base_utils_ng_let_src_directives_ng_let_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@base/utils/ng-let/src/directives/ng-let.directive */ 39406);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 42466);









function ShareOverviewPageComponent_div_3_ui_instrument_list_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ui-instrument-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const topDaxShares_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("listItems", topDaxShares_r4.result)("headline", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 3, "top-dax-shares-headline"))("tableType", topDaxShares_r4.tableType);
  }
}
function ShareOverviewPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ShareOverviewPageComponent_div_3_ui_instrument_list_1_Template, 2, 5, "ui-instrument-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const topDaxShares_r4 = ctx.ngLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", topDaxShares_r4);
  }
}
function ShareOverviewPageComponent_div_5_ui_instrument_list_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ui-instrument-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const flopDaxShares_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("listItems", flopDaxShares_r7.result)("headline", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 3, "flop-dax-shares-headline"))("tableType", flopDaxShares_r7.tableType);
  }
}
function ShareOverviewPageComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ShareOverviewPageComponent_div_5_ui_instrument_list_1_Template, 2, 5, "ui-instrument-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const flopDaxShares_r7 = ctx.ngLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", flopDaxShares_r7);
  }
}
function ShareOverviewPageComponent_div_8_ui_instrument_list_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ui-instrument-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const topDaxSharesOneYear_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("listItems", topDaxSharesOneYear_r10.result)("headline", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 3, "top-dax-shares-one-year-headline"))("tableType", topDaxSharesOneYear_r10.tableType);
  }
}
function ShareOverviewPageComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ShareOverviewPageComponent_div_8_ui_instrument_list_1_Template, 2, 5, "ui-instrument-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const topDaxSharesOneYear_r10 = ctx.ngLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", topDaxSharesOneYear_r10);
  }
}
function ShareOverviewPageComponent_div_10_ui_instrument_list_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ui-instrument-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const flopDaxSharesOneYear_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("listItems", flopDaxSharesOneYear_r13.result)("headline", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 3, "flop-dax-shares-one-year-headline"))("tableType", flopDaxSharesOneYear_r13.tableType);
  }
}
function ShareOverviewPageComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ShareOverviewPageComponent_div_10_ui_instrument_list_1_Template, 2, 5, "ui-instrument-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const flopDaxSharesOneYear_r13 = ctx.ngLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", flopDaxSharesOneYear_r13);
  }
}
class ShareOverviewPageComponent {
  instrumentListService;
  topDaxShares$;
  flopDaxShares$;
  topDaxSharesOneYear$;
  flopDaxSharesOneYear$;
  slides = [{
    src: "assets/slider/shares/Tech-Aktien-658x370-6eb4ddc82a94bd2c.jpg"
  }, {
    src: "assets/slider/shares/Keine-Angst-vor-Aktien-Altersvorsorge.jpg"
  }];
  constructor(instrumentListService) {
    this.instrumentListService = instrumentListService;
  }
  ngOnInit() {
    const sort = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.SortableFieldTopFlopEnum;
    const tableType = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.UiInstrumentListTypeEnum;
    this.topDaxShares$ = this.loadTopFlops(sort.performanceToday, true, tableType.performance);
    this.flopDaxShares$ = this.loadTopFlops(sort.performanceToday, false, tableType.performance);
    this.topDaxSharesOneYear$ = this.loadTopFlops(sort.performanceOneYear, true, tableType.performanceOneYear);
    this.flopDaxSharesOneYear$ = this.loadTopFlops(sort.performanceOneYear, false, tableType.performanceOneYear);
  }
  loadTopFlops(orderBy, isDescendingOrder, tableType) {
    return this.instrumentListService.getTopFlop({
      top: 5,
      skip: 0,
      orderBy,
      isDescendingOrder,
      topFlopIndex: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.TopFlopIndexEnum.dax
    }, tableType);
  }
  static ɵfac = function ShareOverviewPageComponent_Factory(t) {
    return new (t || ShareOverviewPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ShareOverviewPageComponent,
    selectors: [["page-share-overview"]],
    decls: 12,
    vars: 13,
    consts: [[3, "slides"], [1, "inner-content-area"], [1, "content-columns"], ["class", "content-column", 4, "ngLet"], [1, "content-column"], [3, "listItems", "headline", "tableType", 4, "ngIf"], [3, "listItems", "headline", "tableType"]],
    template: function ShareOverviewPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "feature-carousel-with-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ShareOverviewPageComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ShareOverviewPageComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ShareOverviewPageComponent_div_8_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ShareOverviewPageComponent_div_10_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("slides", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngLet", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 5, ctx.topDaxShares$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngLet", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 7, ctx.flopDaxShares$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngLet", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 9, ctx.topDaxSharesOneYear$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngLet", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 11, ctx.flopDaxSharesOneYear$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_2__.InstrumentListUiComponent, _features_carousel_with_search_src_components_carousel_with_search_feature_component__WEBPACK_IMPORTED_MODULE_3__.CarouselWithSearchFeatureComponent, _base_utils_ng_let_src_directives_ng_let_directive__WEBPACK_IMPORTED_MODULE_4__.NgLetDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    changeDetection: 0
  });
}

/***/ }),

/***/ 33905:
/*!*************************************************************!*\
  !*** ./libs/@adesso/pages/share-overview/src/public-api.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareOverviewPageComponent": () => (/* reexport safe */ _components_share_overview_page_component__WEBPACK_IMPORTED_MODULE_1__.ShareOverviewPageComponent),
/* harmony export */   "ShareOverviewPageModule": () => (/* reexport safe */ _share_overview_page_module__WEBPACK_IMPORTED_MODULE_0__.ShareOverviewPageModule)
/* harmony export */ });
/* harmony import */ var _share_overview_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share-overview-page.module */ 59167);
/* harmony import */ var _components_share_overview_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/share-overview-page.component */ 45789);



/***/ }),

/***/ 59167:
/*!*****************************************************************************!*\
  !*** ./libs/@adesso/pages/share-overview/src/share-overview-page.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareOverviewPageModule": () => (/* binding */ ShareOverviewPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/ui-instrument-list */ 20372);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _adesso_feature_carousel_with_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @adesso/feature-carousel-with-search */ 33779);
/* harmony import */ var _components_share_overview_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/share-overview-page.component */ 45789);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translations/config */ 6226);
/* harmony import */ var _base_util_ng_let__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @base/util-ng-let */ 91535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);













const routes = [{
  path: "",
  component: _components_share_overview_page_component__WEBPACK_IMPORTED_MODULE_4__.ShareOverviewPageComponent
}];
class ShareOverviewPageModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_5__.translationConfig);
  }
  static ɵfac = function ShareOverviewPageModule_Factory(t) {
    return new (t || ShareOverviewPageModule)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: ShareOverviewPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_0__.InstrumentListUiModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListServiceModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtilModule, _adesso_feature_carousel_with_search__WEBPACK_IMPORTED_MODULE_3__.CarouselWithSearchFeatureModule, _base_util_ng_let__WEBPACK_IMPORTED_MODULE_6__.NgLetUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ShareOverviewPageModule, {
    declarations: [_components_share_overview_page_component__WEBPACK_IMPORTED_MODULE_4__.ShareOverviewPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_0__.InstrumentListUiModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListServiceModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_2__.TranslationManagerUtilModule, _adesso_feature_carousel_with_search__WEBPACK_IMPORTED_MODULE_3__.CarouselWithSearchFeatureModule, _base_util_ng_let__WEBPACK_IMPORTED_MODULE_6__.NgLetUtilModule]
  });
})();

/***/ }),

/***/ 6226:
/*!**********************************************************************!*\
  !*** ./libs/@adesso/pages/share-overview/src/translations/config.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [{
  term: "top-dax-shares-headline",
  deDe: "Top 5 DAX Aktien - Heute",
  enUs: "Top 5 DAX Shares - Today"
}, {
  term: "flop-dax-shares-headline",
  deDe: "Flop 5 DAX Aktien - Heute",
  enUs: "Flop 5 DAX Shares - Today"
}, {
  term: "top-dax-shares-one-year-headline",
  deDe: "Top 5 DAX Aktien - 1 Jahr",
  enUs: "Top 5 DAX Shares - 1 Year"
}, {
  term: "flop-dax-shares-one-year-headline",
  deDe: "Flop 5 DAX Aktien - 1 Jahr",
  enUs: "Flop 5 DAX Shares - 1 Year"
}];

/***/ })

}]);