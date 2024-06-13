import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { AssetClassEnum, SortableFieldEnum, UiInstrumentListTypeEnum } from "@adesso/util-contracts";
import { InstrumentListViewModel } from "@adesso/ui-instrument-list";
import { InstrumentListService } from "@adesso/service-instrument-list";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { SuggestSearchDesignEnum } from "@adesso/feature-suggest-search";
import { BreadcrumbItemModel } from "@adesso/ui-bread-crumb";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
	selector: "page-derivative-overview",
	templateUrl: "./derivative-overview-page.component.html",
	styleUrls: ["./derivative-overview-page.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DerivativeOverviewPageComponent implements OnInit {
	public derivate$: Observable<InstrumentListViewModel[]>;
	public suggestSearchDesign = SuggestSearchDesignEnum.carouselInclude;
	public tableType: UiInstrumentListTypeEnum = UiInstrumentListTypeEnum.performance;
	public name = "";

	constructor(public instrumentListService: InstrumentListService, private route: ActivatedRoute) {
		this.name = (this.route as any)._routerState.snapshot.url;
		this.name = this.name.slice(1, 2).toUpperCase() + this.name.slice(2, this.name.length);
	}

	public getBreadCrumbItems(): BreadcrumbItemModel[] {
		return [
			{
				label: "Startseite",
				url: "/",
			},
			{
				label: this.name,
			},
		];
	}

	ngOnInit() {
		this.derivate$ = this.searchInstruments();
	}

	// eslint-disable-next-line @typescript-eslint/member-ordering
	private listValor = [41822138, 1543231, 1729445, 1647343];

	private searchInstruments(): Observable<InstrumentListViewModel[]> {
		return this.instrumentListService
			.searchInstrument(
				{
					top: 100,
					skip: 0,
					orderBy: SortableFieldEnum.name,
					isDescendingOrder: false,
					assetClasses: AssetClassEnum.derivative,
					searchTerm: this.name === "Hebelprodukte" ? "Long Mini Future" : "Discount Zertifikat",
				},
				UiInstrumentListTypeEnum.performance
			)
			.pipe(
				take(1),
				map((x) =>
					x
						? x.result
								.filter(
									(r) =>
										(this.name !== "Hebelprodukte" || r.name.startsWith("Long")) &&
										this.listValor.indexOf(r.valor) === -1 &&
										r.quote &&
										r.changeAbsolute
								)
								.slice(0, 10)
						: []
				)
			);
	}
}
