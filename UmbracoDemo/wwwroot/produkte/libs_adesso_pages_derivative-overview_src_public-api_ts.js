"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_derivative-overview_src_public-api_ts"],{

/***/ 5729:
/*!*****************************************************************************************************!*\
  !*** ./libs/@adesso/pages/derivative-overview/src/components/derivative-overview-page.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DerivativeOverviewPageComponent": () => (/* binding */ DerivativeOverviewPageComponent)
/* harmony export */ });
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 72986);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 24850);
/* harmony import */ var _adesso_feature_suggest_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adesso/feature-suggest-search */ 93473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _features_suggest_search_src_components_suggest_search_feature_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../features/suggest-search/src/components/suggest-search-feature.component */ 24277);
/* harmony import */ var _uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../uis/instrument-list/src/components/instrument-list/instrument-list-ui.component */ 38541);
/* harmony import */ var _uis_bread_crumb_src_components_bread_crumb_ui_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../uis/bread-crumb/src/components/bread-crumb-ui.component */ 66241);












function DerivativeOverviewPageComponent_h1_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.name);
  }
}
function DerivativeOverviewPageComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ui-instrument-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, ctx_r1.derivate$))("tableType", ctx_r1.tableType);
  }
}
class DerivativeOverviewPageComponent {
  instrumentListService;
  route;
  derivate$;
  suggestSearchDesign = _adesso_feature_suggest_search__WEBPACK_IMPORTED_MODULE_2__.SuggestSearchDesignEnum.carouselInclude;
  tableType = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.UiInstrumentListTypeEnum.performance;
  name = "";
  constructor(instrumentListService, route) {
    this.instrumentListService = instrumentListService;
    this.route = route;
    this.name = this.route._routerState.snapshot.url;
    this.name = this.name.slice(1, 2).toUpperCase() + this.name.slice(2, this.name.length);
  }
  getBreadCrumbItems() {
    return [{
      label: "Startseite",
      url: "/"
    }, {
      label: this.name
    }];
  }
  ngOnInit() {
    this.derivate$ = this.searchInstruments();
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  listValor = [41822138, 1543231, 1729445, 1647343];
  searchInstruments() {
    return this.instrumentListService.searchInstrument({
      top: 100,
      skip: 0,
      orderBy: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.SortableFieldEnum.name,
      isDescendingOrder: false,
      assetClasses: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.AssetClassEnum.derivative,
      searchTerm: this.name === "Hebelprodukte" ? "Long Mini Future" : "Discount Zertifikat"
    }, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.UiInstrumentListTypeEnum.performance).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(x => x ? x.result.filter(r => (this.name !== "Hebelprodukte" || r.name.startsWith("Long")) && this.listValor.indexOf(r.valor) === -1 && r.quote && r.changeAbsolute).slice(0, 10) : []));
  }
  static ɵfac = function DerivativeOverviewPageComponent_Factory(t) {
    return new (t || DerivativeOverviewPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: DerivativeOverviewPageComponent,
    selectors: [["page-derivative-overview"]],
    decls: 6,
    vars: 5,
    consts: [[1, "breadcrumb-area", "d-none", "d-lg-block"], [3, "items"], [1, "content"], [4, "ngIf"], [3, "isSearch", "design"], ["class", "content-columns", 4, "ngIf"], [1, "content-columns"], [1, "content-column"], [3, "listItems", "tableType"]],
    template: function DerivativeOverviewPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ui-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, DerivativeOverviewPageComponent_h1_3_Template, 2, 1, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "feature-suggest-search", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, DerivativeOverviewPageComponent_div_5_Template, 4, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.getBreadCrumbItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.name !== "Suche");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isSearch", ctx.name === "Suche")("design", ctx.suggestSearchDesign);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.name !== "Suche");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _features_suggest_search_src_components_suggest_search_feature_component__WEBPACK_IMPORTED_MODULE_3__.SuggestSearchFeatureComponent, _uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_4__.InstrumentListUiComponent, _uis_bread_crumb_src_components_bread_crumb_ui_component__WEBPACK_IMPORTED_MODULE_5__.BreadCrumbUiComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
    changeDetection: 0
  });
}

/***/ }),

/***/ 62526:
/*!***************************************************************************************!*\
  !*** ./libs/@adesso/pages/derivative-overview/src/derivative-overview-page.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DerivativeOverviewPageModule": () => (/* binding */ DerivativeOverviewPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _components_derivative_overview_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/derivative-overview-page.component */ 5729);
/* harmony import */ var _adesso_feature_suggest_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/feature-suggest-search */ 93473);
/* harmony import */ var _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adesso/ui-instrument-list */ 20372);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _adesso_ui_bread_crumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @adesso/ui-bread-crumb */ 80524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);











const routes = [{
  path: "",
  component: _components_derivative_overview_page_component__WEBPACK_IMPORTED_MODULE_0__.DerivativeOverviewPageComponent
}];
class DerivativeOverviewPageModule {
  static ɵfac = function DerivativeOverviewPageModule_Factory(t) {
    return new (t || DerivativeOverviewPageModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: DerivativeOverviewPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _adesso_feature_suggest_search__WEBPACK_IMPORTED_MODULE_1__.SuggestSearchFeatureModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_2__.InstrumentListUiModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_3__.InstrumentListServiceModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_4__.TranslationManagerUtilModule, _adesso_ui_bread_crumb__WEBPACK_IMPORTED_MODULE_5__.BreadCrumbUiModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DerivativeOverviewPageModule, {
    declarations: [_components_derivative_overview_page_component__WEBPACK_IMPORTED_MODULE_0__.DerivativeOverviewPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _adesso_feature_suggest_search__WEBPACK_IMPORTED_MODULE_1__.SuggestSearchFeatureModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_2__.InstrumentListUiModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_3__.InstrumentListServiceModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_4__.TranslationManagerUtilModule, _adesso_ui_bread_crumb__WEBPACK_IMPORTED_MODULE_5__.BreadCrumbUiModule]
  });
})();

