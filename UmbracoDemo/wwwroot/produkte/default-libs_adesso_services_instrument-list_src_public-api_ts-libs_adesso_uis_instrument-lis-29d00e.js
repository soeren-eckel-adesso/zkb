"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["default-libs_adesso_services_instrument-list_src_public-api_ts-libs_adesso_uis_instrument-lis-29d00e"],{

/***/ 79258:
/*!***************************************************************************!*\
  !*** ./libs/@adesso/services/calculation/src/models/performance.model.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerformanceModel": () => (/* binding */ PerformanceModel)
/* harmony export */ });
class PerformanceModel {
  currentValue;
  oldValue;
  changeAbsolute;
  changePercent;
}

/***/ }),

/***/ 96240:
/*!*************************************************************!*\
  !*** ./libs/@adesso/services/calculation/src/public-api.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculationService": () => (/* reexport safe */ _services_calculation_service__WEBPACK_IMPORTED_MODULE_0__.CalculationService),
/* harmony export */   "PerformanceModel": () => (/* reexport safe */ _models_performance_model__WEBPACK_IMPORTED_MODULE_2__.PerformanceModel),
/* harmony export */   "ServiceCalculationModule": () => (/* reexport safe */ _service_calculation_module__WEBPACK_IMPORTED_MODULE_1__.ServiceCalculationModule)
/* harmony export */ });
/* harmony import */ var _services_calculation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/calculation.service */ 1179);
/* harmony import */ var _service_calculation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-calculation.module */ 61660);
/* harmony import */ var _models_performance_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/performance.model */ 79258);




/***/ }),

/***/ 61660:
/*!*****************************************************************************!*\
  !*** ./libs/@adesso/services/calculation/src/service-calculation.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceCalculationModule": () => (/* binding */ ServiceCalculationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _services_calculation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/calculation.service */ 1179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);




class ServiceCalculationModule {
  static ɵfac = function ServiceCalculationModule_Factory(t) {
    return new (t || ServiceCalculationModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ServiceCalculationModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    providers: [_services_calculation_service__WEBPACK_IMPORTED_MODULE_1__.CalculationService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ServiceCalculationModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule]
  });
})();

/***/ }),

/***/ 1179:
/*!*******************************************************************************!*\
  !*** ./libs/@adesso/services/calculation/src/services/calculation.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculationService": () => (/* binding */ CalculationService)
/* harmony export */ });
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);



class CalculationService {
  constructor(logger) {
    logger.serviceConstructor("CalculationService");
  }
  calculatePerformanceByCurrentValueAndChangePercent(currentValue, changePercent) {
    const performance = {
      currentValue,
      changePercent
    };
    if (currentValue && changePercent && changePercent !== -100) {
      performance.oldValue = currentValue / (changePercent + 100) * 100;
      performance.changeAbsolute = currentValue - performance.oldValue;
    }
    return performance;
  }
  static ɵfac = function CalculationService_Factory(t) {
    return new (t || CalculationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtil));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CalculationService,
    factory: CalculationService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 53505:
/*!*************************************************************************************!*\
  !*** ./libs/@adesso/services/instrument-list/src/instrument-list-service.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentListServiceModule": () => (/* binding */ InstrumentListServiceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _adesso_service_best_quote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/service-best-quote */ 84061);
/* harmony import */ var _adesso_service_calculation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/service-calculation */ 96240);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _services_instrument_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/instrument-list.service */ 71239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);






class InstrumentListServiceModule {
  static ɵfac = function InstrumentListServiceModule_Factory(t) {
    return new (t || InstrumentListServiceModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: InstrumentListServiceModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_services_instrument_list_service__WEBPACK_IMPORTED_MODULE_3__.InstrumentListService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _adesso_service_best_quote__WEBPACK_IMPORTED_MODULE_0__.ServiceBestQuoteModule, _adesso_service_calculation__WEBPACK_IMPORTED_MODULE_1__.ServiceCalculationModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_2__.LoggerUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](InstrumentListServiceModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _adesso_service_best_quote__WEBPACK_IMPORTED_MODULE_0__.ServiceBestQuoteModule, _adesso_service_calculation__WEBPACK_IMPORTED_MODULE_1__.ServiceCalculationModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_2__.LoggerUtilModule]
  });
})();

/***/ }),

/***/ 74860:
/*!*************************************************************************************!*\
  !*** ./libs/@adesso/services/instrument-list/src/models/instrument-table-result.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentTableResult": () => (/* binding */ InstrumentTableResult)
/* harmony export */ });
class InstrumentTableResult {
  resultCount;
  tableType;
  result;
}

/***/ }),

/***/ 6470:
/*!*****************************************************************!*\
  !*** ./libs/@adesso/services/instrument-list/src/public-api.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentListService": () => (/* reexport safe */ _services_instrument_list_service__WEBPACK_IMPORTED_MODULE_0__.InstrumentListService),
/* harmony export */   "InstrumentListServiceModule": () => (/* reexport safe */ _instrument_list_service_module__WEBPACK_IMPORTED_MODULE_1__.InstrumentListServiceModule),
/* harmony export */   "InstrumentTableResult": () => (/* reexport safe */ _models_instrument_table_result__WEBPACK_IMPORTED_MODULE_2__.InstrumentTableResult)
/* harmony export */ });
/* harmony import */ var _services_instrument_list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/instrument-list.service */ 71239);
/* harmony import */ var _instrument_list_service_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instrument-list-service.module */ 53505);
/* harmony import */ var _models_instrument_table_result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/instrument-table-result */ 74860);




/***/ }),

/***/ 71239:
/*!***************************************************************************************!*\
  !*** ./libs/@adesso/services/instrument-list/src/services/instrument-list.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentListService": () => (/* binding */ InstrumentListService)
/* harmony export */ });
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _adesso_service_best_quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/service-best-quote */ 84061);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 24850);
/* harmony import */ var _adesso_service_calculation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adesso/service-calculation */ 96240);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _stroeer_repository_instrument_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stroeer/repository-instrument-list */ 38382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);











