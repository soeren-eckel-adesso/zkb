"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["default-libs_adesso_features_quote-stream_src_public-api_ts-libs_adesso_services_best-quote_s-3d4830"],{

/***/ 1949:
/*!*********************************************************************************************!*\
  !*** ./libs/@adesso/features/quote-stream/src/components/quote-stream-feature.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoteStreamFeatureComponent": () => (/* binding */ QuoteStreamFeatureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/animations */ 37340);
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _adesso_util_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adesso/util-environment */ 56489);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 92198);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 72986);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var _enums_push_animation_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/push-animation.enum */ 23999);
/* harmony import */ var _models_quote_stream_input_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/quote-stream-input.model */ 43783);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_utils_ng_let_src_directives_ng_let_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@base/utils/ng-let/src/directives/ng-let.directive */ 39406);
/* harmony import */ var _base_utils_format_src_pipes_date_or_time_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@base/utils/format/src/pipes/date-or-time.pipe */ 62812);
/* harmony import */ var _base_utils_format_src_pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@base/utils/format/src/pipes/number-formatter.pipe */ 51830);
/* harmony import */ var _base_utils_format_src_pipes_percentage_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@base/utils/format/src/pipes/percentage.pipe */ 42115);
/* harmony import */ var _base_utils_format_src_pipes_change_absolute_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../@base/utils/format/src/pipes/change-absolute.pipe */ 30338);
















function QuoteStreamFeatureComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}
function QuoteStreamFeatureComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "dateOrTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngLet;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r4.changeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@changePositive", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 4, ctx_r4.animationState$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 6, value_r1.displayDate));
  }
}
function QuoteStreamFeatureComponent_ng_container_0_ng_template_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "percentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const value_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).ngLet;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r12.changeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@changePositive", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 4, ctx_r12.animationState$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 6, ctx_r12.calculateFactor(value_r1.displayValue)));
  }
}
function QuoteStreamFeatureComponent_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, QuoteStreamFeatureComponent_ng_container_0_ng_template_4_ng_container_0_Template, 5, 8, "ng-container", 6);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](7);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx_r6.data == null ? null : ctx_r6.data.pushField) === ctx_r6.pf.askChangeRelative || (ctx_r6.data == null ? null : ctx_r6.data.pushField) === ctx_r6.pf.bidChangeRelative)("ngIfElse", _r7);
  }
}
const _c0 = function (a0) {
  return {
    suffix: a0
  };
};
function QuoteStreamFeatureComponent_ng_container_0_ng_template_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "changeAbsolute");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const value_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).ngLet;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r14.changeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@changePositive", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 4, ctx_r14.animationState$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](4, 6, ctx_r14.calculateFactor(value_r1.displayValue), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](9, _c0, ctx_r14.data == null ? null : ctx_r14.data.suffix)));
  }
}
function QuoteStreamFeatureComponent_ng_container_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, QuoteStreamFeatureComponent_ng_container_0_ng_template_6_ng_container_0_Template, 5, 11, "ng-container", 6);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](9);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx_r8.data == null ? null : ctx_r8.data.pushField) === ctx_r8.pf.askChangeAbsolute || (ctx_r8.data == null ? null : ctx_r8.data.pushField) === ctx_r8.pf.bidChangeAbsolute)("ngIfElse", _r9);
  }
}
function QuoteStreamFeatureComponent_ng_container_0_ng_template_8_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function QuoteStreamFeatureComponent_ng_container_0_ng_template_8_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r17.data.suffix, "");
  }
}
const _c1 = function (a0, a1) {
  return {
    assetClass: a0,
    decimals: a1
  };
};
function QuoteStreamFeatureComponent_ng_container_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "numberFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, QuoteStreamFeatureComponent_ng_container_0_ng_template_8_span_4_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, QuoteStreamFeatureComponent_ng_container_0_ng_template_8_ng_container_5_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngLet;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r10.changeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@changePositive", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 6, ctx_r10.animationState$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](3, 8, ctx_r10.calculateFactor(value_r1.displayValue), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](11, _c1, ctx_r10.data == null ? null : ctx_r10.data.assetClass, ctx_r10.data == null ? null : ctx_r10.data.decimals)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ((ctx_r10.data == null ? null : ctx_r10.data.pushField) == ctx_r10.pf.bidChangeRelative || (ctx_r10.data == null ? null : ctx_r10.data.pushField) == ctx_r10.pf.askChangeRelative) && value_r1.displayValue !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx_r10.data == null ? null : ctx_r10.data.suffix) && value_r1.displayValue !== undefined);
  }
}
function QuoteStreamFeatureComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, QuoteStreamFeatureComponent_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, QuoteStreamFeatureComponent_ng_container_0_ng_template_2_Template, 4, 8, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, QuoteStreamFeatureComponent_ng_container_0_ng_template_4_Template, 1, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, QuoteStreamFeatureComponent_ng_container_0_ng_template_6_Template, 1, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, QuoteStreamFeatureComponent_ng_container_0_ng_template_8_Template, 6, 14, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx_r0.data == null ? null : ctx_r0.data.pushField) === ctx_r0.pf.lastUpdateDate)("ngIfThen", _r3)("ngIfElse", _r5);
  }
}
class QuoteStreamFeatureComponent {
  ref;
  injector;
  environmentService;
  data;
  set options(value) {
    this.data = value;
    if (this.data.value) {
      this.updateValue(value.value);
    }
    if (this.data.factor) {
      this.newValue.emit(this.calculateFactor(this.quoteStreamValue.displayValue));
    }
  }
  set value$(value) {
    value.subscribe(x => this.updateValue(x));
  }
  newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
  quoteStreamValue = {};
  quoteStreamValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(this.quoteStreamValue);
  animationState$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(_enums_push_animation_enum__WEBPACK_IMPORTED_MODULE_2__.PushAnimationEnum.neutral);
  isChangePositive = undefined;
  resetTimerEvent = 0;
  pf = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PushFieldEnum;
  changeClass = "";
  quoteStreamService;
  quoteStreamSubscription;
  constructor(ref, injector, environmentService) {
    this.ref = ref;
    this.injector = injector;
    this.environmentService = environmentService;
    if (this.environmentService.environment?.enabledPush) {
      this.loadDynamicQuoteStreamService();
    }
  }
  ngOnInit() {
    this.quoteStreamValue.displayDate = this.data?.valueDate;
    if (this.quoteStreamValue.displayValue) {
      switch (this.data?.pushField) {
        case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PushFieldEnum.askChangeRelative:
        case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PushFieldEnum.askChangeAbsolute:
        case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PushFieldEnum.bidChangeRelative:
        case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PushFieldEnum.bidChangeAbsolute:
          this.changeClass = this.quoteStreamValue.displayValue >= 0 ? "positive-value" : "negative-value";
          break;
      }
    }
    this.quoteStreamValue$.next(this.quoteStreamValue);
  }
  updateAnimation(value) {
    this.animationState$.next(value);
    this.ref.detectChanges();
    if (value !== _enums_push_animation_enum__WEBPACK_IMPORTED_MODULE_2__.PushAnimationEnum.neutral) {
      if (this.resetTimerEvent !== 0) {
        clearTimeout(this.resetTimerEvent);
      }
      this.resetTimerEvent = 0;
      this.resetTimerEvent = setTimeout(() => {
        this.updateAnimation(_enums_push_animation_enum__WEBPACK_IMPORTED_MODULE_2__.PushAnimationEnum.neutral);
      }, 500);
    }
  }
  quoteUpdate(quote) {
    switch (this.data.pushField) {
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PushFieldEnum.bid:
        this.updateValue(quote.bid);
        break;
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PushFieldEnum.bidSize:
        this.updateValue(quote.bidSize);
        break;
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PushFieldEnum.ask:
        this.updateValue(quote.ask);
        break;
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PushFieldEnum.askSize:
        this.updateValue(quote.askSize);
        break;
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PushFieldEnum.bidChangeRelative:
        this.updateChangePercent(quote.bid);
        break;
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PushFieldEnum.askChangeRelative:
        this.updateChangePercent(quote.ask);
        break;
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PushFieldEnum.bidChangeAbsolute:
        this.updateChangeAbsolute(quote.bid);
        break;
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PushFieldEnum.askChangeAbsolute:
        this.updateChangeAbsolute(quote.ask);
        break;
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PushFieldEnum.lastUpdateDate:
        this.quoteStreamValue.displayDate = new Date(Date.now());
        if (this.resetTimerEvent !== 0) {
          clearTimeout(this.resetTimerEvent);
        }
        this.updateAnimation(_enums_push_animation_enum__WEBPACK_IMPORTED_MODULE_2__.PushAnimationEnum.positive);
        break;
    }
    this.quoteStreamValue$.next(this.quoteStreamValue);
  }
  updateValue(newValue) {
    if (!newValue || newValue === this.quoteStreamValue.displayValue) {
      return;
    }
    if (this.quoteStreamValue.displayValue && newValue) {
      if (newValue > this.quoteStreamValue.displayValue) {
        this.updateAnimation(_enums_push_animation_enum__WEBPACK_IMPORTED_MODULE_2__.PushAnimationEnum.positive);
      }
      if (newValue < this.quoteStreamValue.displayValue) {
        this.updateAnimation(_enums_push_animation_enum__WEBPACK_IMPORTED_MODULE_2__.PushAnimationEnum.negative);
      }
    }
    this.quoteStreamValue.displayValue = newValue;
    this.newValue.emit(this.calculateFactor(this.quoteStreamValue.displayValue));
    this.quoteStreamValue$.next(this.quoteStreamValue);
  }
  updateChangePercent(newValue) {
    if (this.quoteStreamValue.displayValue && newValue && this.data.close) {
      const changePercent = 100 / this.data.close * newValue - 100;
      this.changeClass = changePercent >= 0 ? "positive-value" : "negative-value";
      if (changePercent > this.quoteStreamValue.displayValue) {
        this.updateAnimation(_enums_push_animation_enum__WEBPACK_IMPORTED_MODULE_2__.PushAnimationEnum.positive);
      }
      if (changePercent < this.quoteStreamValue.displayValue) {
        this.updateAnimation(_enums_push_animation_enum__WEBPACK_IMPORTED_MODULE_2__.PushAnimationEnum.negative);
      }
      this.quoteStreamValue.displayValue = changePercent;
      this.quoteStreamValue$.next(this.quoteStreamValue);
    }
  }
  updateChangeAbsolute(newValue) {
    if (this.quoteStreamValue.displayValue && newValue && this.data.close) {
      const changeAbsolute = newValue - this.data.close;
      this.changeClass = changeAbsolute >= 0 ? "positive-value" : "negative-value";
      if (changeAbsolute > this.quoteStreamValue.displayValue) {
        this.updateAnimation(_enums_push_animation_enum__WEBPACK_IMPORTED_MODULE_2__.PushAnimationEnum.positive);
      }
      if (changeAbsolute < this.quoteStreamValue.displayValue) {
        this.updateAnimation(_enums_push_animation_enum__WEBPACK_IMPORTED_MODULE_2__.PushAnimationEnum.negative);
      }
      this.quoteStreamValue.displayValue = changeAbsolute;
      this.newValue.emit(this.calculateFactor(this.quoteStreamValue.displayValue));
      this.quoteStreamValue$.next(this.quoteStreamValue);
    }
  }
  calculateFactor(value) {
    if (!value || !this.data.factor) {
      return value;
    }
    switch (this.data.pushField) {
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PushFieldEnum.bid:
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PushFieldEnum.ask:
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PushFieldEnum.bidChangeAbsolute:
      case _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PushFieldEnum.askChangeAbsolute:
        return value * this.data.factor;
    }
    return value;
  }
  loadDynamicQuoteStreamService() {
    // Dynamic Service Loading
    if (this.environmentService.environment?.enabledPush) {
      __webpack_require__.e(/*! import() */ "libs_adesso_services_quote-stream_src_public-api_ts").then(__webpack_require__.bind(__webpack_require__, /*! @adesso/service-quote-stream */ 94)).then(mod => mod.QuoteStreamService).then(lazyModule => {
        this.quoteStreamService = this.injector.get(lazyModule);
        this.environmentService.isQuoteStreamJsLoaded$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(x => x === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(isLoaded => {
          if (isLoaded) {
            this.subscribeQuoteStream();
          }
        });
      });
    }
  }
  subscribeQuoteStream() {
    if (!this.quoteStreamService || !this.data?.valor) {
      return;
    }
    this.quoteStreamService.addQuoteStreamItem(this.data.valor, this.data.assetClass);
    this.quoteStreamSubscription = this.quoteStreamService.quoteUpdate$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(x => x.valor === this.data.valor), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(x => this.quoteStreamService?.filterEmptyValues(x, this.data.pushField))).subscribe(quote => {
      this.quoteUpdate(quote);
    });
  }
  ngOnDestroy() {
    if (this.data.valor) {
      this.quoteStreamService?.removeQuoteStreamItem(this.data.valor);
    }
    this.quoteStreamSubscription?.unsubscribe();
  }
  static ɵfac = function QuoteStreamFeatureComponent_Factory(t) {
    return new (t || QuoteStreamFeatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_adesso_util_environment__WEBPACK_IMPORTED_MODULE_1__.EnvironmentService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: QuoteStreamFeatureComponent,
    selectors: [["quote-stream"]],
    inputs: {
      options: "options",
      value$: "value$"
    },
    outputs: {
      newValue: "newValue"
    },
    decls: 2,
    vars: 3,
    consts: [[4, "ngLet"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["dateValues", ""], ["relativeValues", ""], ["changeAbsoluteValues", ""], ["absoluteValues", ""], [4, "ngIf", "ngIfElse"], [4, "ngIf"]],
    template: function QuoteStreamFeatureComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, QuoteStreamFeatureComponent_ng_container_0_Template, 10, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngLet", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx.quoteStreamValue$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _base_utils_ng_let_src_directives_ng_let_directive__WEBPACK_IMPORTED_MODULE_4__.NgLetDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _base_utils_format_src_pipes_date_or_time_pipe__WEBPACK_IMPORTED_MODULE_5__.DateOrTimePipe, _base_utils_format_src_pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_6__.NumberFormatterPipe, _base_utils_format_src_pipes_percentage_pipe__WEBPACK_IMPORTED_MODULE_7__.PercentagePipe, _base_utils_format_src_pipes_change_absolute_pipe__WEBPACK_IMPORTED_MODULE_8__.ChangeAbsolutePipe],
    styles: [".positive-value[_ngcontent-%COMP%] {\n  color: #003cb4;\n}\n\n.negative-value[_ngcontent-%COMP%] {\n  color: #003cb4;\n}"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.trigger)("changePositive", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.state)(_enums_push_animation_enum__WEBPACK_IMPORTED_MODULE_2__.PushAnimationEnum.negative, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
        backgroundColor: "#D71F85"
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.state)(_enums_push_animation_enum__WEBPACK_IMPORTED_MODULE_2__.PushAnimationEnum.positive, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
        backgroundColor: "#36C9A5"
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.state)(_enums_push_animation_enum__WEBPACK_IMPORTED_MODULE_2__.PushAnimationEnum.neutral, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
        backgroundColor: "rgba(255, 255, 255, 0)"
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)("neutral => positive", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)("0.5s")]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)("neutral => negative", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)("0.5s")]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)("positive => negative", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)("0.5s")]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)("positive => neutral", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)("0.5s")]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)("negative => neutral", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)("0.5s")]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)("negative => positive", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)("0.5s")])])]
    },
    changeDetection: 0
  });
}

