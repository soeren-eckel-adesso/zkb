export class NewsListPayloadModel {
  top: number;
  skip: number;
  isDescendingOrder: boolean;
  from?: Date;
  companyIsin?: string;
}