class InstrumentListService {
  instrumentListRepository;
  bestQuoteService;
  calculationService;
  defaultDataFields = [_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.name, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.isin, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.valor, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.assetClass];
  constructor(instrumentListRepository, bestQuoteService, calculationService, logger) {
    this.instrumentListRepository = instrumentListRepository;
    this.bestQuoteService = bestQuoteService;
    this.calculationService = calculationService;
    logger.serviceConstructor("InstrumentListService");
  }
  getInstrumentTable(instrumentIds, tableType) {
    const dataFields = this.defaultDataFields;
    this.appendDataFieldsByTableType(dataFields, tableType);
    return this.instrumentListRepository.getInstruments(instrumentIds, dataFields).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(requestResult => {
      const instrumentTableResult = {
        resultCount: requestResult?.resultCount,
        tableType,
        result: []
      };
      instrumentIds.forEach(instrumentId => {
        const instrument = requestResult.results.find(x => x.valor === +instrumentId || x.isin === instrumentId);
        if (instrument) {
          instrumentTableResult.result = this.addInstrumentToTable(instrumentTableResult.result, instrument, tableType);
        }
      });
      return instrumentTableResult;
    }));
  }
  getConstituents(instrumentId, top, skip, tableType) {
    const dataFields = this.defaultDataFields;
    this.appendDataFieldsByTableType(dataFields, tableType);
    return this.instrumentListRepository.getConstituents(instrumentId, top, skip, dataFields).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(requestResult => {
      const instrumentTableResult = {
        resultCount: requestResult.resultCount,
        tableType,
        result: []
      };
      requestResult.results.forEach(instrument => {
        instrumentTableResult.result = this.addInstrumentToTable(instrumentTableResult.result, instrument, tableType);
      });
      return instrumentTableResult;
    }));
  }
  searchInstrument(payload, tableType) {
    const dataFields = this.defaultDataFields;
    this.appendDataFieldsByTableType(dataFields, tableType);
    return this.instrumentListRepository.searchInstrument(payload, dataFields).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(requestResult => {
      const instrumentTableResult = {
        resultCount: requestResult?.resultCount,
        tableType,
        result: []
      };
      requestResult.results.forEach(instrument => {
        instrumentTableResult.result = this.addInstrumentToTable(instrumentTableResult.result, instrument, tableType);
      });
      return instrumentTableResult;
    }));
  }
  getTopFlop(payload, tableType) {
    const dataFields = this.defaultDataFields;
    this.appendDataFieldsByTableType(dataFields, tableType);
    return this.instrumentListRepository.getTopFlop(payload, dataFields).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(requestResult => {
      const instrumentTableResult = {
        resultCount: requestResult?.resultCount,
        tableType,
        result: []
      };
      requestResult.results.forEach(instrument => {
        instrumentTableResult.result = this.addInstrumentToTable(instrumentTableResult.result, instrument, tableType);
      });
      return instrumentTableResult;
    }));
  }
  addInstrumentToTable(result, instrument, tableType) {
    let item;
    switch (tableType) {
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.UiInstrumentListTypeEnum.basic:
        item = this.mapInstrumentToBasicTable(instrument);
        break;
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.UiInstrumentListTypeEnum.performance:
        item = this.mapInstrumentToPerformanceTable(instrument);
        break;
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.UiInstrumentListTypeEnum.performanceOneYear:
        item = this.mapInstrumentToPerformanceOneYearTable(instrument);
        break;
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.UiInstrumentListTypeEnum.order:
        item = this.mapInstrumentToOrderTable(instrument);
        break;
    }
    if (item) {
      result.push(item);
    }
    return result;
  }
  appendDataFieldsByTableType(dataFields, tableType) {
    switch (tableType) {
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.UiInstrumentListTypeEnum.basic:
        dataFields.push(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.wkn, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.last, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.bid, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.ask, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.valuation, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.nav, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.currencyCode);
        break;
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.UiInstrumentListTypeEnum.order:
        dataFields.push(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.bid, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.ask, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.currencyCode);
        break;
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.UiInstrumentListTypeEnum.performance:
        dataFields.push(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.last, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.bid, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.ask, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.valuation, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.nav, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.currencyCode);
        break;
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.UiInstrumentListTypeEnum.performanceOneYear:
        dataFields.push(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.last, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.bid, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.ask, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.valuation, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.nav, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.currencyCode, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.InstrumentResultDataFieldsEnum.changeOneYearPercent);
        break;
    }
  }
  mapInstrumentToBasicTable(instrument) {
    if (instrument && instrument.name && instrument.assetClass && instrument.valor) {
      const bestQuote = this.bestQuoteService.getBestQuote(instrument);
      return {
        assetClass: instrument.assetClass,
        name: instrument.name,
        currencyCode: instrument.currencyCode,
        isin: instrument.isin,
        quote: bestQuote?.quote,
        close: bestQuote?.close,
        quoteDate: bestQuote?.quoteDate,
        valor: instrument.valor,
        wkn: instrument.wkn
      };
    }
    return undefined;
  }
  mapInstrumentToOrderTable(instrument) {
    if (instrument && instrument.name && instrument.assetClass && instrument.valor) {
      return {
        assetClass: instrument.assetClass,
        name: instrument.name,
        currencyCode: instrument.assetClass === _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.AssetClassEnum.index ? "" : instrument.currencyCode,
        isin: instrument.isin,
        bid: instrument.bid?.quote,
        bidClose: instrument.bid?.close,
        ask: instrument.ask?.quote,
        askClose: instrument.ask?.close,
        orders: this.getRandomInt(500) + 1800,
        chartImageId: this.getRandomInt(5),
        changePercent: instrument.bid?.changePercent,
        valor: instrument.valor
      };
    }
    return undefined;
  }
  mapInstrumentToPerformanceTable(instrument) {
    if (instrument && instrument.name && instrument.assetClass && instrument.valor) {
      const bestQuote = this.bestQuoteService.getBestQuote(instrument);
      return {
        assetClass: instrument.assetClass,
        name: instrument.name,
        currencyCode: instrument.assetClass === _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.AssetClassEnum.index ? "" : instrument.currencyCode,
        isin: instrument.isin,
        quote: bestQuote?.quote,
        close: bestQuote?.close,
        quoteDate: bestQuote?.quoteDate,
        valor: instrument.valor,
        changePercent: bestQuote?.changePercent,
        changeAbsolute: bestQuote?.changeAbsolute
      };
    }
    return undefined;
  }
  mapInstrumentToPerformanceOneYearTable(instrument) {
    if (instrument && instrument.name && instrument.assetClass && instrument.valor) {
      const bestQuote = this.bestQuoteService.getBestQuote(instrument);
      const performance = this.calculationService.calculatePerformanceByCurrentValueAndChangePercent(bestQuote?.quote, instrument.changeOneYearPercent);
      return {
        assetClass: instrument.assetClass,
        name: instrument.name,
        currencyCode: instrument.assetClass === _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.AssetClassEnum.index ? "" : instrument.currencyCode,
        isin: instrument.isin,
        quote: bestQuote?.quote,
        close: bestQuote?.close,
        quoteDate: bestQuote?.quoteDate,
        valor: instrument.valor,
        changePercent: instrument.changeOneYearPercent,
        changeAbsolute: performance?.changeAbsolute
      };
    }
    return undefined;
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  static ɵfac = function InstrumentListService_Factory(t) {
    return new (t || InstrumentListService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_stroeer_repository_instrument_list__WEBPACK_IMPORTED_MODULE_4__.InstrumentListRepository), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_adesso_service_best_quote__WEBPACK_IMPORTED_MODULE_1__.BestQuoteService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_adesso_service_calculation__WEBPACK_IMPORTED_MODULE_2__.CalculationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_3__.LoggerUtil));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: InstrumentListService,
    factory: InstrumentListService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 48332:
