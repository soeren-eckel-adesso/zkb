import {Injectable} from "@angular/core";
import {LoggerUtil} from "@base/util-logger";
import {PerformanceModel} from "../models/performance.model";

@Injectable({
  providedIn: "root"
})
export class CalculationService {
  constructor(
    logger: LoggerUtil
  ) {
    logger.serviceConstructor("CalculationService");
  }
  public calculatePerformanceByCurrentValueAndChangePercent(currentValue?: number, changePercent?: number): PerformanceModel {
    const performance: PerformanceModel = {
      currentValue,
      changePercent
    };

    if (currentValue && changePercent && changePercent !== -100) {
      performance.oldValue = currentValue / (changePercent + 100) * 100;
      performance.changeAbsolute = currentValue - performance.oldValue;
    }

    return performance;
  }
}
