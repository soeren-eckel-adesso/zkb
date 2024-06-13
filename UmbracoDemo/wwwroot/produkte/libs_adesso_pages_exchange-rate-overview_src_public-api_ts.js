"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_exchange-rate-overview_src_public-api_ts"],{

/***/ 89570:
/*!*********************************************************************************************************!*\
  !*** ./libs/@adesso/features/currency-converter/src/components/currency-converter-feature.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyConverterFeatureComponent": () => (/* binding */ CurrencyConverterFeatureComponent)
/* harmony export */ });
/* harmony import */ var _adesso_ui_form_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/ui-form-input */ 42298);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _stroeer_repository_currency_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stroeer/repository-currency-converter */ 97317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 92198);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 87545);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 24850);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 2994);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 36787);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 21086);
/* harmony import */ var _enums_current_focus_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/current-focus.enum */ 6343);
/* harmony import */ var _enums_last_focus_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/last-focus.enum */ 41028);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uis_form_input_src_components_form_input_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../uis/form-input/src/components/form-input-ui.component */ 85068);
/* harmony import */ var _uis_formular_src_components_select_select_ui_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../uis/formular/src/components/select/select-ui.component */ 48269);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 42466);













function CurrencyConverterFeatureComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2)(5, "ui-form-input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("focusChanged", function CurrencyConverterFeatureComponent_div_0_Template_ui_form_input_focusChanged_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.firstInputHaseFocus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ui-form-input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("focusChanged", function CurrencyConverterFeatureComponent_div_0_Template_ui_form_input_focusChanged_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.secondInputHaseFocus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 2)(8, "ui-select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("changeValue", function CurrencyConverterFeatureComponent_div_0_Template_ui_select_changeValue_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.firstCurrency.setValue($event.toString()));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ui-select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("changeValue", function CurrencyConverterFeatureComponent_div_0_Template_ui_select_changeValue_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.secondCurrency.setValue($event.toString()));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const exchangeRate_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_2_0;
    let tmp_5_0;
    let tmp_8_0;
    let tmp_10_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 13, "currency-converter"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r0.inputType.text)("label", (tmp_2_0 = ctx_r0.firstCurrency.value) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "")("control", ctx_r0.firstCurrencyValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r0.inputType.text)("label", (tmp_5_0 = ctx_r0.secondCurrency.value) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "")("control", ctx_r0.secondCurrencyValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx_r0.currencyList)("selectedId", (tmp_8_0 = ctx_r0.firstCurrency.value) !== null && tmp_8_0 !== undefined ? tmp_8_0 : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx_r0.currencyList)("selectedId", (tmp_10_0 = ctx_r0.secondCurrency.value) !== null && tmp_10_0 !== undefined ? tmp_10_0 : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 15, "exchange-rate"), ": ", exchangeRate_r1, "");
  }
}
class CurrencyConverterFeatureComponent {
  currencyConverterRepository;
  inputType = _adesso_ui_form_input__WEBPACK_IMPORTED_MODULE_0__.InputTypeEnum;
  exchangeRate$;
  initRequest$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(false);
  firstCurrencyValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(1);
  secondCurrencyValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl();
  firstCurrency = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("EUR");
  secondCurrency = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("USD");
  exchangeRate;
  currentFocus = _enums_current_focus_enum__WEBPACK_IMPORTED_MODULE_2__.CurrentFocusEnum.none;
  lastFocus = _enums_last_focus_enum__WEBPACK_IMPORTED_MODULE_3__.LastFocusEnum.first;
  currencyList = [{
    id: "EUR",
    label: "EUR"
  }, {
    id: "USD",
    label: "USD"
  }, {
    id: "GBP",
    label: "GBP"
  }, {
    id: "JPY",
    label: "JPY"
  }, {
    id: "CHF",
    label: "CHF"
  }];
  constructor(currencyConverterRepository) {
    this.currencyConverterRepository = currencyConverterRepository;
    this.exchangeRate$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(this.initRequest$, this.firstCurrency.valueChanges, this.secondCurrency.valueChanges, this.firstCurrencyValue.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(() => this.currentFocus === _enums_current_focus_enum__WEBPACK_IMPORTED_MODULE_2__.CurrentFocusEnum.first)), this.secondCurrencyValue.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(() => this.currentFocus === _enums_current_focus_enum__WEBPACK_IMPORTED_MODULE_2__.CurrentFocusEnum.second))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(() => {
      if (this.currentFocus === _enums_current_focus_enum__WEBPACK_IMPORTED_MODULE_2__.CurrentFocusEnum.none) {
        return this.currencyConverterRepository.getExchangeRate(this.firstCurrency.value ?? "", this.secondCurrency.value ?? "").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(apiResult => apiResult.exchangeRate));
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(this.exchangeRate);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(exchangeRate => this.exchangeRate = exchangeRate), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(exchangeRate => {
      if (this.lastFocus === _enums_last_focus_enum__WEBPACK_IMPORTED_MODULE_3__.LastFocusEnum.first) {
        this.secondCurrencyValue.setValue(+exchangeRate * +(this.firstCurrencyValue.value ?? 0));
      } else {
        this.firstCurrencyValue.setValue(+this.secondCurrencyValue.value / +exchangeRate);
      }
      return exchangeRate;
    }));
  }
  ngOnInit() {
    this.initRequest$.next(true);
  }
  firstInputHaseFocus(value) {
    if (value) {
      this.currentFocus = _enums_current_focus_enum__WEBPACK_IMPORTED_MODULE_2__.CurrentFocusEnum.first;
      this.lastFocus = _enums_last_focus_enum__WEBPACK_IMPORTED_MODULE_3__.LastFocusEnum.first;
    } else {
      this.currentFocus = _enums_current_focus_enum__WEBPACK_IMPORTED_MODULE_2__.CurrentFocusEnum.none;
    }
  }
  secondInputHaseFocus(value) {
    if (value) {
      this.currentFocus = _enums_current_focus_enum__WEBPACK_IMPORTED_MODULE_2__.CurrentFocusEnum.second;
      this.lastFocus = _enums_last_focus_enum__WEBPACK_IMPORTED_MODULE_3__.LastFocusEnum.second;
    } else {
      this.currentFocus = _enums_current_focus_enum__WEBPACK_IMPORTED_MODULE_2__.CurrentFocusEnum.none;
    }
  }
  static ɵfac = function CurrencyConverterFeatureComponent_Factory(t) {
    return new (t || CurrencyConverterFeatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_stroeer_repository_currency_converter__WEBPACK_IMPORTED_MODULE_1__.CurrencyConverterRepository));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: CurrencyConverterFeatureComponent,
    selectors: [["feature-currency-converter"]],
    decls: 2,
    vars: 3,
    consts: [["class", "currency-converter", 4, "ngIf"], [1, "currency-converter"], [1, "content-column"], [3, "type", "label", "control", "focusChanged"], [3, "items", "selectedId", "changeValue"], [1, "content-column", "exchange-rate"]],
    template: function CurrencyConverterFeatureComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CurrencyConverterFeatureComponent_div_0_Template, 13, 17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.exchangeRate$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _uis_form_input_src_components_form_input_ui_component__WEBPACK_IMPORTED_MODULE_4__.FormInputUiComponent, _uis_formular_src_components_select_select_ui_component__WEBPACK_IMPORTED_MODULE_5__.SelectUiComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
    styles: [".currency-converter[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  margin: 0 auto;\n  width: 700px;\n}\n.currency-converter[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .currency-converter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .currency-converter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .currency-converter[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\n.exchange-rate[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n[_nghost-%COMP%]     .content-column {\n  width: 200px;\n  float: left;\n  margin-right: 25px;\n}\n[_nghost-%COMP%]     .content-column .input-block {\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]     .content-column .form-frame {\n  margin-top: 10px;\n  margin-bottom: 15px;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 2179:
/*!*******************************************************************************************!*\
  !*** ./libs/@adesso/features/currency-converter/src/currency-converter-feature.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyConverterFeatureModule": () => (/* binding */ CurrencyConverterFeatureModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _components_currency_converter_feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/currency-converter-feature.component */ 89570);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/config */ 2079);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _adesso_ui_form_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @adesso/ui-form-input */ 42298);