/*!*************************************************************************************************!*\
  !*** ./libs/@adesso/uis/instrument-list/src/components/basic-table/basic-table-ui.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicTableUiComponent": () => (/* binding */ BasicTableUiComponent)
/* harmony export */ });
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _features_quote_stream_src_components_quote_stream_feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../features/quote-stream/src/components/quote-stream-feature.component */ 1949);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 42466);








const _c0 = function (a0) {
  return {
    instrumentId: a0
  };
};
const _c1 = function (a0) {
  return [a0];
};
const _c2 = function (a0, a1, a2, a3, a4, a5) {
  return {
    valor: a0,
    pushField: a1,
    isin: a2,
    value: a3,
    assetClass: a4,
    suffix: a5
  };
};
const _c3 = function (a0, a1, a2, a3, a4) {
  return {
    valor: a0,
    pushField: a1,
    isin: a2,
    valueDate: a3,
    assetClass: a4
  };
};
function BasicTableUiComponent_table_0_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td")(8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td")(13, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "quote-stream", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "quote-stream", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const instrument_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 7, instrument_r2.assetClass + "-detail-page", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, instrument_r2.valor))));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](instrument_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](instrument_r2.valor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](instrument_r2.isin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](instrument_r2.wkn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction6"](14, _c2, instrument_r2.valor, ctx_r1.pf.bid, instrument_r2.isin, instrument_r2.quote, instrument_r2.assetClass, instrument_r2.currencyCode));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction5"](21, _c3, instrument_r2.valor, ctx_r1.pf.lastUpdateDate, instrument_r2.isin, instrument_r2.quoteDate, instrument_r2.assetClass));
  }
}
function BasicTableUiComponent_table_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 1)(1, "tbody")(2, "tr")(3, "th")(4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th")(11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th")(18, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, BasicTableUiComponent_table_0_tr_24_Template, 17, 27, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 7, "ui-instrument-list-header-name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 9, "ui-instrument-list-header-valor"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 11, "ui-instrument-list-header-isin"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 13, "ui-instrument-list-header-wkn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 15, "ui-instrument-list-header-last"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 17, "ui-instrument-list-header-last-date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.listItems);
  }
}
class BasicTableUiComponent {
  logger;
  listItems;
  locale;
  pf = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.PushFieldEnum;
  constructor(logger) {
    this.logger = logger;
  }
  static ɵfac = function BasicTableUiComponent_Factory(t) {
    return new (t || BasicTableUiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtil));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: BasicTableUiComponent,
    selectors: [["ui-basic-instrument-table"]],
    inputs: {
      listItems: "listItems"
    },
    decls: 2,
    vars: 2,
    consts: [["class", "table", 4, "ngIf"], [1, "table"], [1, "main-value"], [1, "sub-value"], [4, "ngFor", "ngForOf"], [1, "main-value", "dottedText", 3, "routerLink"], [3, "options"]],
    template: function BasicTableUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, BasicTableUiComponent_table_0_Template, 25, 19, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.listItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n", ctx.logger.uiUpdate("BasicTableUiComponent"), "\n");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _features_quote_stream_src_components_quote_stream_feature_component__WEBPACK_IMPORTED_MODULE_2__.QuoteStreamFeatureComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    changeDetection: 0
  });
}

/***/ }),

/***/ 76245:
/*!********************************************************************************************************************!*\
  !*** ./libs/@adesso/uis/instrument-list/src/components/basic-table/interfaces/basic-instrument-table.interface.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicInstrumentTableInterface": () => (/* binding */ BasicInstrumentTableInterface)
/* harmony export */ });
class BasicInstrumentTableInterface {
  assetClass;
  name;
  isin;
  valor;
  wkn;
  quote;
  quoteDate;
  currencyCode;
}

/***/ }),

/***/ 38541:
/*!*********************************************************************************************************!*\
  !*** ./libs/@adesso/uis/instrument-list/src/components/instrument-list/instrument-list-ui.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentListUiComponent": () => (/* binding */ InstrumentListUiComponent)
/* harmony export */ });
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _content_box_src_components_content_box_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../content-box/src/components/content-box-ui.component */ 79661);
/* harmony import */ var _basic_table_basic_table_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basic-table/basic-table-ui.component */ 48332);
/* harmony import */ var _order_table_order_table_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../order-table/order-table-ui.component */ 24643);
/* harmony import */ var _performance_table_performance_table_ui_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../performance-table/performance-table-ui.component */ 25738);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 42466);










