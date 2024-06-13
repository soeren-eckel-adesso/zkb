"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_etf-detail_src_public-api_ts"],{

/***/ 70495:
/*!***********************************************************************************!*\
  !*** ./libs/@adesso/pages/etf-detail/src/components/etf-detail-page.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EtfDetailPageComponent": () => (/* binding */ EtfDetailPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 30839);
/* harmony import */ var _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/service-instrument-detail */ 65124);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _features_instrument_detail_header_src_components_instrument_detail_header_feature_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../features/instrument-detail-header/src/components/instrument-detail-header-feature.component */ 67739);
/* harmony import */ var _uis_content_box_src_components_content_box_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../uis/content-box/src/components/content-box-ui.component */ 79661);
/* harmony import */ var _uis_key_value_list_src_components_key_value_list_key_value_list_ui_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../uis/key-value-list/src/components/key-value-list/key-value-list-ui.component */ 20559);
/* harmony import */ var _uis_composition_src_components_composition_ui_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../uis/composition/src/components/composition-ui.component */ 77037);














function EtfDetailPageComponent_ng_container_2_ui_content_box_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ui-content-box", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pageConfig_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("headline", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, "strategy-headline"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](pageConfig_r1.strategy);
  }
}
function EtfDetailPageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "feature-instrument-detail-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4)(3, "div", 5)(4, "ui-content-box", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ui-key-value-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5)(8, "ui-content-box", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "ui-key-value-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 4)(12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "ui-composition", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "ui-composition", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "ui-composition", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, EtfDetailPageComponent_ng_container_2_ui_content_box_21_Template, 3, 4, "ui-content-box", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const pageConfig_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("breadCrumbItems", pageConfig_r1.breadCrumbItems)("chartQuoteBoxValues", pageConfig_r1.chartQuoteBoxValues)("instrumentHeader", pageConfig_r1.instrumentHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("headline", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 14, "base-data-headline"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", pageConfig_r1.baseData);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("headline", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 16, "costs-headline"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", pageConfig_r1.costs);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("compositions", pageConfig_r1.countryCompositions)("headline", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 18, "composition-country-headline"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("compositions", pageConfig_r1.industryCompositions)("headline", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 20, "composition-industry-headline"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("compositions", pageConfig_r1.equityCompositions)("headline", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 22, "composition-equity-headline"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", pageConfig_r1.strategy);
  }
}
class EtfDetailPageComponent {
  instrumentDetailService;
  translate;
  logger;
  pageConfig$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.ReplaySubject();
  routerSubscription;
  constructor(instrumentDetailService, translate, logger) {
    this.instrumentDetailService = instrumentDetailService;
    this.translate = translate;
    this.logger = logger;
    this.routerSubscription = this.instrumentDetailService.routerInstrument$().subscribe(instrument => {
      if (instrument) {
        const config = {
          breadCrumbItems: this.getBreadCrumbItems(),
          chartQuoteBoxValues: this.getChartQuoteBoxValues(),
          instrumentHeader: instrumentDetailService.instrumentHeader(),
          baseData: this.getBaseData(),
          costs: this.getCostData(),
          countryCompositions: instrumentDetailService.composition(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.CompositionTypeEnum.country),
          industryCompositions: instrumentDetailService.composition(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.CompositionTypeEnum.industry),
          equityCompositions: instrumentDetailService.composition(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.CompositionTypeEnum.equity),
          strategy: instrumentDetailService.strategy()
        };
        this.pageConfig$.next(config);
      }
    });
  }
  getBaseData() {
    const key = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.KeyValueListOptionEnum;
    return this.instrumentDetailService.extractKeyValueListValues([{
      option: key.distributionType
    }, {
      option: key.replication
    }, {
      option: key.fundAssets
    }, {
      option: key.fundCurrency
    }, {
      option: key.savingsPlan
    }]);
  }
  getCostData() {
    const key = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.KeyValueListOptionEnum;
    return this.instrumentDetailService.extractKeyValueListValues([{
      option: key.runningCostsPerAnnum
    }, {
      option: key.performanceFeePerAnnum
    }]);
  }
  getBreadCrumbItems() {
    return [{
      label: this.translate.instant("bread-crumb-label-home"),
      url: this.translate.instant(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.PageTypeEnum.home)
    }, {
      label: this.translate.instant("bread-crumb-label-overview"),
      url: this.translate.instant(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.PageTypeEnum.etfOverviewPage)
    }, {
      label: this.translate.instant("bread-crumb-label-search"),
      url: this.translate.instant(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.PageTypeEnum.etfSearchPage)
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
      option: key.fundCategory
    }, {
      option: key.fundTypeFocus
    }, {
      option: key.morningstar
    }]);
    return result;
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
  static ɵfac = function EtfDetailPageComponent_Factory(t) {
    return new (t || EtfDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_0__.InstrumentDetailService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_1__.LoggerUtil));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: EtfDetailPageComponent,
    selectors: [["page-etf-detail"]],
    decls: 4,
    vars: 3,
    consts: [[1, "main-content-background"], [1, "inner-content-area"], [4, "ngIf"], [3, "breadCrumbItems", "chartQuoteBoxValues", "instrumentHeader"], [1, "content-columns"], [1, "content-column"], [3, "headline"], [3, "items"], [3, "compositions", "headline"], [3, "headline", 4, "ngIf"]],
    template: function EtfDetailPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EtfDetailPageComponent_ng_container_2_Template, 22, 24, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, ctx.pageConfig$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _features_instrument_detail_header_src_components_instrument_detail_header_feature_component__WEBPACK_IMPORTED_MODULE_3__.InstrumentDetailHeaderFeatureComponent, _uis_content_box_src_components_content_box_ui_component__WEBPACK_IMPORTED_MODULE_4__.ContentBoxUiComponent, _uis_key_value_list_src_components_key_value_list_key_value_list_ui_component__WEBPACK_IMPORTED_MODULE_5__.KeyValueListUiComponent, _uis_composition_src_components_composition_ui_component__WEBPACK_IMPORTED_MODULE_6__.CompositionUiComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
    styles: [".loading-page[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  vertical-align: center;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 2;\n}\n.loading-page[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  padding-top: 40vh;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 9499:
/*!*********************************************************************!*\
  !*** ./libs/@adesso/pages/etf-detail/src/etf-detail-page.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EtfDetailPageModule": () => (/* binding */ EtfDetailPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _components_etf_detail_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/etf-detail-page.component */ 70495);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/config */ 9285);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _adesso_feature_instrument_detail_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @adesso/feature-instrument-detail-header */ 7681);
/* harmony import */ var _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @adesso/service-instrument-detail */ 65124);
/* harmony import */ var _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @adesso/ui-content-box */ 96524);
/* harmony import */ var _adesso_ui_key_value_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @adesso/ui-key-value-list */ 68147);
/* harmony import */ var _adesso_ui_composition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @adesso/ui-composition */ 87317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94650);















