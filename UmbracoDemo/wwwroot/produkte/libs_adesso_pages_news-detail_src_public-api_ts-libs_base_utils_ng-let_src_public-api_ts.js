"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_pages_news-detail_src_public-api_ts-libs_base_utils_ng-let_src_public-api_ts"],{

/***/ 89496:
/*!*************************************************************************************!*\
  !*** ./libs/@adesso/pages/news-detail/src/components/news-detail-page.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsDetailPageComponent": () => (/* binding */ NewsDetailPageComponent)
/* harmony export */ });
/* harmony import */ var _adesso_service_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/service-news */ 25048);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uis_news_detail_src_components_news_detail_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../uis/news-detail/src/components/news-detail-ui.component */ 74461);
/* harmony import */ var _uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../uis/instrument-list/src/components/instrument-list/instrument-list-ui.component */ 38541);












function NewsDetailPageComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ui-news-detail", 3)(2, "br")(3, "ui-instrument-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const news_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("news", news_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("listItems", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 3, ctx_r0.instruments$))("tableType", ctx_r0.instrumentTableType);
  }
}
function NewsDetailPageComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class NewsDetailPageComponent {
  newsService;
  instrumentListService;
  news$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(undefined);
  instrumentIsins;
  instrumentTableType = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.UiInstrumentListTypeEnum.order;
  instruments$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
  lastNewsId;
  routerSubscription;
  constructor(newsService, instrumentListService, router) {
    this.newsService = newsService;
    this.instrumentListService = instrumentListService;
    this.routerSubscription = router.events.subscribe(routerEvent => {
      if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivationEnd) {
        this.lastNewsId = routerEvent.snapshot.params.newsId;
        this.news$.next(undefined);
        this.instruments$.next([]);
      }
      if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd && this.lastNewsId) {
        this.newsService.getNewsDetail(this.lastNewsId).subscribe(x => {
          this.news$.next(x.news);
          this.instrumentIsins = x.instrumentIsins;
          if (this.instrumentIsins) {
            this.instrumentListService.getInstrumentTable(this.instrumentIsins, this.instrumentTableType).subscribe(y => {
              this.instruments$.next(y?.result);
            });
          }
        });
      }
    });
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
  static ɵfac = function NewsDetailPageComponent_Factory(t) {
    return new (t || NewsDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_adesso_service_news__WEBPACK_IMPORTED_MODULE_0__.NewsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_1__.InstrumentListService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: NewsDetailPageComponent,
    selectors: [["page-news-detail"]],
    decls: 5,
    vars: 4,
    consts: [[1, "inner-content-area"], [4, "ngIf", "ngIfElse"], ["loading", ""], [3, "news"], [3, "listItems", "tableType"], [1, "loading-page"], ["src", "./assets/loading.gif"]],
    template: function NewsDetailPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NewsDetailPageComponent_ng_container_1_Template, 5, 5, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, NewsDetailPageComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx.news$))("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _uis_news_detail_src_components_news_detail_ui_component__WEBPACK_IMPORTED_MODULE_3__.NewsDetailUiComponent, _uis_instrument_list_src_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_4__.InstrumentListUiComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    changeDetection: 0
  });
}

/***/ }),

/***/ 4208:
/*!***********************************************************************!*\
  !*** ./libs/@adesso/pages/news-detail/src/news-detail-page.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsDetailPageModule": () => (/* binding */ NewsDetailPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _adesso_ui_news_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/ui-news-detail */ 40669);
/* harmony import */ var _adesso_service_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adesso/service-news */ 25048);
/* harmony import */ var _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @adesso/ui-instrument-list */ 20372);
/* harmony import */ var _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @adesso/service-instrument-list */ 6470);
/* harmony import */ var _components_news_detail_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/news-detail-page.component */ 89496);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translations/config */ 61880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);












