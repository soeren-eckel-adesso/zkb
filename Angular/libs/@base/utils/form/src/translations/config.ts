import { TranslationModel } from "@base/util-translation-manager";

export const translationConfig: TranslationModel[] = [
  { term: "error-required", deDe: "{{name}} ist ein Pflichtfeld.", enUs: "" },
  { term: "error-email", deDe: "{{name}} ist keine gültige E-Mail Adresse." },
  { term: "error-pattern", deDe: "{{name}} hat kein gültiges Format." },
  { term: "error-minlength", deDe: "{{name}} muss mindestens {{length}} lang sein." },
  { term: "error-oneOrMoreNumbers", deDe: "{{name}} muss mindestens eine Zahl enthalten." },
  { term: "error-oneOrMoreUppercaseLetter", deDe: "{{name}} muss mindestens ein Großbuchstaben enthalten." },
  { term: "error-oneOrMoreLowercaseLetter", deDe: "{{name}} muss mindestens ein Kleinbuchstaben enthalten." },
  { term: "error-oneOrMoreSpecialCharacter", deDe: "{{name}} muss mindestens ein Sonderzeichen enthalten." },
];
