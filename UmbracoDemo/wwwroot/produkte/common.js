"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["common"],{

/***/ 29194:
/*!**********************************************************!*\
  !*** ./libs/@adesso/services/analyses/src/public-api.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysesService": () => (/* reexport safe */ _services_analyses_service__WEBPACK_IMPORTED_MODULE_0__.AnalysesService),
/* harmony export */   "ServiceAnalysesModule": () => (/* reexport safe */ _service_analyses_module__WEBPACK_IMPORTED_MODULE_1__.ServiceAnalysesModule)
/* harmony export */ });
/* harmony import */ var _services_analyses_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/analyses.service */ 84000);
/* harmony import */ var _service_analyses_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-analyses.module */ 53931);



/***/ }),

/***/ 53931:
/*!***********************************************************************!*\
  !*** ./libs/@adesso/services/analyses/src/service-analyses.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceAnalysesModule": () => (/* binding */ ServiceAnalysesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _services_analyses_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/analyses.service */ 84000);
/* harmony import */ var _stroeer_repository_analyses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stroeer/repository-analyses */ 85211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);




class ServiceAnalysesModule {
  static ɵfac = function ServiceAnalysesModule_Factory(t) {
    return new (t || ServiceAnalysesModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ServiceAnalysesModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    providers: [_services_analyses_service__WEBPACK_IMPORTED_MODULE_0__.AnalysesService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _stroeer_repository_analyses__WEBPACK_IMPORTED_MODULE_1__.AnalysesRepositoryModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ServiceAnalysesModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _stroeer_repository_analyses__WEBPACK_IMPORTED_MODULE_1__.AnalysesRepositoryModule]
  });
})();

/***/ }),

/***/ 84000:
/*!*************************************************************************!*\
  !*** ./libs/@adesso/services/analyses/src/services/analyses.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysesService": () => (/* binding */ AnalysesService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 24850);
/* harmony import */ var _base_util_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-format */ 84094);
/* harmony import */ var _stroeer_repository_analyses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stroeer/repository-analyses */ 85211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);





class AnalysesService {
  analysesRepository;
  valueFormatterConverter = new _base_util_format__WEBPACK_IMPORTED_MODULE_0__.ValueFormatterConverter();
  constructor(analysesRepository) {
    this.analysesRepository = analysesRepository;
  }
  getAnalysesList(payload) {
    return this.analysesRepository.getAnalysesList(payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(result => result.results));
  }
  getAnalysesDetail(analyseId) {
    return this.analysesRepository.getAnalysesDetail(analyseId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(result => ({
      id: result.id,
      date: result.date,
      body: result.body.split("\n"),
      headline: result.headline,
      companyIsin: result.companyIsin,
      keyValues: [{
        name: "analystName",
        value: this.valueFormatterConverter.convertString(result.analystName)
      }, {
        name: "instituteName",
        value: this.valueFormatterConverter.convertString(result.instituteName)
      }, {
        name: "priceTarget",
        value: this.valueFormatterConverter.convertNumber(result.priceTarget)
      }, {
        name: "priceCurrency",
        value: this.valueFormatterConverter.convertString(result.priceCurrency)
      }, {
        name: "timeFrameInMonth",
        value: this.valueFormatterConverter.convertString(result.timeFrameInMonth + " Month")
      }, {
        name: "recommendation",
        value: this.valueFormatterConverter.convertString(result.recommendation)
      }, {
        name: "recommendationSource",
        value: this.valueFormatterConverter.convertString(result.recommendationSource)
      }]
    })));
  }
  static ɵfac = function AnalysesService_Factory(t) {
    return new (t || AnalysesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_stroeer_repository_analyses__WEBPACK_IMPORTED_MODULE_1__.AnalysesRepository));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AnalysesService,
    factory: AnalysesService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 43356:
/*!*************************************************************************!*\
  !*** ./libs/@adesso/services/news/src/models/news-list-filter.model.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsListFilterModel": () => (/* binding */ NewsListFilterModel)
/* harmony export */ });
/* harmony import */ var _stroeer_repository_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stroeer/repository-news */ 96165);

