"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_index-detail_src_public-api_ts"],{

/***/ 26758:
/*!*********************************************************************************************!*\
  !*** ./libs/@adesso/features/constituents/src/components/constituents-feature.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstituentsFeatureComponent": () => (/* binding */ ConstituentsFeatureComponent)
/* harmony export */ });
/* harmony import */ var _adesso_ui_paging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/ui-paging */ 36116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 30839);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1059);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 75778);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 87545);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 24850);
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../uis/instrument-list/src/components/instrument-list/instrument-list-ui.component */ 38541);
/* harmony import */ var _uis_paging_src_components_paging_ui_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../uis/paging/src/components/paging-ui.component */ 59987);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 42466);













const _c0 = ["constituentsPaging"];
function ConstituentsFeatureComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ui-paging", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const constituentsPageCount_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageCount", constituentsPageCount_r1)("currentPage", 1);
  }
}
class ConstituentsFeatureComponent {
  logger;
  instrumentListService;
  constituentsPaging;
  valor;
  constituentsPerPage = 30;
  constituentsPageCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.ReplaySubject();
  constituents$;
  tableType = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.UiInstrumentListTypeEnum.order;
  constructor(logger, instrumentListService) {
    this.logger = logger;
    this.instrumentListService = instrumentListService;
  }
  ngAfterViewInit() {
    this.constituents$ = this.constituentsPaging?.pageSelected?.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(newPage => {
      return this.instrumentListService.getConstituents(this.valor?.toString(), this.constituentsPerPage, newPage * this.constituentsPerPage - this.constituentsPerPage, this.tableType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(result => {
        if (result) {
          this.calculatePaging(result.resultCount);
        } else {
          return [];
        }
        return result.result;
      }));
    }));
    this.constituentsPageCount$.next(1);
  }
  calculatePaging(resultCount) {
    if (!resultCount) {
      return;
    }
    this.constituentsPageCount$.next(Math.ceil(resultCount / this.constituentsPerPage));
  }
  static ɵfac = function ConstituentsFeatureComponent_Factory(t) {
    return new (t || ConstituentsFeatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_3__.LoggerUtil), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ConstituentsFeatureComponent,
    selectors: [["feature-constituents"]],
    viewQuery: function ConstituentsFeatureComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.constituentsPaging = _t.first);
      }
    },
    inputs: {
      valor: "valor"
    },
    decls: 5,
    vars: 10,
    consts: [[3, "listItems", "headline", "tableType"], ["class", "page-container", 4, "ngIf"], [1, "page-container"], [3, "pageCount", "currentPage"], ["constituentsPaging", ""]],
    template: function ConstituentsFeatureComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ui-instrument-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ConstituentsFeatureComponent_div_3_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 4, ctx.constituents$))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 6, "constituents-headline"))("tableType", ctx.tableType);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 8, ctx.constituentsPageCount$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_4__.InstrumentListUiComponent, _uis_paging_src_components_paging_ui_component__WEBPACK_IMPORTED_MODULE_5__.PagingUiComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
    styles: [".page-container[_ngcontent-%COMP%] {\n  text-align: center;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 74861:
/*!*******************************************************************************!*\
  !*** ./libs/@adesso/features/constituents/src/constituents-feature.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstituentsFeatureModule": () => (/* binding */ ConstituentsFeatureModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _components_constituents_feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/constituents-feature.component */ 26758);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/config */ 79504);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @adesso/ui-instrument-list */ 20372);
/* harmony import */ var _adesso_ui_paging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @adesso/ui-paging */ 36116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);











class ConstituentsFeatureModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_3__.translationConfig);
  }
  static ɵfac = function ConstituentsFeatureModule_Factory(t) {
    return new (t || ConstituentsFeatureModule)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: ConstituentsFeatureModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_4__.InstrumentListServiceModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_5__.InstrumentListUiModule, _adesso_ui_paging__WEBPACK_IMPORTED_MODULE_6__.PagingUiModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ConstituentsFeatureModule, {
    declarations: [_components_constituents_feature_component__WEBPACK_IMPORTED_MODULE_2__.ConstituentsFeatureComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_4__.InstrumentListServiceModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_5__.InstrumentListUiModule, _adesso_ui_paging__WEBPACK_IMPORTED_MODULE_6__.PagingUiModule],
    exports: [_components_constituents_feature_component__WEBPACK_IMPORTED_MODULE_2__.ConstituentsFeatureComponent]
  });
})();

