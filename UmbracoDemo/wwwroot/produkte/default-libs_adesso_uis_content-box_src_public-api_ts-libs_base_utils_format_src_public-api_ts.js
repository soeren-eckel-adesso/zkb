"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["default-libs_adesso_uis_content-box_src_public-api_ts-libs_base_utils_format_src_public-api_ts"],{

/***/ 79661:
/*!*********************************************************************************!*\
  !*** ./libs/@adesso/uis/content-box/src/components/content-box-ui.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentBoxUiComponent": () => (/* binding */ ContentBoxUiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36895);


function ContentBoxUiComponent_h2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.headline);
  }
}
const _c0 = function (a0) {
  return {
    "no-padding": a0
  };
};
const _c1 = ["*"];
class ContentBoxUiComponent {
  headline;
  noPadding = false;
  set backgroundColor(color) {
    this.style = this.style + "background-color:" + color + ";";
  }
  style = "";
  constructor() {}
  static ɵfac = function ContentBoxUiComponent_Factory(t) {
    return new (t || ContentBoxUiComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContentBoxUiComponent,
    selectors: [["ui-content-box"]],
    inputs: {
      headline: "headline",
      noPadding: "noPadding",
      backgroundColor: "backgroundColor"
    },
    ngContentSelectors: _c1,
    decls: 3,
    vars: 6,
    consts: [[1, "adesso-content-box", 3, "ngClass"], [4, "ngIf"]],
    template: function ContentBoxUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContentBoxUiComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.noPadding));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headline);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    changeDetection: 0
  });
}

/***/ }),

/***/ 54423:
/*!*******************************************************************!*\
  !*** ./libs/@adesso/uis/content-box/src/content-box-ui.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentBoxUiModule": () => (/* binding */ ContentBoxUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _components_content_box_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/content-box-ui.component */ 79661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);



class ContentBoxUiModule {
  static ɵfac = function ContentBoxUiModule_Factory(t) {
    return new (t || ContentBoxUiModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ContentBoxUiModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContentBoxUiModule, {
    declarations: [_components_content_box_ui_component__WEBPACK_IMPORTED_MODULE_0__.ContentBoxUiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_components_content_box_ui_component__WEBPACK_IMPORTED_MODULE_0__.ContentBoxUiComponent]
  });
})();

/***/ }),

/***/ 96524:
/*!********************************************************!*\
  !*** ./libs/@adesso/uis/content-box/src/public-api.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentBoxUiComponent": () => (/* reexport safe */ _components_content_box_ui_component__WEBPACK_IMPORTED_MODULE_0__.ContentBoxUiComponent),
/* harmony export */   "ContentBoxUiModule": () => (/* reexport safe */ _content_box_ui_module__WEBPACK_IMPORTED_MODULE_1__.ContentBoxUiModule)
/* harmony export */ });
/* harmony import */ var _components_content_box_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/content-box-ui.component */ 79661);
/* harmony import */ var _content_box_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-box-ui.module */ 54423);



/***/ }),

/***/ 3457:
/*!********************************************************************************************!*\
  !*** ./libs/@base/utils/format/src/components/date-or-time-formatter-wrapper.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateOrTimeFormatterWrapperComponent": () => (/* binding */ DateOrTimeFormatterWrapperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _pipes_date_or_time_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pipes/date-or-time.pipe */ 62812);



function DateOrTimeFormatterWrapperComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "dateOrTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r0.value), "\n");
  }
}
class DateOrTimeFormatterWrapperComponent {
  value;
  params;
  static ɵfac = function DateOrTimeFormatterWrapperComponent_Factory(t) {
    return new (t || DateOrTimeFormatterWrapperComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DateOrTimeFormatterWrapperComponent,
    selectors: [["date-or-time-formatter-wrapper-component"]],
    inputs: {
      value: "value",
      params: "params"
    },
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"]],
    template: function DateOrTimeFormatterWrapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DateOrTimeFormatterWrapperComponent_div_0_Template, 3, 3, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.value);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _pipes_date_or_time_pipe__WEBPACK_IMPORTED_MODULE_0__.DateOrTimePipe],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 14007:
/*!**************************************************************************************!*\
  !*** ./libs/@base/utils/format/src/components/number-formatter-wrapper.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberFormatterWrapperComponent": () => (/* binding */ NumberFormatterWrapperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pipes/number-formatter.pipe */ 51830);


