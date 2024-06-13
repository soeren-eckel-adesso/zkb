"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_derivative-detail_src_public-api_ts"],{

/***/ 88678:
/*!*************************************************************************************************!*\
  !*** ./libs/@adesso/pages/derivative-detail/src/components/derivative-detail-page.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DerivativeDetailPageComponent": () => (/* binding */ DerivativeDetailPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 30839);
/* harmony import */ var _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/service-instrument-detail */ 65124);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _features_instrument_detail_header_src_components_instrument_detail_header_feature_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../features/instrument-detail-header/src/components/instrument-detail-header-feature.component */ 67739);











function DerivativeDetailPageComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "feature-instrument-detail-header", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const pageConfig_r3 = ctx.ngIf;
    const quoteStreamUnderlying_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("instrument", ctx_r2.instrument)("underlying", ctx_r2.underlying)("breadCrumbItems", pageConfig_r3.breadCrumbItems)("chartQuoteBoxValues", pageConfig_r3.chartQuoteBoxValues)("instrumentHeader", pageConfig_r3.instrumentHeader)("underlyingChartQuoteBoxValues", quoteStreamUnderlying_r1);
  }
}
function DerivativeDetailPageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DerivativeDetailPageComponent_ng_container_2_ng_container_1_Template, 2, 6, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r0.pageConfig$));
  }
}
class DerivativeDetailPageComponent {
  instrumentDetailService;
  translate;
  logger;
  pageConfig$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject();
  quoteStreamUnderlying$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject();
  routerSubscription;
  instrument;
  underlying;
  constructor(instrumentDetailService, translate, logger) {
    this.instrumentDetailService = instrumentDetailService;
    this.translate = translate;
    this.logger = logger;
    this.routerSubscription = this.instrumentDetailService.routerInstrument$().subscribe(instrument => {
      this.instrument = instrument;
      if (this.instrument) {
        const config = {
          breadCrumbItems: this.getBreadCrumbItems(),
          chartQuoteBoxValues: this.getChartQuoteBoxValues(),
          instrumentHeader: instrumentDetailService.instrumentHeader()
        };
        this.pageConfig$.next(config);
        this.instrumentDetailService.loadInstrument(this.instrument.derivativeData.underlyings[0].isin).subscribe(underlying => {
          this.underlying = underlying;
          const quote = this.getChartQuoteBoxValues();
          if (quote) this.quoteStreamUnderlying$.next(quote);
        });
      }
    });
  }
  getBreadCrumbItems() {
    return [{
      label: "Startseite",
      url: "/"
    }, {
      label: this.instrument.derivativeData.derivativeType.name === "Knock-Out & Open-End Knock-Out" ? "Hebelprodukte" : "Anlageprodukte",
      url: this.instrument.derivativeData.derivativeType.name === "Knock-Out & Open-End Knock-Out" ? "/hebelprodukte" : "/anlageprodukte"
    }, {
      label: this.instrument.derivativeData.derivativeType.name,
      url: this.instrument.derivativeData.derivativeType.name === "Knock-Out & Open-End Knock-Out" ? "/hebelprodukte" : "/anlageprodukte"
    }, {
      label: this.instrument.base?.isin ?? ""
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
  static ɵfac = function DerivativeDetailPageComponent_Factory(t) {
    return new (t || DerivativeDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_0__.InstrumentDetailService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_1__.LoggerUtil));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DerivativeDetailPageComponent,
    selectors: [["page-derivative-detail"]],
    decls: 14,
    vars: 4,
    consts: [[1, "main-content-background"], [1, "inner-content-area"], [4, "ngIf"], [1, "text-center", "d-none", "d-xl-block", 2, "margin-top", "96px"], ["src", "assets/simulator.png"], [1, "bg-light", "p-4", "d-none", "d-xl-block", 2, "margin-top", "96px"], [1, "mb-4"], ["src", "assets/table.png"], [1, "d-none", "d-xl-block", 2, "margin-top", "96px"], ["src", "assets/article.png"], [3, "instrument", "underlying", "breadCrumbItems", "chartQuoteBoxValues", "instrumentHeader", "underlyingChartQuoteBoxValues"]],
    template: function DerivativeDetailPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DerivativeDetailPageComponent_ng_container_2_Template, 3, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5)(7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Mit \u00E4hnlicher Seitw\u00E4rtsrendite.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, ctx.quoteStreamUnderlying$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Alternative ", ctx.instrument == null ? null : ctx.instrument.base == null ? null : ctx.instrument.base.name, "");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _features_instrument_detail_header_src_components_instrument_detail_header_feature_component__WEBPACK_IMPORTED_MODULE_3__.InstrumentDetailHeaderFeatureComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: [".loading-page[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  vertical-align: center;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 2;\n}\n.loading-page[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  padding-top: 40vh;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 88108:
/*!***********************************************************************************!*\
  !*** ./libs/@adesso/pages/derivative-detail/src/derivative-detail-page.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DerivativeDetailPageModule": () => (/* binding */ DerivativeDetailPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _components_derivative_detail_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/derivative-detail-page.component */ 88678);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/config */ 24136);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _adesso_feature_instrument_detail_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @adesso/feature-instrument-detail-header */ 7681);
/* harmony import */ var _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @adesso/service-instrument-detail */ 65124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);












const routes = [{
  path: "",
  component: _components_derivative_detail_page_component__WEBPACK_IMPORTED_MODULE_2__.DerivativeDetailPageComponent
}];
class DerivativeDetailPageModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_3__.translationConfig);
  }
  static ɵfac = function DerivativeDetailPageModule_Factory(t) {
    return new (t || DerivativeDetailPageModule)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: DerivativeDetailPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _adesso_feature_instrument_detail_header__WEBPACK_IMPORTED_MODULE_4__.InstrumentDetailHeaderFeatureModule, _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_5__.InstrumentDetailServiceModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DerivativeDetailPageModule, {
    declarations: [_components_derivative_detail_page_component__WEBPACK_IMPORTED_MODULE_2__.DerivativeDetailPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _adesso_feature_instrument_detail_header__WEBPACK_IMPORTED_MODULE_4__.InstrumentDetailHeaderFeatureModule, _adesso_service_instrument_detail__WEBPACK_IMPORTED_MODULE_5__.InstrumentDetailServiceModule]
  });
})();

/***/ }),

/***/ 60379:
/*!****************************************************************!*\
  !*** ./libs/@adesso/pages/derivative-detail/src/public-api.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DerivativeDetailPageComponent": () => (/* reexport safe */ _components_derivative_detail_page_component__WEBPACK_IMPORTED_MODULE_1__.DerivativeDetailPageComponent),
/* harmony export */   "DerivativeDetailPageModule": () => (/* reexport safe */ _derivative_detail_page_module__WEBPACK_IMPORTED_MODULE_0__.DerivativeDetailPageModule)
/* harmony export */ });
/* harmony import */ var _derivative_detail_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./derivative-detail-page.module */ 88108);
/* harmony import */ var _components_derivative_detail_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/derivative-detail-page.component */ 88678);



/***/ }),

/***/ 24136:
/*!*************************************************************************!*\
  !*** ./libs/@adesso/pages/derivative-detail/src/translations/config.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [];

/***/ })

}]);