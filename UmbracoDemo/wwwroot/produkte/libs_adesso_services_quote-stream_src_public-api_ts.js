"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_services_quote-stream_src_public-api_ts"],{

/***/ 94:
/*!**************************************************************!*\
  !*** ./libs/@adesso/services/quote-stream/src/public-api.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoteStreamService": () => (/* reexport safe */ _services_quote_stream_service__WEBPACK_IMPORTED_MODULE_0__.QuoteStreamService),
/* harmony export */   "ServiceQuoteStreamModule": () => (/* reexport safe */ _service_quote_stream_module__WEBPACK_IMPORTED_MODULE_1__.ServiceQuoteStreamModule)
/* harmony export */ });
/* harmony import */ var _services_quote_stream_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/quote-stream.service */ 61928);
/* harmony import */ var _service_quote_stream_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-quote-stream.module */ 15033);



/***/ }),

/***/ 15033:
/*!*******************************************************************************!*\
  !*** ./libs/@adesso/services/quote-stream/src/service-quote-stream.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceQuoteStreamModule": () => (/* binding */ ServiceQuoteStreamModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _adesso_util_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-environment */ 56489);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _services_quote_stream_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/quote-stream.service */ 61928);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);





class ServiceQuoteStreamModule {
  static services = {
    lazy: _services_quote_stream_service__WEBPACK_IMPORTED_MODULE_2__.QuoteStreamService
  };
  static lazyModule;
  static ɵfac = function ServiceQuoteStreamModule_Factory(t) {
    return new (t || ServiceQuoteStreamModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ServiceQuoteStreamModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _adesso_util_environment__WEBPACK_IMPORTED_MODULE_0__.EnvironmentUtilModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_1__.LoggerUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ServiceQuoteStreamModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _adesso_util_environment__WEBPACK_IMPORTED_MODULE_0__.EnvironmentUtilModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_1__.LoggerUtilModule]
  });
})();

/***/ }),

/***/ 61928:
/*!*********************************************************************************!*\
  !*** ./libs/@adesso/services/quote-stream/src/services/quote-stream.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoteStreamService": () => (/* binding */ QuoteStreamService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 30839);
/* harmony import */ var _adesso_util_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-environment */ 56489);
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
///<reference path="../typings/Smarthouse.QuoteStream/QuoteStream.d.ts"/>
///<reference path="../typings/Smarthouse.QuoteStream/Lightstreamer.d.ts"/>







