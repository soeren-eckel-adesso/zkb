"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["default-libs_adesso_uis_key-value-list_src_public-api_ts"],{

/***/ 20559:
/*!******************************************************************************************************!*\
  !*** ./libs/@adesso/uis/key-value-list/src/components/key-value-list/key-value-list-ui.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyValueListUiComponent": () => (/* binding */ KeyValueListUiComponent)
/* harmony export */ });
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _star_rating_star_rating_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../star-rating/star-rating-ui.component */ 66435);
/* harmony import */ var _base_utils_format_src_pipes_value_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../@base/utils/format/src/pipes/value-formatter.pipe */ 93858);







function KeyValueListUiComponent_ng_container_1_ng_container_2_tr_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "ValueFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, item_r4.value), " ");
  }
}
function KeyValueListUiComponent_ng_container_1_ng_container_2_tr_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ui-star-rating", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rating", item_r4.value.value)("maxStars", item_r4.value.maxStars);
  }
}
function KeyValueListUiComponent_ng_container_1_ng_container_2_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, KeyValueListUiComponent_ng_container_1_ng_container_2_tr_1_ng_container_4_Template, 3, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, KeyValueListUiComponent_ng_container_1_ng_container_2_tr_1_ng_container_5_Template, 2, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4.value.type === ctx_r5.valueType.valueFormatterItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4.value.type === ctx_r5.valueType.starFormatterItem);
  }
}
function KeyValueListUiComponent_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, KeyValueListUiComponent_ng_container_1_ng_container_2_tr_1_Template, 6, 3, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4.value.hasValue);
  }
}
function KeyValueListUiComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, KeyValueListUiComponent_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.items);
  }
}
function KeyValueListUiComponent_ng_template_2_Template(rf, ctx) {}
const _c0 = function (a0, a1) {
  return {
    "list-design": a0,
    "chart-box-design": a1
  };
};
class KeyValueListUiComponent {
  logger;
  items;
  design;
  valueType = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyValueTypeEnum;
  designs = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyValueListDesignEnum;
  constructor(logger) {
    this.logger = logger;
    this.design = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyValueListDesignEnum.list;
  }
  static ɵfac = function KeyValueListUiComponent_Factory(t) {
    return new (t || KeyValueListUiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_1__.LoggerUtil));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: KeyValueListUiComponent,
    selectors: [["ui-key-value-list"]],
    inputs: {
      items: "items",
      design: "design"
    },
    decls: 4,
    vars: 6,
    consts: [[1, "adesso-key-value-list-component", 3, "ngClass"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["cellspacing", "0", "cellpadding", "0"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "column-key"], [1, "column-value"], [3, "rating", "maxStars"]],
    template: function KeyValueListUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, KeyValueListUiComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, KeyValueListUiComponent_ng_template_2_Template, 0, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](3, _c0, ctx.design == ctx.designs.list, ctx.design == ctx.designs.chartBox));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.items != null && ctx.items.length > 0)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _star_rating_star_rating_ui_component__WEBPACK_IMPORTED_MODULE_2__.StarRatingUiComponent, _base_utils_format_src_pipes_value_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__.ValueFormatterPipe],
    styles: [".adesso-key-value-list-component[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  width: 100%;\n  font-size: 14px;\n  color: #565656;\n}\n.adesso-key-value-list-component[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .adesso-key-value-list-component[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .adesso-key-value-list-component[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .adesso-key-value-list-component[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n.adesso-key-value-list-component[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.adesso-key-value-list-component[_ngcontent-%COMP%]   .column-key[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-right: 15px;\n  white-space: nowrap;\n}\n.adesso-key-value-list-component[_ngcontent-%COMP%]   .column-value[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.list-design[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-top: 1px solid green;\n}\n.list-design[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid green;\n}\n\n.chart-box-design[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  width: 50%;\n}\n\n.adesso-key-value-list-component[_ngcontent-%COMP%]   GridLayout[_ngcontent-%COMP%]   Label[_ngcontent-%COMP%] {\n  border-color: #D6D6D6;\n  border-bottom-width: 1px;\n}\n\n.adesso-key-value-list-component[_ngcontent-%COMP%]   GridLayout[_ngcontent-%COMP%]   Label.row-1[_ngcontent-%COMP%] {\n  border-color: #000000;\n  border-bottom-width: 0;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 66435:
/*!************************************************************************************************!*\
  !*** ./libs/@adesso/uis/key-value-list/src/components/star-rating/star-rating-ui.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StarRatingUiComponent": () => (/* binding */ StarRatingUiComponent)
