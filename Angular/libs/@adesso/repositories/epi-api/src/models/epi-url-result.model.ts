import {PageTypeEnum} from "../enums/page-type.enum";
import {ContentAreaModel} from "./content-area.model";

export class EpiUrlResultModel {
  pageType: PageTypeEnum;
  culture: string;
  contentAreas: ContentAreaModel[];
}