function InstrumentListUiComponent_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, "no-data"), "\n");
  }
}
function InstrumentListUiComponent_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, InstrumentListUiComponent_0_ng_template_0_Template, 2, 3, "ng-template");
  }
}
function InstrumentListUiComponent_ng_template_1_ui_basic_instrument_table_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ui-basic-instrument-table", 4);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", ctx_r4.listItemsValue);
  }
}
function InstrumentListUiComponent_ng_template_1_ui_performance_instrument_table_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ui-performance-instrument-table", 4);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", ctx_r5.listItemsValue);
  }
}
function InstrumentListUiComponent_ng_template_1_ui_order_instrument_table_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ui-order-instrument-table", 4);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listItems", ctx_r6.listItemsValue);
  }
}
function InstrumentListUiComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ui-content-box", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, InstrumentListUiComponent_ng_template_1_ui_basic_instrument_table_1_Template, 1, 1, "ui-basic-instrument-table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, InstrumentListUiComponent_ng_template_1_ui_performance_instrument_table_2_Template, 1, 1, "ui-performance-instrument-table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, InstrumentListUiComponent_ng_template_1_ui_order_instrument_table_3_Template, 1, 1, "ui-order-instrument-table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("headline", ctx_r2.headline);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.tableType === ctx_r2.tableTypes.basic);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.tableType === ctx_r2.tableTypes.performance || ctx_r2.tableType === ctx_r2.tableTypes.performanceOneYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.tableType === ctx_r2.tableTypes.order);
  }
}
class InstrumentListUiComponent {
  logger;
  listItemsValue;
  set listItems(value) {
    if (value) {
      this.listItemsValue = value;
    }
  }
  headline;
  tableType;
  tableTypes = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.UiInstrumentListTypeEnum;
  constructor(logger) {
    this.logger = logger;
  }
  static ɵfac = function InstrumentListUiComponent_Factory(t) {
    return new (t || InstrumentListUiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_1__.LoggerUtil));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: InstrumentListUiComponent,
    selectors: [["ui-instrument-list"]],
    inputs: {
      listItems: "listItems",
      headline: "headline",
      tableType: "tableType"
    },
    decls: 4,
    vars: 3,
    consts: [[4, "ngIf", "ngIfElse"], ["table", ""], [3, "headline"], [3, "listItems", 4, "ngIf"], [3, "listItems"]],
    template: function InstrumentListUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, InstrumentListUiComponent_0_Template, 1, 0, null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, InstrumentListUiComponent_ng_template_1_Template, 4, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.listItemsValue == null || ctx.listItemsValue.length == 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\n", ctx.logger.uiUpdate("InstrumentListUiComponent"), "\n");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _content_box_src_components_content_box_ui_component__WEBPACK_IMPORTED_MODULE_2__.ContentBoxUiComponent, _basic_table_basic_table_ui_component__WEBPACK_IMPORTED_MODULE_3__.BasicTableUiComponent, _order_table_order_table_ui_component__WEBPACK_IMPORTED_MODULE_4__.OrderTableUiComponent, _performance_table_performance_table_ui_component__WEBPACK_IMPORTED_MODULE_5__.PerformanceTableUiComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 84697:
/*!********************************************************************************************************************!*\
  !*** ./libs/@adesso/uis/instrument-list/src/components/order-table/interfaces/order-instrument-table.interface.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderInstrumentTableInterface": () => (/* binding */ OrderInstrumentTableInterface)
/* harmony export */ });
class OrderInstrumentTableInterface {
  assetClass;
  name;
  isin;
  valor;
  wkn;
  bid;
  bidClose;
  ask;
  askClose;
  orders;
  changePercent;
  currencyCode;
  chartImageId;
}

/***/ }),

/***/ 24643:
/*!*************************************************************************************************!*\
  !*** ./libs/@adesso/uis/instrument-list/src/components/order-table/order-table-ui.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderTableUiComponent": () => (/* binding */ OrderTableUiComponent)
/* harmony export */ });
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _features_quote_stream_src_components_quote_stream_feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../features/quote-stream/src/components/quote-stream-feature.component */ 1949);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _base_utils_format_src_pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../@base/utils/format/src/pipes/number-formatter.pipe */ 51830);









const _c0 = function (a0) {
  return {
    instrumentId: a0
  };
};
const _c1 = function (a0) {
  return [a0];
};
const _c2 = function (a0, a1, a2, a3, a4, a5) {
  return {
    valor: a0,
    pushField: a1,
    isin: a2,
    value: a3,
    assetClass: a4,
    suffix: a5
  };
};
const _c3 = function (a0, a1, a2, a3, a4, a5, a6) {
  return {
    valor: a0,
    pushField: a1,
    isin: a2,
    value: a3,
    assetClass: a4,
    suffix: a5,
    close: a6
  };
};
const _c4 = function (a0, a1, a2, a3, a4, a5) {
  return {
    valor: a0,
    pushField: a1,
    isin: a2,
    value: a3,
    assetClass: a4,
    close: a5
  };
};
function OrderTableUiComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 1)(2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td")(6, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "quote-stream", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td")(9, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "quote-stream", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td")(12, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "numberFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td")(18, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "quote-stream", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const instrument_r2 = ctx.$implicit;
    const Index_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 8, instrument_r2.assetClass + "-detail-page", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c0, instrument_r2.valor))));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](instrument_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction6"](17, _c2, instrument_r2.valor, ctx_r0.pf.bid, instrument_r2.isin, instrument_r2.bid, instrument_r2.assetClass, instrument_r2.currencyCode));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction7"](24, _c3, instrument_r2.valor, ctx_r0.pf.ask, instrument_r2.isin, instrument_r2.ask, instrument_r2.assetClass, instrument_r2.currencyCode, instrument_r2.askClose));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 11, instrument_r2.orders));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("src", "./assets/charts/", instrument_r2.changePercent !== undefined && instrument_r2.changePercent >= 0 ? "positive" : "negative", "-", Index_r3 % 4, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction6"](32, _c4, instrument_r2.valor, ctx_r0.pf.bidChangeRelative, instrument_r2.isin, instrument_r2.changePercent, instrument_r2.assetClass, instrument_r2.bidClose));
  }
}
const _c5 = function (a0, a1) {
  return {
    "positive-value": a0,
    "negative-value": a1
  };
};
function OrderTableUiComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "numberFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td")(9, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "quote-stream", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "quote-stream", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td")(14, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "quote-stream", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const instrument_r4 = ctx.$implicit;
    const Index_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](16, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 9, instrument_r4.assetClass + "-detail-page", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c0, instrument_r4.valor))));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](instrument_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 12, instrument_r4.orders));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction7"](18, _c3, instrument_r4.valor, ctx_r1.pf.bid, instrument_r4.isin, instrument_r4.bid, instrument_r4.assetClass, instrument_r4.currencyCode, instrument_r4.bidClose));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction7"](26, _c3, instrument_r4.valor, ctx_r1.pf.ask, instrument_r4.isin, instrument_r4.ask, instrument_r4.assetClass, instrument_r4.currencyCode, instrument_r4.askClose));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](34, _c5, instrument_r4.changePercent !== undefined && instrument_r4.changePercent >= 0, instrument_r4.changePercent !== undefined && instrument_r4.changePercent < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction6"](37, _c4, instrument_r4.valor, ctx_r1.pf.bidChangeRelative, instrument_r4.isin, instrument_r4.changePercent, instrument_r4.assetClass, instrument_r4.bidClose));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("src", "./assets/charts/", instrument_r4.changePercent !== undefined && instrument_r4.changePercent >= 0 ? "positive" : "negative", "-", Index_r5 % 4, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
class OrderTableUiComponent {
  logger;
  listItems;
  locale;
  pf = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.PushFieldEnum;
  constructor(logger) {
    this.logger = logger;
  }
  static ɵfac = function OrderTableUiComponent_Factory(t) {
    return new (t || OrderTableUiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtil));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: OrderTableUiComponent,
    selectors: [["ui-order-instrument-table"]],
    inputs: {
      listItems: "listItems"
    },
    decls: 53,
    vars: 36,
    consts: [[1, "ui-instrument-list", "table-desktop"], ["colspan", "2"], [1, "main-value"], [4, "ngFor", "ngForOf"], [1, "ui-instrument-list", "table-mobile"], [1, "main-value", "dottedText", 3, "routerLink"], [3, "options"], [3, "src"], [1, "main-value", 3, "ngClass"]],
    template: function OrderTableUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0)(1, "tbody")(2, "tr")(3, "th", 1)(4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th")(8, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th")(12, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th")(16, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th")(20, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th")(24, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, OrderTableUiComponent_tr_27_Template, 20, 39, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "table", 4)(29, "tbody")(30, "tr")(31, "th")(32, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "th")(39, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "th")(46, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, OrderTableUiComponent_tr_51_Template, 17, 44, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 14, "ui-instrument-list-header-name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 16, "ui-instrument-list-header-bid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 18, "ui-instrument-list-header-ask"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 20, "ui-instrument-list-header-orders"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 22, "ui-instrument-list-header-chart"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 24, "ui-instrument-list-header-changePercent"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 26, "ui-instrument-list-header-name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](37, 28, "ui-instrument-list-header-orders"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](41, 30, "ui-instrument-list-header-bid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](44, 32, "ui-instrument-list-header-ask"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](48, 34, "ui-instrument-list-header-changePercent"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\n", ctx.logger.uiUpdate("OrderTableUiComponent"), "\n");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _features_quote_stream_src_components_quote_stream_feature_component__WEBPACK_IMPORTED_MODULE_2__.QuoteStreamFeatureComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _base_utils_format_src_pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__.NumberFormatterPipe],
    styles: [".clear[_ngcontent-%COMP%] {\n  clear: both;\n}\n\n.dottedText[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media screen and (min-width: 769px) {\n  .hide-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 768px) {\n  .hide-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 768px) {\n  .table-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (min-width: 769px) {\n  .table-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.ui-instrument-list[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  border-spacing: 0;\n  border-collapse: collapse;\n  width: 100%;\n  border: none;\n  table-layout: fixed;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ui-instrument-list[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .ui-instrument-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .ui-instrument-list[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .ui-instrument-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding: 10px;\n  font-size: 13px;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  background-color: #fff;\n  color: #0018a8;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #003cb4;\n  border-bottom: none;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #003cb4;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd)   td[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   .main-value[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   .main-value[_ngcontent-%COMP%], .ui-instrument-list[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%] {\n  display: block;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   a.main-value[_ngcontent-%COMP%], .ui-instrument-list[_ngcontent-%COMP%]   a.sub-value[_ngcontent-%COMP%] {\n  color: #003cb4;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   .positive-value[_ngcontent-%COMP%] {\n  color: #003cb4;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   .negative-value[_ngcontent-%COMP%] {\n  color: #003cb4;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 79697:
/*!********************************************************************************************************************************!*\
  !*** ./libs/@adesso/uis/instrument-list/src/components/performance-table/interfaces/performance-instrument-table.interface.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerformanceInstrumentTableInterface": () => (/* binding */ PerformanceInstrumentTableInterface)
