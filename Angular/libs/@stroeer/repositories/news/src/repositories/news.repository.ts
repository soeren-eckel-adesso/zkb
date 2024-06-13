import { Injectable } from "@angular/core";
import { LoggerUtil } from "@base/util-logger";
import { NewsListPayloadModel } from "../models/news-list-payload.model";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { NewsDetailModel } from "../models/news-detail.model";
import { NewsListResultModel } from "../models/news-list-result.model";

@Injectable({
  providedIn: "root",
})
export class NewsRepository {
  private adessoUrl = "https://tonline-api.sh01.de/stroeer/adesso_api/1.0.0";

  constructor(private http: HttpClient, private logger: LoggerUtil) {
    logger.repositoryConstructor("NewsRepository");
  }

  public getNewsList(payload: NewsListPayloadModel): Observable<NewsListResultModel> {
    this.logger.repositoryRequest("getNewsList", payload);
    let params = new HttpParams()
      .set("top", payload.top.toString())
      .set("skip", payload.skip.toString())
      .set("isDescendingOrder", payload.isDescendingOrder ? "true" : "false");

    if (payload.from) {
      params = params.append("from", payload.from.toUTCString());
    }
    if (payload.companyIsin) {
      params = params.append("companyIsin", payload.companyIsin);
    }

    return this.http.get<NewsListResultModel>(`${this.adessoUrl}/News`, { params });
  }

  public getNewsDetail(id: string): Observable<NewsDetailModel> {
    this.logger.repositoryRequest("getNewsDetail", id);
    return this.http.get<NewsDetailModel>(`${this.adessoUrl}/News/${id}`);
  }
}
