import {InstrumentListViewModel} from "@adesso/ui-instrument-list";
import {UiInstrumentListTypeEnum} from "@adesso/util-contracts";

export class InstrumentTableResult {
  resultCount?: number;
  tableType: UiInstrumentListTypeEnum;
  result: InstrumentListViewModel[];
}