class NewsListFilterModel extends _stroeer_repository_news__WEBPACK_IMPORTED_MODULE_0__.NewsListPayloadModel {}

/***/ }),

/***/ 25048:
/*!******************************************************!*\
  !*** ./libs/@adesso/services/news/src/public-api.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsListFilterModel": () => (/* reexport safe */ _models_news_list_filter_model__WEBPACK_IMPORTED_MODULE_1__.NewsListFilterModel),
/* harmony export */   "NewsService": () => (/* reexport safe */ _services_news_service__WEBPACK_IMPORTED_MODULE_0__.NewsService),
/* harmony export */   "ServiceNewsModule": () => (/* reexport safe */ _service_news_module__WEBPACK_IMPORTED_MODULE_2__.ServiceNewsModule)
/* harmony export */ });
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/news.service */ 12401);
/* harmony import */ var _models_news_list_filter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/news-list-filter.model */ 43356);
/* harmony import */ var _service_news_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-news.module */ 26647);




/***/ }),

/***/ 26647:
/*!***************************************************************!*\
  !*** ./libs/@adesso/services/news/src/service-news.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceNewsModule": () => (/* binding */ ServiceNewsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/news.service */ 12401);
/* harmony import */ var _stroeer_repository_news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stroeer/repository-news */ 96165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);




class ServiceNewsModule {
  static ɵfac = function ServiceNewsModule_Factory(t) {
    return new (t || ServiceNewsModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ServiceNewsModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    providers: [_services_news_service__WEBPACK_IMPORTED_MODULE_0__.NewsService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _stroeer_repository_news__WEBPACK_IMPORTED_MODULE_1__.NewsRepositoryModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ServiceNewsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _stroeer_repository_news__WEBPACK_IMPORTED_MODULE_1__.NewsRepositoryModule]
  });
})();

/***/ }),

/***/ 12401:
/*!*****************************************************************!*\
  !*** ./libs/@adesso/services/news/src/services/news.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsService": () => (/* binding */ NewsService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 24850);
/* harmony import */ var _stroeer_repository_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stroeer/repository-news */ 96165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);




class NewsService {
  newsRepository;
  constructor(newsRepository) {
    this.newsRepository = newsRepository;
  }
  getNewsList(filter) {
    return this.newsRepository.getNewsList(filter).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(result => result.results));
  }
  getNewsDetail(newsId) {
    return this.newsRepository.getNewsDetail(newsId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(news => {
      const isins = news.instruments?.map(instrument => instrument.isin);
      const result = {
        news: {
          headline: news.headline,
          body: news.body.split("\n"),
          date: news.date,
          id: news.id
        },
        instrumentIsins: isins
      };
      return result;
    }));
  }
  static ɵfac = function NewsService_Factory(t) {
    return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_stroeer_repository_news__WEBPACK_IMPORTED_MODULE_0__.NewsRepository));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: NewsService,
    factory: NewsService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 77037:
/*!*********************************************************************************!*\
  !*** ./libs/@adesso/uis/composition/src/components/composition-ui.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompositionUiComponent": () => (/* binding */ CompositionUiComponent)
/* harmony export */ });
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _chart_src_components_pie_chart_pie_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chart/src/components/pie/chart-pie-ui.component */ 73793);
/* harmony import */ var _base_utils_format_src_pipes_percentage_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@base/utils/format/src/pipes/percentage.pipe */ 42115);






