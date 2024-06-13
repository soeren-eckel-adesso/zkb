"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_not-found-redirect_src_public-api_ts"],{

/***/ 94744:
/*!***************************************************************************************************!*\
  !*** ./libs/@adesso/pages/not-found-redirect/src/components/not-found-redirect-page.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundRedirectPageComponent": () => (/* binding */ NotFoundRedirectPageComponent)
/* harmony export */ });
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 42466);






class NotFoundRedirectPageComponent {
  constructor(router, translationService) {
    router.navigate([translationService.instant(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PageTypeEnum.notFoundPage)]);
  }
  static ɵfac = function NotFoundRedirectPageComponent_Factory(t) {
    return new (t || NotFoundRedirectPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NotFoundRedirectPageComponent,
    selectors: [["page-not-found-redirect"]],
    decls: 0,
    vars: 0,
    template: function NotFoundRedirectPageComponent_Template(rf, ctx) {},
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 14289:
/*!*************************************************************************************!*\
  !*** ./libs/@adesso/pages/not-found-redirect/src/not-found-redirect-page.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundRedirectPageModule": () => (/* binding */ NotFoundRedirectPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _components_not_found_redirect_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/not-found-redirect-page.component */ 94744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);






const routes = [{
  path: "",
  component: _components_not_found_redirect_page_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundRedirectPageComponent
}];
class NotFoundRedirectPageModule {
  static ɵfac = function NotFoundRedirectPageModule_Factory(t) {
    return new (t || NotFoundRedirectPageModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NotFoundRedirectPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotFoundRedirectPageModule, {
    declarations: [_components_not_found_redirect_page_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundRedirectPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule]
  });
})();

/***/ }),

/***/ 95490:
/*!*****************************************************************!*\
  !*** ./libs/@adesso/pages/not-found-redirect/src/public-api.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundRedirectPageComponent": () => (/* reexport safe */ _components_not_found_redirect_page_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundRedirectPageComponent),
/* harmony export */   "NotFoundRedirectPageModule": () => (/* reexport safe */ _not_found_redirect_page_module__WEBPACK_IMPORTED_MODULE_0__.NotFoundRedirectPageModule)
/* harmony export */ });
/* harmony import */ var _not_found_redirect_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found-redirect-page.module */ 14289);
/* harmony import */ var _components_not_found_redirect_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/not-found-redirect-page.component */ 94744);



/***/ })

}]);