const routes = [{
  path: "",
  component: _components_news_detail_page_component__WEBPACK_IMPORTED_MODULE_5__.NewsDetailPageComponent
}];
class NewsDetailPageModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_6__.translationConfig);
  }
  static ɵfac = function NewsDetailPageModule_Factory(t) {
    return new (t || NewsDetailPageModule)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_0__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: NewsDetailPageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_0__.TranslationManagerUtilModule, _adesso_ui_news_detail__WEBPACK_IMPORTED_MODULE_1__.NewsDetailUiModule, _adesso_service_news__WEBPACK_IMPORTED_MODULE_2__.ServiceNewsModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_3__.InstrumentListUiModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_4__.InstrumentListServiceModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](NewsDetailPageModule, {
    declarations: [_components_news_detail_page_component__WEBPACK_IMPORTED_MODULE_5__.NewsDetailPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_0__.TranslationManagerUtilModule, _adesso_ui_news_detail__WEBPACK_IMPORTED_MODULE_1__.NewsDetailUiModule, _adesso_service_news__WEBPACK_IMPORTED_MODULE_2__.ServiceNewsModule, _adesso_ui_instrument_list__WEBPACK_IMPORTED_MODULE_3__.InstrumentListUiModule, _adesso_service_instrument_list__WEBPACK_IMPORTED_MODULE_4__.InstrumentListServiceModule]
  });
})();

/***/ }),

/***/ 6438:
/*!**********************************************************!*\
  !*** ./libs/@adesso/pages/news-detail/src/public-api.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsDetailPageComponent": () => (/* reexport safe */ _components_news_detail_page_component__WEBPACK_IMPORTED_MODULE_1__.NewsDetailPageComponent),
/* harmony export */   "NewsDetailPageModule": () => (/* reexport safe */ _news_detail_page_module__WEBPACK_IMPORTED_MODULE_0__.NewsDetailPageModule)
/* harmony export */ });
/* harmony import */ var _news_detail_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-detail-page.module */ 4208);
/* harmony import */ var _components_news_detail_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/news-detail-page.component */ 89496);



/***/ }),

/***/ 61880:
/*!*******************************************************************!*\
  !*** ./libs/@adesso/pages/news-detail/src/translations/config.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [];

/***/ }),

/***/ 74461:
/*!*********************************************************************************!*\
  !*** ./libs/@adesso/uis/news-detail/src/components/news-detail-ui.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsDetailUiComponent": () => (/* binding */ NewsDetailUiComponent)
/* harmony export */ });
/* harmony import */ var _models_news_detail_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/news-detail-view.model */ 14378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_utils_format_src_pipes_date_or_time_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@base/utils/format/src/pipes/date-or-time.pipe */ 62812);




function NewsDetailUiComponent_p_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const paragraph_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](paragraph_r1);
  }
}
function NewsDetailUiComponent_p_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const paragraph_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", paragraph_r1, " ");
  }
}
function NewsDetailUiComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NewsDetailUiComponent_p_7_ng_container_1_Template, 3, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NewsDetailUiComponent_p_7_ng_template_2_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const paragraph_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", paragraph_r1.substr(paragraph_r1.length - 1, 1) == ":" && paragraph_r1.length < 50)("ngIfElse", _r3);
  }
}
class NewsDetailUiComponent {
  news;
  static ɵfac = function NewsDetailUiComponent_Factory(t) {
    return new (t || NewsDetailUiComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NewsDetailUiComponent,
    selectors: [["ui-news-detail"]],
    inputs: {
      news: "news"
    },
    decls: 8,
    vars: 5,
    consts: [[1, "news-detail"], [1, "news-date"], [1, "news-headline"], [1, "news-body"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["normalParagraph", ""]],
    template: function NewsDetailUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "dateOrTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NewsDetailUiComponent_p_7_Template, 5, 2, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, ctx.news == null ? null : ctx.news.date));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.news == null ? null : ctx.news.headline);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.news == null ? null : ctx.news.body);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _base_utils_format_src_pipes_date_or_time_pipe__WEBPACK_IMPORTED_MODULE_1__.DateOrTimePipe],
    styles: [".news-detail[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n}\n.news-detail[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\n.news-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.news-body[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  line-height: 26px;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 14378:
/*!***************************************************************************!*\
  !*** ./libs/@adesso/uis/news-detail/src/models/news-detail-view.model.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsDetailViewModel": () => (/* binding */ NewsDetailViewModel)
/* harmony export */ });
class NewsDetailViewModel {
  id;
  body;
  date;
  headline;
}

/***/ }),