const _c0 = function (a0) {
  return {
    "selected": a0
  };
};
const _c1 = function (a0) {
  return {
    backgroundColor: a0
  };
};
function CompositionUiComponent_ng_container_0_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 7)(1, "td")(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "percentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx_r1.hoverId == i_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c1, ctx_r1.getColor(i_r3).from));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 4, item_r2.portion));
  }
}
function CompositionUiComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "ui-chart-pie", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("hoverIdChanged", function CompositionUiComponent_ng_container_0_Template_ui_chart_pie_hoverIdChanged_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.hoverId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CompositionUiComponent_ng_container_0_tr_8_Template, 8, 10, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colors", ctx_r0.chartColors)("items", ctx_r0.compositions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.headline);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.compositions);
  }
}
class CompositionUiComponent {
  logger;
  headline;
  compositions;
  hoverId;
  isInit = false;
  constructor(logger) {
    this.logger = logger;
  }
  chartColors = [{
    from: "#5991C8",
    to: "#063C73"
  }, {
    from: "#2C2C30",
    to: "#0A0A0A"
  }, {
    from: "#78D565",
    to: "#49A636"
  }, {
    from: "#D98547",
    to: "#B05C29"
  }, {
    from: "#666BCF",
    to: "#4348AC"
  }, {
    from: "#D94A68",
    to: "#BE374D"
  }, {
    from: "#D0BF40",
    to: "#B2A122"
  }, {
    from: "#207D7C",
    to: "#146766"
  }, {
    from: "#E34A4A",
    to: "#D13838"
  }, {
    from: "#83D9D2",
    to: "#71C8C1"
  }, {
    from: "#AAD834",
    to: "#7A9926"
  }];
  getColor(index) {
    let colorIndex = index;
    while (colorIndex >= this.chartColors.length) {
      colorIndex = colorIndex - this.chartColors.length;
    }
    return this.chartColors[colorIndex];
  }
  ngOnInit() {
    this.isInit = true;
  }
  static ɵfac = function CompositionUiComponent_Factory(t) {
    return new (t || CompositionUiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtil));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CompositionUiComponent,
    selectors: [["ui-composition"]],
    inputs: {
      headline: "headline",
      compositions: "compositions"
    },
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], [1, "ui-composition"], [1, "chart-box"], [3, "colors", "items", "hoverIdChanged"], [1, "ui-composition-table-box"], [1, "headline"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "dottedText"], [1, "color-box", 3, "ngStyle"]],
    template: function CompositionUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CompositionUiComponent_ng_container_0_Template, 9, 4, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isInit && ctx.compositions && ctx.compositions.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n", ctx.logger.uiUpdate("CompositionUiComponent"), "\n");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _chart_src_components_pie_chart_pie_ui_component__WEBPACK_IMPORTED_MODULE_1__.ChartPieUiComponent, _base_utils_format_src_pipes_percentage_pipe__WEBPACK_IMPORTED_MODULE_2__.PercentagePipe],
    styles: [".clear[_ngcontent-%COMP%] {\n  clear: both;\n}\n\n.dottedText[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media screen and (min-width: 769px) {\n  .hide-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 768px) {\n  .hide-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.ui-composition[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  margin-bottom: 64px;\n}\n.ui-composition[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ui-composition[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .ui-composition[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .ui-composition[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\n.chart-box[_ngcontent-%COMP%] {\n  height: 238px;\n  overflow: hidden;\n  width: 238px;\n  margin: 0 auto;\n}\n\n.ui-composition-table-box[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 0;\n  border-top: none;\n  border-bottom: none;\n  border-left: none;\n  border-right: none;\n  box-shadow: none;\n  padding: 120px 10px 10px 10px;\n  margin-top: -120px;\n  width: 100%;\n}\n.ui-composition-table-box[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-spacing: 0;\n  border-collapse: collapse;\n  width: 100%;\n  font-size: 14px;\n  color: #565656;\n  table-layout: fixed;\n}\n.ui-composition-table-box[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: #EAEAEA !important;\n}\n.ui-composition-table-box[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type {\n  width: calc(100% - 80px);\n}\n.ui-composition-table-box[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-of-type {\n  width: 80px;\n}\n.ui-composition-table-box[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding-top: 4px;\n  border-bottom: 1px solid green;\n  line-height: 30px;\n  position: relative;\n}\n.ui-composition-table-box[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-of-type   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ui-composition-table-box[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(1) {\n  width: calc(100% - 75px);\n  font-weight: bold;\n  color: #565656;\n}\n.ui-composition-table-box[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(2) {\n  width: 75px;\n  text-align: right;\n}\n\n.color-box[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-right: 10px;\n  border-radius: 5px;\n}\n\nh2.headline[_ngcontent-%COMP%] {\n  color: #002244;\n  font-size: 24px;\n  font-weight: bold;\n  margin: 0 0 10px 0;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 96211:
/*!*******************************************************************!*\
  !*** ./libs/@adesso/uis/composition/src/composition-ui.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompositionUiModule": () => (/* binding */ CompositionUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-format */ 84094);
