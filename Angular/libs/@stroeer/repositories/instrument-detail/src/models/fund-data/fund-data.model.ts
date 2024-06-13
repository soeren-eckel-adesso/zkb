import {EtfFundDataInterface} from "@adesso/util-contracts";

export class FundDataModel implements EtfFundDataInterface {
  benchmark?: string;
  currencyIsoCode?: string;
  flatrateFee?: number;
  isDistributing?: boolean;
  isSaveplanPossible?: boolean;
  planAssetsInEUR?: number;
  strategy?: string;
  typeClass?: string;
  typeFocus?: string;
  etfReplicationType?: string;
}
