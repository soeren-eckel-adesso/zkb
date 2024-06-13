import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { TranslationCultureModel } from "../models/translation.culture.model";
import { TranslationModel } from "../models/translation.model";

@Injectable({
  providedIn: "root",
})
export class TranslationManagerUtil {
  private allTranslations: TranslationCultureModel[];

  constructor(public translateService: TranslateService) {
    this.allTranslations = [];
    this.allTranslations.push({
      culture: "de-DE",
      cultureProp: "deDe",
      translation: {},
    });
    this.allTranslations.push({
      culture: "en-US",
      cultureProp: "enUs",
      translation: {},
    });
  }

  public importTranslations(translations: TranslationModel[]) {
    this.allTranslations.forEach((translationCulture) => {
      this.expandTranslations(
        translationCulture.culture,
        translationCulture.cultureProp,
        translations
      );
    });
  }

  private expandTranslations(
    culture: string,
    cultureProp: string,
    translations: TranslationModel[]
  ) {
    const cultureTranslations = this.allTranslations.find(
      (x) => x.culture === culture
    );
    if (!cultureTranslations) {
      return;
    }

    translations.forEach((translation) => {
      if (
        !cultureTranslations.translation[translation.term] &&
        translation[cultureProp]
      ) {
        cultureTranslations.translation[translation.term] =
          translation[cultureProp];
      }
    });

    this.translateService.setTranslation(
      culture,
      cultureTranslations.translation,
      true
    );
  }
}