/* harmony import */ var _adesso_ui_formular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @adesso/ui-formular */ 81322);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);











class CurrencyConverterFeatureModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_3__.translationConfig);
  }
  static ɵfac = function CurrencyConverterFeatureModule_Factory(t) {
    return new (t || CurrencyConverterFeatureModule)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: CurrencyConverterFeatureModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _adesso_ui_form_input__WEBPACK_IMPORTED_MODULE_4__.FormInputUiModule, _adesso_ui_formular__WEBPACK_IMPORTED_MODULE_5__.FormularUiModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CurrencyConverterFeatureModule, {
    declarations: [_components_currency_converter_feature_component__WEBPACK_IMPORTED_MODULE_2__.CurrencyConverterFeatureComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _adesso_ui_form_input__WEBPACK_IMPORTED_MODULE_4__.FormInputUiModule, _adesso_ui_formular__WEBPACK_IMPORTED_MODULE_5__.FormularUiModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule],
    exports: [_components_currency_converter_feature_component__WEBPACK_IMPORTED_MODULE_2__.CurrencyConverterFeatureComponent]
  });
})();

/***/ }),

/***/ 6343:
/*!**********************************************************************************!*\
  !*** ./libs/@adesso/features/currency-converter/src/enums/current-focus.enum.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentFocusEnum": () => (/* binding */ CurrentFocusEnum)
/* harmony export */ });
var CurrentFocusEnum;
(function (CurrentFocusEnum) {
  CurrentFocusEnum[CurrentFocusEnum["first"] = 0] = "first";
  CurrentFocusEnum[CurrentFocusEnum["second"] = 1] = "second";
  CurrentFocusEnum[CurrentFocusEnum["none"] = 2] = "none";
})(CurrentFocusEnum || (CurrentFocusEnum = {}));

/***/ }),

/***/ 41028:
/*!*******************************************************************************!*\
  !*** ./libs/@adesso/features/currency-converter/src/enums/last-focus.enum.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LastFocusEnum": () => (/* binding */ LastFocusEnum)
/* harmony export */ });
var LastFocusEnum;
(function (LastFocusEnum) {
  LastFocusEnum[LastFocusEnum["first"] = 0] = "first";
  LastFocusEnum[LastFocusEnum["second"] = 1] = "second";
})(LastFocusEnum || (LastFocusEnum = {}));

/***/ }),

/***/ 99303:
/*!********************************************************************!*\
  !*** ./libs/@adesso/features/currency-converter/src/public-api.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyConverterFeatureComponent": () => (/* reexport safe */ _components_currency_converter_feature_component__WEBPACK_IMPORTED_MODULE_0__.CurrencyConverterFeatureComponent),
