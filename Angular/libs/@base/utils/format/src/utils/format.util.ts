import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { AssetClassEnum } from "@adesso/util-contracts";

@Injectable({
  providedIn: "root",
})
export class FormatUtil {
  private largeNumberFormats = [
    { value: 1e9, term: "billions" },
    { value: 1e6, term: "millions" },
  ];

  constructor(private translate: TranslateService) {}

  public formatNumber(
    input?: number,
    suffix?: string,
    omitEmptyDecimalPlaces?: boolean,
    ignoreLargeNumbers?: boolean,
    decimals?: number,
    assetClass?: AssetClassEnum
  ): string {
    if (decimals === undefined) {
      decimals = 2;
      if (assetClass) {
        switch (assetClass) {
          case AssetClassEnum.exchangeRate:
            decimals = 4;
            break;
          case AssetClassEnum.index:
            decimals = 0;
            break;
        }
      }
    }

    const maxDecimalPlaces = decimals;
    const minDecimalPlaces = omitEmptyDecimalPlaces ? 0 : decimals;

    if (input === undefined || isNaN(input)) {
      return "";
    }

    if (suffix === undefined) {
      suffix = "";
    }

    if (!ignoreLargeNumbers) {
      this.largeNumberFormats.forEach((item: { value: number; term: string }) => {
        if (input && input >= item.value) {
          suffix = this.translate.instant(item.term);
          input /= item.value;
          return "";
        }
      });
    }

    const formatted = Intl.NumberFormat(this.translate.currentLang, {
      minimumFractionDigits: minDecimalPlaces,
      maximumFractionDigits: maxDecimalPlaces,
    }).format(input);

    return `${formatted} ${suffix}`.trim();
  }

  public toFixed(n, prec) {
    // fix for IE parseFloat(0.55).toFixed(0) = 0;
    const k = Math.pow(10, prec);
    return Math.round(n * k) / k;
  }

  public asPercentage(input: number | undefined): string {
    if (input === undefined) {
      return "";
    }
    return (input >= 0 ? "+" : "") + this.formatNumber(input, "%", false, true, 2);
  }

  public asChangeAbsolute(input: number | undefined, suffix?: string) {
    if (input === undefined) {
      return "";
    }
    return (input >= 0 ? "+" : "") + this.formatNumber(input, suffix, false, true, 2);
  }

  public dateToDateOrTime(input: Date | undefined): string {
    if (input === undefined) {
      return "";
    }
    let result = "";
    if (this.formatDateToString(input, "DD.MM.YYYY") === this.formatDateToString(new Date(), "DD.MM.YYYY")) {
      result = this.dateToTime(input);
    } else {
      result = this.dateToDate(input);
    }
    return result;
  }

  public dateToDateAndTime(input: Date | undefined): string {
    if (input === undefined) {
      return "";
    }
    return this.dateToTime(input) + " " + this.dateToTime(input);
  }

  public dateToTime(input: Date | undefined): string {
    if (input === undefined) {
      return "";
    }
    let result: string;
    const format = this.translate.instant("timeFormat");
    // Time
    if (format) {
      result = this.formatDateToString(input, format);
    } else {
      result = input.toLocaleTimeString(this.translate.currentLang, { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    }
    return result;
  }

  public dateToDate(input: Date | undefined): string {
    if (input === undefined) {
      return "";
    }
    let result: string;
    // Date
    const format = this.translate.instant("dateFormat");
    if (format) {
      result = this.formatDateToString(input, format);
    } else {
      result = input.toLocaleDateString(this.translate.currentLang, { year: "numeric", month: "2-digit", day: "2-digit" });
    }
    return result;
  }

  private formatDateToString(date: Date | undefined, format: string): string {
    if (date === undefined) {
      return "";
    }
    return format
      .replace("DD", this.formatToDigitDate(date.getDate().toString()))
      .replace("MM", this.formatToDigitDate((date.getMonth() + 1).toString()))
      .replace("YYYY", date.getFullYear().toString())
      .replace("YY", date.getFullYear().toString().substr(2, 2))
      .replace("HH", this.formatToDigitDate(date.getHours().toString()))
      .replace("hh", this.formatToDigitDate(date.getHours().toString()))
      .replace("mm", this.formatToDigitDate(date.getMinutes().toString()))
      .replace("ss", this.formatToDigitDate(date.getSeconds().toString()));
  }

  private formatToDigitDate(value: string): string {
    if (value.length === 1) {
      return "0" + value;
    }
    return value;
  }
}