/***/ 51743:
/*!*******************************************************************!*\
  !*** ./libs/@adesso/uis/news-detail/src/news-detail-ui.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsDetailUiModule": () => (/* binding */ NewsDetailUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-format */ 84094);
/* harmony import */ var _components_news_detail_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/news-detail-ui.component */ 74461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);




class NewsDetailUiModule {
  static ɵfac = function NewsDetailUiModule_Factory(t) {
    return new (t || NewsDetailUiModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: NewsDetailUiModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _base_util_format__WEBPACK_IMPORTED_MODULE_0__.FormatUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NewsDetailUiModule, {
    declarations: [_components_news_detail_ui_component__WEBPACK_IMPORTED_MODULE_1__.NewsDetailUiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _base_util_format__WEBPACK_IMPORTED_MODULE_0__.FormatUtilModule],
    exports: [_components_news_detail_ui_component__WEBPACK_IMPORTED_MODULE_1__.NewsDetailUiComponent]
  });
})();

/***/ }),

/***/ 40669:
/*!********************************************************!*\
  !*** ./libs/@adesso/uis/news-detail/src/public-api.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsDetailUiComponent": () => (/* reexport safe */ _components_news_detail_ui_component__WEBPACK_IMPORTED_MODULE_0__.NewsDetailUiComponent),
/* harmony export */   "NewsDetailUiModule": () => (/* reexport safe */ _news_detail_ui_module__WEBPACK_IMPORTED_MODULE_2__.NewsDetailUiModule),
/* harmony export */   "NewsDetailViewModel": () => (/* reexport safe */ _models_news_detail_view_model__WEBPACK_IMPORTED_MODULE_1__.NewsDetailViewModel)
/* harmony export */ });
/* harmony import */ var _components_news_detail_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/news-detail-ui.component */ 74461);
/* harmony import */ var _models_news_detail_view_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/news-detail-view.model */ 14378);
/* harmony import */ var _news_detail_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-detail-ui.module */ 51743);




/***/ }),

/***/ 39406:
/*!********************************************************************!*\
  !*** ./libs/@base/utils/ng-let/src/directives/ng-let.directive.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgLetDirective": () => (/* binding */ NgLetDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);


class NgLetDirective {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  _context = {
    ngLet: null
  };
  constructor(_viewContainer, _templateRef) {
    _viewContainer.createEmbeddedView(_templateRef, this._context);
  }
  set ngLet(value) {
    this._context.ngLet = value;
  }
  static ɵfac = function NgLetDirective_Factory(t) {
    return new (t || NgLetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgLetDirective,
    selectors: [["", "ngLet", ""]],
    inputs: {
      ngLet: "ngLet"
    }
  });
}

/***/ }),

/***/ 74402:
/*!***********************************************************!*\
  !*** ./libs/@base/utils/ng-let/src/ng-let-util.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgLetUtilModule": () => (/* binding */ NgLetUtilModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _directives_ng_let_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/ng-let.directive */ 39406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);



class NgLetUtilModule {
  static ɵfac = function NgLetUtilModule_Factory(t) {
    return new (t || NgLetUtilModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NgLetUtilModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgLetUtilModule, {
    declarations: [_directives_ng_let_directive__WEBPACK_IMPORTED_MODULE_0__.NgLetDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_directives_ng_let_directive__WEBPACK_IMPORTED_MODULE_0__.NgLetDirective]
  });
})();

/***/ }),

/***/ 91535:
/*!***************************************************!*\
  !*** ./libs/@base/utils/ng-let/src/public-api.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgLetUtilModule": () => (/* reexport safe */ _ng_let_util_module__WEBPACK_IMPORTED_MODULE_0__.NgLetUtilModule)
/* harmony export */ });
/* harmony import */ var _ng_let_util_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-let-util.module */ 74402);


/***/ })

}]);