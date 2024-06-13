import {Injectable} from "@angular/core";
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class StroeerHttpInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ApiKey: "YmZmZDVmNTUtZDYzNS00NWI4LTgxOWEtODhmY2I1NWE1MDg1"
      }
    });

    return next.handle(request);
  }
}
