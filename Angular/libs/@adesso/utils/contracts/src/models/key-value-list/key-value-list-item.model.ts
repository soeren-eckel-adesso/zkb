import {ValueFormatterItemModel} from "../value-formatter/value-formatter-item.model";
import {StarFormatterItemModel} from "../value-formatter/star-formatter-item.model";

export class KeyValueListItemModel {
  name: string;
  value: ValueFormatterItemModel | StarFormatterItemModel;
}
