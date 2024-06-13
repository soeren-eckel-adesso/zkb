import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnInit } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { UiContextMenuListModel } from "@adesso/ui-context-menu-list";
import { FormControl } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { debounceTime, switchMap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { SuggestSearchDesignEnum } from "../enums/suggest-search-design.enum";
import { SuggestSearchService } from "@adesso/service-suggest-search";

@Component({
	selector: "feature-suggest-search",
	templateUrl: "./suggest-search-feature.component.html",
	styleUrls: ["./suggest-search-feature.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger("openClose", [
			state(
				"open",
				style({
					height: "330px",
					display: "block",
				})
			),
			state(
				"closed",
				style({
					height: "0",
				})
			),
			transition("open => closed", [animate("0.4s")]),
			transition("closed => open", [animate("0.4s")]),
		]),
	],
})
export class SuggestSearchFeatureComponent implements OnInit {
	@Input() isSearch: boolean;
	@Input() set design(value: SuggestSearchDesignEnum) {
		switch (value) {
			case SuggestSearchDesignEnum.carouselInclude:
				this.designClass = "carousel-include-design";
				this.placeholderTerm = "suggest-search-placeholder-carousel-include";
				break;
			case SuggestSearchDesignEnum.navigationArea:
				this.designClass = "navigation-area-design";
				this.placeholderTerm = "suggest-search-placeholder-navigation-area";
				break;
			case SuggestSearchDesignEnum.mobileNavigation:
				this.designClass = "navigation-mobile-design";
				this.placeholderTerm = "suggest-search-placeholder-navigation-area";
				break;
		}
	}

	public inputSearchControl: FormControl;
	public searchResult$: Observable<UiContextMenuListModel[]>;
	public designClass: string;
	public placeholderTerm: string;

	constructor(public translate: TranslateService, private suggestSearchService: SuggestSearchService, private elementRef: ElementRef) {}

	ngOnInit(): void {
		this.inputSearchControl = new FormControl();
		this.searchResult$ = this.inputSearchControl.valueChanges.pipe(
			debounceTime(300),
			switchMap((searchTerm) => (searchTerm.length >= 3 ? this.suggestSearchService.search(searchTerm) : of([])))
		);
	}

	@HostListener("document:click", ["$event"])
	clickout(event) {
		if (!this.elementRef.nativeElement.contains(event.target)) {
			this.clearSearch();
		}
	}

	clearSearch() {
		this.inputSearchControl.setValue("");
	}
}
