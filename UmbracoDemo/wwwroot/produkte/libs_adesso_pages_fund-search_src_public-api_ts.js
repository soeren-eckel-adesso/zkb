"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_fund-search_src_public-api_ts"],{

/***/ 14447:
/*!*************************************************************************************!*\
  !*** ./libs/@adesso/pages/fund-search/src/components/fund-search-page.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundSearchPageComponent": () => (/* binding */ FundSearchPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);

class FundSearchPageComponent {
  static ɵfac = function FundSearchPageComponent_Factory(t) {
    return new (t || FundSearchPageComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FundSearchPageComponent,
    selectors: [["page-fund-search"]],
    decls: 2,
    vars: 0,
    consts: [[1, "inner-content-area"]],
    template: function FundSearchPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " FundSearch\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    changeDetection: 0
  });
}

/***/ }),

/***/ 22853:
/*!***********************************************************************!*\
  !*** ./libs/@adesso/pages/fund-search/src/fund-search-page.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundSearchPageModule": () => (/* binding */ FundSearchPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _components_fund_search_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/fund-search-page.component */ 14447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);





const routes = [{
  path: "",
  component: _components_fund_search_page_component__WEBPACK_IMPORTED_MODULE_0__.FundSearchPageComponent
}];
class FundSearchPageModule {
  static ɵfac = function FundSearchPageModule_Factory(t) {
    return new (t || FundSearchPageModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: FundSearchPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FundSearchPageModule, {
    declarations: [_components_fund_search_page_component__WEBPACK_IMPORTED_MODULE_0__.FundSearchPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 84485:
/*!**********************************************************!*\
  !*** ./libs/@adesso/pages/fund-search/src/public-api.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundSearchPageComponent": () => (/* reexport safe */ _components_fund_search_page_component__WEBPACK_IMPORTED_MODULE_1__.FundSearchPageComponent),
/* harmony export */   "FundSearchPageModule": () => (/* reexport safe */ _fund_search_page_module__WEBPACK_IMPORTED_MODULE_0__.FundSearchPageModule)
/* harmony export */ });
/* harmony import */ var _fund_search_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund-search-page.module */ 22853);
/* harmony import */ var _components_fund_search_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/fund-search-page.component */ 14447);



/***/ })

}]);