/* harmony export */   "CurrencyConverterFeatureModule": () => (/* reexport safe */ _currency_converter_feature_module__WEBPACK_IMPORTED_MODULE_1__.CurrencyConverterFeatureModule)
/* harmony export */ });
/* harmony import */ var _components_currency_converter_feature_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/currency-converter-feature.component */ 89570);
/* harmony import */ var _currency_converter_feature_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-converter-feature.module */ 2179);



/***/ }),

/***/ 2079:
/*!*****************************************************************************!*\
  !*** ./libs/@adesso/features/currency-converter/src/translations/config.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [{
  term: "exchange-rate",
  deDe: "Kurs",
  enUs: "Course"
}, {
  term: "currency-converter",
  deDe: "Währungsrechner",
  enUs: "Currency converter"
}];

/***/ }),

/***/ 67455:
/*!***********************************************************************************************************!*\
  !*** ./libs/@adesso/pages/exchange-rate-overview/src/components/exchange-rate-overview-page.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeRateOverviewPageComponent": () => (/* binding */ ExchangeRateOverviewPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _features_carousel_with_search_src_components_carousel_with_search_feature_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../features/carousel-with-search/src/components/carousel-with-search-feature.component */ 60719);
/* harmony import */ var _features_currency_converter_src_components_currency_converter_feature_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../features/currency-converter/src/components/currency-converter-feature.component */ 89570);



class ExchangeRateOverviewPageComponent {
  slides = [{
    src: "assets/slider/exchangerate/devisen-wara1982-082.jpg"
  }];
  static ɵfac = function ExchangeRateOverviewPageComponent_Factory(t) {
    return new (t || ExchangeRateOverviewPageComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ExchangeRateOverviewPageComponent,
    selectors: [["page-exchange-rate-overview"]],
    decls: 3,
    vars: 1,
    consts: [[3, "slides"], [1, "inner-content-area"]],
    template: function ExchangeRateOverviewPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "feature-carousel-with-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "feature-currency-converter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("slides", ctx.slides);
      }
    },
    dependencies: [_features_carousel_with_search_src_components_carousel_with_search_feature_component__WEBPACK_IMPORTED_MODULE_0__.CarouselWithSearchFeatureComponent, _features_currency_converter_src_components_currency_converter_feature_component__WEBPACK_IMPORTED_MODULE_1__.CurrencyConverterFeatureComponent],
    changeDetection: 0
  });
}

/***/ }),

/***/ 92970:
/*!*********************************************************************************************!*\
  !*** ./libs/@adesso/pages/exchange-rate-overview/src/exchange-rate-overview-page.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeRateOverviewPageModule": () => (/* binding */ ExchangeRateOverviewPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _adesso_feature_carousel_with_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/feature-carousel-with-search */ 33779);
/* harmony import */ var _components_exchange_rate_overview_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/exchange-rate-overview-page.component */ 67455);
/* harmony import */ var _adesso_feature_currency_converter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adesso/feature-currency-converter */ 99303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);







const routes = [{
  path: "",
  component: _components_exchange_rate_overview_page_component__WEBPACK_IMPORTED_MODULE_1__.ExchangeRateOverviewPageComponent
}];
class ExchangeRateOverviewPageModule {
  static ɵfac = function ExchangeRateOverviewPageModule_Factory(t) {
    return new (t || ExchangeRateOverviewPageModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ExchangeRateOverviewPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _adesso_feature_carousel_with_search__WEBPACK_IMPORTED_MODULE_0__.CarouselWithSearchFeatureModule, _adesso_feature_currency_converter__WEBPACK_IMPORTED_MODULE_2__.CurrencyConverterFeatureModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ExchangeRateOverviewPageModule, {
    declarations: [_components_exchange_rate_overview_page_component__WEBPACK_IMPORTED_MODULE_1__.ExchangeRateOverviewPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _adesso_feature_carousel_with_search__WEBPACK_IMPORTED_MODULE_0__.CarouselWithSearchFeatureModule, _adesso_feature_currency_converter__WEBPACK_IMPORTED_MODULE_2__.CurrencyConverterFeatureModule]
  });
})();

/***/ }),

/***/ 98315:
/*!*********************************************************************!*\
  !*** ./libs/@adesso/pages/exchange-rate-overview/src/public-api.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeRateOverviewPageComponent": () => (/* reexport safe */ _components_exchange_rate_overview_page_component__WEBPACK_IMPORTED_MODULE_1__.ExchangeRateOverviewPageComponent),
/* harmony export */   "ExchangeRateOverviewPageModule": () => (/* reexport safe */ _exchange_rate_overview_page_module__WEBPACK_IMPORTED_MODULE_0__.ExchangeRateOverviewPageModule)
/* harmony export */ });
/* harmony import */ var _exchange_rate_overview_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange-rate-overview-page.module */ 92970);
/* harmony import */ var _components_exchange_rate_overview_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/exchange-rate-overview-page.component */ 67455);



/***/ }),

/***/ 85068:
/*!*******************************************************************************!*\
  !*** ./libs/@adesso/uis/form-input/src/components/form-input-ui.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInputUiComponent": () => (/* binding */ FormInputUiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _enums_input_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/input-type.enum */ 82520);
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! guid-typescript */ 53098);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _base_utils_ng_let_src_directives_ng_let_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@base/utils/ng-let/src/directives/ng-let.directive */ 39406);








