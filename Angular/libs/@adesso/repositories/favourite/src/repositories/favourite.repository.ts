import { Injectable } from "@angular/core";
import { LoggerUtil } from "@base/util-logger";
import { HttpClient } from "@angular/common/http";
import { Observable, of, ReplaySubject } from "rxjs";
import { take } from "rxjs/operators";
import { EnvironmentService } from "@adesso/util-environment";
import { HubConnection, HubConnectionBuilder, JsonHubProtocol } from "@aspnet/signalr";

const apiQuery = "/api/Favourite";

@Injectable({
  providedIn: "root",
})
export class FavouriteRepository {
  public favourites$ = new ReplaySubject<string[]>();
  private readonly hubConnection: HubConnection;

  constructor(private http: HttpClient, private environmentService: EnvironmentService, private logger: LoggerUtil) {
    logger.repositoryConstructor("FavouriteRepository");
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.environmentService.environment?.adessoDemoApiUrl + "/FavouriteHub")
      .withHubProtocol(new JsonHubProtocol())
      .build();
  }

  public startFavouriteSubscription(accessToken: string) {
    this.getFavourites();
    this.initSignalRConnection(accessToken);
  }

  public stopFavouriteSubscription() {
    this.favourites$.next([]);
    if (this.hubConnection) {
      this.hubConnection.stop();
    }
  }

  private initSignalRConnection(accessToken: string) {
    this.hubConnection
      .start()
      .then(() => this.hubConnection.invoke("MapUser", accessToken))
      .then(() => {
        this.hubConnection.on("updateFavourites", (favourites: string[]) => {
          this.favourites$.next(favourites);
        });
      })
      .catch((e) => this.logger.error(e));
  }

  public addFavourite(id: string): Observable<any> {
    if (!this.environmentService.environment?.adessoDemoApiUrl) {
      return of(false);
    }

    return this.http.put(this.environmentService.environment?.adessoDemoApiUrl + apiQuery + "/" + id, null).pipe(take(1));
  }

  public deleteFavourite(id: string): Observable<any> {
    if (!this.environmentService.environment?.adessoDemoApiUrl) {
      return of(false);
    }

    return this.http.delete(this.environmentService.environment?.adessoDemoApiUrl + apiQuery + "/" + id).pipe(take(1));
  }

  private getFavourites() {
    if (!this.environmentService.environment?.adessoDemoApiUrl) {
      return of([]);
    }

    this.http
      .get<string[]>(this.environmentService.environment?.adessoDemoApiUrl + apiQuery)
      .pipe(take(1))
      .subscribe((x) => {
        this.favourites$.next(x);
      });
  }
}