/* harmony import */ var _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/ui-content-box */ 96524);
/* harmony import */ var _adesso_ui_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adesso/ui-chart */ 12308);
/* harmony import */ var _components_composition_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/composition-ui.component */ 77037);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);







class CompositionUiModule {
  static ɵfac = function CompositionUiModule_Factory(t) {
    return new (t || CompositionUiModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: CompositionUiModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _base_util_format__WEBPACK_IMPORTED_MODULE_0__.FormatUtilModule, _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_1__.ContentBoxUiModule, _adesso_ui_chart__WEBPACK_IMPORTED_MODULE_2__.ChartUiModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_4__.LoggerUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CompositionUiModule, {
    declarations: [_components_composition_ui_component__WEBPACK_IMPORTED_MODULE_3__.CompositionUiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _base_util_format__WEBPACK_IMPORTED_MODULE_0__.FormatUtilModule, _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_1__.ContentBoxUiModule, _adesso_ui_chart__WEBPACK_IMPORTED_MODULE_2__.ChartUiModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_4__.LoggerUtilModule],
    exports: [_components_composition_ui_component__WEBPACK_IMPORTED_MODULE_3__.CompositionUiComponent]
  });
})();

/***/ }),

/***/ 87317:
/*!********************************************************!*\
  !*** ./libs/@adesso/uis/composition/src/public-api.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompositionUiComponent": () => (/* reexport safe */ _components_composition_ui_component__WEBPACK_IMPORTED_MODULE_0__.CompositionUiComponent),
/* harmony export */   "CompositionUiModule": () => (/* reexport safe */ _composition_ui_module__WEBPACK_IMPORTED_MODULE_1__.CompositionUiModule)
/* harmony export */ });
/* harmony import */ var _components_composition_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/composition-ui.component */ 77037);
/* harmony import */ var _composition_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./composition-ui.module */ 96211);



/***/ }),

/***/ 65601:
/*!*******************************************************************************!*\
  !*** ./libs/@stroeer/repositories/analyses/src/analyses-repository.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysesRepositoryModule": () => (/* binding */ AnalysesRepositoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);



class AnalysesRepositoryModule {
  static ɵfac = function AnalysesRepositoryModule_Factory(t) {
    return new (t || AnalysesRepositoryModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AnalysesRepositoryModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AnalysesRepositoryModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule]
  });
})();

/***/ }),

/***/ 22661:
/*!*****************************************************************************************!*\
  !*** ./libs/@stroeer/repositories/analyses/src/models/analysis-search-payload.model.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysisSearchPayloadModel": () => (/* binding */ AnalysisSearchPayloadModel)
/* harmony export */ });
class AnalysisSearchPayloadModel {
  top;
  skip;
  companyIsin;
  from;
}

/***/ }),

/***/ 91462:
/*!*********************************************************************************************!*\
  !*** ./libs/@stroeer/repositories/analyses/src/models/analysis-search-result-item.model.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysisSearchResultItemModel": () => (/* binding */ AnalysisSearchResultItemModel)
/* harmony export */ });
class AnalysisSearchResultItemModel {
  id;
  date;
  headline;
  companyName;
  companyIsin;
  analystName;
  instituteName;
  priceTarget;
  priceTargetPrevious;
  priceCurrency;
  timeFrameInMonth;
  recommendation;
  recommendationPrevious;
  recommendationSource;
}

/***/ }),

/***/ 80779:
/*!****************************************************************************************!*\
  !*** ./libs/@stroeer/repositories/analyses/src/models/analysis-search-result.model.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysisSearchResultModel": () => (/* binding */ AnalysisSearchResultModel)
/* harmony export */ });
class AnalysisSearchResultModel {
  resultCount;
  results;
}

/***/ }),

