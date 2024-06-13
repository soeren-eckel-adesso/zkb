import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { ChartColorModel, CompositionItemInterface } from "@adesso/util-contracts";
import { LoggerUtil } from "@base/util-logger";

@Component({
  selector: "ui-composition",
  templateUrl: "./composition-ui.component.html",
  styleUrls: ["./composition-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompositionUiComponent implements OnInit {
  @Input() headline: string;
  @Input() compositions: CompositionItemInterface[];
  public hoverId?: number;
  public isInit = false;

  constructor(public logger: LoggerUtil) {}

  public chartColors: ChartColorModel[] = [
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

  public getColor(index: number): ChartColorModel {
    let colorIndex = index;
    while (colorIndex >= this.chartColors.length) {
      colorIndex = colorIndex - this.chartColors.length;
    }
    return this.chartColors[colorIndex];
  }

  ngOnInit() {
    this.isInit = true;
  }
}
