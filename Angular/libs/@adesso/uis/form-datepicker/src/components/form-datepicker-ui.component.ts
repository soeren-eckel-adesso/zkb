import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, ViewChild } from "@angular/core";
import { AbstractControl, FormControl } from "@angular/forms";
import { Observable, merge, BehaviorSubject } from "rxjs";
import { DatepickerModel } from "../model/datepicker.model";
import { map } from "rxjs/operators";
import { MonthListEnum } from "../enums/month-list.enum";
import { DayListEnum } from "../enums/day-list.enum";
import { CalenderViewEnum } from "../enums/calender-view.enum";

@Component({
  selector: "ui-form-datepicker",
  templateUrl: "./form-datepicker-ui.component.html",
  styleUrls: ["./form-datepicker-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDatepickerUiComponent {
  @Input() control: AbstractControl;
  @Input() maxYear: number = new Date().getFullYear();
  @Input() minYear: number = this.maxYear - 50;
  @Input() positionRight: boolean = false;

  @ViewChild("calender", { read: ElementRef, static: false })
  elementView: ElementRef;

  public selectedYear: FormControl = new FormControl();
  public selectedMonth: FormControl = new FormControl();
  public selectedDay: Date;
  public datepickerModel$: Observable<DatepickerModel>;
  public calenderView: CalenderViewEnum = CalenderViewEnum.Closed;
  public calenderViewEnum = CalenderViewEnum;
  public daysNameList = DayListEnum;
  public monthListEnum = MonthListEnum;
  public keys = Object.keys;
  public yearList: Array<number>;

  private initRequest$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  ngOnInit(): void {
    this.initCalender();
    this.datepickerModel$ = merge(this.initRequest$, this.selectedYear.valueChanges, this.selectedMonth.valueChanges).pipe(
      map(() => {
        const datepickerModel: DatepickerModel = new DatepickerModel();
        datepickerModel.daysList = this.getDaysInMonth(this.selectedMonth.value, this.selectedYear.value);
        datepickerModel.selectedMonth = this.selectedMonth.value;
        datepickerModel.selectedYear = this.selectedYear.value;
        return datepickerModel;
      })
    );
    this.yearList = this.generateArrayOfYears();
    this.initRequest$.next(true);
  }

  initCalender(): void {
    if (this.control?.value) {
      this.selectedYear.setValue(this.control.value.getFullYear());
      this.selectedMonth.setValue(this.control.value.getMonth());
      this.selectedDay = this.control.value;
    }
  }

  @HostListener("document:click", ["$event"])
  clickout(event) {
    if (!this.elementView.nativeElement.contains(event.target)) {
      this.calenderView = CalenderViewEnum.Closed;
    }
  }

  private generateArrayOfYears(): Array<number> {
    let years: Array<number> = [];
    for (let i = this.maxYear; i >= this.minYear; i--) {
      years.push(i);
    }
    return years;
  }

  private getDaysInMonth(month: number, year: number): Array<Date> {
    const date = new Date(year, month, 1);
    let days: Array<Date> = [];
    const day = new Date(date);
    day.setDate(day.getDate() - date.getUTCDay());
    for (let i = 0; i < 42; i++) {
      days.push(new Date(day));
      day.setDate(day.getDate() + 1);
    }
    return days;
  }

  yearChange(year: number): void {
    this.selectedYear.setValue(year);
    this.calenderView = CalenderViewEnum.Open;
  }

  monthChange(month: number): void {
    this.selectedMonth.setValue(month);
    this.calenderView = CalenderViewEnum.Open;
  }

  isSelectedDay(day: Date, selectedDay: Date): boolean {
    return selectedDay.toDateString() === day.toDateString();
  }

  open(): void {
    this.initCalender();
    this.calenderView = CalenderViewEnum.Open;
  }

  selectedNewDate(): void {
    this.calenderView = CalenderViewEnum.Closed;
    this.control.setValue(this.selectedDay);
  }

  isEnumValue(month: string | number): boolean {
    if (month == 0) {
      return true;
    }
    return Number(month) ? true : false;
  }
}