/* harmony export */ });
class PerformanceInstrumentTableInterface {
  assetClass;
  name;
  isin;
  valor;
  quote;
  quoteDate;
  close;
  currencyCode;
  changePercent;
  changeAbsolute;
}

/***/ }),

/***/ 25738:
/*!*************************************************************************************************************!*\
  !*** ./libs/@adesso/uis/instrument-list/src/components/performance-table/performance-table-ui.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerformanceTableUiComponent": () => (/* binding */ PerformanceTableUiComponent)
/* harmony export */ });
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _features_quote_stream_src_components_quote_stream_feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../features/quote-stream/src/components/quote-stream-feature.component */ 1949);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 42466);








const _c0 = function (a0) {
  return {
    instrumentId: a0
  };
};
const _c1 = function (a0) {
  return [a0];
};
const _c2 = function (a0, a1, a2, a3, a4, a5) {
  return {
    valor: a0,
    pushField: a1,
    isin: a2,
    value: a3,
    assetClass: a4,
    suffix: a5
  };
};
const _c3 = function (a0, a1, a2, a3, a4) {
  return {
    valor: a0,
    pushField: a1,
    isin: a2,
    valueDate: a3,
    assetClass: a4
  };
};
const _c4 = function (a0, a1, a2, a3, a4, a5, a6) {
  return {
    valor: a0,
    pushField: a1,
    isin: a2,
    value: a3,
    assetClass: a4,
    suffix: a5,
    close: a6
  };
};
const _c5 = function (a0, a1, a2, a3, a4, a5) {
  return {
    valor: a0,
    pushField: a1,
    isin: a2,
    value: a3,
    assetClass: a4,
    close: a5
  };
};
function PerformanceTableUiComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 1)(2, "div", 8)(3, "span")(4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 6)(16, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "quote-stream", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "quote-stream", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td", 6)(21, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "quote-stream", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "quote-stream", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const instrument_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", instrument_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 11, instrument_r1.assetClass + "-detail-page", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c0, instrument_r1.valor))));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](instrument_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", instrument_r1.isin, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](instrument_r1.valor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", instrument_r1.isin, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](instrument_r1.valor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction6"](18, _c2, instrument_r1.valor, ctx_r0.pf.bid, instrument_r1.isin, instrument_r1.quote, instrument_r1.assetClass, instrument_r1.currencyCode));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction5"](25, _c3, instrument_r1.valor, ctx_r0.pf.lastUpdateDate, instrument_r1.isin, instrument_r1.quoteDate, instrument_r1.assetClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction7"](31, _c4, instrument_r1.valor, ctx_r0.pf.bidChangeAbsolute, instrument_r1.isin, instrument_r1.changeAbsolute, instrument_r1.assetClass, instrument_r1.currencyCode, instrument_r1.close));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction6"](39, _c5, instrument_r1.valor, ctx_r0.pf.bidChangeRelative, instrument_r1.isin, instrument_r1.changePercent, instrument_r1.assetClass, instrument_r1.close));
  }
}
class PerformanceTableUiComponent {
  logger;
  listItems;
  locale;
  pf = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.PushFieldEnum;
  constructor(logger) {
    this.logger = logger;
  }
  static ɵfac = function PerformanceTableUiComponent_Factory(t) {
    return new (t || PerformanceTableUiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtil));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PerformanceTableUiComponent,
    selectors: [["ui-performance-instrument-table"]],
    inputs: {
      listItems: "listItems"
    },
    decls: 33,
    vars: 23,
    consts: [[1, "table", "overview"], [1, "w-auto"], [1, "main-value"], [1, "d-lg-none"], [1, "sub-value"], [1, "w-25", "d-none", "d-lg-table-cell"], [1, "w-25"], [4, "ngFor", "ngForOf"], [1, "text-truncate"], [1, "text-nowrap", 3, "routerLink", "title"], [3, "options"]],
    template: function PerformanceTableUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 0)(1, "tbody")(2, "tr")(3, "th", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " ISIN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " ISIN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 6)(18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th", 6)(25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, PerformanceTableUiComponent_tr_31_Template, 25, 46, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 9, "ui-instrument-list-header-name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 11, "ui-instrument-list-header-valor"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 13, "ui-instrument-list-header-valor"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 15, "ui-instrument-list-header-last"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 17, "ui-instrument-list-header-last-date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 19, "ui-instrument-list-header-changeAbsolute"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 21, "ui-instrument-list-header-changePercent"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n", ctx.logger.uiUpdate("PerformanceTableUiComponent"), "\n");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _features_quote_stream_src_components_quote_stream_feature_component__WEBPACK_IMPORTED_MODULE_2__.QuoteStreamFeatureComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    styles: [".clear[_ngcontent-%COMP%] {\n  clear: both;\n}\n\n.dottedText[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media screen and (min-width: 769px) {\n  .hide-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 768px) {\n  .hide-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 768px) {\n  .table-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (min-width: 769px) {\n  .table-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.ui-instrument-list[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n  border-spacing: 0;\n  border-collapse: collapse;\n  width: 100%;\n  border: none;\n  table-layout: fixed;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ui-instrument-list[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .ui-instrument-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .ui-instrument-list[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .ui-instrument-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding: 10px;\n  font-size: 13px;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  background-color: #fff;\n  color: #0018a8;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #003cb4;\n  border-bottom: none;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #003cb4;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd)   td[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   .main-value[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   .main-value[_ngcontent-%COMP%], .ui-instrument-list[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%] {\n  display: block;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   a.main-value[_ngcontent-%COMP%], .ui-instrument-list[_ngcontent-%COMP%]   a.sub-value[_ngcontent-%COMP%] {\n  color: #003cb4;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   .positive-value[_ngcontent-%COMP%] {\n  color: #003cb4;\n}\n.ui-instrument-list[_ngcontent-%COMP%]   .negative-value[_ngcontent-%COMP%] {\n  color: #003cb4;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 44947:
/*!***************************************************************************!*\
  !*** ./libs/@adesso/uis/instrument-list/src/instrument-list-ui.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentListUiModule": () => (/* binding */ InstrumentListUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/ui-content-box */ 96524);