class QuoteStreamService {
  environmentService;
  quoteUpdate$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject();
  resetTimerEvent = 0;
  instrumentSubscriptions = [];
  lightStreamerSubscription;
  lightStreamerClient;
  constructor(environmentService, logger) {
    this.environmentService = environmentService;
    logger.serviceConstructor("QuoteStreamService");
    if (!this.environmentService.environment?.enabledPush) {
      return;
    }
    if (!this.environmentService.isQuoteStreamJsRequested) {
      this.environmentService.isQuoteStreamJsRequested = true;
      this.loadDynamicLightStreamerScript().then(() => {
        this.loadDynamicQuoteStreamScript().then(() => {
          this.environmentService.isQuoteStreamJsLoaded$.next(true);
          Smarthouse.QuoteStream.initClient({
            url: "https://push.wertpapiere.ing.de/",
            user: "ingdiba",
            token: "W1C6VTWtqB9rX9p9s0yvP0iZuyXoqIKUVq3fltjDqD9Rc1Qx2b7YCA==",
            feedAdapter: "SmarthouseFeed"
          });
          this.lightStreamerClient = Smarthouse.QuoteStream.getClient();
          this.lightStreamerClient.connect();
        });
      });
    }
  }
  initQuotestream() {
    if (!this.environmentService.environment?.enabledPush) {
      return;
    }
    if (this.lightStreamerSubscription) {
      this.lightStreamerClient.stopSubscription(this.lightStreamerSubscription);
    }
    this.lightStreamerSubscription = this.lightStreamerClient.createSubscription(this.instrumentSubscriptions.map(x => x.pushSymbol), ["bid", "ask", "bidsize", "asksize"], update => {
      const subscription = this.instrumentSubscriptions.find(s => s.pushSymbol === update.getItemName());
      if (subscription) {
        const ask = update.getValue("ask");
        subscription.ask = ask ? +ask : undefined;
        const askSize = update.getValue("asksize");
        subscription.askSize = askSize ? +askSize : undefined;
        const bid = update.getValue("bid");
        subscription.bid = bid ? +bid : undefined;
        const bidSize = update.getValue("bidsize");
        subscription.bidSize = bidSize ? +bidSize : undefined;
        this.quoteUpdate$.next(subscription);
      }
    });
  }
  addQuoteStreamItem(valor, assetClass) {
    if (!this.environmentService.environment?.enabledPush) {
      return;
    }
    const instrumentSubscription = this.instrumentSubscriptions.find(x => x.valor === valor);
    if (instrumentSubscription) {
      instrumentSubscription.count += 1;
      return;
    }
    let pushSymbol = [{
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.dax,
      pushSymbol: "X0000010700DEDB2KE7=DBBL"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.mDax,
      pushSymbol: "X0000010700DEDB2F6M=DBBL"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.cDax,
      pushSymbol: "X00033E028065774"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.divDax,
      pushSymbol: "X00033E02802081072"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.tecDax,
      pushSymbol: "X0000010700DEDB2KE9=DBBL"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.smi,
      pushSymbol: "X0000010700DEDB2KFE=DBBL"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.cac40,
      pushSymbol: "X00033E028065774"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.euroStoxx50,
      pushSymbol: "X0000010700DEDB2KE8=DBBL"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.dowJones,
      pushSymbol: "X0000010700DEDB2KFA=DBBL"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.sp500,
      pushSymbol: "X0000010700DEDB2KFC=DBBL"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.nasdaq100,
      pushSymbol: "X0000010700DEDB2KFB=DBBL"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.nikkei225,
      pushSymbol: "X0000010700DEDB2KFD=DBBL"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.ibex35,
      pushSymbol: "X0000010700ES0SI0000005=DBB"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.atx,
      pushSymbol: "X0000010700DEDB1FXF=DBBL"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.eurusd,
      pushSymbol: "X0000010700DEDB2AR4=DBBL"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.eurgbp,
      pushSymbol: "X0000010200946684"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.eurjpy,
      pushSymbol: "X0000010200946686"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.eurchf,
      pushSymbol: "X0000010200897789"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.eurcad,
      pushSymbol: "X0000010200946690"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.euraud,
      pushSymbol: "X0000010200946687"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.oilBrent,
      pushSymbol: "X0000010700DEDB4CAT=DBBL"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.gold,
      pushSymbol: "X0000010700DEDB4CBF=DBBL"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.silver,
      pushSymbol: "X0000010700DEDB4CBH=DBBL"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.palladium,
      pushSymbol: "X0000010700DEDB4CBM=DBBL"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.platin,
      pushSymbol: "X0000010700DEDB4CBK=DBBL"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.aluminium,
      pushSymbol: "X0000010700DEDB4CBP=DBBL"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.copper,
      pushSymbol: "X0000010700DEDB4CBT=DBBL"
    }, {
      valor: _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.InstrumentValorEnum.zinc,
      pushSymbol: "X0000010700DEDB4CBR=DBBL"
    }].find(x => x.valor === valor)?.pushSymbol || undefined;
    if (pushSymbol === undefined) {
      if (assetClass) {
        switch (assetClass) {
          case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.AssetClassEnum.exchangeRate:
            pushSymbol = "X0000010200" + valor;
            break;
          case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.AssetClassEnum.index:
            pushSymbol = "X00033E0280" + valor;
            break;
        }
      }
    }
    if (pushSymbol === undefined) {
      pushSymbol = "X000ADB0200" + valor;
    }
    this.instrumentSubscriptions.push({
      count: 1,
      valor,
      pushSymbol
    });
    if (this.resetTimerEvent !== 0) {
      clearTimeout(this.resetTimerEvent);
    }
    this.resetTimerEvent = 0;
    this.resetTimerEvent = setTimeout(() => {
      this.initQuotestream();
    }, 600);
  }
  removeQuoteStreamItem(valor) {
    const instrumentSubscription = this.instrumentSubscriptions.find(x => x.valor === valor);
    if (instrumentSubscription) {
      instrumentSubscription.count = instrumentSubscription.count - 1;
      this.instrumentSubscriptions = this.instrumentSubscriptions.filter(x => x.count > 0);
    }
  }
  filterEmptyValues(item, pushField) {
    return pushField === _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.PushFieldEnum.bid && item.bid !== undefined || pushField === _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.PushFieldEnum.bidChangeAbsolute && item.bid !== undefined || pushField === _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.PushFieldEnum.bidChangeRelative && item.bid !== undefined || pushField === _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.PushFieldEnum.bidSize && item.bidSize !== undefined || pushField === _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.PushFieldEnum.ask && item.ask !== undefined || pushField === _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.PushFieldEnum.askChangeAbsolute && item.ask !== undefined || pushField === _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.PushFieldEnum.askChangeRelative && item.ask !== undefined || pushField === _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.PushFieldEnum.askSize && item.askSize !== undefined || pushField === _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_1__.PushFieldEnum.lastUpdateDate;
  }
  loadDynamicLightStreamerScript() {
    return new Promise((resolve, reject) => {
      const scriptLightStreamer = window.document.createElement("script");
      scriptLightStreamer.src = "/assets/QuoteStream/lightstreamer.js";
      scriptLightStreamer.onload = () => {
        resolve(true);
      };
      scriptLightStreamer.onerror = () => {
        reject(false);
      };
      window.document.body.appendChild(scriptLightStreamer);
    });
  }
  loadDynamicQuoteStreamScript() {
    return new Promise((resolve, reject) => {
      const scriptQuoteStream = window.document.createElement("script");
      scriptQuoteStream.src = "/assets/QuoteStream/QuoteStream.js";
      scriptQuoteStream.onload = () => {
        resolve(true);
      };
      scriptQuoteStream.onerror = () => {
        reject(false);
      };
      window.document.body.appendChild(scriptQuoteStream);
    });
  }
  static ɵfac = function QuoteStreamService_Factory(t) {
    return new (t || QuoteStreamService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_adesso_util_environment__WEBPACK_IMPORTED_MODULE_0__.EnvironmentService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_2__.LoggerUtil));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: QuoteStreamService,
    factory: QuoteStreamService.ɵfac,
    providedIn: "root"
  });
}

/***/ })

}]);