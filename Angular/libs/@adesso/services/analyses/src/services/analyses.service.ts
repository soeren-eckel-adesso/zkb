import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AnalysesListItemModel } from "@adesso/ui-analyses-list";
import { map } from "rxjs/operators";
import { AnalyseDetailViewModel } from "@adesso/ui-analyses-detail";
import { ValueFormatterConverter } from "@base/util-format";
import { AnalysesRepository } from "@stroeer/repository-analyses";
import { AnalysisSearchFilterModel } from "../models/analysis-search-filter.model";

@Injectable({
  providedIn: "root",
})
export class AnalysesService {
  private valueFormatterConverter: ValueFormatterConverter = new ValueFormatterConverter();

  constructor(private analysesRepository: AnalysesRepository) {}

  getAnalysesList(payload: AnalysisSearchFilterModel): Observable<AnalysesListItemModel[]> {
    return this.analysesRepository.getAnalysesList(payload).pipe(map((result) => result.results));
  }

  getAnalysesDetail(analyseId: string): Observable<AnalyseDetailViewModel | undefined> {
    return this.analysesRepository.getAnalysesDetail(analyseId).pipe(
      map((result) => ({
        id: result.id,
        date: result.date,
        body: result.body.split("\n"),
        headline: result.headline,
        companyIsin: result.companyIsin,
        keyValues: [
          {
            name: "analystName",
            value: this.valueFormatterConverter.convertString(result.analystName),
          },
          {
            name: "instituteName",
            value: this.valueFormatterConverter.convertString(result.instituteName),
          },
          {
            name: "priceTarget",
            value: this.valueFormatterConverter.convertNumber(result.priceTarget),
          },
          {
            name: "priceCurrency",
            value: this.valueFormatterConverter.convertString(result.priceCurrency),
          },
          {
            name: "timeFrameInMonth",
            value: this.valueFormatterConverter.convertString(result.timeFrameInMonth + " Month"),
          },
          {
            name: "recommendation",
            value: this.valueFormatterConverter.convertString(result.recommendation),
          },
          {
            name: "recommendationSource",
            value: this.valueFormatterConverter.convertString(result.recommendationSource),
          },
        ],
      }))
    );
  }
}