/* harmony import */ var _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-translation-manager */ 38134);
/* harmony import */ var _base_util_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/util-format */ 84094);
/* harmony import */ var _adesso_feature_quote_stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @adesso/feature-quote-stream */ 82626);
/* harmony import */ var _components_basic_table_basic_table_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/basic-table/basic-table-ui.component */ 48332);
/* harmony import */ var _components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/instrument-list/instrument-list-ui.component */ 38541);
/* harmony import */ var _components_performance_table_performance_table_ui_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/performance-table/performance-table-ui.component */ 25738);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./translations/config */ 44767);
/* harmony import */ var _components_order_table_order_table_ui_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/order-table/order-table-ui.component */ 24643);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94650);















class InstrumentListUiModule {
  constructor(translationManager) {
    translationManager.importTranslations(_translations_config__WEBPACK_IMPORTED_MODULE_7__.translationConfig);
  }
  static ɵfac = function InstrumentListUiModule_Factory(t) {
    return new (t || InstrumentListUiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtil));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: InstrumentListUiModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_0__.ContentBoxUiModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _base_util_format__WEBPACK_IMPORTED_MODULE_2__.FormatUtilModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _adesso_feature_quote_stream__WEBPACK_IMPORTED_MODULE_3__.QuoteStreamFeatureModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_9__.LoggerUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](InstrumentListUiModule, {
    declarations: [_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_5__.InstrumentListUiComponent, _components_basic_table_basic_table_ui_component__WEBPACK_IMPORTED_MODULE_4__.BasicTableUiComponent, _components_order_table_order_table_ui_component__WEBPACK_IMPORTED_MODULE_8__.OrderTableUiComponent, _components_performance_table_performance_table_ui_component__WEBPACK_IMPORTED_MODULE_6__.PerformanceTableUiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _adesso_ui_content_box__WEBPACK_IMPORTED_MODULE_0__.ContentBoxUiModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _base_util_format__WEBPACK_IMPORTED_MODULE_2__.FormatUtilModule, _base_util_translation_manager__WEBPACK_IMPORTED_MODULE_1__.TranslationManagerUtilModule, _adesso_feature_quote_stream__WEBPACK_IMPORTED_MODULE_3__.QuoteStreamFeatureModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_9__.LoggerUtilModule],
    exports: [_components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_5__.InstrumentListUiComponent, _components_basic_table_basic_table_ui_component__WEBPACK_IMPORTED_MODULE_4__.BasicTableUiComponent, _components_order_table_order_table_ui_component__WEBPACK_IMPORTED_MODULE_8__.OrderTableUiComponent, _components_performance_table_performance_table_ui_component__WEBPACK_IMPORTED_MODULE_6__.PerformanceTableUiComponent]
  });
})();

/***/ }),

/***/ 52529:
/*!***********************************************************************************!*\
  !*** ./libs/@adesso/uis/instrument-list/src/models/instrument-list-view.model.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentListViewModel": () => (/* binding */ InstrumentListViewModel)
/* harmony export */ });
class InstrumentListViewModel {
  assetClass;
  name;
  valor;
  currencyCode;
  isin;
  quote;
  quoteDate;
  wkn;
  changePercent;
  changeAbsolute;
  bid;
  bidClose;
  ask;
  askClose;
  orders;
  chartImageId;
}

/***/ }),

/***/ 20372:
/*!************************************************************!*\
  !*** ./libs/@adesso/uis/instrument-list/src/public-api.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicInstrumentTableInterface": () => (/* reexport safe */ _components_basic_table_interfaces_basic_instrument_table_interface__WEBPACK_IMPORTED_MODULE_3__.BasicInstrumentTableInterface),
