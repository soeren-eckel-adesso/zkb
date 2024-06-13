import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { FormatUtil } from "@base/util-format";
import { AxisValueModel } from "../../models/axis-value.model";

interface FenceObject {
  fenceStart: number;
  fenceEnd: number;
}

@Component({
  selector: "ui-chart-line",
  templateUrl: "./svg-chart-line-ui.component.html",
  styleUrls: ["./svg-chart-line-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgChartLineUiComponent implements AfterViewInit {
  @ViewChild("chartBox", { read: ElementRef, static: false })
  elementView: ElementRef;
  public viewBox: string;
  public chartPath: string;
  public chartWidth: number | undefined;
  public chartHeight: number;
  public yAxisValues: AxisValueModel[];
  public readonly yLabelWith: number;
  public data: Array<[number, number]>;
  private xScale: (num: number) => number;
  private yScale: (num: number) => number;

  @Input()
  set height(value: string) {
    if (value && !isNaN(+value.replace("px", ""))) {
      this.chartHeight = +value.replace("px", "");
    }
    this.calculateChartPath();
  }

  @Input()
  set chartData(chartData: Array<[number, number]> | undefined | null) {
    this.chartPath = "";
    if (chartData) {
      this.data = chartData;
      if (this.data) {
        this.data.sort(this.sortChartDataByTime);
      }
      this.calculateChartPath();
    }
  }

  @Input()
  set name(value: string | undefined) {
    if (value) {
      //
    }
  }

  constructor(private formatService: FormatUtil, private ref: ChangeDetectorRef) {
    this.chartHeight = 240;
    this.chartWidth = undefined;
    this.yLabelWith = 55;
  }

  ngAfterViewInit(): void {
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

  private calculateChartPath() {
    if (!this.data || !this.chartWidth) {
      return;
    }
    this.viewBox = "0 0 " + this.chartWidth + " " + this.chartHeight;
    this.chartPath = "";

    let minVal = Infinity;
    let maxVal = -Infinity;
    let earliestValue = [Infinity, 0];
    let latestValue = [-Infinity, 0];

    const { fenceStart, fenceEnd } = this.calculateFence();
    const xDomain = [fenceStart, fenceEnd];
    let first = true;
    const yValues = this.data.map((d) => d[1]);
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

  private createYAxisModel(value: number): AxisValueModel {
    return {
      x: this.yLabelWith - 5,
      y: this.yScale(value),
      value: this.formatService.formatNumber(value, undefined, true, false, 2),
      d: "M " + this.yLabelWith + " " + (this.yScale(value) - 3.5) + " L " + this.chartWidth + " " + (this.yScale(value) - 3.5),
    };
  }
  private calculateFence(): FenceObject {
    if (!this.data) {
      return {
        fenceStart: 0,
        fenceEnd: 0,
      };
    }
    return {
      fenceStart: Math.min(...this.data.map((d) => d[0])),
      fenceEnd: Math.max(...this.data.map((d) => d[0])),
    };
  }

  private scale(domain: number[], range: number[]): (num: number) => number {
    const m = (range[1] - range[0]) / (domain[1] - domain[0]);
    return (num: number) => this.round(range[0] + m * (num - domain[0]));
  }

  private round(num: number) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }

  private sortChartDataByTime(a: [number, number], b: [number, number]) {
    return a[0] === b[0] ? 0 : a[0] < b[0] ? -1 : 1;
  }
}
