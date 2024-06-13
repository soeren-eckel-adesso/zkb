import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { ReplaySubject, Subject, Subscription } from "rxjs";
import { InstrumentDetailService } from "@adesso/service-instrument-detail";
import { TranslateService } from "@ngx-translate/core";
import { LoggerUtil } from "@base/util-logger";
import { BreadcrumbItemModel } from "@adesso/ui-bread-crumb";
import { KeyValueListOptionEnum, PageTypeEnum, UiChartQuoteBoxModel } from "@adesso/util-contracts";
import { DerivativeDetailPageConfigModel } from "../models/derivative-detail-page-config.model";
import { InstrumentDetailViewModel } from "@stroeer/repository-instrument-detail";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "page-derivative-detail",
	templateUrl: "./derivative-detail-page.component.html",
	styleUrls: ["./derivative-detail-page.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DerivativeDetailPageComponent implements OnDestroy {
	public pageConfig$: Subject<DerivativeDetailPageConfigModel> = new ReplaySubject<DerivativeDetailPageConfigModel>();
	public quoteStreamUnderlying$: Subject<UiChartQuoteBoxModel> = new ReplaySubject<UiChartQuoteBoxModel>();
	private routerSubscription: Subscription;
	public instrument: InstrumentDetailViewModel;
	public underlying: InstrumentDetailViewModel;

	constructor(public instrumentDetailService: InstrumentDetailService, public translate: TranslateService, public logger: LoggerUtil) {
		this.routerSubscription = this.instrumentDetailService.routerInstrument$().subscribe((instrument) => {
			this.instrument = instrument;
			if (this.instrument) {
				const config: DerivativeDetailPageConfigModel = {
					breadCrumbItems: this.getBreadCrumbItems(),
					chartQuoteBoxValues: this.getChartQuoteBoxValues(),
					instrumentHeader: instrumentDetailService.instrumentHeader(),
				};
				this.pageConfig$.next(config);

				this.instrumentDetailService.loadInstrument(this.instrument.derivativeData.underlyings[0].isin).subscribe((underlying) => {
					this.underlying = underlying;
					const quote = this.getChartQuoteBoxValues();
					if (quote) this.quoteStreamUnderlying$.next(quote);
				});
			}
		});
	}

	private getBreadCrumbItems(): BreadcrumbItemModel[] {
		return [
			{
				label: "Startseite",
				url: "/",
			},
			{
				label: this.instrument.derivativeData.derivativeType.name === "Knock-Out & Open-End Knock-Out" ? "Hebelprodukte" : "Anlageprodukte",
				url: this.instrument.derivativeData.derivativeType.name === "Knock-Out & Open-End Knock-Out" ? "/hebelprodukte" : "/anlageprodukte",
			},
			{
				label: this.instrument.derivativeData.derivativeType.name,
				url: this.instrument.derivativeData.derivativeType.name === "Knock-Out & Open-End Knock-Out" ? "/hebelprodukte" : "/anlageprodukte",
			},
			{
				label: this.instrument.base?.isin ?? "",
			},
		];
	}

	private getChartQuoteBoxValues(): UiChartQuoteBoxModel | undefined {
		const result = this.instrumentDetailService.createChartQuoteBoxValues();
		if (!result) {
			return undefined;
		}
		const key = KeyValueListOptionEnum;
		result.keyValues = this.instrumentDetailService.extractKeyValueListValues([{ option: key.domicile }]);
		return result;
	}

	ngOnDestroy() {
		this.routerSubscription.unsubscribe();
	}
}