function FormInputUiComponent_ng_container_0_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessage, " ");
  }
}
const _c0 = function (a0) {
  return {
    "filled-design": a0
  };
};
const _c1 = function (a0) {
  return {
    "error": a0
  };
};
function FormInputUiComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2)(2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function FormInputUiComponent_ng_container_0_ng_container_1_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.setFocus(false));
    })("focus", function FormInputUiComponent_ng_container_0_ng_container_1_Template_input_focus_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.setFocus(true));
    })("keypress", function FormInputUiComponent_ng_container_0_ng_container_1_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.keypress($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, FormInputUiComponent_ng_container_0_ng_container_1_div_5_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ctx_r1.useFilledDesign));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r1.id)("name", ctx_r1.id)("type", ctx_r1.type)("formControl", ctx_r1.formControl)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c1, ctx_r1.hasError));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", ctx_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage);
  }
}
function FormInputUiComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FormInputUiComponent_ng_container_0_ng_container_1_Template, 6, 13, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngLet", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r0.formControl.valueChanges));
  }
}
class FormInputUiComponent {
  type;
  label;
  set control(value) {
    this.formControl = value;
  }
  formControl;
  hasError;
  errorMessage;
  submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  focusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  id;
  isFocused = false;
  useFilledDesign = false;
  inputReadOnly = true;
  constructor() {
    this.id = guid_typescript__WEBPACK_IMPORTED_MODULE_1__.Guid.create().toString();
  }
  ngOnInit() {
    if (this.formControl && this.formControl.value && this.formControl.value !== "") {
      this.useFilledDesign = true;
    }
    this.formControl.valueChanges.subscribe(() => {
      if (this.formControl && this.formControl.value && this.formControl.value !== "") {
        this.useFilledDesign = true;
      }
    });
  }
  setFocus(value) {
    if (this.formControl && this.formControl.value && this.formControl.value !== "") {
      this.useFilledDesign = true;
    } else {
      this.useFilledDesign = value;
    }
    this.isFocused = value;
    this.focusChanged.emit(value);
  }
  keypress(event) {
    if (event.code === "Enter") {
      this.submitted.emit();
    }
  }
  static ɵfac = function FormInputUiComponent_Factory(t) {
    return new (t || FormInputUiComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FormInputUiComponent,
    selectors: [["ui-form-input"]],
    inputs: {
      type: "type",
      label: "label",
      control: "control",
      hasError: "hasError",
      errorMessage: "errorMessage"
    },
    outputs: {
      submitted: "submitted",
      focusChanged: "focusChanged"
    },
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [4, "ngLet"], [1, "input-block", 3, "ngClass"], ["autocomplete", "new-password", 3, "id", "name", "type", "formControl", "ngClass", "blur", "focus", "keypress"], [3, "for"], ["class", "error-text", 4, "ngIf"], [1, "error-text"]],
    template: function FormInputUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, FormInputUiComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formControl);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _base_utils_ng_let_src_directives_ng_let_directive__WEBPACK_IMPORTED_MODULE_2__.NgLetDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    styles: [".input-block[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  text-align: left;\n}\n.input-block[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .input-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-block[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .input-block[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n.input-block[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\nlabel[_ngcontent-%COMP%] {\n  position: relative;\n  top: -12px;\n  left: 5px;\n  display: block;\n  font-size: 14px;\n  color: #a0a0a0;\n}\n\ninput[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  position: relative;\n  top: 13px;\n  border: 1px solid green;\n  padding: 8px 5px;\n  border-radius: 6px;\n  width: 100%;\n}\ninput[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\n.filled-design[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  top: -36px;\n  font-size: 12px;\n  color: #003cb4;\n}\n.filled-design[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n\n.error[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 12px;\n  margin-left: 5px;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 82520:
/*!******************************************************************!*\
  !*** ./libs/@adesso/uis/form-input/src/enums/input-type.enum.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputTypeEnum": () => (/* binding */ InputTypeEnum)
/* harmony export */ });
var InputTypeEnum;
(function (InputTypeEnum) {
  InputTypeEnum["text"] = "text";
  InputTypeEnum["password"] = "password";
  InputTypeEnum["email"] = "email";
})(InputTypeEnum || (InputTypeEnum = {}));

/***/ }),

/***/ 60777:
/*!*****************************************************************!*\
  !*** ./libs/@adesso/uis/form-input/src/form-input-ui.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInputUiModule": () => (/* binding */ FormInputUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _components_form_input_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/form-input-ui.component */ 85068);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _base_util_ng_let__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-ng-let */ 91535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);





class FormInputUiModule {
  static ɵfac = function FormInputUiModule_Factory(t) {
    return new (t || FormInputUiModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: FormInputUiModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _base_util_ng_let__WEBPACK_IMPORTED_MODULE_1__.NgLetUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FormInputUiModule, {
    declarations: [_components_form_input_ui_component__WEBPACK_IMPORTED_MODULE_0__.FormInputUiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _base_util_ng_let__WEBPACK_IMPORTED_MODULE_1__.NgLetUtilModule],
    exports: [_components_form_input_ui_component__WEBPACK_IMPORTED_MODULE_0__.FormInputUiComponent]
  });
})();

/***/ }),

/***/ 42298:
/*!*******************************************************!*\
  !*** ./libs/@adesso/uis/form-input/src/public-api.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInputUiComponent": () => (/* reexport safe */ _components_form_input_ui_component__WEBPACK_IMPORTED_MODULE_0__.FormInputUiComponent),
/* harmony export */   "FormInputUiModule": () => (/* reexport safe */ _form_input_ui_module__WEBPACK_IMPORTED_MODULE_1__.FormInputUiModule),
/* harmony export */   "InputTypeEnum": () => (/* reexport safe */ _enums_input_type_enum__WEBPACK_IMPORTED_MODULE_2__.InputTypeEnum)
/* harmony export */ });
/* harmony import */ var _components_form_input_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/form-input-ui.component */ 85068);
/* harmony import */ var _form_input_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-input-ui.module */ 60777);
/* harmony import */ var _enums_input_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums/input-type.enum */ 82520);




