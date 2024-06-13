import { Injectable } from "@angular/core";
import { LoggerUtil } from "@base/util-logger";
import { Observable } from "rxjs";
import { SuggestSearchResultModel } from "../models/suggest-search-result.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SuggestSearchRepository {
  private adessoUrl = "https://tonline-api.sh01.de/stroeer/adesso_api/1.0.0";

  constructor(private http: HttpClient, private logger: LoggerUtil) {
    logger.repositoryConstructor("SuggestSearchRepository");
  }

  public suggestSearch(term: string): Observable<SuggestSearchResultModel> {
    this.logger.repositoryRequest("suggestSearch", term);
    return this.http.get<SuggestSearchResultModel>(`${this.adessoUrl}/suggestsearch?top=4&searchterm=${term}`);
  }
}
