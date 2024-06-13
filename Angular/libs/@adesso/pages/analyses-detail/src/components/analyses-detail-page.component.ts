import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";
import { ActivationEnd, NavigationEnd, Router } from "@angular/router";
import { AnalyseDetailViewModel } from "@adesso/ui-analyses-detail";
import { AnalysesService } from "@adesso/service-analyses";

@Component({
  selector: "page-analyses-detail",
  templateUrl: "./analyses-detail-page.component.html",
  styleUrls: ["./analyses-detail-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalysesDetailPageComponent implements OnDestroy {
  public analyse$ = new BehaviorSubject<AnalyseDetailViewModel | undefined>(undefined);
  private lastAnalyseId?: string;
  private routerSubscription: Subscription;

  constructor(private analysesService: AnalysesService, router: Router) {
    this.routerSubscription = router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof ActivationEnd) {
        this.lastAnalyseId = routerEvent.snapshot.params.analyseId;
        this.analyse$.next(undefined);
      }
      if (routerEvent instanceof NavigationEnd && this.lastAnalyseId) {
        this.analysesService.getAnalysesDetail(this.lastAnalyseId).subscribe((x) => {
          this.analyse$.next(x);
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