/***/ }),

/***/ 36773:
/*!********************************************************************************!*\
  !*** ./libs/@adesso/uis/formular/src/components/button/button-ui.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonUiComponent": () => (/* binding */ ButtonUiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36895);



const _c0 = function (a0) {
  return {
    "disabled": a0
  };
};
class ButtonUiComponent {
  label;
  disabled = false;
  submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  submit() {
    if (!this.disabled) {
      this.submitted.emit();
    }
  }
  static ɵfac = function ButtonUiComponent_Factory(t) {
    return new (t || ButtonUiComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ButtonUiComponent,
    selectors: [["ui-button"]],
    inputs: {
      label: "label",
      disabled: "disabled"
    },
    outputs: {
      submitted: "submitted"
    },
    decls: 2,
    vars: 4,
    consts: [[3, "ngClass", "click"]],
    template: function ButtonUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonUiComponent_Template_button_click_0_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: [".form-label[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  font-weight: bold;\n  font-size: 14px;\n  margin-bottom: 2px;\n}\n\n.form-frame[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  box-sizing: border-box;\n  border-radius: 8px;\n  border: 2px solid #FFFFFF;\n  background-color: #FDFDFD;\n  padding: 5px;\n  margin-left: 1px;\n  margin-bottom: 3px;\n  box-shadow: 1px 1px 1px 2px rgba(150, 150, 150, 0.2);\n}\n.form-frame[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .form-frame[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-frame[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .form-frame[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: calc(100% - 5px);\n  border: none;\n  background-color: #FDFDFD;\n  padding: 5px;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: calc(100% - 5px);\n  border: none;\n  background-color: #FDFDFD;\n  padding: 5px;\n  cursor: pointer;\n}\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  border-radius: 8px;\n  border: none;\n  width: 100%;\n  padding: 10px 0;\n  background-color: #0018a8;\n  color: #FFFFFF;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px 0 rgba(150, 150, 150, 0.2);\n}\nbutton[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nbutton.disabled[_ngcontent-%COMP%] {\n  background-color: #A0A0A0;\n  cursor: not-allowed;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 96771:
/*!************************************************************************************************!*\
  !*** ./libs/@adesso/uis/formular/src/components/input-password/input-password-ui.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputPasswordUiComponent": () => (/* binding */ InputPasswordUiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 24006);




function InputPasswordUiComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
  }
}
class InputPasswordUiComponent {
  label;
  value;
  placeholder;
  changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  inputChanged() {
    this.changeValue.emit(this.value);
  }
  static ɵfac = function InputPasswordUiComponent_Factory(t) {
    return new (t || InputPasswordUiComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InputPasswordUiComponent,
    selectors: [["ui-input-password"]],
    inputs: {
      label: "label",
      value: "value",
      placeholder: "placeholder"
    },
    outputs: {
      changeValue: "changeValue",
      submitted: "submitted"
    },
    decls: 3,
    vars: 3,
    consts: [["class", "form-label", 4, "ngIf"], [1, "form-frame"], ["type", "password", 3, "ngModel", "placeholder", "ngModelChange", "change", "keyup.enter"], [1, "form-label"]],
    template: function InputPasswordUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputPasswordUiComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputPasswordUiComponent_Template_input_ngModelChange_2_listener($event) {
          return ctx.value = $event;
        })("change", function InputPasswordUiComponent_Template_input_change_2_listener() {
          return ctx.inputChanged();
        })("keyup.enter", function InputPasswordUiComponent_Template_input_keyup_enter_2_listener() {
          return ctx.submitted.emit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("placeholder", ctx.placeholder);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
    styles: [".form-label[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  font-weight: bold;\n  font-size: 14px;\n  margin-bottom: 2px;\n}\n\n.form-frame[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  box-sizing: border-box;\n  border-radius: 8px;\n  border: 2px solid #FFFFFF;\n  background-color: #FDFDFD;\n  padding: 5px;\n  margin-left: 1px;\n  margin-bottom: 3px;\n  box-shadow: 1px 1px 1px 2px rgba(150, 150, 150, 0.2);\n}\n.form-frame[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .form-frame[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-frame[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .form-frame[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: calc(100% - 5px);\n  border: none;\n  background-color: #FDFDFD;\n  padding: 5px;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: calc(100% - 5px);\n  border: none;\n  background-color: #FDFDFD;\n  padding: 5px;\n  cursor: pointer;\n}\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  border-radius: 8px;\n  border: none;\n  width: 100%;\n  padding: 10px 0;\n  background-color: #0018a8;\n  color: #FFFFFF;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px 0 rgba(150, 150, 150, 0.2);\n}\nbutton[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 74164:
/*!*************************************************************************************************!*\
  !*** ./libs/@adesso/uis/formular/src/components/input-text-area/input-textarea-ui.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputTextareaUiComponent": () => (/* binding */ InputTextareaUiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 24006);




function InputTextareaUiComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
  }
}
class InputTextareaUiComponent {
  label;
  value;
  rows = 10;
  placeholder = "";
  changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  inputChanged() {
    this.changeValue.emit(this.value);
  }
  static ɵfac = function InputTextareaUiComponent_Factory(t) {
    return new (t || InputTextareaUiComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InputTextareaUiComponent,
    selectors: [["ui-input-textarea"]],
    inputs: {
      label: "label",
      value: "value",
      rows: "rows",
      placeholder: "placeholder"
    },
    outputs: {
      changeValue: "changeValue",
      submitted: "submitted"
    },
    decls: 3,
    vars: 4,
    consts: [["class", "form-label", 4, "ngIf"], [1, "form-frame"], ["type", "text", 3, "rows", "ngModel", "placeholder", "ngModelChange", "keyup", "keyup.enter"], [1, "form-label"]],
    template: function InputTextareaUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputTextareaUiComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputTextareaUiComponent_Template_textarea_ngModelChange_2_listener($event) {
          return ctx.value = $event;
        })("keyup", function InputTextareaUiComponent_Template_textarea_keyup_2_listener() {
          return ctx.inputChanged();
        })("keyup.enter", function InputTextareaUiComponent_Template_textarea_keyup_enter_2_listener() {
          return ctx.submitted.emit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.rows)("ngModel", ctx.value)("placeholder", ctx.placeholder);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
    styles: [".form-label[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  font-weight: bold;\n  font-size: 14px;\n  margin-bottom: 2px;\n}\n\n.form-frame[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  box-sizing: border-box;\n  border-radius: 8px;\n  border: 2px solid #FFFFFF;\n  background-color: #FDFDFD;\n  padding: 5px;\n  margin-left: 1px;\n  margin-bottom: 3px;\n  box-shadow: 1px 1px 1px 2px rgba(150, 150, 150, 0.2);\n}\n.form-frame[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .form-frame[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-frame[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .form-frame[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: calc(100% - 5px);\n  border: none;\n  background-color: #FDFDFD;\n  padding: 5px;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: calc(100% - 5px);\n  border: none;\n  background-color: #FDFDFD;\n  padding: 5px;\n  cursor: pointer;\n}\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  border-radius: 8px;\n  border: none;\n  width: 100%;\n  padding: 10px 0;\n  background-color: #0018a8;\n  color: #FFFFFF;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px 0 rgba(150, 150, 150, 0.2);\n}\nbutton[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  width: calc(100% - 10px);\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 22547:
/*!****************************************************************************************!*\
  !*** ./libs/@adesso/uis/formular/src/components/input-text/input-text-ui.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputTextUiComponent": () => (/* binding */ InputTextUiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 24006);




function InputTextUiComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
  }
}
class InputTextUiComponent {
  label;
  value;
  placeholder = "";
  changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  inputChanged() {
    this.changeValue.emit(this.value);
  }
  static ɵfac = function InputTextUiComponent_Factory(t) {
    return new (t || InputTextUiComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InputTextUiComponent,
    selectors: [["ui-input-text"]],
    inputs: {
      label: "label",
      value: "value",
      placeholder: "placeholder"
    },
    outputs: {
      changeValue: "changeValue",
      submitted: "submitted"
    },
    decls: 3,
    vars: 3,
    consts: [["class", "form-label", 4, "ngIf"], [1, "form-frame"], ["type", "text", 3, "ngModel", "placeholder", "ngModelChange", "keyup", "keyup.enter"], [1, "form-label"]],
    template: function InputTextUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputTextUiComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputTextUiComponent_Template_input_ngModelChange_2_listener($event) {
          return ctx.value = $event;
        })("keyup", function InputTextUiComponent_Template_input_keyup_2_listener() {
          return ctx.inputChanged();
        })("keyup.enter", function InputTextUiComponent_Template_input_keyup_enter_2_listener() {
          return ctx.submitted.emit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("placeholder", ctx.placeholder);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
    styles: [".form-label[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  font-weight: bold;\n  font-size: 14px;\n  margin-bottom: 2px;\n}\n\n.form-frame[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  box-sizing: border-box;\n  border-radius: 8px;\n  border: 2px solid #FFFFFF;\n  background-color: #FDFDFD;\n  padding: 5px;\n  margin-left: 1px;\n  margin-bottom: 3px;\n  box-shadow: 1px 1px 1px 2px rgba(150, 150, 150, 0.2);\n}\n.form-frame[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .form-frame[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-frame[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .form-frame[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: calc(100% - 5px);\n  border: none;\n  background-color: #FDFDFD;\n  padding: 5px;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: calc(100% - 5px);\n  border: none;\n  background-color: #FDFDFD;\n  padding: 5px;\n  cursor: pointer;\n}\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  border-radius: 8px;\n  border: none;\n  width: 100%;\n  padding: 10px 0;\n  background-color: #0018a8;\n  color: #FFFFFF;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px 0 rgba(150, 150, 150, 0.2);\n}\nbutton[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 48269:
/*!********************************************************************************!*\
  !*** ./libs/@adesso/uis/formular/src/components/select/select-ui.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectUiComponent": () => (/* binding */ SelectUiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 24006);




function SelectUiComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
  }
}
function SelectUiComponent_div_1_select_1_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r6.id)("selected", item_r6.id.toString() === (ctx_r5.selectedId == null ? null : ctx_r5.selectedId.toString()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.label);
  }
}
function SelectUiComponent_div_1_select_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectUiComponent_div_1_select_1_Template_select_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.inputChanged(_r4.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectUiComponent_div_1_select_1_option_2_Template, 2, 3, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.items);
  }
}
function SelectUiComponent_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.items[0].label);
  }
}
function SelectUiComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectUiComponent_div_1_select_1_Template, 3, 1, "select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectUiComponent_div_1_span_2_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.items.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.items.length === 1);
  }
}
class SelectUiComponent {
  label;
  items;
  selectedId;
  changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  inputChanged(id) {
    this.changeValue.emit(id);
  }
  ngOnInit() {
    if (this.items && this.items.length > 0 && !this.selectedId) {
      this.selectedId = this.items[0].id;
    }
  }
  static ɵfac = function SelectUiComponent_Factory(t) {
    return new (t || SelectUiComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SelectUiComponent,
    selectors: [["ui-select"]],
    inputs: {
      label: "label",
      items: "items",
      selectedId: "selectedId"
    },
    outputs: {
      changeValue: "changeValue"
    },
    decls: 2,
    vars: 2,
    consts: [["class", "form-label", 4, "ngIf"], ["class", "form-frame", 4, "ngIf"], [1, "form-label"], [1, "form-frame"], [3, "change", 4, "ngIf"], ["class", "one-item-text", 4, "ngIf"], [3, "change"], ["sv", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"], [1, "one-item-text"]],
    template: function SelectUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SelectUiComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectUiComponent_div_1_Template, 3, 2, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"]],
    styles: [".form-label[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  font-weight: bold;\n  font-size: 14px;\n  margin-bottom: 2px;\n}\n\n.form-frame[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  box-sizing: border-box;\n  border-radius: 8px;\n  border: 2px solid #FFFFFF;\n  background-color: #FDFDFD;\n  padding: 5px;\n  margin-left: 1px;\n  margin-bottom: 3px;\n  box-shadow: 1px 1px 1px 2px rgba(150, 150, 150, 0.2);\n}\n.form-frame[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .form-frame[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-frame[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .form-frame[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: calc(100% - 5px);\n  border: none;\n  background-color: #FDFDFD;\n  padding: 5px;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: calc(100% - 5px);\n  border: none;\n  background-color: #FDFDFD;\n  padding: 5px;\n  cursor: pointer;\n}\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  border-radius: 8px;\n  border: none;\n  width: 100%;\n  padding: 10px 0;\n  background-color: #0018a8;\n  color: #FFFFFF;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px 0 rgba(150, 150, 150, 0.2);\n}\nbutton[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.one-item-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: inline-block;\n  padding: 5px 10px;\n  -webkit-touch-callout: none; \n  -webkit-user-select: none;   \n  user-select: none;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 96286:
/*!*************************************************************!*\
  !*** ./libs/@adesso/uis/formular/src/formular-ui.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormularUiModule": () => (/* binding */ FormularUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _components_input_text_input_text_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/input-text/input-text-ui.component */ 22547);
/* harmony import */ var _components_button_button_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/button/button-ui.component */ 36773);
/* harmony import */ var _components_input_password_input_password_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/input-password/input-password-ui.component */ 96771);
/* harmony import */ var _components_select_select_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/select/select-ui.component */ 48269);
/* harmony import */ var _components_input_text_area_input_textarea_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/input-text-area/input-textarea-ui.component */ 74164);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);








