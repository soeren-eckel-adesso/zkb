"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_not-found_src_public-api_ts"],{

/***/ 13367:
/*!*********************************************************************************!*\
  !*** ./libs/@adesso/pages/not-found/src/components/not-found-page.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageComponent": () => (/* binding */ NotFoundPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 42466);


class NotFoundPageComponent {
  static ɵfac = function NotFoundPageComponent_Factory(t) {
    return new (t || NotFoundPageComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NotFoundPageComponent,
    selectors: [["page-not-found"]],
    decls: 4,
    vars: 3,
    consts: [[1, "inner-content-area"], [1, "page-not-found-text"]],
    template: function NotFoundPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "page-not-found-info-text"));
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    styles: [".page-not-found-text[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 50px;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 93177:
/*!*******************************************************************!*\
  !*** ./libs/@adesso/pages/not-found/src/not-found-page.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageModule": () => (/* binding */ NotFoundPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translations/config */ 41725);
/* harmony import */ var _components_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/not-found-page.component */ 13367);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);










const routes = [{
  path: "",
  component: _components_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundPageComponent
}];
class NotFoundPageModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_1__.translationConfig);
  }
  static ɵfac = function NotFoundPageModule_Factory(t) {
    return new (t || NotFoundPageModule)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_0__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: NotFoundPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_0__.TranslationManagerUtilModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_3__.LoggerUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NotFoundPageModule, {
    declarations: [_components_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_0__.TranslationManagerUtilModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_3__.LoggerUtilModule]
  });
})();

/***/ }),

/***/ 54019:
/*!********************************************************!*\
  !*** ./libs/@adesso/pages/not-found/src/public-api.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageComponent": () => (/* reexport safe */ _components_not_found_page_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundPageComponent),
/* harmony export */   "NotFoundPageModule": () => (/* reexport safe */ _not_found_page_module__WEBPACK_IMPORTED_MODULE_0__.NotFoundPageModule)
/* harmony export */ });
/* harmony import */ var _not_found_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found-page.module */ 93177);
/* harmony import */ var _components_not_found_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/not-found-page.component */ 13367);



/***/ }),

/***/ 41725:
/*!*****************************************************************!*\
  !*** ./libs/@adesso/pages/not-found/src/translations/config.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [{
  term: "page-not-found-info-text",
  deDe: "Die Seite konnte wurde nicht gefunden.",
  enUs: "The page was not found."
}];

/***/ })

}]);