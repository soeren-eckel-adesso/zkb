import {SortableFieldEnum} from "@adesso/util-contracts";
import {AssetClassEnum} from "@adesso/util-contracts";
import {FundTypeClassEnum} from "@adesso/util-contracts";
import {FundTypeFocusEnum} from "@adesso/util-contracts";

export class InstrumentSearchPayloadModel {
  top: number;
  skip: number;
  orderBy: SortableFieldEnum;
  isDescendingOrder: boolean;
  searchTerm?: string;
  assetClasses?: AssetClassEnum;
  instrumentType?: string;
  currencyId?: number;
  exchangeId?: number;
  domicile?: number;
  industrialSector?: number;
  capitalManagementCompany?: string;
  fundTypeClass?: FundTypeClassEnum;
  fundTypeFocus?: FundTypeFocusEnum;
  fundCurrencyIsoCode?: string;
  morningStarRatingFrom?: number;
  morningStarRatingTo?: number;
}
