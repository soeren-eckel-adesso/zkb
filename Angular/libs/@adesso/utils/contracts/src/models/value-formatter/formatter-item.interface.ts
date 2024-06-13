import {KeyValueTypeEnum} from "../../enums/key-value-type.enum";

export interface FormatterItemInterface {
  type: KeyValueTypeEnum;
  hasValue: boolean;
}
