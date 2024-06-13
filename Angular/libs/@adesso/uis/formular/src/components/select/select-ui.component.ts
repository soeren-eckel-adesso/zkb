import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { SelectItemModel } from "../../models/select-item.model";

@Component({
  selector: "ui-select",
  templateUrl: "./select-ui.component.html",
  styleUrls: ["./select-ui.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectUiComponent implements OnInit {
  @Input() label: string;
  @Input() items: SelectItemModel[] | undefined;
  @Input() selectedId: string | number | undefined;
  @Output() changeValue = new EventEmitter<string | number>();

  public inputChanged(id: string | number) {
    this.changeValue.emit(id);
  }

  ngOnInit(): void {
    if (this.items && this.items.length > 0 && !this.selectedId) {
      this.selectedId = this.items[0].id;
    }
  }
}