/***/ }),

/***/ 39511:
/*!**************************************************************!*\
  !*** ./libs/@adesso/features/constituents/src/public-api.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstituentsFeatureComponent": () => (/* reexport safe */ _components_constituents_feature_component__WEBPACK_IMPORTED_MODULE_0__.ConstituentsFeatureComponent),
/* harmony export */   "ConstituentsFeatureModule": () => (/* reexport safe */ _constituents_feature_module__WEBPACK_IMPORTED_MODULE_1__.ConstituentsFeatureModule)
/* harmony export */ });
/* harmony import */ var _components_constituents_feature_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/constituents-feature.component */ 26758);
/* harmony import */ var _constituents_feature_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constituents-feature.module */ 74861);



/***/ }),

/***/ 79504:
/*!***********************************************************************!*\
  !*** ./libs/@adesso/features/constituents/src/translations/config.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [];

/***/ }),

/***/ 13855:
/*!***************************************************************************************!*\
  !*** ./libs/@adesso/pages/index-detail/src/components/index-detail-page.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexDetailPageComponent": () => (/* binding */ IndexDetailPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 30839);
/* harmony import */ var _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/service-instrument-detail */ 65124);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 24850);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _features_instrument_detail_header_src_components_instrument_detail_header_feature_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../features/instrument-detail-header/src/components/instrument-detail-header-feature.component */ 67739);
/* harmony import */ var _uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../uis/instrument-list/src/components/instrument-list/instrument-list-ui.component */ 38541);
/* harmony import */ var _features_constituents_src_components_constituents_feature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../features/constituents/src/components/constituents-feature.component */ 26758);
















