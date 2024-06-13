"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_analyses-detail_src_public-api_ts"],{

/***/ 30866:
/*!*******************************************************************************!*\
  !*** ./libs/@adesso/pages/analyses-detail/src/analyses-detail-page.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysesDetailPageModule": () => (/* binding */ AnalysesDetailPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _adesso_ui_analyses_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/ui-analyses-detail */ 81099);
/* harmony import */ var _adesso_service_analyses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adesso/service-analyses */ 29194);
/* harmony import */ var _components_analyses_detail_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/analyses-detail-page.component */ 36768);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translations/config */ 83040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);










const routes = [{
  path: "",
  component: _components_analyses_detail_page_component__WEBPACK_IMPORTED_MODULE_3__.AnalysesDetailPageComponent
}];
class AnalysesDetailPageModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_4__.translationConfig);
  }
  static ɵfac = function AnalysesDetailPageModule_Factory(t) {
    return new (t || AnalysesDetailPageModule)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_0__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AnalysesDetailPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_0__.TranslationManagerUtilModule, _adesso_ui_analyses_detail__WEBPACK_IMPORTED_MODULE_1__.AnalysesDetailUiModule, _adesso_service_analyses__WEBPACK_IMPORTED_MODULE_2__.ServiceAnalysesModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AnalysesDetailPageModule, {
    declarations: [_components_analyses_detail_page_component__WEBPACK_IMPORTED_MODULE_3__.AnalysesDetailPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_0__.TranslationManagerUtilModule, _adesso_ui_analyses_detail__WEBPACK_IMPORTED_MODULE_1__.AnalysesDetailUiModule, _adesso_service_analyses__WEBPACK_IMPORTED_MODULE_2__.ServiceAnalysesModule]
  });
})();

/***/ }),

/***/ 36768:
/*!*********************************************************************************************!*\
  !*** ./libs/@adesso/pages/analyses-detail/src/components/analyses-detail-page.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysesDetailPageComponent": () => (/* binding */ AnalysesDetailPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _adesso_service_analyses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/service-analyses */ 29194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uis_analyses_detail_src_components_analyses_detail_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../uis/analyses-detail/src/components/analyses-detail-ui.component */ 15099);








function AnalysesDetailPageComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ui-analyses-detail", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const analyse_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("analyse", analyse_r3);
  }
}
function AnalysesDetailPageComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class AnalysesDetailPageComponent {
  analysesService;
  analyse$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(undefined);
  lastAnalyseId;
  routerSubscription;
  constructor(analysesService, router) {
    this.analysesService = analysesService;
    this.routerSubscription = router.events.subscribe(routerEvent => {
      if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivationEnd) {
        this.lastAnalyseId = routerEvent.snapshot.params.analyseId;
        this.analyse$.next(undefined);
      }
      if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd && this.lastAnalyseId) {
        this.analysesService.getAnalysesDetail(this.lastAnalyseId).subscribe(x => {
          this.analyse$.next(x);
        });
      }
    });
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
  static ɵfac = function AnalysesDetailPageComponent_Factory(t) {
    return new (t || AnalysesDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_adesso_service_analyses__WEBPACK_IMPORTED_MODULE_0__.AnalysesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AnalysesDetailPageComponent,
    selectors: [["page-analyses-detail"]],
    decls: 5,
    vars: 4,
    consts: [[1, "inner-content-area"], [4, "ngIf", "ngIfElse"], ["loading", ""], [3, "analyse"], [1, "loading-page"], ["src", "./assets/loading.gif"]],
    template: function AnalysesDetailPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AnalysesDetailPageComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AnalysesDetailPageComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx.analyse$))("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _uis_analyses_detail_src_components_analyses_detail_ui_component__WEBPACK_IMPORTED_MODULE_1__.AnalysesDetailUiComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    changeDetection: 0
  });
}

/***/ }),

/***/ 10715:
/*!**************************************************************!*\
  !*** ./libs/@adesso/pages/analyses-detail/src/public-api.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysesDetailPageComponent": () => (/* reexport safe */ _components_analyses_detail_page_component__WEBPACK_IMPORTED_MODULE_1__.AnalysesDetailPageComponent),
/* harmony export */   "AnalysesDetailPageModule": () => (/* reexport safe */ _analyses_detail_page_module__WEBPACK_IMPORTED_MODULE_0__.AnalysesDetailPageModule)
/* harmony export */ });
/* harmony import */ var _analyses_detail_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analyses-detail-page.module */ 30866);
/* harmony import */ var _components_analyses_detail_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/analyses-detail-page.component */ 36768);



/***/ }),

/***/ 83040:
/*!***********************************************************************!*\
  !*** ./libs/@adesso/pages/analyses-detail/src/translations/config.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [];

/***/ }),

/***/ 98626:
/*!***************************************************************************!*\
  !*** ./libs/@adesso/uis/analyses-detail/src/analyses-detail-ui.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysesDetailUiModule": () => (/* binding */ AnalysesDetailUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-format */ 84094);
/* harmony import */ var _adesso_ui_key_value_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/ui-key-value-list */ 68147);
/* harmony import */ var _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adesso/ui-content-box */ 96524);
/* harmony import */ var _components_analyses_detail_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/analyses-detail-ui.component */ 15099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);