class NumberFormatterWrapperComponent {
  value;
  params;
  static ɵfac = function NumberFormatterWrapperComponent_Factory(t) {
    return new (t || NumberFormatterWrapperComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NumberFormatterWrapperComponent,
    selectors: [["number-formatter-wrapper-component"]],
    inputs: {
      value: "value",
      params: "params"
    },
    decls: 3,
    vars: 4,
    template: function NumberFormatterWrapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "numberFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx.value, ctx.params), "\n");
      }
    },
    dependencies: [_pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_0__.NumberFormatterPipe],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 66642:
/*!******************************************************************************************!*\
  !*** ./libs/@base/utils/format/src/components/percentage-formatter-wrapper.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PercentageFormatterWrapperComponent": () => (/* binding */ PercentageFormatterWrapperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _pipes_percentage_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pipes/percentage.pipe */ 42115);


class PercentageFormatterWrapperComponent {
  value;
  params;
  static ɵfac = function PercentageFormatterWrapperComponent_Factory(t) {
    return new (t || PercentageFormatterWrapperComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PercentageFormatterWrapperComponent,
    selectors: [["util-percentage-formatter-wrapper-component"]],
    inputs: {
      value: "value",
      params: "params"
    },
    decls: 3,
    vars: 3,
    template: function PercentageFormatterWrapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "percentage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.value), "\n");
      }
    },
    dependencies: [_pipes_percentage_pipe__WEBPACK_IMPORTED_MODULE_0__.PercentagePipe],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 18557:
/*!****************************************************************************!*\
  !*** ./libs/@base/utils/format/src/converter/value-formatter-converter.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValueFormatterConverter": () => (/* binding */ ValueFormatterConverter)
/* harmony export */ });
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);

class ValueFormatterConverter {
  convertNumberPercent(valueNumber, digits = 2) {
    return this.convertNumber(valueNumber, digits, "%");
  }
  convertNumber(valueNumber, digits, suffix) {
    const hasValue = !!valueNumber;
    return {
      valueNumber,
      digits,
      suffix,
      type: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyValueTypeEnum.valueFormatterItem,
      hasValue
    };
  }
  convertDateTime(valueDate) {
    return {
      valueDate,
      type: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyValueTypeEnum.valueFormatterItem,
      hasValue: !!valueDate
    };
  }
  convertString(valueString) {
    return {
      valueString,
      type: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyValueTypeEnum.valueFormatterItem,
      hasValue: valueString && valueString !== "" ? true : false
    };
  }
  convertStar(morningStarRating) {
    const item = new _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.StarFormatterItemModel({
      value: morningStarRating,
      maxStars: 5,
      hasValue: morningStarRating !== undefined
    });
    return item;
  }
}

/***/ }),

/***/ 26094:
/*!***********************************************************!*\
  !*** ./libs/@base/utils/format/src/format-util.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatUtilModule": () => (/* binding */ FormatUtilModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _utils_format_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/format.util */ 36295);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/config */ 80451);
