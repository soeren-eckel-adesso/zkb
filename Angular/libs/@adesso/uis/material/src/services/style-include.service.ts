import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StyleIncludeService {
  private stylesIncluded = false;

  public stylesMustBeIncluded(): boolean {
    const result = !this.stylesIncluded;
    this.stylesIncluded = true;
    return result;
  }
}
