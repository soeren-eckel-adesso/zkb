import { InstrumentMasterDataModel } from "./base/instrument-master-data.model";
import { YearValueModel } from "./year-value/year-value.model";
import { FundDataModel } from "./fund-data/fund-data.model";
import { InstrumentListingModel } from "./instrument-listing.model";
import { CompanyModel } from "./company/company.model";
import { CompositionModel } from "./composition/composition.model";

export class InstrumentDetailViewModel {
	base?: InstrumentMasterDataModel;
	company?: CompanyModel;
	domicile?: string;
	fundData?: FundDataModel;
	yearValues?: YearValueModel[];
	listings?: InstrumentListingModel[];
	morningStarRating?: number;
	compositions?: CompositionModel[];
	shareSector?: string;
	derivativeData?: any;
}