function IndexDetailPageComponent_ng_container_2_feature_instrument_detail_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "feature-instrument-detail-header", 8);
  }
  if (rf & 2) {
    const pageConfig_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("instrument", ctx_r2.instrument)("breadCrumbItems", pageConfig_r1.breadCrumbItems)("chartQuoteBoxValues", pageConfig_r1.chartQuoteBoxValues)("instrumentHeader", pageConfig_r1.instrumentHeader);
  }
}
function IndexDetailPageComponent_ng_container_2_feature_constituents_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "feature-constituents", 9);
  }
  if (rf & 2) {
    const pageConfig_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("valor", pageConfig_r1.valor);
  }
}
function IndexDetailPageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, IndexDetailPageComponent_ng_container_2_feature_instrument_detail_header_1_Template, 1, 4, "feature-instrument-detail-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, IndexDetailPageComponent_ng_container_2_feature_constituents_2_Template, 1, 1, "feature-constituents", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "ui-instrument-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "ui-instrument-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "ui-instrument-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const pageConfig_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", pageConfig_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", pageConfig_r1.valor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 11, pageConfig_r1.germanIndices))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 13, "german-headline"))("tableType", ctx_r0.tableType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 15, pageConfig_r1.europeIndices))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 17, "europa-headline"))("tableType", ctx_r0.tableType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 19, pageConfig_r1.usaAndAsiaIndices))("headline", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 21, "usa-and-asia-headline"))("tableType", ctx_r0.tableType);
  }
}
class IndexDetailPageComponent {
  instrumentDetailService;
  translate;
  logger;
  instrumentListService;
  pageConfig$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.ReplaySubject();
  routerSubscription;
  config;
  tableType = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.UiInstrumentListTypeEnum.performance;
  quoteStreamUnderlying$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.ReplaySubject();
  instrument;
  constructor(instrumentDetailService, translate, logger, instrumentListService) {
    this.instrumentDetailService = instrumentDetailService;
    this.translate = translate;
    this.logger = logger;
    this.instrumentListService = instrumentListService;
    this.routerSubscription = this.instrumentDetailService.routerInstrument$().subscribe(instrument => {
      this.instrument = instrument;
      if (instrument) {
        this.config = {
          breadCrumbItems: this.getBreadCrumbItems(),
          chartQuoteBoxValues: this.getChartQuoteBoxValues(),
          instrumentHeader: this.instrumentDetailService.instrumentHeader(),
          valor: instrument.base?.valor,
          germanIndices: this.loadGermanIndices(),
          europeIndices: this.loadEuropeIndices(),
          usaAndAsiaIndices: this.loadUsaAndAsiaIndices()
        };
        this.pageConfig$.next(this.config);
      }
    });
  }
  getBreadCrumbItems() {
    return [{
      label: this.translate.instant("bread-crumb-label-home"),
      url: this.translate.instant(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.PageTypeEnum.home)
    }, {
      label: this.translate.instant("bread-crumb-label-overview"),
      url: this.translate.instant(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.PageTypeEnum.indexOverviewPage)
    }, {
      label: this.translate.instant("bread-crumb-label-search"),
      url: this.translate.instant(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.PageTypeEnum.indexSearchPage)
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
    }]);
    return result;
  }
  loadGermanIndices() {
    return this.loadInstruments([_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.dax.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.tecDax.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.mDax.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.sDax.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.hDax.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.cDax.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.divDax.toString()]);
  }
  loadEuropeIndices() {
    return this.loadInstruments([_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.stoxxEurope50.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.euroStoxx50.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.ftse100.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.smi.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.cac40.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.ibex35.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.atx.toString()]);
  }
  loadUsaAndAsiaIndices() {
    return this.loadInstruments([_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.dowJones.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.sp500.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.nasdaq100.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.nikkei225.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.hangSeng.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.kospi200.toString(), _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.InstrumentValorEnum.spBseSensex.toString()]);
  }
  loadInstruments(ids) {
    return this.instrumentListService.getInstrumentTable(ids, this.tableType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(result => result ? result.result : []));
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
  static ɵfac = function IndexDetailPageComponent_Factory(t) {
    return new (t || IndexDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_0__.InstrumentDetailService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_1__.LoggerUtil), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_3__.InstrumentListService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: IndexDetailPageComponent,
    selectors: [["page-index-detail"]],
    decls: 4,
    vars: 3,
    consts: [[1, "main-content-background"], [1, "inner-content-area"], [4, "ngIf"], [3, "instrument", "breadCrumbItems", "chartQuoteBoxValues", "instrumentHeader", 4, "ngIf"], [3, "valor", 4, "ngIf"], [1, "content-columns"], [1, "content-column"], [3, "listItems", "headline", "tableType"], [3, "instrument", "breadCrumbItems", "chartQuoteBoxValues", "instrumentHeader"], [3, "valor"]],
    template: function IndexDetailPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, IndexDetailPageComponent_ng_container_2_Template, 16, 23, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, ctx.pageConfig$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _features_instrument_detail_header_src_components_instrument_detail_header_feature_component__WEBPACK_IMPORTED_MODULE_4__.InstrumentDetailHeaderFeatureComponent, _uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_5__.InstrumentListUiComponent, _features_constituents_src_components_constituents_feature_component__WEBPACK_IMPORTED_MODULE_6__.ConstituentsFeatureComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
    styles: [".loading-page[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  vertical-align: center;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 2;\n}\n.loading-page[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  padding-top: 40vh;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 33926:
/*!*************************************************************************!*\
  !*** ./libs/@adesso/pages/index-detail/src/index-detail-page.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexDetailPageModule": () => (/* binding */ IndexDetailPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _components_index_detail_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index-detail-page.component */ 13855);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/config */ 53112);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _adesso_feature_instrument_detail_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @adesso/feature-instrument-detail-header */ 7681);
/* harmony import */ var _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @adesso/service-instrument-detail */ 65124);
/* harmony import */ var _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @adesso/ui-instrument-list */ 20372);
/* harmony import */ var _base_util_ng_let__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @base/util-ng-let */ 91535);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var _adesso_feature_constituents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @adesso/feature-constituents */ 39511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94650);
















