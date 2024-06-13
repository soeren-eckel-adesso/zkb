import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { InstrumentValorEnum, UiInstrumentListTypeEnum } from "@adesso/util-contracts";
import { InstrumentListService } from "@adesso/service-instrument-list";
import { InstrumentListViewModel } from "@adesso/ui-instrument-list";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SuggestSearchDesignEnum } from "@adesso/feature-suggest-search";
import { BreadcrumbItemModel } from "@adesso/ui-bread-crumb";

@Component({
	selector: "page-home",
	templateUrl: "./home-page.component.html",
	styleUrls: ["./home-page.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
	public title = "web-adesso-demo";
	public tableType: UiInstrumentListTypeEnum = UiInstrumentListTypeEnum.performance;
	public suggestSearchDesign = SuggestSearchDesignEnum.carouselInclude;

	public bestIndices$: Observable<InstrumentListViewModel[]>;
	public bestFunds$: Observable<InstrumentListViewModel[]>;
	public bestETFs$: Observable<InstrumentListViewModel[]>;
	public bestCommodities$: Observable<InstrumentListViewModel[]>;
	public bestCurrencies$: Observable<InstrumentListViewModel[]>;

	public slides = [
		{ src: "assets/slider/etf/etf-home-hero_3.jpg" },
		{ src: "assets/slider/etf/ETF.jpg" },
		{ src: "assets/slider/etf/etf-cosa-1200x675.jpg" },
		{ src: "assets/slider/etf/etf-teaser.jpg" },
		{ src: "assets/slider/etf/images.jpg" },
		{ src: "assets/slider/etf/kryptomoney.jpg" },
	];

	constructor(public instrumentListService: InstrumentListService) {}

	public getBreadCrumbItems(): BreadcrumbItemModel[] {
		return [
			{
				label: "Startseite",
				url: "/",
			},
			{
				label: "Märkte",
			},
		];
	}

	ngOnInit(): void {
		this.bestIndices$ = this.loadInstruments([
			InstrumentValorEnum.dax.toString(),
			InstrumentValorEnum.mDax.toString(),
			InstrumentValorEnum.tecDax.toString(),
			InstrumentValorEnum.euroStoxx50.toString(),
			InstrumentValorEnum.smi.toString(),
			InstrumentValorEnum.cac40.toString(),
			InstrumentValorEnum.dowJones.toString(),
			InstrumentValorEnum.nasdaq100.toString(),
			InstrumentValorEnum.hangSeng.toString(),
		]);
		this.bestCurrencies$ = this.loadInstruments([
			InstrumentValorEnum.eurusd.toString(),
			InstrumentValorEnum.eurgbp.toString(),
			InstrumentValorEnum.eurjpy.toString(),
		]);
		this.bestCommodities$ = this.loadInstruments([
			InstrumentValorEnum.gold.toString(),
			InstrumentValorEnum.silver.toString(),
			InstrumentValorEnum.oilBrent.toString(),
		]);
		this.bestFunds$ = this.loadInstruments([
			InstrumentValorEnum.dwsAkkumula.toString(),
			InstrumentValorEnum.volatilityWorldFund.toString(),
			InstrumentValorEnum.germanEquityFund.toString(),
		]);
		this.bestETFs$ = this.loadInstruments([
			InstrumentValorEnum.msciSaudiArabiaCappedUcitsETF.toString(),
			InstrumentValorEnum.iSharesEURCorpBondExFinancials15yrUCITSETF.toString(),
			InstrumentValorEnum.iSharesEdgeMSCIEuropeQualityFactorUCITSETF.toString(),
		]);
	}

	private loadInstruments(ids: string[]): Observable<InstrumentListViewModel[]> {
		return this.instrumentListService.getInstrumentTable(ids, this.tableType).pipe(map((result) => (result ? result.result : [])));
	}
}