class FormularUiModule {
  static ɵfac = function FormularUiModule_Factory(t) {
    return new (t || FormularUiModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: FormularUiModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FormularUiModule, {
    declarations: [_components_input_text_input_text_ui_component__WEBPACK_IMPORTED_MODULE_0__.InputTextUiComponent, _components_input_text_area_input_textarea_ui_component__WEBPACK_IMPORTED_MODULE_4__.InputTextareaUiComponent, _components_input_password_input_password_ui_component__WEBPACK_IMPORTED_MODULE_2__.InputPasswordUiComponent, _components_button_button_ui_component__WEBPACK_IMPORTED_MODULE_1__.ButtonUiComponent, _components_select_select_ui_component__WEBPACK_IMPORTED_MODULE_3__.SelectUiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule],
    exports: [_components_input_text_input_text_ui_component__WEBPACK_IMPORTED_MODULE_0__.InputTextUiComponent, _components_input_text_area_input_textarea_ui_component__WEBPACK_IMPORTED_MODULE_4__.InputTextareaUiComponent, _components_input_password_input_password_ui_component__WEBPACK_IMPORTED_MODULE_2__.InputPasswordUiComponent, _components_button_button_ui_component__WEBPACK_IMPORTED_MODULE_1__.ButtonUiComponent, _components_select_select_ui_component__WEBPACK_IMPORTED_MODULE_3__.SelectUiComponent]
  });
})();

