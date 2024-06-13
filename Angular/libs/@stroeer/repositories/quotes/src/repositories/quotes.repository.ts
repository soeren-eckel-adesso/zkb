import { Injectable } from "@angular/core";
import { LoggerUtil } from "@base/util-logger";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { QuoteResultModel } from "../models/quote-result.model";

@Injectable({
  providedIn: "root",
})
export class QuotesRepository {
  private adessoUrl = "https://tonline-api.sh01.de/stroeer/adesso_api/1.0.0";

  constructor(private http: HttpClient, private logger: LoggerUtil) {
    logger.repositoryConstructor("QuotesRepository");
  }

  public loadQuotes(triples: string[]): Observable<QuoteResultModel[]> {
    this.logger.repositoryRequest("loadQuotes", triples);
    let params = new HttpParams()
      .set("quoteResultDataFields", "Last")
      .set("quoteResultDataFields", "Bid")
      .set("quoteResultDataFields", "Ask")
      .set("quoteResultDataFields", "Valuation");

    triples.forEach((triple) => {
      params = params.append("triples", triple);
    });

    return this.http.get<QuoteResultModel[]>(`${this.adessoUrl}/Quotes`, { params });
  }
}
