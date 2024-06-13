import { Injectable } from "@angular/core";
import { LoggerUtil } from "@base/util-logger";
import { FavouriteRepository } from "@adesso/repository-favourite";
import { BehaviorSubject } from "rxjs";
import { take } from "rxjs/operators";
import { AuthenticationService } from "@recupera-direct/service-authentication";

@Injectable({
  providedIn: "root",
})
export class FavouriteService {
  public isFavourite$ = new BehaviorSubject<boolean>(false);
  public favourites$ = new BehaviorSubject<string[]>([]);
  private favourites: string[] = [];
  private currentPageInstrumentId?: string;

  constructor(
    private favouriteRepository: FavouriteRepository,
    logger: LoggerUtil,
    private authenticationService: AuthenticationService
  ) {
    logger.serviceConstructor("FavouriteService");
    this.authenticationService.isUserLoggedIn$.subscribe((isLoggedIn: boolean) => {
      const accessToken = this.authenticationService.AccessToken();
      if (isLoggedIn && accessToken) {
        this.favouriteRepository.startFavouriteSubscription(accessToken);
      } else {
        this.favouriteRepository.stopFavouriteSubscription();
      }
    });
    this.favouriteRepository.favourites$.subscribe((x: string[]) => {
      this.favourites = x;
      this.checkIsFavourite();
      this.favourites$.next(x);
    });
  }

  public updateInstrumentId(id?: string) {
    this.currentPageInstrumentId = id;
    this.checkIsFavourite();
  }

  public addFavourite() {
    if (this.currentPageInstrumentId) {
      this.favouriteRepository.addFavourite(this.currentPageInstrumentId).pipe(take(1)).subscribe();
    }
  }

  public deleteFavourite() {
    if (this.currentPageInstrumentId) {
      this.favouriteRepository.deleteFavourite(this.currentPageInstrumentId).pipe(take(1)).subscribe();
    }
  }

  private checkIsFavourite() {
    if (this.currentPageInstrumentId && this.favourites.find((x) => x === this.currentPageInstrumentId) !== undefined) {
      this.isFavourite$.next(true);
    } else {
      this.isFavourite$.next(false);
    }
  }
}