/***/ }),

/***/ 23999:
/*!*****************************************************************************!*\
  !*** ./libs/@adesso/features/quote-stream/src/enums/push-animation.enum.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushAnimationEnum": () => (/* binding */ PushAnimationEnum)
/* harmony export */ });
var PushAnimationEnum;
(function (PushAnimationEnum) {
  PushAnimationEnum["neutral"] = "neutral";
  PushAnimationEnum["positive"] = "positive";
  PushAnimationEnum["negative"] = "negative";
})(PushAnimationEnum || (PushAnimationEnum = {}));

/***/ }),

/***/ 43783:
/*!***********************************************************************************!*\
  !*** ./libs/@adesso/features/quote-stream/src/models/quote-stream-input.model.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoteStreamInputModel": () => (/* binding */ QuoteStreamInputModel)
/* harmony export */ });
class QuoteStreamInputModel {
  pushField;
  valor;
  value;
  valueDate;
  close;
  suffix;
  isin;
  assetClass;
  factor;
  decimals;
}

/***/ }),

/***/ 82626:
/*!**************************************************************!*\
  !*** ./libs/@adesso/features/quote-stream/src/public-api.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoteStreamFeatureComponent": () => (/* reexport safe */ _components_quote_stream_feature_component__WEBPACK_IMPORTED_MODULE_0__.QuoteStreamFeatureComponent),
