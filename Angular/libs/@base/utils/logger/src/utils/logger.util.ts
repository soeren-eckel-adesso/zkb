import { Injectable } from "@angular/core";
import { EnvironmentService } from "@adesso/util-environment";
import { LogCounterModel } from "../models/log-counter.model";

@Injectable({
	providedIn: "root",
})
export class LoggerUtil {
	private serviceConstructors: LogCounterModel[] = [];
	private repositoryConstructors: LogCounterModel[] = [];
	private uiUpdates: LogCounterModel[] = [];

	constructor(private environmentService: EnvironmentService) {
		this.serviceConstructor("LoggerService");
	}

	public serviceConstructor(name: string) {
		if (this.environmentService.environment?.loggingEnabledFor?.serviceConstructor && this.isFilterAllowed(name)) {
			const item = this.serviceConstructors.find((x) => x.name === name);
			if (item) {
				item.count += 1;
				this.warn("ServiceConstructor", name, item.count);
			} else {
				this.serviceConstructors.push({ name, count: 1 });
				this.info("ServiceConstructor", name);
			}
		}
	}

	public repositoryConstructor(name: string) {
		if (this.environmentService.environment?.loggingEnabledFor?.repositoryConstructor && this.isFilterAllowed(name)) {
			const item = this.repositoryConstructors.find((x) => x.name === name);
			if (item) {
				item.count += 1;
				this.warn("RepositoryConstructor", name, item.count);
			} else {
				this.repositoryConstructors.push({ name, count: 1 });
				this.info("RepositoryConstructor", name);
			}
		}
	}

	public uiUpdate(name: string) {
		if (this.environmentService.environment?.loggingEnabledFor?.uiUpdate && this.isFilterAllowed(name)) {
			const item = this.uiUpdates.find((x) => x.name === name);
			if (item) {
				item.count += 1;
				if (item.count >= 10) {
					this.error("UiUpdate", name, item.count);
				} else if (item.count >= 5) {
					this.warn("UiUpdate", name, item.count);
				} else {
					this.info("UiUpdate", name, item.count);
				}
			} else {
				this.uiUpdates.push({ name, count: 1 });
				this.info("UiUpdate", name);
			}
		}
	}

	public repositoryRequest(functionName: string, ...data: any[]) {
		if (this.environmentService.environment?.loggingEnabledFor?.repositoryRequests) {
			this.info("RepositoryRequest", functionName, data);
		}
	}

	public info(...data: any[]) {
		if (this.environmentService.environment?.enabledLogging && console && this.environmentService.isBrowserRendering) {
			// eslint-disable-next-line no-console,no-restricted-syntax
			console.info(data);
		}
	}

	public warn(...data: any[]) {
		if (this.environmentService.environment?.enabledLogging && console && this.environmentService.isBrowserRendering) {
			// eslint-disable-next-line no-console,no-restricted-syntax
			console.warn(data);
		}
	}

	public error(...data: any[]) {
		if (this.environmentService.environment?.enabledLogging && console && this.environmentService.isBrowserRendering) {
			// eslint-disable-next-line no-console
			console.error(data);
		}
	}

	private isFilterAllowed(name: string): boolean {
		if (!this.environmentService.environment?.loggingEnabledFor?.filter) {
			return true;
		}
		let result = false;
		this.environmentService.environment?.loggingEnabledFor.filter.forEach((filter) => {
			const index = name.toLowerCase().indexOf(filter.toLowerCase());
			if (index >= 0) {
				result = true;
			}
		});
		return result;
	}
}
