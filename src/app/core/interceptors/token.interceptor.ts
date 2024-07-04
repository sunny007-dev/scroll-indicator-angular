import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const getToken: string | any = localStorage.getItem('token');
    let token = JSON.parse(getToken);
    
    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('event--->>>', event);
            switch (event.body.status) {
              case 200:
                // this.notificationService.openSuccessSnackBar(event.body.message);
                break;
              case 422:
                // this.notificationService.openFailureSnackBar(event.body.message);
                break;
              case 500:
                // this.notificationService.openFailureSnackBar(event.body.message);
                break;
            }
          }
          return event;
        }),catchError((error) => {
          console.error(error);
          return throwError(error.message);
        }));
  }
}
