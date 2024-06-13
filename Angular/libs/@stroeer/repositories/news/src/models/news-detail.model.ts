import {NewsInstrumentModel} from "./news-instrument.model";

export class NewsDetailModel {
  id: string;
  body: string;
  date: Date;
  headline: string;
  instruments?: NewsInstrumentModel[];
}