/* harmony export */   "InstrumentListUiComponent": () => (/* reexport safe */ _components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_0__.InstrumentListUiComponent),
/* harmony export */   "InstrumentListUiModule": () => (/* reexport safe */ _instrument_list_ui_module__WEBPACK_IMPORTED_MODULE_1__.InstrumentListUiModule),
/* harmony export */   "InstrumentListViewModel": () => (/* reexport safe */ _models_instrument_list_view_model__WEBPACK_IMPORTED_MODULE_2__.InstrumentListViewModel),
/* harmony export */   "OrderInstrumentTableInterface": () => (/* reexport safe */ _components_order_table_interfaces_order_instrument_table_interface__WEBPACK_IMPORTED_MODULE_5__.OrderInstrumentTableInterface),
/* harmony export */   "PerformanceInstrumentTableInterface": () => (/* reexport safe */ _components_performance_table_interfaces_performance_instrument_table_interface__WEBPACK_IMPORTED_MODULE_4__.PerformanceInstrumentTableInterface)
/* harmony export */ });
/* harmony import */ var _components_instrument_list_instrument_list_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/instrument-list/instrument-list-ui.component */ 38541);
/* harmony import */ var _instrument_list_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instrument-list-ui.module */ 44947);
/* harmony import */ var _models_instrument_list_view_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/instrument-list-view.model */ 52529);
/* harmony import */ var _components_basic_table_interfaces_basic_instrument_table_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/basic-table/interfaces/basic-instrument-table.interface */ 76245);
/* harmony import */ var _components_performance_table_interfaces_performance_instrument_table_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/performance-table/interfaces/performance-instrument-table.interface */ 79697);
/* harmony import */ var _components_order_table_interfaces_order_instrument_table_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/order-table/interfaces/order-instrument-table.interface */ 84697);







/***/ }),

/***/ 44767:
/*!*********************************************************************!*\
  !*** ./libs/@adesso/uis/instrument-list/src/translations/config.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationConfig": () => (/* binding */ translationConfig)
/* harmony export */ });
const translationConfig = [{
  term: "ui-instrument-list-header-name",
  deDe: "Name",
  enUs: "Name"
}, {
  term: "ui-instrument-list-header-valor",
  deDe: "Valor",
  enUs: "Valor"
}, {
  term: "ui-instrument-list-header-isin",
  deDe: "ISIN",
  enUs: "ISIN"
}, {
  term: "ui-instrument-list-header-wkn",
  deDe: "WKN",
  enUs: "WKN"
}, {
  term: "ui-instrument-list-header-last",
  deDe: "Kurs",
  enUs: "Quote"
}, {
  term: "ui-instrument-list-header-last-date",
  deDe: "Stand",
  enUs: "Date"
}, {
  term: "ui-instrument-list-header-changePercent",
  deDe: "%",
  enUs: "%"
}, {
  term: "ui-instrument-list-header-changeAbsolute",
  deDe: "+/-",
  enUs: "+/-"
}, {
  term: "ui-instrument-list-header-bid",
  deDe: "Bid",
  enUs: "Bid"
}, {
  term: "ui-instrument-list-header-ask",
  deDe: "Ask",
  enUs: "Ask"
}, {
  term: "ui-instrument-list-header-orders",
  deDe: "Orders",
  enUs: "Orders"
}, {
  term: "ui-instrument-list-header-chart",
  deDe: " ",
  enUs: " "
}];

/***/ }),

/***/ 12557:
/*!*********************************************************************************************!*\
  !*** ./libs/@stroeer/repositories/instrument-list/src/instrument-list-repository.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentListRepositoryModule": () => (/* binding */ InstrumentListRepositoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);



class InstrumentListRepositoryModule {
  static ɵfac = function InstrumentListRepositoryModule_Factory(t) {
    return new (t || InstrumentListRepositoryModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: InstrumentListRepositoryModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InstrumentListRepositoryModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule]
  });
})();

/***/ }),

/***/ 2440:
/*!*********************************************************************************************!*\
  !*** ./libs/@stroeer/repositories/instrument-list/src/models/instrument-list-item.model.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentListItemModel": () => (/* binding */ InstrumentListItemModel)
/* harmony export */ });
class InstrumentListItemModel {
  name;
  originalName;
  valor;
  isin;
  wkn;
  assetClass;
  domicile;
  instrumentType;
  changeYearToDatePercent;
  changeYearToDateAbsolute;
  changeOneWeekPercent;
  changeOneMonthPercent;
  changeThreeMonthPercent;
  changeSixMonthPercent;
  changeOneYearPercent;
  yearHigh;
  yearHighDate;
  yearLow;
  yearLowDate;
  changeTwoYearsPercent;
  changeThreeYearsPercent;
  threeYearsHigh;
  threeYearsHighDate;
  threeYearsLow;
  threeYearsLowDate;
  changeFiveYearsPercent;
  fiveYearsHigh;
  fiveYearsHighDate;
  fiveYearsLow;
  fiveYearsLowDate;
  changeTenYearsPercent;
  currencyId;
  currencyCode;
  exchangeId;
  exchangeCode;
  exchangeName;
  dailyHigh;
  dailyHighDate;
  dailyLow;
  dailyLowDate;
  volume;
  oneWeekHigh;
  oneWeekHighDate;
  oneWeekLow;
  oneWeekLowDate;
  oneMonthHigh;
  oneMonthHighDate;
  oneMonthLow;
  oneMonthLowDate;
  threeMonthHigh;
  threeMonthHighDate;
  threeMonthLow;
  threeMonthLowDate;
  morningStarRating;
  last;
  bid;
  ask;
  valuation;
  nav;
  compositions;
}

/***/ }),

/***/ 34123:
/*!***********************************************************************************************!*\
  !*** ./libs/@stroeer/repositories/instrument-list/src/models/instrument-list-result.model.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentListResultModel": () => (/* binding */ InstrumentListResultModel)
/* harmony export */ });
class InstrumentListResultModel {
  resultCount;
  results;
}

/***/ }),

/***/ 55544:
/*!**************************************************************************************************!*\
  !*** ./libs/@stroeer/repositories/instrument-list/src/models/instrument-search-payload.model.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentSearchPayloadModel": () => (/* binding */ InstrumentSearchPayloadModel)
/* harmony export */ });
class InstrumentSearchPayloadModel {
  top;
  skip;
  orderBy;
  isDescendingOrder;
  searchTerm;
  assetClasses;
  instrumentType;
  currencyId;
  exchangeId;
  domicile;
  industrialSector;
  capitalManagementCompany;
  fundTypeClass;
  fundTypeFocus;
  fundCurrencyIsoCode;
  morningStarRatingFrom;
  morningStarRatingTo;
}

/***/ }),

/***/ 46585:
/*!*****************************************************************************************!*\
  !*** ./libs/@stroeer/repositories/instrument-list/src/models/top-flop-payload.model.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopFlopPayloadModel": () => (/* binding */ TopFlopPayloadModel)
/* harmony export */ });
class TopFlopPayloadModel {
  top;
  skip;
  topFlopIndex;
  orderBy;
  isDescendingOrder;
}

/***/ }),

/***/ 38382:
/*!**********************************************************************!*\
  !*** ./libs/@stroeer/repositories/instrument-list/src/public-api.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentListItemModel": () => (/* reexport safe */ _models_instrument_list_item_model__WEBPACK_IMPORTED_MODULE_4__.InstrumentListItemModel),