const routes = [{
  path: "",
  component: _components_etf_detail_page_component__WEBPACK_IMPORTED_MODULE_2__.EtfDetailPageComponent
}];
class EtfDetailPageModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_3__.translationConfig);
  }
  static ɵfac = function EtfDetailPageModule_Factory(t) {
    return new (t || EtfDetailPageModule)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: EtfDetailPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes), _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _adesso_feature_instrument_detail_header__WEBPACK_IMPORTED_MODULE_4__.InstrumentDetailHeaderFeatureModule, _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_5__.InstrumentDetailServiceModule, _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_6__.ContentBoxUiModule, _adesso_ui_key_value_list__WEBPACK_IMPORTED_MODULE_7__.KeyValueListUiModule, _adesso_ui_composition__WEBPACK_IMPORTED_MODULE_8__.CompositionUiModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](EtfDetailPageModule, {
    declarations: [_components_etf_detail_page_component__WEBPACK_IMPORTED_MODULE_2__.EtfDetailPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _adesso_feature_instrument_detail_header__WEBPACK_IMPORTED_MODULE_4__.InstrumentDetailHeaderFeatureModule, _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_5__.InstrumentDetailServiceModule, _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_6__.ContentBoxUiModule, _adesso_ui_key_value_list__WEBPACK_IMPORTED_MODULE_7__.KeyValueListUiModule, _adesso_ui_composition__WEBPACK_IMPORTED_MODULE_8__.CompositionUiModule]
  });
})();

/***/ }),

/***/ 83120:
/*!*********************************************************!*\
  !*** ./libs/@adesso/pages/etf-detail/src/public-api.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EtfDetailPageComponent": () => (/* reexport safe */ _components_etf_detail_page_component__WEBPACK_IMPORTED_MODULE_1__.EtfDetailPageComponent),
/* harmony export */   "EtfDetailPageModule": () => (/* reexport safe */ _etf_detail_page_module__WEBPACK_IMPORTED_MODULE_0__.EtfDetailPageModule)
/* harmony export */ });
/* harmony import */ var _etf_detail_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./etf-detail-page.module */ 9499);
/* harmony import */ var _components_etf_detail_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/etf-detail-page.component */ 70495);



/***/ }),

/***/ 9285:
/*!******************************************************************!*\
  !*** ./libs/@adesso/pages/etf-detail/src/translations/config.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [{
  term: "composition-country-headline",
  deDe: "Länder",
  enUs: "Countries"
}, {
  term: "composition-industry-headline",
  deDe: "Branchen",
  enUs: "Industry"
}, {
  term: "composition-equity-headline",
  deDe: "Positionen",
  enUs: "Equity"
}, {
  term: "strategy-headline",
  deDe: "Strategie",
  enUs: "Strategy"
}, {
  term: "base-data-headline",
  deDe: "Stammdaten",
  enUs: "base data"
}, {
  term: "costs-headline",
  deDe: "Kosten",
  enUs: "costs"
}];

/***/ })

}]);