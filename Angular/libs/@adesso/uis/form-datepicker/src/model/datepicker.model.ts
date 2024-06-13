import { MonthListEnum } from "../enums/month-list.enum";

export class DatepickerModel {
  public daysList: Array<Date>;
  public selectedMonth: MonthListEnum;
  public selectedYear: number;
}