/* harmony export */   "InstrumentListRepository": () => (/* reexport safe */ _repositories_instrument_list_repository__WEBPACK_IMPORTED_MODULE_0__.InstrumentListRepository),
/* harmony export */   "InstrumentListRepositoryModule": () => (/* reexport safe */ _instrument_list_repository_module__WEBPACK_IMPORTED_MODULE_1__.InstrumentListRepositoryModule),
/* harmony export */   "InstrumentListResultModel": () => (/* reexport safe */ _models_instrument_list_result_model__WEBPACK_IMPORTED_MODULE_5__.InstrumentListResultModel),
/* harmony export */   "InstrumentSearchPayloadModel": () => (/* reexport safe */ _models_instrument_search_payload_model__WEBPACK_IMPORTED_MODULE_2__.InstrumentSearchPayloadModel),
/* harmony export */   "TopFlopPayloadModel": () => (/* reexport safe */ _models_top_flop_payload_model__WEBPACK_IMPORTED_MODULE_3__.TopFlopPayloadModel)
/* harmony export */ });
/* harmony import */ var _repositories_instrument_list_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repositories/instrument-list.repository */ 53667);
/* harmony import */ var _instrument_list_repository_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instrument-list-repository.module */ 12557);
/* harmony import */ var _models_instrument_search_payload_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/instrument-search-payload.model */ 55544);
/* harmony import */ var _models_top_flop_payload_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/top-flop-payload.model */ 46585);
/* harmony import */ var _models_instrument_list_item_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/instrument-list-item.model */ 2440);
/* harmony import */ var _models_instrument_list_result_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/instrument-list-result.model */ 34123);







/***/ }),

/***/ 53667:
/*!***************************************************************************************************!*\
  !*** ./libs/@stroeer/repositories/instrument-list/src/repositories/instrument-list.repository.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentListRepository": () => (/* binding */ InstrumentListRepository)
/* harmony export */ });
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 80529);
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 68896);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 21086);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 24850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);








function enumKeys(e) {
  return Object.keys(e);
}
class InstrumentListRepository {
  http;
  logger;
  adessoUrl = "https://tonline-api.sh01.de/stroeer/adesso_api/1.0.0";
  constructor(http, logger) {
    this.http = http;
    this.logger = logger;
    logger.repositoryConstructor("InstrumentListRepository");
  }
  getInstruments(instrumentIds, dataFields) {
    this.logger.repositoryRequest("getInstruments", instrumentIds, dataFields);
    if (instrumentIds && instrumentIds.length > 0) {
      const idType = this.getIdentifierTypeById(instrumentIds[0]);
      if (!idType) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
      }
      let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set("idType", idType).set("top", (instrumentIds.length + 1).toString());
      instrumentIds.forEach(id => {
        params = params.append("ids", id);
      });
      params = this.addDataFieldParams(params, dataFields);
      return this.http.get(this.adessoUrl + "/InstrumentsByIdentifiers", {
        params
      });
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
  }
  getConstituents(instrumentId, top, skip, dataFields) {
    this.logger.repositoryRequest("getConstituents", instrumentId, top, skip, dataFields);
    if (instrumentId && instrumentId.length > 0) {
      const idType = this.getIdentifierTypeById(instrumentId);
      if (!idType) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
      }
      let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set("id", instrumentId).set("idType", idType.toString()).set("orderBy", "Name").set("top", top.toString()).set("skip", skip.toString());
      params = this.addDataFieldParams(params, dataFields);
      return this.http.get(this.adessoUrl + "/Constituents", {
        params
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response));
    }
    return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
  }
  getTopFlop(payload, dataFields) {
    this.logger.repositoryRequest("getTopFlop", payload, dataFields);
    if (!payload) {
      return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
    }
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set("top", payload.top.toString()).set("skip", payload.skip.toString()).set("orderBy", payload.orderBy).set("isDescendingOrder", payload.isDescendingOrder ? "true" : "false").set("topFlopIndex", payload.topFlopIndex);
    params = this.addDataFieldParams(params, dataFields);
    return this.http.get(this.adessoUrl + "/TopFlops", {
      params
    });
  }
  searchInstrument(payload, dataFields) {
    this.logger.repositoryRequest("searchInstrument", payload, dataFields);
    if (!payload) {
      return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
    }
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set("top", payload.top.toString()).set("skip", payload.skip.toString()).set("orderBy", payload.orderBy).set("isDescendingOrder", payload.isDescendingOrder ? "true" : "false");
    params = this.addParam(params, "searchTerm", payload.searchTerm);
    params = this.addParam(params, "assetClasses", payload.assetClasses);
    params = this.addParam(params, "instrumentType", payload.instrumentType);
    params = this.addParam(params, "currencyId", payload.currencyId);
    params = this.addParam(params, "exchangeId", payload.exchangeId);
    params = this.addParam(params, "domicile", payload.domicile);
    params = this.addParam(params, "capitalManagementCompany", payload.capitalManagementCompany);
    params = this.addParam(params, "fundTypeClass", payload.fundTypeClass);
    params = this.addParam(params, "fundTypeFocus", payload.fundTypeFocus);
    params = this.addParam(params, "fundCurrencyIsoCode", payload.fundCurrencyIsoCode);
    params = this.addParam(params, "morningStarRatingFrom", payload.morningStarRatingFrom);
    params = this.addParam(params, "morningStarRatingTo", payload.morningStarRatingTo);
    params = this.addDataFieldParams(params, dataFields);
    return this.http.get(this.adessoUrl + "/InstrumentSearch", {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response));
  }
  addParam(params, key, value) {
    if (!value) {
      return params;
    } else {
      return params.append(key, value.toString());
    }
  }
  addDataFieldParams(params, dataFields) {
    if (dataFields.length === 0) {
      for (const key of enumKeys(_adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentResultDataFieldsEnum)) {
        params = params.append("resultDataFields", key);
      }
    } else {
      dataFields.forEach(field => {
        params = params.append("resultDataFields", field);
      });
    }
    return params;
  }
  getIdentifierTypeById(id) {
    if (!id) {
      return undefined;
    }
    if (id.length === 12) {
      return _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.IdentifierTypeEnum.isin;
    }
    if (!isNaN(+id)) {
      return _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.IdentifierTypeEnum.valor;
    }
    return undefined;
  }
  static ɵfac = function InstrumentListRepository_Factory(t) {
    return new (t || InstrumentListRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtil));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: InstrumentListRepository,
    factory: InstrumentListRepository.ɵfac,
    providedIn: "root"
  });
}

/***/ })

}]);