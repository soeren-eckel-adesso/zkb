import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
	selector: "ui-paging",
	templateUrl: "./paging-ui.component.html",
	styleUrls: ["./paging-ui.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagingUiComponent implements OnInit {
	@Input() currentPage: number | null;

	public pageCountValue: number;
	@Input()
	set pageCount(value: number) {
		this.pageCountValue = value;
		this.calculatePages();
		if (this.currentPage) {
			this.pageSelected?.emit(this.currentPage);
		}
	}

	@Output() pageSelected = new EventEmitter<number>();

	public pages: number[];
	public showFirstPage: boolean;
	public showLastPage: boolean;

	ngOnInit(): void {
		this.calculatePages();
	}

	public switchPage(newPage: number) {
		if (newPage === this.currentPage) {
			return;
		}
		this.pageSelected.emit(newPage);
		this.currentPage = newPage;
		this.calculatePages();
	}

	private calculatePages() {
		this.pages = [];
		const maxShowingPages = 4;

		let from = 1;
		let to = this.pageCountValue;
		if (this.currentPage != null) {
			if (from < this.currentPage - maxShowingPages / 2) {
				from = this.currentPage - maxShowingPages / 2;
				if (from < 1) {
					from = 1;
				}
			}
		}

		if (to > from + maxShowingPages) {
			to = from + maxShowingPages;
		}

		if (from > to - maxShowingPages) {
			from = to - maxShowingPages;
			if (from < 1) {
				from = 1;
			}
		}

		if (from === 2) {
			from = 1;
		}

		if (to === this.pageCountValue - 1) {
			to = this.pageCountValue;
		}

		this.showFirstPage = from > 1;
		this.showLastPage = to < this.pageCountValue;

		for (let i = from; i <= to; i++) {
			this.pages.push(i);
		}
	}
}