const routes = [{
  path: "",
  component: _components_index_detail_page_component__WEBPACK_IMPORTED_MODULE_2__.IndexDetailPageComponent
}];
class IndexDetailPageModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_3__.translationConfig);
  }
  static ɵfac = function IndexDetailPageModule_Factory(t) {
    return new (t || IndexDetailPageModule)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: IndexDetailPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes), _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _adesso_feature_instrument_detail_header__WEBPACK_IMPORTED_MODULE_4__.InstrumentDetailHeaderFeatureModule, _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_5__.InstrumentDetailServiceModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_6__.InstrumentListUiModule, _base_util_ng_let__WEBPACK_IMPORTED_MODULE_7__.NgLetUtilModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_8__.InstrumentListServiceModule, _adesso_feature_constituents__WEBPACK_IMPORTED_MODULE_9__.ConstituentsFeatureModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](IndexDetailPageModule, {
    declarations: [_components_index_detail_page_component__WEBPACK_IMPORTED_MODULE_2__.IndexDetailPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _adesso_feature_instrument_detail_header__WEBPACK_IMPORTED_MODULE_4__.InstrumentDetailHeaderFeatureModule, _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_5__.InstrumentDetailServiceModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_6__.InstrumentListUiModule, _base_util_ng_let__WEBPACK_IMPORTED_MODULE_7__.NgLetUtilModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_8__.InstrumentListServiceModule, _adesso_feature_constituents__WEBPACK_IMPORTED_MODULE_9__.ConstituentsFeatureModule]
  });
})();

/***/ }),

/***/ 32153:
/*!***********************************************************!*\
  !*** ./libs/@adesso/pages/index-detail/src/public-api.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexDetailPageComponent": () => (/* reexport safe */ _components_index_detail_page_component__WEBPACK_IMPORTED_MODULE_1__.IndexDetailPageComponent),
/* harmony export */   "IndexDetailPageModule": () => (/* reexport safe */ _index_detail_page_module__WEBPACK_IMPORTED_MODULE_0__.IndexDetailPageModule)
/* harmony export */ });
/* harmony import */ var _index_detail_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-detail-page.module */ 33926);
/* harmony import */ var _components_index_detail_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/index-detail-page.component */ 13855);



/***/ }),

/***/ 53112:
/*!********************************************************************!*\
  !*** ./libs/@adesso/pages/index-detail/src/translations/config.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [{
  term: "constituents-headline",
  deDe: "Zusammensetzung",
  enUs: "Constituents"
}, {
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

/***/ }),

/***/ 59987:
/*!***********************************************************************!*\
  !*** ./libs/@adesso/uis/paging/src/components/paging-ui.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagingUiComponent": () => (/* binding */ PagingUiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36895);



