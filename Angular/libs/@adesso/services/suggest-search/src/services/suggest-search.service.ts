import { Injectable } from "@angular/core";
import { LoggerUtil } from "@base/util-logger";
import { UiContextMenuListModel } from "@adesso/ui-context-menu-list";
import { SuggestSearchItemModel, SuggestSearchRepository } from "@stroeer/repository-suggest-search";
import { Observable } from "rxjs";
import { AssetClassEnum } from "@adesso/util-contracts";
import { map } from "rxjs/operators";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
	providedIn: "root",
})
export class SuggestSearchService {
	constructor(logger: LoggerUtil, private repository: SuggestSearchRepository, private translate: TranslateService) {
		logger.serviceConstructor("SuggestSearchService");
	}

	search(term: string): Observable<UiContextMenuListModel[]> {
		return this.repository.suggestSearch(term).pipe(map((searchResults) => this.mapSearchResult(searchResults.results)));
	}

	private mapSearchResult(searchResults: SuggestSearchItemModel[]): UiContextMenuListModel[] {
		let result: UiContextMenuListModel[] = [];
		if (!searchResults) {
			return result;
		}
		const ac = AssetClassEnum;
		const acFilteredOrder = [ac.derivative];
		acFilteredOrder.forEach((assetClass) => {
			result = result.concat(this.addContextMenuAssetClassResults(searchResults, assetClass));
		});
		return result;
	}

	private addContextMenuAssetClassResults(searchResult: SuggestSearchItemModel[], assetClass: string): UiContextMenuListModel[] {
		const result: UiContextMenuListModel[] = [];
		const results = searchResult.filter((x) => x.type === assetClass);

		if (results !== null && results.length > 0) {
			const items = results.map((item) => ({
				label: item.name,
				url: this.translate.instant(item.type + "-detail-page").replace("{{instrumentId}}", item.isin),
			}));

			result.push({
				items,
				label: this.translate.instant("suggest-search-asset-class-label-" + assetClass),
			});
		}
		return result;
	}
}