/***/ }),

/***/ 66580:
/*!******************************************************************!*\
  !*** ./libs/@adesso/pages/derivative-overview/src/public-api.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DerivativeOverviewPageComponent": () => (/* reexport safe */ _components_derivative_overview_page_component__WEBPACK_IMPORTED_MODULE_1__.DerivativeOverviewPageComponent),
/* harmony export */   "DerivativeOverviewPageModule": () => (/* reexport safe */ _derivative_overview_page_module__WEBPACK_IMPORTED_MODULE_0__.DerivativeOverviewPageModule)
/* harmony export */ });
/* harmony import */ var _derivative_overview_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./derivative-overview-page.module */ 62526);
/* harmony import */ var _components_derivative_overview_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/derivative-overview-page.component */ 5729);



/***/ }),

/***/ 49010:
/*!*******************************************************************!*\
  !*** ./libs/@adesso/uis/bread-crumb/src/bread-crumb-ui.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadCrumbUiModule": () => (/* binding */ BreadCrumbUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _components_bread_crumb_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/bread-crumb-ui.component */ 66241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);




class BreadCrumbUiModule {
  static ɵfac = function BreadCrumbUiModule_Factory(t) {
    return new (t || BreadCrumbUiModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: BreadCrumbUiModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BreadCrumbUiModule, {
    declarations: [_components_bread_crumb_ui_component__WEBPACK_IMPORTED_MODULE_0__.BreadCrumbUiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_components_bread_crumb_ui_component__WEBPACK_IMPORTED_MODULE_0__.BreadCrumbUiComponent]
  });
})();

/***/ }),

/***/ 66241:
/*!*********************************************************************************!*\
  !*** ./libs/@adesso/uis/bread-crumb/src/components/bread-crumb-ui.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadCrumbUiComponent": () => (/* binding */ BreadCrumbUiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34793);



function BreadCrumbUiComponent_nav_0_ng_container_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.label);
  }
}
function BreadCrumbUiComponent_nav_0_ng_container_2_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.label);
  }
}
function BreadCrumbUiComponent_nav_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadCrumbUiComponent_nav_0_ng_container_2_li_1_Template, 3, 2, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadCrumbUiComponent_nav_0_ng_container_2_li_2_Template, 2, 1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r2.url);
  }
}
function BreadCrumbUiComponent_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1)(1, "ol", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadCrumbUiComponent_nav_0_ng_container_2_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
  }
}
class BreadCrumbUiComponent {
  items;
  static ɵfac = function BreadCrumbUiComponent_Factory(t) {
    return new (t || BreadCrumbUiComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BreadCrumbUiComponent,
    selectors: [["ui-breadcrumb"]],
    inputs: {
      items: "items"
    },
    decls: 1,
    vars: 1,
    consts: [["aria-label", "breadcrumb", "class", "px-4", 4, "ngIf"], ["aria-label", "breadcrumb", 1, "px-4"], [1, "breadcrumb"], [4, "ngFor", "ngForOf"], ["class", "breadcrumb-item", "aria-current", "page", 4, "ngIf"], ["class", "breadcrumb-item active", "aria-current", "page", 4, "ngIf"], ["aria-current", "page", 1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"]],
    template: function BreadCrumbUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BreadCrumbUiComponent_nav_0_Template, 3, 1, "nav", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: [".ui-breadcrumb[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  line-height: 40px;\n  font-size: 14px;\n}\n.ui-breadcrumb[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ui-breadcrumb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .ui-breadcrumb[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .ui-breadcrumb[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n.ui-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .ui-breadcrumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #565656;\n}\n\n@media screen and (min-width: 769px) {\n  .ui-breadcrumb[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n}\n.breadcrumb-limiter[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 10px;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 29385:
/*!***************************************************************************!*\
  !*** ./libs/@adesso/uis/bread-crumb/src/models/bread-crumb-item.model.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbItemModel": () => (/* binding */ BreadcrumbItemModel)
/* harmony export */ });
class BreadcrumbItemModel {
  label;
  url;
}

/***/ }),

/***/ 80524:
/*!********************************************************!*\
  !*** ./libs/@adesso/uis/bread-crumb/src/public-api.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadCrumbUiComponent": () => (/* reexport safe */ _components_bread_crumb_ui_component__WEBPACK_IMPORTED_MODULE_0__.BreadCrumbUiComponent),
/* harmony export */   "BreadCrumbUiModule": () => (/* reexport safe */ _bread_crumb_ui_module__WEBPACK_IMPORTED_MODULE_1__.BreadCrumbUiModule),
/* harmony export */   "BreadcrumbItemModel": () => (/* reexport safe */ _models_bread_crumb_item_model__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbItemModel)
/* harmony export */ });
/* harmony import */ var _components_bread_crumb_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/bread-crumb-ui.component */ 66241);
/* harmony import */ var _bread_crumb_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bread-crumb-ui.module */ 49010);
/* harmony import */ var _models_bread_crumb_item_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/bread-crumb-item.model */ 29385);




/***/ })

}]);