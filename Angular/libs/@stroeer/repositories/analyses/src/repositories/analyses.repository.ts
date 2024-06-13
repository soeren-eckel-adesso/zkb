import { Injectable } from "@angular/core";
import { LoggerUtil } from "@base/util-logger";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { AnalysisSearchPayloadModel } from "../models/analysis-search-payload.model";
import { AnalysisSearchResultModel } from "../models/analysis-search-result.model";
import { AnalysisModel } from "../models/analysis.model";

@Injectable({
  providedIn: "root",
})
export class AnalysesRepository {
  private adessoUrl = "https://tonline-api.sh01.de/stroeer/adesso_api/1.0.0";

  constructor(private http: HttpClient, private logger: LoggerUtil) {
    logger.repositoryConstructor("AnalysesRepository");
  }

  public getAnalysesList(payload: AnalysisSearchPayloadModel): Observable<AnalysisSearchResultModel> {
    this.logger.repositoryRequest("getNewsList", payload);
    const params = new HttpParams()
      .set("top", payload.top.toString())
      .set("skip", payload.skip.toString())
      .set("orderBy", "Date")
      .set("isDescendingOrder", "true")
      .set("companyIsin", payload.companyIsin)
      .set("from", payload.from.toUTCString());

    return this.http.get<AnalysisSearchResultModel>(`${this.adessoUrl}/Analyses`, { params });
  }

  public getAnalysesDetail(id: string): Observable<AnalysisModel> {
    this.logger.repositoryRequest("getAnalyseDetail", id);
    return this.http.get<AnalysisModel>(`${this.adessoUrl}/Analyses/${id}`);
  }
}
