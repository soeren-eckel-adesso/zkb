import { KeyValueListItemModel } from "@adesso/util-contracts";

export class AnalyseDetailViewModel {
  id: string;
  body?: string[];
  date: Date;
  headline: string;
  companyIsin?: string;
  keyValues: KeyValueListItemModel[];
}
