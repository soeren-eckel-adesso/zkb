import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { InputTypeEnum } from "@adesso/ui-form-input";
import { FormControl } from "@angular/forms";
import { CurrencyConverterRepository, ExchangeRatesModel } from "@stroeer/repository-currency-converter";
import { SelectItemModel } from "@adesso/ui-formular";
import { filter, map, switchMap, tap } from "rxjs/operators";
import { BehaviorSubject, merge, Observable, of } from "rxjs";
import { CurrentFocusEnum } from "../enums/current-focus.enum";
import { LastFocusEnum } from "../enums/last-focus.enum";

@Component({
	selector: "feature-currency-converter",
	templateUrl: "./currency-converter-feature.component.html",
	styleUrls: ["./currency-converter-feature.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyConverterFeatureComponent implements OnInit {
	public inputType = InputTypeEnum;
	public exchangeRate$: Observable<number>;
	private initRequest$ = new BehaviorSubject<boolean>(false);
	public firstCurrencyValue = new FormControl(1);
	public secondCurrencyValue = new FormControl();
	public firstCurrency = new FormControl("EUR");
	public secondCurrency = new FormControl("USD");
	public exchangeRate: number;
	private currentFocus: CurrentFocusEnum = CurrentFocusEnum.none;
	private lastFocus: LastFocusEnum = LastFocusEnum.first;

	public currencyList: Array<SelectItemModel> = [
		{ id: "EUR", label: "EUR" },
		{ id: "USD", label: "USD" },
		{ id: "GBP", label: "GBP" },
		{ id: "JPY", label: "JPY" },
		{ id: "CHF", label: "CHF" },
	];
	constructor(private currencyConverterRepository: CurrencyConverterRepository) {
		this.exchangeRate$ = merge(
			this.initRequest$,
			this.firstCurrency.valueChanges,
			this.secondCurrency.valueChanges,
			this.firstCurrencyValue.valueChanges.pipe(filter(() => this.currentFocus === CurrentFocusEnum.first)),
			this.secondCurrencyValue.valueChanges.pipe(filter(() => this.currentFocus === CurrentFocusEnum.second))
		).pipe(
			switchMap(() => {
				if (this.currentFocus === CurrentFocusEnum.none) {
					return this.currencyConverterRepository
						.getExchangeRate(this.firstCurrency.value ?? "", this.secondCurrency.value ?? "")
						.pipe(map((apiResult: ExchangeRatesModel) => apiResult.exchangeRate));
				} else {
					return of(this.exchangeRate);
				}
			}),
			tap((exchangeRate: number) => (this.exchangeRate = exchangeRate)),
			map((exchangeRate: number) => {
				if (this.lastFocus === LastFocusEnum.first) {
					this.secondCurrencyValue.setValue(+exchangeRate * +(this.firstCurrencyValue.value ?? 0));
				} else {
					this.firstCurrencyValue.setValue(+this.secondCurrencyValue.value / +exchangeRate);
				}
				return exchangeRate;
			})
		);
	}

	ngOnInit(): void {
		this.initRequest$.next(true);
	}

	firstInputHaseFocus(value: boolean) {
		if (value) {
			this.currentFocus = CurrentFocusEnum.first;
			this.lastFocus = LastFocusEnum.first;
		} else {
			this.currentFocus = CurrentFocusEnum.none;
		}
	}

	secondInputHaseFocus(value: boolean) {
		if (value) {
			this.currentFocus = CurrentFocusEnum.second;
			this.lastFocus = LastFocusEnum.second;
		} else {
			this.currentFocus = CurrentFocusEnum.none;
		}
	}
}
