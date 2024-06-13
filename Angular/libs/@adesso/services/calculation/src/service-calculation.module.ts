import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoggerUtilModule } from "@base/util-logger";
import { CalculationService } from "./services/calculation.service";

@NgModule({
  imports: [CommonModule, LoggerUtilModule],
  providers: [CalculationService],
})
export class ServiceCalculationModule {}
