import { PageTypeEnum } from "@adesso/util-contracts";
import { TranslationModel } from "@base/util-translation-manager";

export const translationConfig: TranslationModel[] = [
  {
    term: PageTypeEnum.notFoundPage,
    deDe: "/seite-nicht-gefunden",
    enUs: "/page-note-found",
  },

  { term: "no-data", deDe: "Keine Daten vorhanden", enUs: "No data available" },
];