/* harmony export */   "QuoteStreamFeatureModule": () => (/* reexport safe */ _quote_stream_feature_module__WEBPACK_IMPORTED_MODULE_1__.QuoteStreamFeatureModule),
/* harmony export */   "QuoteStreamInputModel": () => (/* reexport safe */ _models_quote_stream_input_model__WEBPACK_IMPORTED_MODULE_2__.QuoteStreamInputModel)
/* harmony export */ });
/* harmony import */ var _components_quote_stream_feature_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/quote-stream-feature.component */ 1949);
/* harmony import */ var _quote_stream_feature_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote-stream-feature.module */ 92064);
/* harmony import */ var _models_quote_stream_input_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/quote-stream-input.model */ 43783);




/***/ }),

/***/ 92064:
/*!*******************************************************************************!*\
  !*** ./libs/@adesso/features/quote-stream/src/quote-stream-feature.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoteStreamFeatureModule": () => (/* binding */ QuoteStreamFeatureModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-format */ 84094);
/* harmony import */ var _components_quote_stream_feature_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/quote-stream-feature.component */ 1949);
/* harmony import */ var _base_util_ng_let__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/util-ng-let */ 91535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);





class QuoteStreamFeatureModule {
  static ɵfac = function QuoteStreamFeatureModule_Factory(t) {
    return new (t || QuoteStreamFeatureModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: QuoteStreamFeatureModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _base_util_format__WEBPACK_IMPORTED_MODULE_0__.FormatUtilModule, _base_util_ng_let__WEBPACK_IMPORTED_MODULE_2__.NgLetUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](QuoteStreamFeatureModule, {
    declarations: [_components_quote_stream_feature_component__WEBPACK_IMPORTED_MODULE_1__.QuoteStreamFeatureComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _base_util_format__WEBPACK_IMPORTED_MODULE_0__.FormatUtilModule, _base_util_ng_let__WEBPACK_IMPORTED_MODULE_2__.NgLetUtilModule],
    exports: [_components_quote_stream_feature_component__WEBPACK_IMPORTED_MODULE_1__.QuoteStreamFeatureComponent]
  });
})();

