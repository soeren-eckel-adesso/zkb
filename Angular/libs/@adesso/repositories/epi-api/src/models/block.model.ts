import {BlockTypeEnum} from "../enums/block-type.enum";
import {BlockKeyValueListModel} from "./block-key-value-list.model";

export class BlockModel {
  blockType: BlockTypeEnum;
  keyValueList: BlockKeyValueListModel;
}
