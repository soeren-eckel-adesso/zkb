import { ChangeDetectionStrategy, Component, ElementRef, HostListener } from "@angular/core";
import { ActivationEnd, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { filter } from "rxjs/operators";

import { CulturesEnum, PageTypeEnum } from "@adesso/util-contracts";
import { UiContextMenuListModel } from "@adesso/ui-context-menu-list";
import { LoggerUtil } from "@base/util-logger";

@Component({
  selector: "feature-header",
  templateUrl: "./header-feature.component.html",
  styleUrls: ["./header-feature.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("openClose", [
      state(
        "open",
        style({
          height: "410px",
        })
      ),
      state(
        "closed",
        style({
          height: "0",
        })
      ),
      transition("open => closed", [animate("0.2s")]),
      transition("closed => open", [animate("0.4s")]),
    ]),
  ],
})
export class HeaderFeatureComponent {
  public isMenuOpen = false;
  public isNavigationOpen = false;
  public currentCulture: string = CulturesEnum.deDe;
  public contextMenuItems: UiContextMenuListModel[];
  public routeTranslationTerm: string;
  public lastParams: string;

  constructor(private router: Router, public translate: TranslateService, private elementRef: ElementRef, public logger: LoggerUtil) {
    this.setupContextMenu();
    router.events.pipe(filter((event: any) => event instanceof ActivationEnd)).subscribe((routerEvent) => {
      this.currentCulture = routerEvent.snapshot.data.culture;
      this.routeTranslationTerm = routerEvent.snapshot.data.translationTerm;
      this.lastParams = routerEvent.snapshot.params;
      this.setupContextMenu();
    });
  }

  @HostListener("document:click", ["$event"])
  clickout(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
      this.isNavigationOpen = false;
    }
  }

  setupContextMenu() {
    this.contextMenuItems = [
      {
        label: this.translate.instant("header-context-menu-quotes-and-markets"),
        items: [
          {
            label: this.translate.instant("header-context-menu-indices"),
            url: this.translate.instant(PageTypeEnum.indexOverviewPage),
          },
          {
            label: this.translate.instant("header-context-menu-shares"),
            url: this.translate.instant(PageTypeEnum.shareOverviewPage),
          },
          {
            label: this.translate.instant("header-context-menu-funds"),
            url: this.translate.instant(PageTypeEnum.fundOverviewPage),
          },
          {
            label: this.translate.instant("header-context-menu-etf"),
            url: this.translate.instant(PageTypeEnum.etfOverviewPage),
          },
          {
            label: this.translate.instant("header-context-menu-commodities"),
            url: this.translate.instant(PageTypeEnum.commodityOverviewPage),
          },
          {
            label: this.translate.instant("header-context-menu-exchange-rates"),
            url: this.translate.instant(PageTypeEnum.exchangeRateOverviewPage),
          },
          {
            label: this.translate.instant("header-context-menu-derivatives"),
            url: this.translate.instant(PageTypeEnum.derivativeOverviewPage),
          },
        ],
      },
    ];
  }

  toggleNavigation() {
    this.isNavigationOpen = !this.isNavigationOpen;
    this.isMenuOpen = this.isNavigationOpen;
  }

  switchTranslation(culture: string) {
    if (culture === this.translate.currentLang) {
      return;
    }

    this.currentCulture = culture;
    this.translate.use(culture);

    let url = this.translate.instant(this.routeTranslationTerm);

    if (this.lastParams) {
      Object.keys(this.lastParams).forEach((key) => {
        url = url.replace("{{" + key + "}}", this.lastParams[key]);
      });
    }

    this.router.navigate([url]);
  }
}
