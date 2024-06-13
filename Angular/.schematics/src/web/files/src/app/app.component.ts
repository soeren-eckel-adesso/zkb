import {Component} from "@angular/core";
import {ActivationEnd, Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {TranslationManagerService} from "@base/util-translation-manager";
import {translationConfig} from "../translations/config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(
    translationManager: TranslationManagerService,
    private translationService: TranslateService,
    router: Router
  ) {
    translationManager.importTranslations(translationConfig);

    router.events.subscribe(event => {
      if (event instanceof ActivationEnd) {
        if (event.snapshot.data.culture) {
          this.switchTranslation(event.snapshot.data.culture);
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