class AnalysesDetailUiModule {
  static ɵfac = function AnalysesDetailUiModule_Factory(t) {
    return new (t || AnalysesDetailUiModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AnalysesDetailUiModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _base_util_format__WEBPACK_IMPORTED_MODULE_0__.FormatUtilModule, _adesso_ui_key_value_list__WEBPACK_IMPORTED_MODULE_1__.KeyValueListUiModule, _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_2__.ContentBoxUiModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AnalysesDetailUiModule, {
    declarations: [_components_analyses_detail_ui_component__WEBPACK_IMPORTED_MODULE_3__.AnalysesDetailUiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _base_util_format__WEBPACK_IMPORTED_MODULE_0__.FormatUtilModule, _adesso_ui_key_value_list__WEBPACK_IMPORTED_MODULE_1__.KeyValueListUiModule, _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_2__.ContentBoxUiModule],
    exports: [_components_analyses_detail_ui_component__WEBPACK_IMPORTED_MODULE_3__.AnalysesDetailUiComponent]
  });
})();

/***/ }),

/***/ 15099:
/*!*****************************************************************************************!*\
  !*** ./libs/@adesso/uis/analyses-detail/src/components/analyses-detail-ui.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysesDetailUiComponent": () => (/* binding */ AnalysesDetailUiComponent)
/* harmony export */ });
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _key_value_list_src_components_key_value_list_key_value_list_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../key-value-list/src/components/key-value-list/key-value-list-ui.component */ 20559);
/* harmony import */ var _content_box_src_components_content_box_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../content-box/src/components/content-box-ui.component */ 79661);
/* harmony import */ var _base_utils_format_src_pipes_date_or_time_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@base/utils/format/src/pipes/date-or-time.pipe */ 62812);






function AnalysesDetailUiComponent_div_0_p_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const paragraph_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](paragraph_r3);
  }
}
function AnalysesDetailUiComponent_div_0_p_9_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const paragraph_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", paragraph_r3, " ");
  }
}
function AnalysesDetailUiComponent_div_0_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AnalysesDetailUiComponent_div_0_p_9_ng_container_1_Template, 3, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AnalysesDetailUiComponent_div_0_p_9_ng_template_2_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const paragraph_r3 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", paragraph_r3.substr(paragraph_r3.length - 1, 1) == ":" && paragraph_r3.length < 50)("ngIfElse", _r5);
  }
}
function AnalysesDetailUiComponent_div_0_ui_content_box_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ui-content-box", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ui-key-value-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("headline", "Werte");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r2.analyse.keyValues)("design", ctx_r2.keyValueDesign);
  }
}
function AnalysesDetailUiComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "dateOrTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AnalysesDetailUiComponent_div_0_p_9_Template, 5, 2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "br")(12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, AnalysesDetailUiComponent_div_0_ui_content_box_13_Template, 2, 3, "ui-content-box", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, ctx_r0.analyse.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.analyse.headline);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.analyse.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.analyse.keyValues);
  }
}
class AnalysesDetailUiComponent {
  analyse;
  keyValueDesign = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.KeyValueListDesignEnum.list;
  static ɵfac = function AnalysesDetailUiComponent_Factory(t) {
    return new (t || AnalysesDetailUiComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AnalysesDetailUiComponent,
    selectors: [["ui-analyses-detail"]],
    inputs: {
      analyse: "analyse"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "analyse-detail", 4, "ngIf"], [1, "analyse-detail"], [1, "analyse-date"], [1, "analyse-headline"], [1, "content-columns"], [1, "content-column"], [1, "analyse-body"], [4, "ngFor", "ngForOf"], [3, "headline", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["normalParagraph", ""], [3, "headline"], [3, "items", "design"]],
    template: function AnalysesDetailUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AnalysesDetailUiComponent_div_0_Template, 14, 6, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.analyse);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _key_value_list_src_components_key_value_list_key_value_list_ui_component__WEBPACK_IMPORTED_MODULE_1__.KeyValueListUiComponent, _content_box_src_components_content_box_ui_component__WEBPACK_IMPORTED_MODULE_2__.ContentBoxUiComponent, _base_utils_format_src_pipes_date_or_time_pipe__WEBPACK_IMPORTED_MODULE_3__.DateOrTimePipe],
    styles: [".analyse-detail[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n}\n.analyse-detail[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .analyse-detail[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .analyse-detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .analyse-detail[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\n.analyse-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.analyse-body[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  line-height: 26px;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 73057:
/*!**********************************************************************************!*\
  !*** ./libs/@adesso/uis/analyses-detail/src/models/analyse-detail-view.model.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyseDetailViewModel": () => (/* binding */ AnalyseDetailViewModel)
/* harmony export */ });
class AnalyseDetailViewModel {
  id;
  body;
  date;
  headline;
  companyIsin;
  keyValues;
}

/***/ }),

/***/ 81099:
/*!************************************************************!*\
  !*** ./libs/@adesso/uis/analyses-detail/src/public-api.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyseDetailViewModel": () => (/* reexport safe */ _models_analyse_detail_view_model__WEBPACK_IMPORTED_MODULE_1__.AnalyseDetailViewModel),
/* harmony export */   "AnalysesDetailUiComponent": () => (/* reexport safe */ _components_analyses_detail_ui_component__WEBPACK_IMPORTED_MODULE_0__.AnalysesDetailUiComponent),
/* harmony export */   "AnalysesDetailUiModule": () => (/* reexport safe */ _analyses_detail_ui_module__WEBPACK_IMPORTED_MODULE_2__.AnalysesDetailUiModule)
/* harmony export */ });
/* harmony import */ var _components_analyses_detail_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/analyses-detail-ui.component */ 15099);
/* harmony import */ var _models_analyse_detail_view_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/analyse-detail-view.model */ 73057);
/* harmony import */ var _analyses_detail_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analyses-detail-ui.module */ 98626);




/***/ })

}]);