import { AssetClassEnum } from "@adesso/util-contracts";
import { BasicInstrumentTableInterface } from "../components/basic-table/interfaces/basic-instrument-table.interface";
// eslint-disable-next-line max-len
import { PerformanceInstrumentTableInterface } from "../components/performance-table/interfaces/performance-instrument-table.interface";
import { OrderInstrumentTableInterface } from "../components/order-table/interfaces/order-instrument-table.interface";

export class InstrumentListViewModel
  implements BasicInstrumentTableInterface, PerformanceInstrumentTableInterface, OrderInstrumentTableInterface {
  assetClass: AssetClassEnum;
  name: string;
  valor: number;
  currencyCode?: string;
  isin?: string;
  quote?: number;
  quoteDate?: Date;
  wkn?: string;
  changePercent?: number;
  changeAbsolute?: number;
  bid?: number;
  bidClose?: number;
  ask?: number;
  askClose?: number;
  orders?: number;
  chartImageId?: number;
}
