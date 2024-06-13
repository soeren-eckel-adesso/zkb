import { Component } from "@angular/core";
import { ActivationEnd, NavigationEnd, Router } from "@angular/router";
import { TranslationManagerUtil } from "@base/util-translation-manager";
import { TranslateService } from "@ngx-translate/core";
import { EnvironmentService } from "@adesso/util-environment";
import { translationConfig } from "../translations/config";
import { environment } from "../environments/environment";

declare const gtag;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(
    translationManager: TranslationManagerUtil,
    private translationService: TranslateService,
    router: Router,
    environmentService: EnvironmentService
  ) {
    translationManager.importTranslations(translationConfig);

    router.events.subscribe((event) => {
      if (event instanceof ActivationEnd) {
        if (event.snapshot.data.culture) {
          this.switchTranslation(event.snapshot.data.culture);
        }
      }
      if (event instanceof NavigationEnd) {
        if (environment.production && environmentService.isBrowserRendering) {
          gtag("config", "G-GGQ91JW8ZL", {
            // eslint-disable-next-line camelcase
            page_path: event.urlAfterRedirects,
          });
        }
      }
    });
  }

  switchTranslation(culture: string) {
    if (culture === this.translationService.currentLang) {
      return;
    }

    this.translationService.use(culture);
  }
}
