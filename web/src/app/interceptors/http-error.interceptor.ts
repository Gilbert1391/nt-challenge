import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(request)

      .pipe(
        retry(1),

        catchError((exception: HttpErrorResponse) => {
          const errorMessage = exception.error.message;

          if (exception.error instanceof ErrorEvent) {
            // client-side error
          } else {
            // server-side error
          }
          this.toastr.error(errorMessage, null, { progressBar: true });
          return throwError(errorMessage);
        })
      );
  }
}
