import { Injectable } from "@angular/core";
import { LoggerUtil } from "@base/util-logger";
import { HttpClient } from "@angular/common/http";
import { ChartDataModel, ChartDataPayloadModel } from "@adesso/util-contracts";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ChartRepository {
  private adessoUrl = "https://tonline-api.sh01.de/stroeer/adesso_api/1.0.0";

  constructor(private http: HttpClient, private logger: LoggerUtil) {
    logger.repositoryConstructor("ChartRepository");
  }

  public loadChartData(payload: ChartDataPayloadModel): Observable<ChartDataModel> {
    this.logger.repositoryRequest("loadChartData", payload);
    return this.http
      .get<ChartDataModel>(
        `${this.adessoUrl}/Charts?` +
          `triples=${payload.valor},${payload.exchangeId},${payload.currencyId},${payload.priceField}` +
          `&chartPeriod=${payload.period}`
      )
      .pipe(map((response: ChartDataModel) => response));
  }
}