/* harmony export */ });
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);




function StarRatingUiComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function StarRatingUiComponent_ng_container_0_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 5);
  }
}
function StarRatingUiComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StarRatingUiComponent_ng_container_0_ng_container_1_ng_container_1_Template, 2, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StarRatingUiComponent_ng_container_0_ng_container_1_ng_template_2_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const n_r2 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", n_r2 < ctx_r1.rating)("ngIfElse", _r4);
  }
}
function StarRatingUiComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StarRatingUiComponent_ng_container_0_ng_container_1_Template, 4, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.numbers);
  }
}
class StarRatingUiComponent {
  logger;
  rating;
  maxStars = 5;
  numbers;
  constructor(logger) {
    this.logger = logger;
  }
  ngOnInit() {
    if (!this.maxStars) {
      this.maxStars = 5;
    }
    this.numbers = Array(this.maxStars).fill(null).map((_, i) => i);
  }
  static ɵfac = function StarRatingUiComponent_Factory(t) {
    return new (t || StarRatingUiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtil));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: StarRatingUiComponent,
    selectors: [["ui-star-rating"]],
    inputs: {
      rating: "rating",
      maxStars: "maxStars"
    },
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["blankStar", ""], ["src", "./assets/icons/star-filled.svg"], ["src", "./assets/icons/star-empty.svg"]],
    template: function StarRatingUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, StarRatingUiComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rating !== undefined);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    changeDetection: 0
  });
}

/***/ }),

/***/ 41811:
/*!*************************************************************************!*\
  !*** ./libs/@adesso/uis/key-value-list/src/key-value-list-ui.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyValueListUiModule": () => (/* binding */ KeyValueListUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-format */ 84094);
/* harmony import */ var _components_star_rating_star_rating_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/star-rating/star-rating-ui.component */ 66435);
/* harmony import */ var _components_key_value_list_key_value_list_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/key-value-list/key-value-list-ui.component */ 20559);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);






class KeyValueListUiModule {
  static ɵfac = function KeyValueListUiModule_Factory(t) {
    return new (t || KeyValueListUiModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: KeyValueListUiModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _base_util_format__WEBPACK_IMPORTED_MODULE_0__.FormatUtilModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_3__.LoggerUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](KeyValueListUiModule, {
    declarations: [_components_key_value_list_key_value_list_ui_component__WEBPACK_IMPORTED_MODULE_2__.KeyValueListUiComponent, _components_star_rating_star_rating_ui_component__WEBPACK_IMPORTED_MODULE_1__.StarRatingUiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _base_util_format__WEBPACK_IMPORTED_MODULE_0__.FormatUtilModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_3__.LoggerUtilModule],
    exports: [_components_key_value_list_key_value_list_ui_component__WEBPACK_IMPORTED_MODULE_2__.KeyValueListUiComponent, _components_star_rating_star_rating_ui_component__WEBPACK_IMPORTED_MODULE_1__.StarRatingUiComponent]
  });
})();

/***/ }),

/***/ 68147:
/*!***********************************************************!*\
  !*** ./libs/@adesso/uis/key-value-list/src/public-api.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyValueListUiComponent": () => (/* reexport safe */ _components_key_value_list_key_value_list_ui_component__WEBPACK_IMPORTED_MODULE_0__.KeyValueListUiComponent),
/* harmony export */   "KeyValueListUiModule": () => (/* reexport safe */ _key_value_list_ui_module__WEBPACK_IMPORTED_MODULE_1__.KeyValueListUiModule)
/* harmony export */ });
/* harmony import */ var _components_key_value_list_key_value_list_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/key-value-list/key-value-list-ui.component */ 20559);
/* harmony import */ var _key_value_list_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key-value-list-ui.module */ 41811);



/***/ })

}]);