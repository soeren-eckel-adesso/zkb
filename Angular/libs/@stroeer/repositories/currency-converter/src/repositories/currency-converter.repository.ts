import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ExchangeRatesModel } from "../models/exchange-rate.model";

@Injectable({
  providedIn: "root",
})
export class CurrencyConverterRepository {
  private adessoUrl = "https://tonline-api.sh01.de/stroeer/adesso_api/1.0.0";

  constructor(private http: HttpClient) {}

  public getExchangeRate(one: string, tow: string): Observable<ExchangeRatesModel> {
    return this.http.get<ExchangeRatesModel>(this.adessoUrl + "/ExchangeRates/" + one + "/" + tow);
  }
}
