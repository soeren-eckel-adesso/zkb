import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "page-exchange-rate-overview",
  templateUrl: "./exchange-rate-overview-page.component.html",
  styleUrls: ["./exchange-rate-overview-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExchangeRateOverviewPageComponent {
  public slides = [{ src: "assets/slider/exchangerate/devisen-wara1982-082.jpg" }];
}
