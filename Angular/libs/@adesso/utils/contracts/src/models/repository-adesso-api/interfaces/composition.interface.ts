import {CompositionTypeEnum} from "../../../enums/composition-type.enum";
import {CompositionItemInterface} from "./composition-item.interface";

export class CompositionInterface {
  type: CompositionTypeEnum;
  items: CompositionItemInterface[];
}