function PagingUiComponent_div_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagingUiComponent_div_0_span_1_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.switchPage(ctx_r8.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "<");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PagingUiComponent_div_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 7);
  }
}
function PagingUiComponent_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagingUiComponent_div_0_ng_container_3_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.switchPage(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "paging-item-active": a0
  };
};
function PagingUiComponent_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagingUiComponent_div_0_ng_container_4_Template_span_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const page_r12 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.switchPage(page_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const page_r12 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, page_r12 === ctx_r4.currentPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r12);
  }
}
function PagingUiComponent_div_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagingUiComponent_div_0_ng_container_5_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.switchPage(ctx_r15.pageCountValue));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.pageCountValue);
  }
}
function PagingUiComponent_div_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagingUiComponent_div_0_span_6_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.switchPage(ctx_r17.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PagingUiComponent_div_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 7);
  }
}
function PagingUiComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PagingUiComponent_div_0_span_1_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PagingUiComponent_div_0_span_2_Template, 1, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PagingUiComponent_div_0_ng_container_3_Template, 4, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PagingUiComponent_div_0_ng_container_4_Template, 3, 4, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PagingUiComponent_div_0_ng_container_5_Template, 4, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PagingUiComponent_div_0_span_6_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PagingUiComponent_div_0_span_7_Template, 1, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentPage != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentPage == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showFirstPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showLastPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentPage != ctx_r0.pageCountValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentPage == ctx_r0.pageCountValue);
  }
}
class PagingUiComponent {
  currentPage;
  pageCountValue;
  set pageCount(value) {
    this.pageCountValue = value;
    this.calculatePages();
    if (this.currentPage) {
      this.pageSelected?.emit(this.currentPage);
    }
  }
  pageSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  pages;
  showFirstPage;
  showLastPage;
  ngOnInit() {
    this.calculatePages();
  }
  switchPage(newPage) {
    if (newPage === this.currentPage) {
      return;
    }
    this.pageSelected.emit(newPage);
    this.currentPage = newPage;
    this.calculatePages();
  }
  calculatePages() {
    this.pages = [];
    const maxShowingPages = 4;
    let from = 1;
    let to = this.pageCountValue;
    if (this.currentPage != null) {
      if (from < this.currentPage - maxShowingPages / 2) {
        from = this.currentPage - maxShowingPages / 2;
        if (from < 1) {
          from = 1;
        }
      }
    }
    if (to > from + maxShowingPages) {
      to = from + maxShowingPages;
    }
    if (from > to - maxShowingPages) {
      from = to - maxShowingPages;
      if (from < 1) {
        from = 1;
      }
    }
    if (from === 2) {
      from = 1;
    }
    if (to === this.pageCountValue - 1) {
      to = this.pageCountValue;
    }
    this.showFirstPage = from > 1;
    this.showLastPage = to < this.pageCountValue;
    for (let i = from; i <= to; i++) {
      this.pages.push(i);
    }
  }
  static ɵfac = function PagingUiComponent_Factory(t) {
    return new (t || PagingUiComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PagingUiComponent,
    selectors: [["ui-paging"]],
    inputs: {
      currentPage: "currentPage",
      pageCount: "pageCount"
    },
    outputs: {
      pageSelected: "pageSelected"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "paging", 4, "ngIf"], [1, "paging"], ["class", "paging-item paging-item-move", 3, "click", 4, "ngIf"], ["class", "paging-item paging-item-move-placeholder", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "paging-item", "paging-item-move", 3, "click"], [1, "paging-item", "paging-item-move-placeholder"], [1, "paging-item", 3, "click"], [1, "paging-item", 3, "ngClass", "click"]],
    template: function PagingUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PagingUiComponent_div_0_Template, 8, 7, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageCountValue > 1 && ctx.currentPage);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".paging[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  cursor: default;\n  -webkit-touch-callout: none; \n  -webkit-user-select: none;    \n  user-select: none;\n  white-space: nowrap;\n}\n.paging[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .paging[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .paging[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .paging[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\n.paging-item[_ngcontent-%COMP%] {\n  padding: 5px 3px;\n  margin: 0 1px;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.paging-item-active[_ngcontent-%COMP%] {\n  background-color: #0098db;\n  color: #ffffff;\n  border-radius: 90px;\n  width: 25px;\n  height: 25px;\n  padding: 5px;\n  text-align: center;\n  line-height: 25px;\n  cursor: default;\n}\n\n.paging-item-move[_ngcontent-%COMP%] {\n  border: 2px solid #0098db;\n  border-radius: 90px;\n  width: 25px;\n  height: 25px;\n  padding: 5px;\n  text-align: center;\n  line-height: 25px;\n  cursor: pointer;\n}\n\n.paging-item-move-placeholder[_ngcontent-%COMP%] {\n  width: 29px;\n  padding: 5px;\n  cursor: default;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 34477:
/*!*********************************************************!*\
  !*** ./libs/@adesso/uis/paging/src/paging-ui.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagingUiModule": () => (/* binding */ PagingUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _components_paging_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/paging-ui.component */ 59987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);



class PagingUiModule {
  static ɵfac = function PagingUiModule_Factory(t) {
    return new (t || PagingUiModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PagingUiModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PagingUiModule, {
    declarations: [_components_paging_ui_component__WEBPACK_IMPORTED_MODULE_0__.PagingUiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_components_paging_ui_component__WEBPACK_IMPORTED_MODULE_0__.PagingUiComponent]
  });
})();

/***/ }),

/***/ 36116:
/*!***************************************************!*\
  !*** ./libs/@adesso/uis/paging/src/public-api.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagingUiComponent": () => (/* reexport safe */ _components_paging_ui_component__WEBPACK_IMPORTED_MODULE_0__.PagingUiComponent),
/* harmony export */   "PagingUiModule": () => (/* reexport safe */ _paging_ui_module__WEBPACK_IMPORTED_MODULE_1__.PagingUiModule)
/* harmony export */ });
/* harmony import */ var _components_paging_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/paging-ui.component */ 59987);
/* harmony import */ var _paging_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paging-ui.module */ 34477);



/***/ })

}]);