/* harmony import */ var _pipes_date_or_time_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/date-or-time.pipe */ 62812);
/* harmony import */ var _pipes_value_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/value-formatter.pipe */ 93858);
/* harmony import */ var _pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/number-formatter.pipe */ 51830);
/* harmony import */ var _pipes_percentage_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/percentage.pipe */ 42115);
/* harmony import */ var _pipes_capitalize_first_word_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/capitalize-first-word.pipe */ 28814);
/* harmony import */ var _components_number_formatter_wrapper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/number-formatter-wrapper.component */ 14007);
/* harmony import */ var _components_date_or_time_formatter_wrapper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/date-or-time-formatter-wrapper.component */ 3457);
/* harmony import */ var _components_percentage_formatter_wrapper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/percentage-formatter-wrapper.component */ 66642);
/* harmony import */ var _pipes_change_absolute_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/change-absolute.pipe */ 30338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 94650);















class FormatUtilModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_2__.translationConfig);
  }
  static ɵfac = function FormatUtilModule_Factory(t) {
    return new (t || FormatUtilModule)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_0__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: FormatUtilModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    providers: [_utils_format_util__WEBPACK_IMPORTED_MODULE_1__.FormatUtil],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_0__.TranslationManagerUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](FormatUtilModule, {
    declarations: [_pipes_date_or_time_pipe__WEBPACK_IMPORTED_MODULE_3__.DateOrTimePipe, _pipes_value_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__.ValueFormatterPipe, _pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_5__.NumberFormatterPipe, _pipes_percentage_pipe__WEBPACK_IMPORTED_MODULE_6__.PercentagePipe, _pipes_change_absolute_pipe__WEBPACK_IMPORTED_MODULE_11__.ChangeAbsolutePipe, _pipes_capitalize_first_word_pipe__WEBPACK_IMPORTED_MODULE_7__.CapitalizeFirstWordPipe, _components_number_formatter_wrapper_component__WEBPACK_IMPORTED_MODULE_8__.NumberFormatterWrapperComponent, _components_date_or_time_formatter_wrapper_component__WEBPACK_IMPORTED_MODULE_9__.DateOrTimeFormatterWrapperComponent, _components_percentage_formatter_wrapper_component__WEBPACK_IMPORTED_MODULE_10__.PercentageFormatterWrapperComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_0__.TranslationManagerUtilModule],
    exports: [_pipes_date_or_time_pipe__WEBPACK_IMPORTED_MODULE_3__.DateOrTimePipe, _pipes_value_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__.ValueFormatterPipe, _pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_5__.NumberFormatterPipe, _pipes_percentage_pipe__WEBPACK_IMPORTED_MODULE_6__.PercentagePipe, _pipes_change_absolute_pipe__WEBPACK_IMPORTED_MODULE_11__.ChangeAbsolutePipe, _pipes_capitalize_first_word_pipe__WEBPACK_IMPORTED_MODULE_7__.CapitalizeFirstWordPipe, _components_number_formatter_wrapper_component__WEBPACK_IMPORTED_MODULE_8__.NumberFormatterWrapperComponent, _components_date_or_time_formatter_wrapper_component__WEBPACK_IMPORTED_MODULE_9__.DateOrTimeFormatterWrapperComponent, _components_percentage_formatter_wrapper_component__WEBPACK_IMPORTED_MODULE_10__.PercentageFormatterWrapperComponent]
  });
})();

/***/ }),

/***/ 28814:
/*!*************************************************************************!*\
  !*** ./libs/@base/utils/format/src/pipes/capitalize-first-word.pipe.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapitalizeFirstWordPipe": () => (/* binding */ CapitalizeFirstWordPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);

class CapitalizeFirstWordPipe {
  transform(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  static ɵfac = function CapitalizeFirstWordPipe_Factory(t) {
    return new (t || CapitalizeFirstWordPipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "capitalizeFirstWord",
    type: CapitalizeFirstWordPipe,
    pure: true
  });
}

/***/ }),

/***/ 30338:
/*!*******************************************************************!*\
  !*** ./libs/@base/utils/format/src/pipes/change-absolute.pipe.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeAbsolutePipe": () => (/* binding */ ChangeAbsolutePipe)
/* harmony export */ });
/* harmony import */ var _utils_format_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/format.util */ 36295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);



