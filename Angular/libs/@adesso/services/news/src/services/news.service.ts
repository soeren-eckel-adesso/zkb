import { Injectable } from "@angular/core";
import { NewsListItemModel } from "@adesso/ui-news-list";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { NewsListFilterModel } from "../models/news-list-filter.model";
import { NewsDetailModel } from "../models/news-detail.model";
import { NewsRepository } from "@stroeer/repository-news";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  constructor(private newsRepository: NewsRepository) {}

  getNewsList(filter: NewsListFilterModel): Observable<NewsListItemModel[]> {
    return this.newsRepository.getNewsList(filter).pipe(map((result) => result.results));
  }

  getNewsDetail(newsId: string): Observable<NewsDetailModel> {
    return this.newsRepository.getNewsDetail(newsId).pipe(
      map((news) => {
        const isins = news.instruments?.map((instrument) => instrument.isin);
        const result = {
          news: {
            headline: news.headline,
            body: news.body.split("\n"),
            date: news.date,
            id: news.id,
          },
          instrumentIsins: isins,
        } as NewsDetailModel;
        return result;
      })
    );
  }
}