/***/ 32543:
/*!**************************************************************************!*\
  !*** ./libs/@stroeer/repositories/analyses/src/models/analysis.model.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysisModel": () => (/* binding */ AnalysisModel)
/* harmony export */ });
class AnalysisModel {
  id;
  date;
  headline;
  companyName;
  companyIsin;
  analystName;
  instituteName;
  priceTarget;
  priceTargetPrevious;
  priceCurrency;
  timeFrameInMonth;
  recommendation;
  recommendationPrevious;
  recommendationSource;
  body;
}

/***/ }),

/***/ 85211:
/*!***************************************************************!*\
  !*** ./libs/@stroeer/repositories/analyses/src/public-api.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysesRepository": () => (/* reexport safe */ _repositories_analyses_repository__WEBPACK_IMPORTED_MODULE_0__.AnalysesRepository),
/* harmony export */   "AnalysesRepositoryModule": () => (/* reexport safe */ _analyses_repository_module__WEBPACK_IMPORTED_MODULE_1__.AnalysesRepositoryModule),
/* harmony export */   "AnalysisModel": () => (/* reexport safe */ _models_analysis_model__WEBPACK_IMPORTED_MODULE_5__.AnalysisModel),
/* harmony export */   "AnalysisSearchPayloadModel": () => (/* reexport safe */ _models_analysis_search_payload_model__WEBPACK_IMPORTED_MODULE_2__.AnalysisSearchPayloadModel),
/* harmony export */   "AnalysisSearchResultItemModel": () => (/* reexport safe */ _models_analysis_search_result_item_model__WEBPACK_IMPORTED_MODULE_3__.AnalysisSearchResultItemModel),
/* harmony export */   "AnalysisSearchResultModel": () => (/* reexport safe */ _models_analysis_search_result_model__WEBPACK_IMPORTED_MODULE_4__.AnalysisSearchResultModel)
/* harmony export */ });
/* harmony import */ var _repositories_analyses_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repositories/analyses.repository */ 95115);
/* harmony import */ var _analyses_repository_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analyses-repository.module */ 65601);
/* harmony import */ var _models_analysis_search_payload_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/analysis-search-payload.model */ 22661);
/* harmony import */ var _models_analysis_search_result_item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/analysis-search-result-item.model */ 91462);
/* harmony import */ var _models_analysis_search_result_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/analysis-search-result.model */ 80779);
/* harmony import */ var _models_analysis_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/analysis.model */ 32543);







/***/ }),

/***/ 95115:
/*!*************************************************************************************!*\
  !*** ./libs/@stroeer/repositories/analyses/src/repositories/analyses.repository.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysesRepository": () => (/* binding */ AnalysesRepository)
/* harmony export */ });
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 80529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);





class AnalysesRepository {
  http;
  logger;
  adessoUrl = "https://tonline-api.sh01.de/stroeer/adesso_api/1.0.0";
  constructor(http, logger) {
    this.http = http;
    this.logger = logger;
    logger.repositoryConstructor("AnalysesRepository");
  }
  getAnalysesList(payload) {
    this.logger.repositoryRequest("getNewsList", payload);
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set("top", payload.top.toString()).set("skip", payload.skip.toString()).set("orderBy", "Date").set("isDescendingOrder", "true").set("companyIsin", payload.companyIsin).set("from", payload.from.toUTCString());
    return this.http.get(`${this.adessoUrl}/Analyses`, {
      params
    });
  }
  getAnalysesDetail(id) {
    this.logger.repositoryRequest("getAnalyseDetail", id);
    return this.http.get(`${this.adessoUrl}/Analyses/${id}`);
  }
  static ɵfac = function AnalysesRepository_Factory(t) {
    return new (t || AnalysesRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtil));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AnalysesRepository,
    factory: AnalysesRepository.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 85521:
/*!*************************************************************************!*\
  !*** ./libs/@stroeer/repositories/news/src/models/news-detail.model.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsDetailModel": () => (/* binding */ NewsDetailModel)
/* harmony export */ });
class NewsDetailModel {
  id;
  body;
  date;
  headline;
  instruments;
}

