import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "feature-instrument-detail-config",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstrumentDetailConfigFeatureComponent {
  @Input() instrumentId: string;

  // ngOnInit(): void {
  //if (this.instrumentId !== "") {
  // this.instrumentDetailService.stroeerRepositoryService.getInstrumentDetail(this.instrumentId);
  //}
  // }
}
