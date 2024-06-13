"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_derivative-search_src_public-api_ts"],{

/***/ 59025:
/*!*************************************************************************************************!*\
  !*** ./libs/@adesso/pages/derivative-search/src/components/derivative-search-page.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DerivativeSearchPageComponent": () => (/* binding */ DerivativeSearchPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);

class DerivativeSearchPageComponent {
  static ɵfac = function DerivativeSearchPageComponent_Factory(t) {
    return new (t || DerivativeSearchPageComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DerivativeSearchPageComponent,
    selectors: [["page-derivative-search"]],
    decls: 2,
    vars: 0,
    consts: [[1, "inner-content-area"]],
    template: function DerivativeSearchPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DerivativeSearch\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    changeDetection: 0
  });
}

/***/ }),

/***/ 69481:
/*!***********************************************************************************!*\
  !*** ./libs/@adesso/pages/derivative-search/src/derivative-search-page.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DerivativeSearchPageModule": () => (/* binding */ DerivativeSearchPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _components_derivative_search_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/derivative-search-page.component */ 59025);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);





const routes = [{
  path: "",
  component: _components_derivative_search_page_component__WEBPACK_IMPORTED_MODULE_0__.DerivativeSearchPageComponent
}];
class DerivativeSearchPageModule {
  static ɵfac = function DerivativeSearchPageModule_Factory(t) {
    return new (t || DerivativeSearchPageModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DerivativeSearchPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DerivativeSearchPageModule, {
    declarations: [_components_derivative_search_page_component__WEBPACK_IMPORTED_MODULE_0__.DerivativeSearchPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 80190:
/*!****************************************************************!*\
  !*** ./libs/@adesso/pages/derivative-search/src/public-api.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DerivativeSearchPageComponent": () => (/* reexport safe */ _components_derivative_search_page_component__WEBPACK_IMPORTED_MODULE_1__.DerivativeSearchPageComponent),
/* harmony export */   "DerivativeSearchPageModule": () => (/* reexport safe */ _derivative_search_page_module__WEBPACK_IMPORTED_MODULE_0__.DerivativeSearchPageModule)
/* harmony export */ });
/* harmony import */ var _derivative_search_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./derivative-search-page.module */ 69481);
/* harmony import */ var _components_derivative_search_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/derivative-search-page.component */ 59025);



/***/ })

}]);