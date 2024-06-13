"use strict";
(self["webpackChunkweb_adesso_demo"] = self["webpackChunkweb_adesso_demo"] || []).push([["libs_adesso_uis_svg-chart_src_public-api_ts"],{

/***/ 25859:
/*!***************************************************************************************!*\
  !*** ./libs/@adesso/uis/svg-chart/src/components/line/svg-chart-line-ui.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgChartLineUiComponent": () => (/* binding */ SvgChartLineUiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _base_util_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-format */ 84094);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);





const _c0 = ["chartBox"];
function SvgChartLineUiComponent_ng_container_2__svg_svg_1__svg_ng_container_1__svg_text_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "text", 9)(1, "tspan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const yAxisValue_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("x", yAxisValue_r6.x)("y", yAxisValue_r6.y);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](yAxisValue_r6.value);
  }
}
function SvgChartLineUiComponent_ng_container_2__svg_svg_1__svg_ng_container_1__svg_path_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "path", 10);
  }
  if (rf & 2) {
    const yAxisValue_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("d", yAxisValue_r7.d);
  }
}
function SvgChartLineUiComponent_ng_container_2__svg_svg_1__svg_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SvgChartLineUiComponent_ng_container_2__svg_svg_1__svg_ng_container_1__svg_text_2_Template, 3, 3, "text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SvgChartLineUiComponent_ng_container_2__svg_svg_1__svg_ng_container_1__svg_path_4_Template, 1, 1, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.yAxisValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.yAxisValues);
  }
}
function SvgChartLineUiComponent_ng_container_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SvgChartLineUiComponent_ng_container_2__svg_svg_1__svg_ng_container_1_Template, 5, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 5)(3, "path", 5)(4, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("viewBox", ctx_r2.viewBox)("width", ctx_r2.chartWidth + "px")("height", ctx_r2.chartHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.yAxisValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("d", "M " + ctx_r2.yLabelWith + " 0 L " + ctx_r2.yLabelWith + " " + ctx_r2.chartHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("d", "M " + ctx_r2.yLabelWith + " " + ctx_r2.chartHeight + " L " + ctx_r2.chartWidth + " " + ctx_r2.chartHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("d", ctx_r2.chartPath);
  }
}
function SvgChartLineUiComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SvgChartLineUiComponent_ng_container_2__svg_svg_1_Template, 5, 7, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.viewBox);
  }
}
class SvgChartLineUiComponent {
  formatService;
  ref;
  elementView;
  viewBox;
  chartPath;
  chartWidth;
  chartHeight;
  yAxisValues;
  yLabelWith;
  data;
  xScale;
  yScale;
  set height(value) {
    if (value && !isNaN(+value.replace("px", ""))) {
      this.chartHeight = +value.replace("px", "");
    }
    this.calculateChartPath();
  }
  set chartData(chartData) {
    this.chartPath = "";
    if (chartData) {
      this.data = chartData;
      if (this.data) {
        this.data.sort(this.sortChartDataByTime);
      }
      this.calculateChartPath();
    }
  }
  set name(value) {
    if (value) {
      //
    }
  }
  constructor(formatService, ref) {
    this.formatService = formatService;
    this.ref = ref;
    this.chartHeight = 240;
    this.chartWidth = undefined;
    this.yLabelWith = 55;
  }
  ngAfterViewInit() {
    if (this.elementView?.nativeElement?.offsetWidth) {
      this.chartWidth = this.elementView?.nativeElement?.offsetWidth;
      this.calculateChartPath();
    }
  }
  onResize() {
    if (this.elementView?.nativeElement?.offsetWidth) {
      if (this.elementView?.nativeElement?.offsetWidth !== this.chartWidth) {
        this.chartWidth = this.elementView?.nativeElement?.offsetWidth;
        this.calculateChartPath();
      }
    }
  }
  calculateChartPath() {
    if (!this.data || !this.chartWidth) {
      return;
    }
    this.viewBox = "0 0 " + this.chartWidth + " " + this.chartHeight;
    this.chartPath = "";
    let minVal = Infinity;
    let maxVal = -Infinity;
    let earliestValue = [Infinity, 0];
    let latestValue = [-Infinity, 0];
    const {
      fenceStart,
      fenceEnd
    } = this.calculateFence();
    const xDomain = [fenceStart, fenceEnd];
    let first = true;
    const yValues = this.data.map(d => d[1]);
    this.xScale = this.scale(xDomain, [this.yLabelWith, this.chartWidth]);
    this.yScale = this.scale([Math.min(...yValues), Math.max(...yValues)], [this.chartHeight - 2, 2]);
    this.data?.forEach(([xVal, yVal]) => {
      minVal = Math.min(minVal, yVal);
      maxVal = Math.max(maxVal, yVal);
      if (earliestValue[0] > xVal) {
        earliestValue = [xVal, yVal];
      }
      if (latestValue[0] < xVal) {
        latestValue = [xVal, yVal];
      }
      this.chartPath += `${first ? "M" : "L"}${this.xScale(xVal)},${this.yScale(yVal)}`;
      first = false;
    });
    const priceRange = maxVal - minVal;
    this.yAxisValues = [];
    this.yAxisValues.push(this.createYAxisModel(this.round(minVal + priceRange * 0.97)));
    this.yAxisValues.push(this.createYAxisModel(this.round(minVal + priceRange * 0.78)));
    this.yAxisValues.push(this.createYAxisModel(this.round(minVal + priceRange * 0.59)));
    this.yAxisValues.push(this.createYAxisModel(this.round(minVal + priceRange * 0.4)));
    this.yAxisValues.push(this.createYAxisModel(this.round(minVal + priceRange * 0.21)));
    this.yAxisValues.push(this.createYAxisModel(this.round(minVal + priceRange * 0.02)));
    this.ref.detectChanges();
  }
  createYAxisModel(value) {
    return {
      x: this.yLabelWith - 5,
      y: this.yScale(value),
      value: this.formatService.formatNumber(value, undefined, true, false, 2),
      d: "M " + this.yLabelWith + " " + (this.yScale(value) - 3.5) + " L " + this.chartWidth + " " + (this.yScale(value) - 3.5)
    };
  }
  calculateFence() {
    if (!this.data) {
      return {
        fenceStart: 0,
        fenceEnd: 0
      };
    }
    return {
      fenceStart: Math.min(...this.data.map(d => d[0])),
      fenceEnd: Math.max(...this.data.map(d => d[0]))
    };
  }
  scale(domain, range) {
    const m = (range[1] - range[0]) / (domain[1] - domain[0]);
    return num => this.round(range[0] + m * (num - domain[0]));
  }
  round(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }
  sortChartDataByTime(a, b) {
    return a[0] === b[0] ? 0 : a[0] < b[0] ? -1 : 1;
  }
  static ɵfac = function SvgChartLineUiComponent_Factory(t) {
    return new (t || SvgChartLineUiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_base_util_format__WEBPACK_IMPORTED_MODULE_0__.FormatUtil), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SvgChartLineUiComponent,
    selectors: [["ui-chart-line"]],
    viewQuery: function SvgChartLineUiComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.elementView = _t.first);
      }
    },
    inputs: {
      height: "height",
      chartData: "chartData",
      name: "name"
    },
    decls: 3,
    vars: 1,
    consts: [[1, "chartBox", 3, "resize"], ["chartBox", ""], [4, "ngIf"], ["class", "chart", 4, "ngIf"], [1, "chart"], ["fill", "none", "stroke", "#c6cbcd", "stroke-width", "1", "opacity", "1"], ["stroke", "#7CB5EC", "stroke-width", "2", "data-z-index", "2"], ["text-anchor", "end", "opacity", "1", 4, "ngFor", "ngForOf"], ["fill", "none", "stroke", "#e6e6e6", "stroke-width", "1", "opacity", "0.8", 4, "ngFor", "ngForOf"], ["text-anchor", "end", "opacity", "1"], ["fill", "none", "stroke", "#e6e6e6", "stroke-width", "1", "opacity", "0.8"]],
    template: function SvgChartLineUiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function SvgChartLineUiComponent_Template_div_resize_0_listener() {
          return ctx.onResize();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SvgChartLineUiComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartWidth && ctx.data);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: [".chartBox[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n}\n.chartBox[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .chartBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .chartBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .chartBox[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\n.chart[_ngcontent-%COMP%] {\n  position: relative;\n  box-sizing: border-box;\n  display: block;\n  z-index: 2;\n  font-family: Helvetica, Arial, sans-serif;\n}\n.chart[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke-linejoin: round;\n  stroke-linecap: round;\n  fill: none;\n  vector-effect: non-scaling-stroke;\n  transition: stroke-width 0.3s;\n}\n.chart[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: \"Lucida Grande\", \"Lucida Sans Unicode\", Arial, Helvetica, sans-serif !important;\n  font-size: 11px;\n  color: #666666;\n  cursor: default;\n  fill: #666666;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 77745:
/*!*************************************************************************************!*\
  !*** ./libs/@adesso/uis/svg-chart/src/components/pie/ui-svg-chart-pie.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiSvgChartPieComponent": () => (/* binding */ UiSvgChartPieComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36895);



