"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["default-libs_adesso_features_carousel-with-search_src_public-api_ts"],{

/***/ 6695:
/*!***********************************************************************************************!*\
  !*** ./libs/@adesso/features/carousel-with-search/src/carousel-with-search-feature.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselWithSearchFeatureModule": () => (/* binding */ CarouselWithSearchFeatureModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _adesso_ui_image_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/ui-image-carousel */ 44860);
/* harmony import */ var _adesso_feature_suggest_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/feature-suggest-search */ 93473);
/* harmony import */ var _components_carousel_with_search_feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/carousel-with-search-feature.component */ 60719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);





class CarouselWithSearchFeatureModule {
  static ɵfac = function CarouselWithSearchFeatureModule_Factory(t) {
    return new (t || CarouselWithSearchFeatureModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: CarouselWithSearchFeatureModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _adesso_ui_image_carousel__WEBPACK_IMPORTED_MODULE_0__.ImageCarouselUiModule, _adesso_feature_suggest_search__WEBPACK_IMPORTED_MODULE_1__.SuggestSearchFeatureModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CarouselWithSearchFeatureModule, {
    declarations: [_components_carousel_with_search_feature_component__WEBPACK_IMPORTED_MODULE_2__.CarouselWithSearchFeatureComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _adesso_ui_image_carousel__WEBPACK_IMPORTED_MODULE_0__.ImageCarouselUiModule, _adesso_feature_suggest_search__WEBPACK_IMPORTED_MODULE_1__.SuggestSearchFeatureModule],
    exports: [_components_carousel_with_search_feature_component__WEBPACK_IMPORTED_MODULE_2__.CarouselWithSearchFeatureComponent]
  });
})();

/***/ }),

/***/ 60719:
/*!*************************************************************************************************************!*\
  !*** ./libs/@adesso/features/carousel-with-search/src/components/carousel-with-search-feature.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselWithSearchFeatureComponent": () => (/* binding */ CarouselWithSearchFeatureComponent)
/* harmony export */ });
/* harmony import */ var _adesso_feature_suggest_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/feature-suggest-search */ 93473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uis_image_carousel_src_components_image_carousel_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../uis/image-carousel/src/components/image-carousel-ui.component */ 86584);
/* harmony import */ var _suggest_search_src_components_suggest_search_feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../suggest-search/src/components/suggest-search-feature.component */ 24277);





function CarouselWithSearchFeatureComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ui-image-carousel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "feature-suggest-search", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("slides", ctx_r0.slides);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("design", ctx_r0.suggestSearchDesign);
  }
}
class CarouselWithSearchFeatureComponent {
  slides;
  suggestSearchDesign = _adesso_feature_suggest_search__WEBPACK_IMPORTED_MODULE_0__.SuggestSearchDesignEnum.carouselInclude;
  static ɵfac = function CarouselWithSearchFeatureComponent_Factory(t) {
    return new (t || CarouselWithSearchFeatureComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CarouselWithSearchFeatureComponent,
    selectors: [["feature-carousel-with-search"]],
    inputs: {
      slides: "slides"
    },
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "inner-content-area", "no-mobile-distance", "carousel-search"], [3, "slides"], [1, "search"], [3, "design"], [1, "clear"]],
    template: function CarouselWithSearchFeatureComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CarouselWithSearchFeatureComponent_ng_container_0_Template, 6, 2, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.slides);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _uis_image_carousel_src_components_image_carousel_ui_component__WEBPACK_IMPORTED_MODULE_1__.ImageCarouselUiComponent, _suggest_search_src_components_suggest_search_feature_component__WEBPACK_IMPORTED_MODULE_2__.SuggestSearchFeatureComponent],
    styles: [".carousel-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  margin-top: -30px;\n  margin-bottom: 30px;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 33779:
/*!**********************************************************************!*\
  !*** ./libs/@adesso/features/carousel-with-search/src/public-api.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselWithSearchFeatureComponent": () => (/* reexport safe */ _components_carousel_with_search_feature_component__WEBPACK_IMPORTED_MODULE_0__.CarouselWithSearchFeatureComponent),
/* harmony export */   "CarouselWithSearchFeatureModule": () => (/* reexport safe */ _carousel_with_search_feature_module__WEBPACK_IMPORTED_MODULE_1__.CarouselWithSearchFeatureModule)
/* harmony export */ });
/* harmony import */ var _components_carousel_with_search_feature_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/carousel-with-search-feature.component */ 60719);
/* harmony import */ var _carousel_with_search_feature_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel-with-search-feature.module */ 6695);



/***/ }),

/***/ 86584:
/*!***************************************************************************************!*\
  !*** ./libs/@adesso/uis/image-carousel/src/components/image-carousel-ui.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageCarouselUiComponent": () => (/* binding */ ImageCarouselUiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36895);


