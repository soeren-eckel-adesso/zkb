import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { NewsService } from "@adesso/service-news";
import { ActivationEnd, NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject, Subscription } from "rxjs";
import { NewsDetailViewModel } from "@adesso/ui-news-detail";
import { InstrumentListService } from "@adesso/service-instrument-list";
import { UiInstrumentListTypeEnum } from "@adesso/util-contracts";
import { InstrumentListViewModel } from "@adesso/ui-instrument-list";

@Component({
  selector: "page-news-detail",
  templateUrl: "./news-detail-page.component.html",
  styleUrls: ["./news-detail-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsDetailPageComponent implements OnDestroy {
  public news$ = new BehaviorSubject<NewsDetailViewModel | undefined>(undefined);
  public instrumentIsins?: string[];
  public instrumentTableType = UiInstrumentListTypeEnum.order;
  public instruments$ = new BehaviorSubject<InstrumentListViewModel[]>([]);
  private lastNewsId?: string;
  private routerSubscription: Subscription;

  constructor(private newsService: NewsService, private instrumentListService: InstrumentListService, router: Router) {
    this.routerSubscription = router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof ActivationEnd) {
        this.lastNewsId = routerEvent.snapshot.params.newsId;
        this.news$.next(undefined);
        this.instruments$.next([]);
      }
      if (routerEvent instanceof NavigationEnd && this.lastNewsId) {
        this.newsService.getNewsDetail(this.lastNewsId).subscribe((x) => {
          this.news$.next(x.news);
          this.instrumentIsins = x.instrumentIsins;
          if (this.instrumentIsins) {
            this.instrumentListService.getInstrumentTable(this.instrumentIsins, this.instrumentTableType).subscribe((y) => {
              this.instruments$.next(y?.result);
            });
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