/***/ }),

/***/ 96341:
/*!*******************************************************************************!*\
  !*** ./libs/@stroeer/repositories/news/src/models/news-list-payload.model.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsListPayloadModel": () => (/* binding */ NewsListPayloadModel)
/* harmony export */ });
class NewsListPayloadModel {
  top;
  skip;
  isDescendingOrder;
  from;
  companyIsin;
}

/***/ }),

/***/ 44884:
/*!******************************************************************************!*\
  !*** ./libs/@stroeer/repositories/news/src/models/news-list-result.model.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsListResultModel": () => (/* binding */ NewsListResultModel)
/* harmony export */ });
class NewsListResultModel {
  resultCount;
  results;
}

/***/ }),

/***/ 69274:
/*!***********************************************************************!*\
  !*** ./libs/@stroeer/repositories/news/src/news-repository.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsRepositoryModule": () => (/* binding */ NewsRepositoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);



class NewsRepositoryModule {
  static ɵfac = function NewsRepositoryModule_Factory(t) {
    return new (t || NewsRepositoryModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NewsRepositoryModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewsRepositoryModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule]
  });
})();

/***/ }),

/***/ 96165:
/*!***********************************************************!*\
  !*** ./libs/@stroeer/repositories/news/src/public-api.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsDetailModel": () => (/* reexport safe */ _models_news_detail_model__WEBPACK_IMPORTED_MODULE_4__.NewsDetailModel),
/* harmony export */   "NewsListPayloadModel": () => (/* reexport safe */ _models_news_list_payload_model__WEBPACK_IMPORTED_MODULE_2__.NewsListPayloadModel),
/* harmony export */   "NewsListResultModel": () => (/* reexport safe */ _models_news_list_result_model__WEBPACK_IMPORTED_MODULE_3__.NewsListResultModel),
/* harmony export */   "NewsRepository": () => (/* reexport safe */ _repositories_news_repository__WEBPACK_IMPORTED_MODULE_0__.NewsRepository),
/* harmony export */   "NewsRepositoryModule": () => (/* reexport safe */ _news_repository_module__WEBPACK_IMPORTED_MODULE_1__.NewsRepositoryModule)
/* harmony export */ });
/* harmony import */ var _repositories_news_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repositories/news.repository */ 54523);
/* harmony import */ var _news_repository_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-repository.module */ 69274);
/* harmony import */ var _models_news_list_payload_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/news-list-payload.model */ 96341);
/* harmony import */ var _models_news_list_result_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/news-list-result.model */ 44884);
/* harmony import */ var _models_news_detail_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/news-detail.model */ 85521);






/***/ }),

/***/ 54523:
/*!*****************************************************************************!*\
  !*** ./libs/@stroeer/repositories/news/src/repositories/news.repository.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsRepository": () => (/* binding */ NewsRepository)
/* harmony export */ });
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 80529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);





class NewsRepository {
  http;
  logger;
  adessoUrl = "https://tonline-api.sh01.de/stroeer/adesso_api/1.0.0";
  constructor(http, logger) {
    this.http = http;
    this.logger = logger;
    logger.repositoryConstructor("NewsRepository");
  }
  getNewsList(payload) {
    this.logger.repositoryRequest("getNewsList", payload);
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set("top", payload.top.toString()).set("skip", payload.skip.toString()).set("isDescendingOrder", payload.isDescendingOrder ? "true" : "false");
    if (payload.from) {
      params = params.append("from", payload.from.toUTCString());
    }
    if (payload.companyIsin) {
      params = params.append("companyIsin", payload.companyIsin);
    }
    return this.http.get(`${this.adessoUrl}/News`, {
      params
    });
  }
  getNewsDetail(id) {
    this.logger.repositoryRequest("getNewsDetail", id);
    return this.http.get(`${this.adessoUrl}/News/${id}`);
  }
  static ɵfac = function NewsRepository_Factory(t) {
    return new (t || NewsRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtil));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: NewsRepository,
    factory: NewsRepository.ɵfac,
    providedIn: "root"
  });
}

/***/ })

}]);