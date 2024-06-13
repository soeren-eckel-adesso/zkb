import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { PageTypeEnum } from "@adesso/util-contracts";

@Component({
  selector: "page-not-found-redirect",
  templateUrl: "./not-found-redirect-page.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundRedirectPageComponent {
  constructor(router: Router, translationService: TranslateService) {
    router.navigate([translationService.instant(PageTypeEnum.notFoundPage)]);
  }
}
