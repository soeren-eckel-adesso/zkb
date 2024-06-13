import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { ChartColorModel, CompositionItemInterface } from "@adesso/util-contracts";

@Component({
  selector: "ui-chart-pie",
  templateUrl: "./ui-svg-chart-pie.component.html",
  styleUrls: ["./ui-svg-chart-pie.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSvgChartPieComponent {
  @Output() hoverIdChanged = new EventEmitter<number | undefined>();

  @Input()
  set items(compositions: CompositionItemInterface[]) {
    this.values = compositions?.map((d) => d.portion).filter((x) => x !== undefined);
    const sum = this.values?.reduce((a, b) => a + b, 0);
    if (sum && sum < 100) {
      this.values?.push(100 - sum);
    }
  }

  @Input()
  set colors(value: ChartColorModel[] | undefined) {
    this.chartColors = value ? value : this.defaultChartColors;
  }

  public values: number[];
  private chartColors: ChartColorModel[];
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

  constructor() {
    this.chartColors = this.defaultChartColors;
  }

  public getColor(index: number): ChartColorModel {
    if (!this.chartColors) {
      return { from: "#000000", to: "#000000" };
    }
    let colorIndex = index;
    while (colorIndex >= this.chartColors.length) {
      colorIndex = colorIndex - this.chartColors.length;
    }
    return this.chartColors[colorIndex];
  }

  public hover(id: number) {
    this.hoverIdChanged.emit(id);
  }

  public describeArc(startPercent: number, endPercent: number): string {
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

  public joinValues = (to: number): number => {
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

  private polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }
}
