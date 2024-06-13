import { KeyValueTypeEnum } from "../../enums/key-value-type.enum";
import { FormatterItemInterface } from "./formatter-item.interface";

export class ValueFormatterItemModel implements FormatterItemInterface {
  public valueNumber?: number;
  public valueDate?: Date;
  public valueString?: string;
  public suffix?: string;
  public digits?: number;
  public hasValue: boolean;
  public maxStars?: number;
  public value?: number;
  public readonly type: KeyValueTypeEnum = KeyValueTypeEnum.valueFormatterItem;
}
