import {SortableFieldTopFlopEnum} from "@adesso/util-contracts";
import {TopFlopIndexEnum} from "@adesso/util-contracts";

export class TopFlopPayloadModel {
  top: number;
  skip: number;
  topFlopIndex: TopFlopIndexEnum;
  orderBy: SortableFieldTopFlopEnum;
  isDescendingOrder: boolean;
}
