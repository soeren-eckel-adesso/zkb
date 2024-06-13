import { KeyValueTypeEnum } from "../../enums/key-value-type.enum";
import { FormatterItemInterface } from "./formatter-item.interface";

export class StarFormatterItemModel implements FormatterItemInterface {
  value?: number;
  maxStars: number;
  hasValue: boolean;

  readonly type: KeyValueTypeEnum = KeyValueTypeEnum.starFormatterItem;

  constructor(init?: Partial<StarFormatterItemModel>) {
    Object.assign(this, init);
  }
}