/***/ }),

/***/ 84061:
/*!************************************************************!*\
  !*** ./libs/@adesso/services/best-quote/src/public-api.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BestQuoteService": () => (/* reexport safe */ _services_best_quote_service__WEBPACK_IMPORTED_MODULE_0__.BestQuoteService),
/* harmony export */   "ServiceBestQuoteModule": () => (/* reexport safe */ _service_best_quote_module__WEBPACK_IMPORTED_MODULE_1__.ServiceBestQuoteModule)
/* harmony export */ });
/* harmony import */ var _services_best_quote_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/best-quote.service */ 40099);
/* harmony import */ var _service_best_quote_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-best-quote.module */ 49750);



/***/ }),

/***/ 49750:
/*!***************************************************************************!*\
  !*** ./libs/@adesso/services/best-quote/src/service-best-quote.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceBestQuoteModule": () => (/* binding */ ServiceBestQuoteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _services_best_quote_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/best-quote.service */ 40099);
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);





class ServiceBestQuoteModule {
  static ɵfac = function ServiceBestQuoteModule_Factory(t) {
    return new (t || ServiceBestQuoteModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ServiceBestQuoteModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    providers: [_services_best_quote_service__WEBPACK_IMPORTED_MODULE_1__.BestQuoteService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.ContractUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ServiceBestQuoteModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _base_util_logger__WEBPACK_IMPORTED_MODULE_0__.LoggerUtilModule, _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_2__.ContractUtilModule]
  });
})();

/***/ }),

/***/ 40099:
/*!*****************************************************************************!*\
  !*** ./libs/@adesso/services/best-quote/src/services/best-quote.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BestQuoteService": () => (/* binding */ BestQuoteService)
/* harmony export */ });
/* harmony import */ var _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adesso/util-contracts */ 52955);
/* harmony import */ var _base_util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/util-logger */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);




class BestQuoteService {
  constructor(logger) {
    logger.serviceConstructor("BestQuoteService");
  }
  getBestQuote(quotes) {
    if (quotes.last?.quote !== undefined) {
      quotes.last.priceField = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PriceFieldEnum.last;
      return quotes.last;
    }
    if (quotes.valuation?.quote !== undefined) {
      quotes.valuation.priceField = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PriceFieldEnum.valuation;
      return quotes.valuation;
    }
    if (quotes.nav?.quote !== undefined) {
      quotes.nav.priceField = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PriceFieldEnum.nav;
      return quotes.nav;
    }
    if (quotes.bid?.quote !== undefined) {
      quotes.bid.priceField = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PriceFieldEnum.bid;
      return quotes.bid;
    }
    if (quotes.ask?.quote !== undefined) {
      quotes.ask.priceField = _adesso_util_contracts__WEBPACK_IMPORTED_MODULE_0__.PriceFieldEnum.ask;
      return quotes.ask;
    }
    return undefined;
  }
  static ɵfac = function BestQuoteService_Factory(t) {
    return new (t || BestQuoteService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_base_util_logger__WEBPACK_IMPORTED_MODULE_1__.LoggerUtil));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: BestQuoteService,
    factory: BestQuoteService.ɵfac,
    providedIn: "root"
  });
}

/***/ })

}]);