import { Component, Input, OnInit } from "@angular/core";
import { DescriptionService } from "@ing/service-description";

@Component({
  selector: "element-description",
  templateUrl: "./element-description.component.html",
  styleUrls: ["./element-description.component.scss"],
})
export class ElementDescriptionComponent implements OnInit {
  @Input() isin: string;
  public text: string;
  constructor(private service: DescriptionService) {}

  ngOnInit(): void {
    this.service.getDescription(this.isin).subscribe((d) => {
      if (d) {
        this.text = d;
      }
    });
  }
}
