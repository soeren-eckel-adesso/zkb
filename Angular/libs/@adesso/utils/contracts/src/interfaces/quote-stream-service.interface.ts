// eslint-disable-next-line @typescript-eslint/no-empty-interface
import { Observable } from "rxjs";
import { SubscriptionItemModel } from "../models/quote-stream/subscription-item.model";
import { AssetClassEnum } from "../enums/asset-class.enum";
import { PushFieldEnum } from "../enums/push-field.enum";

export interface QuoteStreamServiceInterface {
  quoteUpdate$: Observable<SubscriptionItemModel>;
  addQuoteStreamItem(valor: number, assetClass?: AssetClassEnum);
  removeQuoteStreamItem(valor: number);
  filterEmptyValues(item: SubscriptionItemModel, pushField: PushFieldEnum);
}