/***/ }),

/***/ 76269:
/*!*******************************************************************!*\
  !*** ./libs/@adesso/uis/formular/src/models/select-item.model.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectItemModel": () => (/* binding */ SelectItemModel)
/* harmony export */ });
class SelectItemModel {
  id;
  label;
}

/***/ }),

/***/ 81322:
/*!*****************************************************!*\
  !*** ./libs/@adesso/uis/formular/src/public-api.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonUiComponent": () => (/* reexport safe */ _components_button_button_ui_component__WEBPACK_IMPORTED_MODULE_1__.ButtonUiComponent),
/* harmony export */   "FormularUiModule": () => (/* reexport safe */ _formular_ui_module__WEBPACK_IMPORTED_MODULE_0__.FormularUiModule),
/* harmony export */   "InputPasswordUiComponent": () => (/* reexport safe */ _components_input_password_input_password_ui_component__WEBPACK_IMPORTED_MODULE_2__.InputPasswordUiComponent),
/* harmony export */   "InputTextUiComponent": () => (/* reexport safe */ _components_input_text_input_text_ui_component__WEBPACK_IMPORTED_MODULE_3__.InputTextUiComponent),
/* harmony export */   "InputTextareaUiComponent": () => (/* reexport safe */ _components_input_text_area_input_textarea_ui_component__WEBPACK_IMPORTED_MODULE_4__.InputTextareaUiComponent),
/* harmony export */   "SelectItemModel": () => (/* reexport safe */ _models_select_item_model__WEBPACK_IMPORTED_MODULE_6__.SelectItemModel),
/* harmony export */   "SelectUiComponent": () => (/* reexport safe */ _components_select_select_ui_component__WEBPACK_IMPORTED_MODULE_5__.SelectUiComponent)
/* harmony export */ });
/* harmony import */ var _formular_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formular-ui.module */ 96286);
/* harmony import */ var _components_button_button_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/button/button-ui.component */ 36773);
/* harmony import */ var _components_input_password_input_password_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/input-password/input-password-ui.component */ 96771);
/* harmony import */ var _components_input_text_input_text_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/input-text/input-text-ui.component */ 22547);
/* harmony import */ var _components_input_text_area_input_textarea_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/input-text-area/input-textarea-ui.component */ 74164);
/* harmony import */ var _components_select_select_ui_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/select/select-ui.component */ 48269);
/* harmony import */ var _models_select_item_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/select-item.model */ 76269);








