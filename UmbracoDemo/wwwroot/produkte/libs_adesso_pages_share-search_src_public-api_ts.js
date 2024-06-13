"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_share-search_src_public-api_ts"],{

/***/ 13036:
/*!***************************************************************************************!*\
  !*** ./libs/@adesso/pages/share-search/src/components/share-search-page.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareSearchPageComponent": () => (/* binding */ ShareSearchPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);

class ShareSearchPageComponent {
  static ɵfac = function ShareSearchPageComponent_Factory(t) {
    return new (t || ShareSearchPageComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ShareSearchPageComponent,
    selectors: [["page-share-search"]],
    decls: 2,
    vars: 0,
    consts: [[1, "inner-content-area"]],
    template: function ShareSearchPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ShareSearch\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    changeDetection: 0
  });
}

/***/ }),

/***/ 86146:
/*!***********************************************************!*\
  !*** ./libs/@adesso/pages/share-search/src/public-api.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareSearchPageComponent": () => (/* reexport safe */ _components_share_search_page_component__WEBPACK_IMPORTED_MODULE_1__.ShareSearchPageComponent),
/* harmony export */   "ShareSearchPageModule": () => (/* reexport safe */ _share_search_page_module__WEBPACK_IMPORTED_MODULE_0__.ShareSearchPageModule)
/* harmony export */ });
/* harmony import */ var _share_search_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share-search-page.module */ 16480);
/* harmony import */ var _components_share_search_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/share-search-page.component */ 13036);



/***/ }),

/***/ 16480:
/*!*************************************************************************!*\
  !*** ./libs/@adesso/pages/share-search/src/share-search-page.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareSearchPageModule": () => (/* binding */ ShareSearchPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _components_share_search_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/share-search-page.component */ 13036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);





const routes = [{
  path: "",
  component: _components_share_search_page_component__WEBPACK_IMPORTED_MODULE_0__.ShareSearchPageComponent
}];
class ShareSearchPageModule {
  static ɵfac = function ShareSearchPageModule_Factory(t) {
    return new (t || ShareSearchPageModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ShareSearchPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ShareSearchPageModule, {
    declarations: [_components_share_search_page_component__WEBPACK_IMPORTED_MODULE_0__.ShareSearchPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ })

}]);