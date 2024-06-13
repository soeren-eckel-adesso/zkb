import { Injectable } from "@angular/core";
import { AssetClassEnum, InstrumentResultDataFieldsEnum, UiInstrumentListTypeEnum } from "@adesso/util-contracts";
import { Observable } from "rxjs";
import { BestQuoteService } from "@adesso/service-best-quote";
import {
  BasicInstrumentTableInterface,
  InstrumentListViewModel,
  OrderInstrumentTableInterface,
  PerformanceInstrumentTableInterface,
} from "@adesso/ui-instrument-list";
import { map } from "rxjs/operators";
import { CalculationService } from "@adesso/service-calculation";
import { LoggerUtil } from "@base/util-logger";
import { InstrumentTableResult } from "../models/instrument-table-result";
import { InstrumentListRepository } from "@stroeer/repository-instrument-list";
import { InstrumentSearchPayloadModel } from "@stroeer/repository-instrument-list";
import { TopFlopPayloadModel } from "@stroeer/repository-instrument-list";
import { InstrumentListItemModel } from "@stroeer/repository-instrument-list";

@Injectable({
  providedIn: "root",
})
export class InstrumentListService {
  private defaultDataFields: InstrumentResultDataFieldsEnum[] = [
    InstrumentResultDataFieldsEnum.name,
    InstrumentResultDataFieldsEnum.isin,
    InstrumentResultDataFieldsEnum.valor,
    InstrumentResultDataFieldsEnum.assetClass,
  ];

  constructor(
    public instrumentListRepository: InstrumentListRepository,
    public bestQuoteService: BestQuoteService,
    private calculationService: CalculationService,
    logger: LoggerUtil
  ) {
    logger.serviceConstructor("InstrumentListService");
  }

  public getInstrumentTable(instrumentIds: string[], tableType: UiInstrumentListTypeEnum): Observable<InstrumentTableResult> {
    const dataFields: InstrumentResultDataFieldsEnum[] = this.defaultDataFields;
    this.appendDataFieldsByTableType(dataFields, tableType);

    return this.instrumentListRepository.getInstruments(instrumentIds, dataFields).pipe(
      map((requestResult) => {
        const instrumentTableResult: InstrumentTableResult = {
          resultCount: requestResult?.resultCount,
          tableType,
          result: [],
        };

        instrumentIds.forEach((instrumentId) => {
          const instrument = requestResult.results.find((x) => x.valor === +instrumentId || x.isin === instrumentId);
          if (instrument) {
            instrumentTableResult.result = this.addInstrumentToTable(instrumentTableResult.result, instrument, tableType);
          }
        });

        return instrumentTableResult;
      })
    );
  }

  public getConstituents(
    instrumentId: string,
    top: number,
    skip: number,
    tableType: UiInstrumentListTypeEnum
  ): Observable<InstrumentTableResult> {
    const dataFields: InstrumentResultDataFieldsEnum[] = this.defaultDataFields;
    this.appendDataFieldsByTableType(dataFields, tableType);

    return this.instrumentListRepository.getConstituents(instrumentId, top, skip, dataFields).pipe(
      map((requestResult) => {
        const instrumentTableResult: InstrumentTableResult = {
          resultCount: requestResult.resultCount,
          tableType,
          result: [],
        };

        requestResult.results.forEach((instrument) => {
          instrumentTableResult.result = this.addInstrumentToTable(instrumentTableResult.result, instrument, tableType);
        });

        return instrumentTableResult;
      })
    );
  }

  public searchInstrument(payload: InstrumentSearchPayloadModel, tableType: UiInstrumentListTypeEnum): Observable<InstrumentTableResult> {
    const dataFields: InstrumentResultDataFieldsEnum[] = this.defaultDataFields;
    this.appendDataFieldsByTableType(dataFields, tableType);

    return this.instrumentListRepository.searchInstrument(payload, dataFields).pipe(
      map((requestResult) => {
        const instrumentTableResult: InstrumentTableResult = {
          resultCount: requestResult?.resultCount,
          tableType,
          result: [],
        };

        requestResult.results.forEach((instrument) => {
          instrumentTableResult.result = this.addInstrumentToTable(instrumentTableResult.result, instrument, tableType);
        });

        return instrumentTableResult;
      })
    );
  }

  public getTopFlop(payload: TopFlopPayloadModel, tableType: UiInstrumentListTypeEnum): Observable<InstrumentTableResult> {
    const dataFields: InstrumentResultDataFieldsEnum[] = this.defaultDataFields;
    this.appendDataFieldsByTableType(dataFields, tableType);

    return this.instrumentListRepository.getTopFlop(payload, dataFields).pipe(
      map((requestResult) => {
        const instrumentTableResult: InstrumentTableResult = {
          resultCount: requestResult?.resultCount,
          tableType,
          result: [],
        };

        requestResult.results.forEach((instrument) => {
          instrumentTableResult.result = this.addInstrumentToTable(instrumentTableResult.result, instrument, tableType);
        });

        return instrumentTableResult;
      })
    );
  }