/***/ }),

/***/ 77013:
/*!***************************************************************************************************!*\
  !*** ./libs/@stroeer/repositories/currency-converter/src/currency-converter-repository.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyConverterRepositoryModule": () => (/* binding */ CurrencyConverterRepositoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);



class CurrencyConverterRepositoryModule {
  static ɵfac = function CurrencyConverterRepositoryModule_Factory(t) {
    return new (t || CurrencyConverterRepositoryModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: CurrencyConverterRepositoryModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CurrencyConverterRepositoryModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule]
  });
})();

/***/ }),

/***/ 34993:
/*!*****************************************************************************************!*\
  !*** ./libs/@stroeer/repositories/currency-converter/src/models/exchange-rate.model.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeRatesModel": () => (/* binding */ ExchangeRatesModel)
/* harmony export */ });
class ExchangeRatesModel {
  exchangeRate;
}

/***/ }),

/***/ 97317:
/*!*************************************************************************!*\
  !*** ./libs/@stroeer/repositories/currency-converter/src/public-api.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyConverterRepository": () => (/* reexport safe */ _repositories_currency_converter_repository__WEBPACK_IMPORTED_MODULE_0__.CurrencyConverterRepository),
/* harmony export */   "CurrencyConverterRepositoryModule": () => (/* reexport safe */ _currency_converter_repository_module__WEBPACK_IMPORTED_MODULE_1__.CurrencyConverterRepositoryModule),
/* harmony export */   "ExchangeRatesModel": () => (/* reexport safe */ _models_exchange_rate_model__WEBPACK_IMPORTED_MODULE_2__.ExchangeRatesModel)
/* harmony export */ });
/* harmony import */ var _repositories_currency_converter_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repositories/currency-converter.repository */ 70742);
/* harmony import */ var _currency_converter_repository_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-converter-repository.module */ 77013);
/* harmony import */ var _models_exchange_rate_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/exchange-rate.model */ 34993);




/***/ }),

/***/ 70742:
/*!*********************************************************************************************************!*\
  !*** ./libs/@stroeer/repositories/currency-converter/src/repositories/currency-converter.repository.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyConverterRepository": () => (/* binding */ CurrencyConverterRepository)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 80529);



class CurrencyConverterRepository {
  http;
  adessoUrl = "https://tonline-api.sh01.de/stroeer/adesso_api/1.0.0";
  constructor(http) {
    this.http = http;
  }
  getExchangeRate(one, tow) {
    return this.http.get(this.adessoUrl + "/ExchangeRates/" + one + "/" + tow);
  }
  static ɵfac = function CurrencyConverterRepository_Factory(t) {
    return new (t || CurrencyConverterRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CurrencyConverterRepository,
    factory: CurrencyConverterRepository.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 53098:
/*!***************************************************!*\
  !*** ./node_modules/guid-typescript/dist/guid.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {



exports.__esModule = true;
var Guid = /** @class */function () {
  function Guid(guid) {
    if (!guid) {
      throw new TypeError("Invalid argument; `value` has no value.");
    }
    this.value = Guid.EMPTY;
    if (guid && Guid.isGuid(guid)) {
      this.value = guid;
    }
  }
  Guid.isGuid = function (guid) {
    var value = guid.toString();
    return guid && (guid instanceof Guid || Guid.validator.test(value));
  };
  Guid.create = function () {
    return new Guid([Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-"));
  };
  Guid.createEmpty = function () {
    return new Guid("emptyguid");
  };
  Guid.parse = function (guid) {
    return new Guid(guid);
  };
  Guid.raw = function () {
    return [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-");
  };
  Guid.gen = function (count) {
    var out = "";
    for (var i = 0; i < count; i++) {
      // tslint:disable-next-line:no-bitwise
      out += ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }
    return out;
  };
  Guid.prototype.equals = function (other) {
    // Comparing string `value` against provided `guid` will auto-call
    // toString on `guid` for comparison
    return Guid.isGuid(other) && this.value === other.toString();
  };
  Guid.prototype.isEmpty = function () {
    return this.value === Guid.EMPTY;
  };
  Guid.prototype.toString = function () {
    return this.value;
  };
  Guid.prototype.toJSON = function () {
    return {
      value: this.value
    };
  };
  Guid.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");
  Guid.EMPTY = "00000000-0000-0000-0000-000000000000";
  return Guid;
}();
exports.Guid = Guid;

/***/ })

}]);