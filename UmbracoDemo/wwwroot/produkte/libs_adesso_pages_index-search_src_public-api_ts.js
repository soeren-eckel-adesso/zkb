"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_index-search_src_public-api_ts"],{

/***/ 96632:
/*!***************************************************************************************!*\
  !*** ./libs/@adesso/pages/index-search/src/components/index-search-page.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexSearchPageComponent": () => (/* binding */ IndexSearchPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);

class IndexSearchPageComponent {
  static ɵfac = function IndexSearchPageComponent_Factory(t) {
    return new (t || IndexSearchPageComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: IndexSearchPageComponent,
    selectors: [["page-index-search"]],
    decls: 2,
    vars: 0,
    consts: [[1, "inner-content-area"]],
    template: function IndexSearchPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " IndexSearch\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    changeDetection: 0
  });
}

/***/ }),

/***/ 44991:
/*!*************************************************************************!*\
  !*** ./libs/@adesso/pages/index-search/src/index-search-page.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexSearchPageModule": () => (/* binding */ IndexSearchPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _components_index_search_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/index-search-page.component */ 96632);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);





const routes = [{
  path: "",
  component: _components_index_search_page_component__WEBPACK_IMPORTED_MODULE_0__.IndexSearchPageComponent
}];
class IndexSearchPageModule {
  static ɵfac = function IndexSearchPageModule_Factory(t) {
    return new (t || IndexSearchPageModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: IndexSearchPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IndexSearchPageModule, {
    declarations: [_components_index_search_page_component__WEBPACK_IMPORTED_MODULE_0__.IndexSearchPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 34046:
/*!***********************************************************!*\
  !*** ./libs/@adesso/pages/index-search/src/public-api.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexSearchPageComponent": () => (/* reexport safe */ _components_index_search_page_component__WEBPACK_IMPORTED_MODULE_1__.IndexSearchPageComponent),
/* harmony export */   "IndexSearchPageModule": () => (/* reexport safe */ _index_search_page_module__WEBPACK_IMPORTED_MODULE_0__.IndexSearchPageModule)
/* harmony export */ });
/* harmony import */ var _index_search_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-search-page.module */ 44991);
/* harmony import */ var _components_index_search_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/index-search-page.component */ 96632);



/***/ })

}]);