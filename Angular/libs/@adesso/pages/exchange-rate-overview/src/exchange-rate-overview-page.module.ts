import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CarouselWithSearchFeatureModule } from "@adesso/feature-carousel-with-search";
import { ExchangeRateOverviewPageComponent } from "./components/exchange-rate-overview-page.component";
import { CurrencyConverterFeatureModule } from "@adesso/feature-currency-converter";

const routes: Routes = [
  {
    path: "",
    component: ExchangeRateOverviewPageComponent,
  },
];

@NgModule({
  declarations: [ExchangeRateOverviewPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CarouselWithSearchFeatureModule, CurrencyConverterFeatureModule],
})
export class ExchangeRateOverviewPageModule {}
