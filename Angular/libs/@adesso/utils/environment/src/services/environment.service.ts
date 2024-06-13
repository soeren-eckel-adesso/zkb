import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { EnvironmentInterface } from "../interfaces/environment.interface";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EnvironmentService {
  public environment: EnvironmentInterface | undefined;
  public isBrowserRendering = true;
  public isServerRendering = false;
  public isQuoteStreamJsRequested = false;
  public isQuoteStreamJsLoaded$: Subject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(@Inject(PLATFORM_ID) private platformID: any) {
    this.isBrowserRendering = isPlatformBrowser(this.platformID);
    this.isServerRendering = !this.isBrowserRendering;
  }
  public setEnvironment(value: EnvironmentInterface) {
    this.environment = value;

    if (this.isServerRendering) {
      this.environment.enabledPush = false;
    }
  }
}