function ImageCarouselUiComponent_input_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 7);
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const isFirst_r6 = ctx.first;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", isFirst_r6 == true ? "checked" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.idPrefix + i_r5);
  }
}
function ImageCarouselUiComponent_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 10)(2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r7.getBackId(i_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r7.getNextId(i_r9));
  }
}
function ImageCarouselUiComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageCarouselUiComponent_ng_container_3_div_1_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.slides);
  }
}
function ImageCarouselUiComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 12);
  }
  if (rf & 2) {
    const slide_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(", slide_r10.src, ");");
  }
}
function ImageCarouselUiComponent_div_6_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "label", 15);
  }
  if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r11.idPrefix + i_r13);
  }
}
function ImageCarouselUiComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageCarouselUiComponent_div_6_label_1_Template, 1, 1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.slides);
  }
}
class ImageCarouselUiComponent {
  slides;
  idPrefix = "slide_";
  getBackId(id) {
    if (id > 0) {
      return this.idPrefix + (id - 1);
    } else {
      return this.idPrefix + this.slides.length;
    }
  }
  getNextId(id) {
    if (id < this.slides.length - 1) {
      return this.idPrefix + (id + 1);
    } else {
      return this.idPrefix + "0";
    }
  }
  static ɵfac = function ImageCarouselUiComponent_Factory(t) {
    return new (t || ImageCarouselUiComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ImageCarouselUiComponent,
    selectors: [["ui-image-carousel"]],
    inputs: {
      slides: "slides"
    },
    decls: 7,
    vars: 4,
    consts: [[1, "carousel-container"], [1, "carousel", "my-carousel", "carousel--translate"], ["class", "carousel__activator", "type", "radio", "name", "carousel", 3, "id", "checked", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "carousel__track"], ["class", "carousel__slide", 3, "style", 4, "ngFor", "ngForOf"], ["class", "carousel__indicators", 4, "ngIf"], ["type", "radio", "name", "carousel", 1, "carousel__activator", 3, "id", "checked"], ["class", "carousel__controls", 4, "ngFor", "ngForOf"], [1, "carousel__controls"], [1, "carousel__control", "carousel__control--backward", 3, "for"], [1, "carousel__control", "carousel__control--forward", 3, "for"], [1, "carousel__slide"], [1, "carousel__indicators"], ["class", "carousel__indicator", 3, "for", 4, "ngFor", "ngForOf"], [1, "carousel__indicator", 3, "for"]],
    template: function ImageCarouselUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageCarouselUiComponent_input_2_Template, 1, 2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImageCarouselUiComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ImageCarouselUiComponent_li_5_Template, 1, 3, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ImageCarouselUiComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".carousel[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  height: 200px;\n  width: 100%;\n  overflow: hidden;\n  text-align: center;\n  position: relative;\n  padding: 0;\n  list-style: none;\n}\n.carousel[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .carousel[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .carousel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .carousel[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\n@media screen and (min-width: 769px) {\n  .carousel[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\n.carousel__controls[_ngcontent-%COMP%], .carousel__activator[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(1) {\n  transform: translateX(0%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(0%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(1) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(1) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(1) {\n  opacity: 1;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(2) {\n  transform: translateX(100%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(2) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(2) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(2) {\n  opacity: 1;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(3) {\n  transform: translateX(200%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(-200%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(3) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(3) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(3) {\n  opacity: 1;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(4) {\n  transform: translateX(300%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(-300%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(4) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(4) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(4) {\n  opacity: 1;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(5) {\n  transform: translateX(400%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(-400%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(5) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(5) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(5) {\n  opacity: 1;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(6) {\n  transform: translateX(500%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(6):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(-500%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(6):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(6) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(6):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(6) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(6):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(6) {\n  opacity: 1;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(7) {\n  transform: translateX(600%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(7):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(-600%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(7):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(7) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(7):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(7) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(7):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(7) {\n  opacity: 1;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(8) {\n  transform: translateX(700%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(8):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(-700%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(8):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(8) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(8):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(8) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(8):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(8) {\n  opacity: 1;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(9) {\n  transform: translateX(800%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(9):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(-800%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(9):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(9) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(9):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(9) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(9):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(9) {\n  opacity: 1;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(10) {\n  transform: translateX(900%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(10):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(-900%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(10):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(10) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(10):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(10) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(10):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(10) {\n  opacity: 1;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(11) {\n  transform: translateX(1000%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(11):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(-1000%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(11):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(11) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(11):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(11) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(11):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(11) {\n  opacity: 1;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(12) {\n  transform: translateX(1100%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(12):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(-1100%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(12):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(12) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(12):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(12) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(12):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(12) {\n  opacity: 1;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(13) {\n  transform: translateX(1200%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(13):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(-1200%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(13):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(13) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(13):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(13) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(13):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(13) {\n  opacity: 1;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(14) {\n  transform: translateX(1300%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(14):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(-1300%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(14):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(14) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(14):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(14) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(14):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(14) {\n  opacity: 1;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(15) {\n  transform: translateX(1400%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(15):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(-1400%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(15):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(15) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(15):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(15) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(15):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(15) {\n  opacity: 1;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(16) {\n  transform: translateX(1500%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(16):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(-1500%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(16):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(16) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(16):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(16) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(16):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(16) {\n  opacity: 1;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(17) {\n  transform: translateX(1600%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(17):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(-1600%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(17):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(17) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(17):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(17) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(17):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(17) {\n  opacity: 1;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(18) {\n  transform: translateX(1700%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(18):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(-1700%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(18):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(18) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(18):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(18) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(18):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(18) {\n  opacity: 1;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(19) {\n  transform: translateX(1800%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(19):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(-1800%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(19):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(19) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(19):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(19) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(19):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(19) {\n  opacity: 1;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(20) {\n  transform: translateX(1900%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(20):checked    ~ .carousel__track[_ngcontent-%COMP%] {\n  transform: translateX(-1900%);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(20):checked    ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(20) {\n  transition: opacity 0.5s, transform 0.5s;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(20):checked    ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(20) {\n  display: block;\n  opacity: 1;\n}\n\n.carousel__activator[_ngcontent-%COMP%]:nth-of-type(20):checked    ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(20) {\n  opacity: 1;\n}\n\n.carousel__control[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  margin-top: -15px;\n  top: 50%;\n  position: absolute;\n  display: block;\n  cursor: pointer;\n  border-width: 5px 5px 0 0;\n  border-style: solid;\n  border-color: #fafafa;\n  opacity: 0.35;\n  outline: 0;\n  z-index: 3;\n}\n\n.carousel__control[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.carousel__control--backward[_ngcontent-%COMP%] {\n  left: 10px;\n  transform: rotate(-135deg);\n}\n\n.carousel__control--forward[_ngcontent-%COMP%] {\n  right: 10px;\n  transform: rotate(45deg);\n}\n\n.carousel__indicators[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 40px;\n  width: 100%;\n  text-align: center;\n}\n\n.carousel__indicator[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  border-radius: 100%;\n  display: inline-block;\n  z-index: 2;\n  cursor: pointer;\n  opacity: 0.35;\n  margin: 0 2.5px 0 2.5px;\n}\n\n.carousel__indicator[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n\n.carousel__track[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 0;\n  margin: 0;\n  transition: transform 0.5s ease 0s;\n}\n\n.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%] {\n  display: block;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n}\n\n.carousel--scale[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n\n.carousel__slide[_ngcontent-%COMP%] {\n  height: 100%;\n  position: absolute;\n  overflow-y: auto;\n  opacity: 0;\n}\n\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.carousel-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n}\n\n.carousel__slide[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.carousel--thumb[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n}\n\n.carousel__indicator[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n}\n\n.carousel__slide[_ngcontent-%COMP%], .carousel--thumb[_ngcontent-%COMP%]   .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 11138:
/*!*************************************************************************!*\
  !*** ./libs/@adesso/uis/image-carousel/src/image-carousel-ui.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageCarouselUiModule": () => (/* binding */ ImageCarouselUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _components_image_carousel_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/image-carousel-ui.component */ 86584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);



class ImageCarouselUiModule {
  static ɵfac = function ImageCarouselUiModule_Factory(t) {
    return new (t || ImageCarouselUiModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ImageCarouselUiModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ImageCarouselUiModule, {
    declarations: [_components_image_carousel_ui_component__WEBPACK_IMPORTED_MODULE_0__.ImageCarouselUiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_components_image_carousel_ui_component__WEBPACK_IMPORTED_MODULE_0__.ImageCarouselUiComponent]
  });
})();

/***/ }),

/***/ 44860:
/*!***********************************************************!*\
  !*** ./libs/@adesso/uis/image-carousel/src/public-api.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageCarouselUiComponent": () => (/* reexport safe */ _components_image_carousel_ui_component__WEBPACK_IMPORTED_MODULE_0__.ImageCarouselUiComponent),
/* harmony export */   "ImageCarouselUiModule": () => (/* reexport safe */ _image_carousel_ui_module__WEBPACK_IMPORTED_MODULE_1__.ImageCarouselUiModule)
/* harmony export */ });
/* harmony import */ var _components_image_carousel_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/image-carousel-ui.component */ 86584);
/* harmony import */ var _image_carousel_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-carousel-ui.module */ 11138);



/***/ })

}]);