class ChangeAbsolutePipe {
  formatService;
  constructor(formatService) {
    this.formatService = formatService;
  }
  transform(value, params = {}) {
    return this.formatService.asChangeAbsolute(value, params.suffix);
  }
  static ɵfac = function ChangeAbsolutePipe_Factory(t) {
    return new (t || ChangeAbsolutePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtil, 16));
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "changeAbsolute",
    type: ChangeAbsolutePipe,
    pure: false
  });
}

/***/ }),

/***/ 62812:
/*!****************************************************************!*\
  !*** ./libs/@base/utils/format/src/pipes/date-or-time.pipe.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateOrTimePipe": () => (/* binding */ DateOrTimePipe)
/* harmony export */ });
/* harmony import */ var _utils_format_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/format.util */ 36295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);



class DateOrTimePipe {
  formatService;
  constructor(formatService) {
    this.formatService = formatService;
  }
  transform(date) {
    if (!date) {
      return "";
    }
    const d = new Date(date);
    return this.formatService.dateToDateOrTime(d);
  }
  static ɵfac = function DateOrTimePipe_Factory(t) {
    return new (t || DateOrTimePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtil, 16));
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "dateOrTime",
    type: DateOrTimePipe,
    pure: false
  });
}

/***/ }),

/***/ 51830:
/*!********************************************************************!*\
  !*** ./libs/@base/utils/format/src/pipes/number-formatter.pipe.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberFormatterPipe": () => (/* binding */ NumberFormatterPipe)
/* harmony export */ });
/* harmony import */ var _utils_format_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/format.util */ 36295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);



class NumberFormatterPipe {
  formatService;
  constructor(formatService) {
    this.formatService = formatService;
  }
  transform(item, params = {}) {
    return this.formatService.formatNumber(item, params.suffix, params.omitEmptyDecimalPlaces, params.ignoreLargeNumbers, params.decimals, params.assetClass);
  }
  static ɵfac = function NumberFormatterPipe_Factory(t) {
    return new (t || NumberFormatterPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtil, 16));
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "numberFormatter",
    type: NumberFormatterPipe,
    pure: false
  });
}

/***/ }),

/***/ 42115:
/*!**************************************************************!*\
  !*** ./libs/@base/utils/format/src/pipes/percentage.pipe.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PercentagePipe": () => (/* binding */ PercentagePipe)
/* harmony export */ });
/* harmony import */ var _utils_format_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/format.util */ 36295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);



class PercentagePipe {
  formatService;
  constructor(formatService) {
    this.formatService = formatService;
  }
  transform(value) {
    return this.formatService.asPercentage(value);
  }
  static ɵfac = function PercentagePipe_Factory(t) {
    return new (t || PercentagePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtil, 16));
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "percentage",
    type: PercentagePipe,
    pure: false
  });
}

/***/ }),

/***/ 93858:
/*!*******************************************************************!*\
  !*** ./libs/@base/utils/format/src/pipes/value-formatter.pipe.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValueFormatterPipe": () => (/* binding */ ValueFormatterPipe)
/* harmony export */ });
/* harmony import */ var _utils_format_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/format.util */ 36295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);



class ValueFormatterPipe {
  formatService;
  constructor(formatService) {
    this.formatService = formatService;
  }
  transform(item) {
    let result;
    if (item.valueNumber !== undefined) {
      result = this.formatNumber(item);
    } else if (item.valueDate !== undefined) {
      result = this.formatDateTime(item);
    } else if (item.valueString !== undefined) {
      result = this.formatString(item);
    }
    if (item.suffix !== undefined && item.suffix !== "") {
      result = result + " " + item.suffix;
    }
    return result;
  }
  formatNumber(item) {
    if (!item.valueNumber) {
      return "";
    }
    return this.formatService.formatNumber(item.valueNumber, undefined, false, false, item.digits);
  }
  formatDateTime(item) {
    if (!item.valueDate) {
      return "";
    }
    return this.formatService.dateToDateAndTime(item.valueDate);
  }
  formatString(item) {
    return item.valueString;
  }
  static ɵfac = function ValueFormatterPipe_Factory(t) {
    return new (t || ValueFormatterPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtil, 16));
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "ValueFormatter",
    type: ValueFormatterPipe,
    pure: false
  });
}