function UiSvgChartPieComponent__svg_svg_0__svg_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function UiSvgChartPieComponent__svg_svg_0__svg_ng_container_2_Template__svg_path_mouseover_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const i_r3 = restoredCtx.index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.hover(ctx_r5.values.length - i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx_r1.describeArc(ctx_r1.joinValues(ctx_r1.values.length - i_r3), ctx_r1.joinValues(ctx_r1.values.length - i_r3 + 1)))("stroke", ctx_r1.getColor(ctx_r1.values.length - i_r3).from);
  }
}
function UiSvgChartPieComponent__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UiSvgChartPieComponent__svg_svg_0__svg_ng_container_2_Template, 2, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function UiSvgChartPieComponent__svg_svg_0_Template__svg_path_mouseover_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.hover(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx_r0.describeArc(ctx_r0.joinValues(0), ctx_r0.joinValues(1)))("stroke", ctx_r0.getColor(0).from);
  }
}
class UiSvgChartPieComponent {
  hoverIdChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  set items(compositions) {
    this.values = compositions?.map(d => d.portion).filter(x => x !== undefined);
    const sum = this.values?.reduce((a, b) => a + b, 0);
    if (sum && sum < 100) {
      this.values?.push(100 - sum);
    }
  }
  set colors(value) {
    this.chartColors = value ? value : this.defaultChartColors;
  }
  values;
  chartColors;
  defaultChartColors = [{
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
  constructor() {
    this.chartColors = this.defaultChartColors;
  }
  getColor(index) {
    if (!this.chartColors) {
      return {
        from: "#000000",
        to: "#000000"
      };
    }
    let colorIndex = index;
    while (colorIndex >= this.chartColors.length) {
      colorIndex = colorIndex - this.chartColors.length;
    }
    return this.chartColors[colorIndex];
  }
  hover(id) {
    this.hoverIdChanged.emit(id);
  }
  describeArc(startPercent, endPercent) {
    const x = 95;
    const y = 95;
    const radius = 88;
    const startAngle = startPercent * 360;
    const endAngle = endPercent * 360;
    const start = this.polarToCartesian(x, y, radius, endAngle);
    const end = this.polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    const d = ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(" ");
    return d;
  }
  joinValues = to => {
    if (!this.values) {
      return 0;
    }
    return this.values.reduce((acc, val, index) => {
      if (index < to) {
        return acc + val / 100;
      }
      return acc;
    }, 0);
  };
  polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  }
  static ɵfac = function UiSvgChartPieComponent_Factory(t) {
    return new (t || UiSvgChartPieComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: UiSvgChartPieComponent,
    selectors: [["ui-chart-pie"]],
    inputs: {
      items: "items",
      colors: "colors"
    },
    outputs: {
      hoverIdChanged: "hoverIdChanged"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "pieChart", "viewBox", "0 0 190 190", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["viewBox", "0 0 190 190", "xmlns", "http://www.w3.org/2000/svg", 1, "pieChart"], ["cx", "95", "cy", "95", "r", "88", 1, "bg", "c10"], [4, "ngFor", "ngForOf"], [3, "mouseover"]],
    template: function UiSvgChartPieComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UiSvgChartPieComponent__svg_svg_0_Template, 4, 3, "svg", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.values);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".pieChart[_ngcontent-%COMP%] {\n  font-family: FrutigerLTPro, Helvetica, sans-serif;\n}\n.pieChart[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .pieChart[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .pieChart[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .pieChart[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n.pieChart[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%], .pieChart[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 14px;\n  stroke-linecap: round;\n}"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 67465:
/*!******************************************************!*\
  !*** ./libs/@adesso/uis/svg-chart/src/public-api.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgChartLineUiComponent": () => (/* reexport safe */ _components_line_svg_chart_line_ui_component__WEBPACK_IMPORTED_MODULE_0__.SvgChartLineUiComponent),
/* harmony export */   "SvgChartUiModule": () => (/* reexport safe */ _svg_chart_ui_module__WEBPACK_IMPORTED_MODULE_2__.SvgChartUiModule),
/* harmony export */   "UiSvgChartPieComponent": () => (/* reexport safe */ _components_pie_ui_svg_chart_pie_component__WEBPACK_IMPORTED_MODULE_1__.UiSvgChartPieComponent)
/* harmony export */ });
/* harmony import */ var _components_line_svg_chart_line_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/line/svg-chart-line-ui.component */ 25859);
/* harmony import */ var _components_pie_ui_svg_chart_pie_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pie/ui-svg-chart-pie.component */ 77745);
/* harmony import */ var _svg_chart_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg-chart-ui.module */ 70487);




