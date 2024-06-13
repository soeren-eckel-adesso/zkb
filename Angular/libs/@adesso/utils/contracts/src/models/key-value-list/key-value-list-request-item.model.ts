import {KeyValueListOptionEnum} from "../../enums/key-value-list-option.enum";

export class KeyValueListRequestItemModel {
  option: KeyValueListOptionEnum;
  translation?: string;
  defaultValue?: string;
}
