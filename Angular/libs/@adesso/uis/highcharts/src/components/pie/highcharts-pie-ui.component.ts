import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { ChartColorModel, CompositionItemInterface } from "@adesso/util-contracts";
import { Chart } from "angular-highcharts";
import { FormatUtil } from "@base/util-format";
import { EnvironmentService } from "@adesso/util-environment";
import { LoggerUtil } from "@base/util-logger";

@Component({
  selector: "ui-chart-pie",
  templateUrl: "./highcharts-pie-ui.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighchartsPieUiComponent {
  @Output() hoverIdChanged = new EventEmitter<number | undefined>();
  public chart: Chart | undefined;
  private defaultChartColors: ChartColorModel[] = [
    { from: "#5991C8", to: "#063C73" },
    { from: "#2C2C30", to: "#0A0A0A" },
    { from: "#78D565", to: "#49A636" },
    { from: "#D98547", to: "#B05C29" },
    { from: "#666BCF", to: "#4348AC" },
    { from: "#D94A68", to: "#BE374D" },
    { from: "#D0BF40", to: "#B2A122" },
    { from: "#207D7C", to: "#146766" },
    { from: "#E34A4A", to: "#D13838" },
    { from: "#83D9D2", to: "#71C8C1" },
    { from: "#AAD834", to: "#7A9926" },
  ];
  private chartItems: CompositionItemInterface[];
  private chartColors: ChartColorModel[];

  constructor(private formatService: FormatUtil, private environmentService: EnvironmentService, public logger: LoggerUtil) {
    this.chartColors = this.defaultChartColors;
  }

  @Input()
  set items(value: CompositionItemInterface[]) {
    this.chartItems = value;
    this.renderChart();
  }

  @Input()
  set colors(value: ChartColorModel[]) {
    this.chartColors = value ? value : this.defaultChartColors;
    this.renderChart();
  }

  private getColor(index: number): ChartColorModel {
    let colorIndex = index;
    while (colorIndex >= this.chartColors.length) {
      colorIndex = colorIndex - this.chartColors.length;
    }
    return this.chartColors[colorIndex];
  }

  private renderChart() {
    this.chart = undefined;

    if (this.environmentService.isServerRendering || !this.chartItems) {
      return;
    }

    const seriesData: any[] = [];

    let index = 0;
    this.chartItems.forEach((x) => {
      const color = this.getColor(index);

      seriesData.push({
        name: x.name,
        id: index,
        y: +x.portion.toFixed(2),
        color: {
          radialGradient: {
            cx: 0.5,
            cy: 0.5,
            r: 0.9,
          },
          stops: [
            [0, color.from],
            [1, color.to], // darken
          ],
        },
      });
      index = index + 1;
    });

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    this.chart = new Chart({
      chart: {
        type: "pie",
        height: "240px",
        plotBackgroundColor: undefined,
        plotBorderWidth: undefined,
        plotShadow: false,
        backgroundColor: undefined,
      },
      title: {
        text: "",
      },
      credits: {
        enabled: false,
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: false,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
            connectorColor: "silver",
          },
        },
      },
      tooltip: {
        formatter() {
          return this.point.name + ": " + that.formatService.asPercentage(this.y);
        },
      },
      series: [
        {
          name: "",
          type: "pie",
          innerSize: "0%",
          data: seriesData,
          point: {
            events: {
              mouseOver: (point: any) => {
                if (point && point.target && point.target.id) {
                  this.hoverIdChanged.emit(point.target.id);
                } else {
                  this.hoverIdChanged.emit(0);
                }
              },
              mouseOut: () => {
                this.hoverIdChanged.emit(undefined);
              },
            },
          },
        },
      ],
      legend: {
        enabled: false,
      },
      xAxis: {
        type: "datetime",
      },
      yAxis: {
        title: {
          text: "",
        },
      },
    });
  }
}
