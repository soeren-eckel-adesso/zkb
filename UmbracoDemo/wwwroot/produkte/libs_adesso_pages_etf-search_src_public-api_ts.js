"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_etf-search_src_public-api_ts"],{

/***/ 98461:
/*!***********************************************************************************!*\
  !*** ./libs/@adesso/pages/etf-search/src/components/etf-search-page.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EtfSearchPageComponent": () => (/* binding */ EtfSearchPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);

class EtfSearchPageComponent {
  static ɵfac = function EtfSearchPageComponent_Factory(t) {
    return new (t || EtfSearchPageComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EtfSearchPageComponent,
    selectors: [["page-etf-search"]],
    decls: 2,
    vars: 0,
    consts: [[1, "inner-content-area"]],
    template: function EtfSearchPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " EtfSearch\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    changeDetection: 0
  });
}

/***/ }),

/***/ 6477:
/*!*********************************************************************!*\
  !*** ./libs/@adesso/pages/etf-search/src/etf-search-page.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EtfSearchPageModule": () => (/* binding */ EtfSearchPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _components_etf_search_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/etf-search-page.component */ 98461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);





const routes = [{
  path: "",
  component: _components_etf_search_page_component__WEBPACK_IMPORTED_MODULE_0__.EtfSearchPageComponent
}];
class EtfSearchPageModule {
  static ɵfac = function EtfSearchPageModule_Factory(t) {
    return new (t || EtfSearchPageModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: EtfSearchPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EtfSearchPageModule, {
    declarations: [_components_etf_search_page_component__WEBPACK_IMPORTED_MODULE_0__.EtfSearchPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 78792:
/*!*********************************************************!*\
  !*** ./libs/@adesso/pages/etf-search/src/public-api.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EtfSearchPageComponent": () => (/* reexport safe */ _components_etf_search_page_component__WEBPACK_IMPORTED_MODULE_1__.EtfSearchPageComponent),
/* harmony export */   "EtfSearchPageModule": () => (/* reexport safe */ _etf_search_page_module__WEBPACK_IMPORTED_MODULE_0__.EtfSearchPageModule)
/* harmony export */ });
/* harmony import */ var _etf_search_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./etf-search-page.module */ 6477);
/* harmony import */ var _components_etf_search_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/etf-search-page.component */ 98461);



/***/ })

}]);