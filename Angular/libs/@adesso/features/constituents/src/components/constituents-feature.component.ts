import { AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild } from "@angular/core";
import { PagingUiComponent } from "@adesso/ui-paging";
import { Observable, ReplaySubject, Subject } from "rxjs";
import { InstrumentListService } from "@adesso/service-instrument-list";
import { distinctUntilChanged, map, startWith, switchMap } from "rxjs/operators";
import { UiInstrumentListTypeEnum } from "@adesso/util-contracts";
import { LoggerUtil } from "@base/util-logger";
import { InstrumentListViewModel } from "@adesso/ui-instrument-list";

@Component({
	selector: "feature-constituents",
	templateUrl: "./constituents-feature.component.html",
	styleUrls: ["./constituents-feature.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConstituentsFeatureComponent implements AfterViewInit {
	@ViewChild("constituentsPaging") constituentsPaging: PagingUiComponent;
	@Input() valor: number;
	public constituentsPerPage = 30;
	public constituentsPageCount$: Subject<number> = new ReplaySubject<number>();
	public constituents$?: Observable<InstrumentListViewModel[]>;
	public tableType = UiInstrumentListTypeEnum.order;

	constructor(public logger: LoggerUtil, private instrumentListService: InstrumentListService) {}
	ngAfterViewInit(): void {
		this.constituents$ = this.constituentsPaging?.pageSelected?.pipe(
			startWith(1),
			distinctUntilChanged(),
			switchMap((newPage) => {
				return this.instrumentListService
					.getConstituents(
						this.valor?.toString(),
						this.constituentsPerPage,
						newPage * this.constituentsPerPage - this.constituentsPerPage,
						this.tableType
					)
					.pipe(
						map((result) => {
							if (result) {
								this.calculatePaging(result.resultCount);
							} else {
								return [];
							}

							return result.result;
						})
					);
			})
		);
		this.constituentsPageCount$.next(1);
	}

	private calculatePaging(resultCount: number | undefined) {
		if (!resultCount) {
			return;
		}
		this.constituentsPageCount$.next(Math.ceil(resultCount / this.constituentsPerPage));
	}
}