/***/ }),

/***/ 70487:
/*!***************************************************************!*\
  !*** ./libs/@adesso/uis/svg-chart/src/svg-chart-ui.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgChartUiModule": () => (/* binding */ SvgChartUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _base_util_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base/util-format */ 84094);
/* harmony import */ var _components_line_svg_chart_line_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/line/svg-chart-line-ui.component */ 25859);
/* harmony import */ var _components_pie_ui_svg_chart_pie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pie/ui-svg-chart-pie.component */ 77745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);






class SvgChartUiModule {
  componentFactoryResolver;
  // @ts-ignore
  constructor(componentFactoryResolver) {
    this.componentFactoryResolver = componentFactoryResolver;
  }
  resolveLineChartComponent() {
    return _components_line_svg_chart_line_ui_component__WEBPACK_IMPORTED_MODULE_1__.SvgChartLineUiComponent;
  }
  resolvePieChartComponent() {
    return _components_pie_ui_svg_chart_pie_component__WEBPACK_IMPORTED_MODULE_2__.UiSvgChartPieComponent;
  }
  static ɵfac = function SvgChartUiModule_Factory(t) {
    return new (t || SvgChartUiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ComponentFactoryResolver));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: SvgChartUiModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _base_util_format__WEBPACK_IMPORTED_MODULE_0__.FormatUtilModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SvgChartUiModule, {
    declarations: [_components_line_svg_chart_line_ui_component__WEBPACK_IMPORTED_MODULE_1__.SvgChartLineUiComponent, _components_pie_ui_svg_chart_pie_component__WEBPACK_IMPORTED_MODULE_2__.UiSvgChartPieComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _base_util_format__WEBPACK_IMPORTED_MODULE_0__.FormatUtilModule],
    exports: [_components_line_svg_chart_line_ui_component__WEBPACK_IMPORTED_MODULE_1__.SvgChartLineUiComponent, _components_pie_ui_svg_chart_pie_component__WEBPACK_IMPORTED_MODULE_2__.UiSvgChartPieComponent]
  });
})();

/***/ })

}]);