/***/ }),

/***/ 84094:
/*!***************************************************!*\
  !*** ./libs/@base/utils/format/src/public-api.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapitalizeFirstWordPipe": () => (/* reexport safe */ _pipes_capitalize_first_word_pipe__WEBPACK_IMPORTED_MODULE_7__.CapitalizeFirstWordPipe),
/* harmony export */   "ChangeAbsolutePipe": () => (/* reexport safe */ _pipes_change_absolute_pipe__WEBPACK_IMPORTED_MODULE_6__.ChangeAbsolutePipe),
/* harmony export */   "DateOrTimePipe": () => (/* reexport safe */ _pipes_date_or_time_pipe__WEBPACK_IMPORTED_MODULE_4__.DateOrTimePipe),
/* harmony export */   "FormatUtil": () => (/* reexport safe */ _utils_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtil),
/* harmony export */   "FormatUtilModule": () => (/* reexport safe */ _format_util_module__WEBPACK_IMPORTED_MODULE_1__.FormatUtilModule),
/* harmony export */   "NumberFormatterPipe": () => (/* reexport safe */ _pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__.NumberFormatterPipe),
/* harmony export */   "PercentagePipe": () => (/* reexport safe */ _pipes_percentage_pipe__WEBPACK_IMPORTED_MODULE_5__.PercentagePipe),
/* harmony export */   "ValueFormatterConverter": () => (/* reexport safe */ _converter_value_formatter_converter__WEBPACK_IMPORTED_MODULE_8__.ValueFormatterConverter),
/* harmony export */   "ValueFormatterPipe": () => (/* reexport safe */ _pipes_value_formatter_pipe__WEBPACK_IMPORTED_MODULE_2__.ValueFormatterPipe)
/* harmony export */ });
/* harmony import */ var _utils_format_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/format.util */ 36295);
/* harmony import */ var _format_util_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format-util.module */ 26094);
/* harmony import */ var _pipes_value_formatter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/value-formatter.pipe */ 93858);
/* harmony import */ var _pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/number-formatter.pipe */ 51830);
/* harmony import */ var _pipes_date_or_time_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/date-or-time.pipe */ 62812);
/* harmony import */ var _pipes_percentage_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/percentage.pipe */ 42115);
/* harmony import */ var _pipes_change_absolute_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/change-absolute.pipe */ 30338);
/* harmony import */ var _pipes_capitalize_first_word_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/capitalize-first-word.pipe */ 28814);
/* harmony import */ var _converter_value_formatter_converter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./converter/value-formatter-converter */ 18557);










/***/ }),

/***/ 80451:
/*!************************************************************!*\
  !*** ./libs/@base/utils/format/src/translations/config.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [{
  term: "billions",
  deDe: "Mrd.",
  enUs: "billions"
}, {
  term: "millions",
  deDe: "Mio.",
  enUs: "millions"
}, {
  term: "dateFormat",
  deDe: "DD.MM.YYYY",
  enUs: "MM/DD/YYYY"
}, {
  term: "timeFormat",
  deDe: "hh:mm:ss",
  enUs: "hh:mm:ss"
}];

/***/ }),

/***/ 36295:
/*!**********************************************************!*\
  !*** ./libs/@base/utils/format/src/utils/format.util.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatUtil": () => (/* binding */ FormatUtil)
/* harmony export */ });
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 42466);




