"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_exchange-rate-detail_src_public-api_ts"],{

/***/ 63443:
/*!*******************************************************************************************************!*\
  !*** ./libs/@adesso/pages/exchange-rate-detail/src/components/exchange-rate-detail-page.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeRateDetailPageComponent": () => (/* binding */ ExchangeRateDetailPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 30839);
/* harmony import */ var _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/service-instrument-detail */ 65124);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _features_instrument_detail_header_src_components_instrument_detail_header_feature_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../features/instrument-detail-header/src/components/instrument-detail-header-feature.component */ 67739);











function ExchangeRateDetailPageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "feature-instrument-detail-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const pageConfig_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadCrumbItems", pageConfig_r1.breadCrumbItems)("chartQuoteBoxValues", pageConfig_r1.chartQuoteBoxValues)("instrumentHeader", pageConfig_r1.instrumentHeader);
  }
}
class ExchangeRateDetailPageComponent {
  instrumentDetailService;
  translate;
  logger;
  pageConfig$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject();
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
          instrumentHeader: instrumentDetailService.instrumentHeader()
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
      url: this.translate.instant(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.PageTypeEnum.exchangeRateOverviewPage)
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
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
  static ɵfac = function ExchangeRateDetailPageComponent_Factory(t) {
    return new (t || ExchangeRateDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_0__.InstrumentDetailService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_1__.LoggerUtil));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ExchangeRateDetailPageComponent,
    selectors: [["page-exchange-rate-detail"]],
    decls: 4,
    vars: 3,
    consts: [[1, "main-content-background"], [1, "inner-content-area"], [4, "ngIf"], [3, "breadCrumbItems", "chartQuoteBoxValues", "instrumentHeader"]],
    template: function ExchangeRateDetailPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExchangeRateDetailPageComponent_ng_container_2_Template, 2, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, ctx.pageConfig$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _features_instrument_detail_header_src_components_instrument_detail_header_feature_component__WEBPACK_IMPORTED_MODULE_3__.InstrumentDetailHeaderFeatureComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: [".loading-page[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  vertical-align: center;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 2;\n}\n.loading-page[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  padding-top: 40vh;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 27962:
/*!*****************************************************************************************!*\
  !*** ./libs/@adesso/pages/exchange-rate-detail/src/exchange-rate-detail-page.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeRateDetailPageModule": () => (/* binding */ ExchangeRateDetailPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _components_exchange_rate_detail_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/exchange-rate-detail-page.component */ 63443);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/config */ 58511);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _adesso_feature_instrument_detail_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @adesso/feature-instrument-detail-header */ 7681);
/* harmony import */ var _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @adesso/service-instrument-detail */ 65124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);












const routes = [{
  path: "",
  component: _components_exchange_rate_detail_page_component__WEBPACK_IMPORTED_MODULE_2__.ExchangeRateDetailPageComponent
}];
class ExchangeRateDetailPageModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_3__.translationConfig);
  }
  static ɵfac = function ExchangeRateDetailPageModule_Factory(t) {
    return new (t || ExchangeRateDetailPageModule)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: ExchangeRateDetailPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _adesso_feature_instrument_detail_header__WEBPACK_IMPORTED_MODULE_4__.InstrumentDetailHeaderFeatureModule, _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_5__.InstrumentDetailServiceModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ExchangeRateDetailPageModule, {
    declarations: [_components_exchange_rate_detail_page_component__WEBPACK_IMPORTED_MODULE_2__.ExchangeRateDetailPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _adesso_feature_instrument_detail_header__WEBPACK_IMPORTED_MODULE_4__.InstrumentDetailHeaderFeatureModule, _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_5__.InstrumentDetailServiceModule]
  });
})();

/***/ }),

/***/ 12392:
/*!*******************************************************************!*\
  !*** ./libs/@adesso/pages/exchange-rate-detail/src/public-api.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeRateDetailPageComponent": () => (/* reexport safe */ _components_exchange_rate_detail_page_component__WEBPACK_IMPORTED_MODULE_1__.ExchangeRateDetailPageComponent),
/* harmony export */   "ExchangeRateDetailPageModule": () => (/* reexport safe */ _exchange_rate_detail_page_module__WEBPACK_IMPORTED_MODULE_0__.ExchangeRateDetailPageModule)
/* harmony export */ });
/* harmony import */ var _exchange_rate_detail_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange-rate-detail-page.module */ 27962);
/* harmony import */ var _components_exchange_rate_detail_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/exchange-rate-detail-page.component */ 63443);



/***/ }),

/***/ 58511:
/*!****************************************************************************!*\
  !*** ./libs/@adesso/pages/exchange-rate-detail/src/translations/config.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [];

/***/ })

}]);