  private addInstrumentToTable(
    result: InstrumentListViewModel[],
    instrument: InstrumentListItemModel,
    tableType: UiInstrumentListTypeEnum
  ): InstrumentListViewModel[] {
    let item: BasicInstrumentTableInterface | undefined;
    switch (tableType) {
      case UiInstrumentListTypeEnum.basic:
        item = this.mapInstrumentToBasicTable(instrument);
        break;
      case UiInstrumentListTypeEnum.performance:
        item = this.mapInstrumentToPerformanceTable(instrument);
        break;
      case UiInstrumentListTypeEnum.performanceOneYear:
        item = this.mapInstrumentToPerformanceOneYearTable(instrument);
        break;
      case UiInstrumentListTypeEnum.order:
        item = this.mapInstrumentToOrderTable(instrument);
        break;
    }
    if (item) {
      result.push(item);
    }
    return result;
  }
  private appendDataFieldsByTableType(dataFields: InstrumentResultDataFieldsEnum[], tableType: UiInstrumentListTypeEnum) {
    switch (tableType) {
      case UiInstrumentListTypeEnum.basic:
        dataFields.push(
          InstrumentResultDataFieldsEnum.wkn,
          InstrumentResultDataFieldsEnum.last,
          InstrumentResultDataFieldsEnum.bid,
          InstrumentResultDataFieldsEnum.ask,
          InstrumentResultDataFieldsEnum.valuation,
          InstrumentResultDataFieldsEnum.nav,
          InstrumentResultDataFieldsEnum.currencyCode
        );
        break;
      case UiInstrumentListTypeEnum.order:
        dataFields.push(
          InstrumentResultDataFieldsEnum.bid,
          InstrumentResultDataFieldsEnum.ask,
          InstrumentResultDataFieldsEnum.currencyCode
        );
        break;
      case UiInstrumentListTypeEnum.performance:
        dataFields.push(
          InstrumentResultDataFieldsEnum.last,
          InstrumentResultDataFieldsEnum.bid,
          InstrumentResultDataFieldsEnum.ask,
          InstrumentResultDataFieldsEnum.valuation,
          InstrumentResultDataFieldsEnum.nav,
          InstrumentResultDataFieldsEnum.currencyCode
        );
        break;
      case UiInstrumentListTypeEnum.performanceOneYear:
        dataFields.push(
          InstrumentResultDataFieldsEnum.last,
          InstrumentResultDataFieldsEnum.bid,
          InstrumentResultDataFieldsEnum.ask,
          InstrumentResultDataFieldsEnum.valuation,
          InstrumentResultDataFieldsEnum.nav,
          InstrumentResultDataFieldsEnum.currencyCode,
          InstrumentResultDataFieldsEnum.changeOneYearPercent
        );
        break;
    }
  }

  private mapInstrumentToBasicTable(instrument: InstrumentListItemModel): BasicInstrumentTableInterface | undefined {
    if (instrument && instrument.name && instrument.assetClass && instrument.valor) {
      const bestQuote = this.bestQuoteService.getBestQuote(instrument);

      return {
        assetClass: instrument.assetClass,
        name: instrument.name,
        currencyCode: instrument.currencyCode,
        isin: instrument.isin,
        quote: bestQuote?.quote,
        close: bestQuote?.close,
        quoteDate: bestQuote?.quoteDate,
        valor: instrument.valor,
        wkn: instrument.wkn,
      } as BasicInstrumentTableInterface;
    }
    return undefined;
  }

  private mapInstrumentToOrderTable(instrument: InstrumentListItemModel): OrderInstrumentTableInterface | undefined {
    if (instrument && instrument.name && instrument.assetClass && instrument.valor) {
      return {
        assetClass: instrument.assetClass,
        name: instrument.name,
        currencyCode: instrument.assetClass === AssetClassEnum.index ? "" : instrument.currencyCode,
        isin: instrument.isin,
        bid: instrument.bid?.quote,
        bidClose: instrument.bid?.close,
        ask: instrument.ask?.quote,
        askClose: instrument.ask?.close,
        orders: this.getRandomInt(500) + 1800,
        chartImageId: this.getRandomInt(5),
        changePercent: instrument.bid?.changePercent,
        valor: instrument.valor,
      } as OrderInstrumentTableInterface;
    }
    return undefined;
  }

  private mapInstrumentToPerformanceTable(instrument: InstrumentListItemModel): BasicInstrumentTableInterface | undefined {
    if (instrument && instrument.name && instrument.assetClass && instrument.valor) {
      const bestQuote = this.bestQuoteService.getBestQuote(instrument);

      return {
        assetClass: instrument.assetClass,
        name: instrument.name,
        currencyCode: instrument.assetClass === AssetClassEnum.index ? "" : instrument.currencyCode,
        isin: instrument.isin,
        quote: bestQuote?.quote,
        close: bestQuote?.close,
        quoteDate: bestQuote?.quoteDate,
        valor: instrument.valor,
        changePercent: bestQuote?.changePercent,
        changeAbsolute: bestQuote?.changeAbsolute,
      } as PerformanceInstrumentTableInterface;
    }
    return undefined;
  }

  private mapInstrumentToPerformanceOneYearTable(instrument: InstrumentListItemModel): BasicInstrumentTableInterface | undefined {
    if (instrument && instrument.name && instrument.assetClass && instrument.valor) {
      const bestQuote = this.bestQuoteService.getBestQuote(instrument);

      const performance = this.calculationService.calculatePerformanceByCurrentValueAndChangePercent(
        bestQuote?.quote,
        instrument.changeOneYearPercent
      );

      return {
        assetClass: instrument.assetClass,
        name: instrument.name,
        currencyCode: instrument.assetClass === AssetClassEnum.index ? "" : instrument.currencyCode,
        isin: instrument.isin,
        quote: bestQuote?.quote,
        close: bestQuote?.close,
        quoteDate: bestQuote?.quoteDate,
        valor: instrument.valor,
        changePercent: instrument.changeOneYearPercent,
        changeAbsolute: performance?.changeAbsolute,
      } as PerformanceInstrumentTableInterface;
    }
    return undefined;
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