class FormatUtil {
  translate;
  largeNumberFormats = [{
    value: 1e9,
    term: "billions"
  }, {
    value: 1e6,
    term: "millions"
  }];
  constructor(translate) {
    this.translate = translate;
  }
  formatNumber(input, suffix, omitEmptyDecimalPlaces, ignoreLargeNumbers, decimals, assetClass) {
    if (decimals === undefined) {
      decimals = 2;
      if (assetClass) {
        switch (assetClass) {
          case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.AssetClassEnum.exchangeRate:
            decimals = 4;
            break;
          case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.AssetClassEnum.index:
            decimals = 0;
            break;
        }
      }
    }
    const maxDecimalPlaces = decimals;
    const minDecimalPlaces = omitEmptyDecimalPlaces ? 0 : decimals;
    if (input === undefined || isNaN(input)) {
      return "";
    }
    if (suffix === undefined) {
      suffix = "";
    }
    if (!ignoreLargeNumbers) {
      this.largeNumberFormats.forEach(item => {
        if (input && input >= item.value) {
          suffix = this.translate.instant(item.term);
          input /= item.value;
          return "";
        }
      });
    }
    const formatted = Intl.NumberFormat(this.translate.currentLang, {
      minimumFractionDigits: minDecimalPlaces,
      maximumFractionDigits: maxDecimalPlaces
    }).format(input);
    return `${formatted} ${suffix}`.trim();
  }
  toFixed(n, prec) {
    // fix for IE parseFloat(0.55).toFixed(0) = 0;
    const k = Math.pow(10, prec);
    return Math.round(n * k) / k;
  }
  asPercentage(input) {
    if (input === undefined) {
      return "";
    }
    return (input >= 0 ? "+" : "") + this.formatNumber(input, "%", false, true, 2);
  }
  asChangeAbsolute(input, suffix) {
    if (input === undefined) {
      return "";
    }
    return (input >= 0 ? "+" : "") + this.formatNumber(input, suffix, false, true, 2);
  }
  dateToDateOrTime(input) {
    if (input === undefined) {
      return "";
    }
    let result = "";
    if (this.formatDateToString(input, "DD.MM.YYYY") === this.formatDateToString(new Date(), "DD.MM.YYYY")) {
      result = this.dateToTime(input);
    } else {
      result = this.dateToDate(input);
    }
    return result;
  }
  dateToDateAndTime(input) {
    if (input === undefined) {
      return "";
    }
    return this.dateToTime(input) + " " + this.dateToTime(input);
  }
  dateToTime(input) {
    if (input === undefined) {
      return "";
    }
    let result;
    const format = this.translate.instant("timeFormat");
    // Time
    if (format) {
      result = this.formatDateToString(input, format);
    } else {
      result = input.toLocaleTimeString(this.translate.currentLang, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    }
    return result;
  }
  dateToDate(input) {
    if (input === undefined) {
      return "";
    }
    let result;
    // Date
    const format = this.translate.instant("dateFormat");
    if (format) {
      result = this.formatDateToString(input, format);
    } else {
      result = input.toLocaleDateString(this.translate.currentLang, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      });
    }
    return result;
  }
  formatDateToString(date, format) {
    if (date === undefined) {
      return "";
    }
    return format.replace("DD", this.formatToDigitDate(date.getDate().toString())).replace("MM", this.formatToDigitDate((date.getMonth() + 1).toString())).replace("YYYY", date.getFullYear().toString()).replace("YY", date.getFullYear().toString().substr(2, 2)).replace("HH", this.formatToDigitDate(date.getHours().toString())).replace("hh", this.formatToDigitDate(date.getHours().toString())).replace("mm", this.formatToDigitDate(date.getMinutes().toString())).replace("ss", this.formatToDigitDate(date.getSeconds().toString()));
  }
  formatToDigitDate(value) {
    if (value.length === 1) {
      return "0" + value;
    }
    return value;
  }
  static ɵfac = function FormatUtil_Factory(t) {
    return new (t || FormatUtil)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: FormatUtil,
    factory: FormatUtil.ɵfac,
    providedIn: "root"
  });
}

/***/ })

}]);