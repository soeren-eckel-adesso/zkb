import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { DateAdapter } from "@angular/material/core";
import { StyleIncludeService } from "../../services/style-include.service";

@Component({
  selector: "ui-material-date-picker",
  templateUrl: "./date-picker-ui.component.html",
  styleUrls: ["./date-picker-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMaterialDatePickerComponent {
  @Input() label: string;
  @Input() value: Date | undefined;
  @Input() placeholder = "";

  @Output() changeValue = new EventEmitter<Date | undefined>();
  @Output() submitted = new EventEmitter();
  public defaultValue: string;
  public includeStyles = false;

  constructor(private dateAdapter: DateAdapter<Date>, private styleIncludeService: StyleIncludeService) {
    this.dateAdapter.setLocale("de");
    this.includeStyles = this.styleIncludeService.stylesMustBeIncluded();
  }

  public onChange(date: Date | any): void {
    if (date) {
      this.changeValue.emit(new Date(date));
    } else {
      this.changeValue.emit(undefined);
    }
    this.submitted.emit();
  }
}
