import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EpiUrlResultModel } from "../models/epi-url-result.model";

@Injectable({
  providedIn: "root",
})
export class EpiApiRepository {
  private epiUrl = "http://localhost:51665";
  private angularUrl = this.epiUrl + "/api/Angular/GetPageData.json?url={url}";

  constructor(private http: HttpClient) {}

  public getUrlConfig(url: string): Observable<EpiUrlResultModel> {
    return this.http.get<EpiUrlResultModel>(this.angularUrl.replace("{url}", url));
  }
}
