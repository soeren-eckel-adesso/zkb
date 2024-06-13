import { KeyValueTypeEnum, StarFormatterItemModel, ValueFormatterItemModel } from "@adesso/util-contracts";

export class ValueFormatterConverter {
  public convertNumberPercent(valueNumber?: number, digits: number = 2): ValueFormatterItemModel {
    return this.convertNumber(valueNumber, digits, "%");
  }

  public convertNumber(valueNumber?: number, digits?: number, suffix?: string): ValueFormatterItemModel {
    const hasValue = !!valueNumber;
    return {
      valueNumber,
      digits,
      suffix,
      type: KeyValueTypeEnum.valueFormatterItem,
      hasValue,
    };
  }

  public convertDateTime(valueDate?: Date): ValueFormatterItemModel {
    return {
      valueDate,
      type: KeyValueTypeEnum.valueFormatterItem,
      hasValue: !!valueDate,
    };
  }

  public convertString(valueString?: string): ValueFormatterItemModel {
    return {
      valueString,
      type: KeyValueTypeEnum.valueFormatterItem,
      hasValue: valueString && valueString !== "" ? true : false,
    };
  }

  public convertStar(morningStarRating?: number): StarFormatterItemModel {
    const item = new StarFormatterItemModel({
      value: morningStarRating,
      maxStars: 5,
      hasValue: morningStarRating !== undefined,
    });

    return item;
  }
}
