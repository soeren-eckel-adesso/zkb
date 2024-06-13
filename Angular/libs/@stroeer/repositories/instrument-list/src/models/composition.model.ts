import {CompositionInterface, CompositionTypeEnum} from "@adesso/util-contracts";
import {CompositionItemModel} from "./composition.item.model";

export class CompositionModel implements CompositionInterface {
  type: CompositionTypeEnum;
  items: CompositionItemModel[];
}
