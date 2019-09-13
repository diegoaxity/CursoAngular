import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { Observable, TimeoutError, throwError } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';
import { Router } from '@angular/router';

const DEFAULT_TIMEOUT = 60000;

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private dataService: DataService, private router: Router) { }

  private setToken = (req: HttpRequest<any>) => {
    const token = this.dataService.getToken();
    req = req.clone({ headers: req.headers.append('token', token) });

    return req;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('login')) {
      return next.handle(req);
    }

    const authReq = this.setToken(req);

    return next.handle(authReq).pipe(
      timeout(DEFAULT_TIMEOUT),
      // Log de peticiones HTTP
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error) => {
        console.log(error);
        if (error instanceof TimeoutError) {
          return throwError('Ocurrió un error en el servidor, el tiempo de espera se ha agotado');
        }
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.dataService.removeToken();
            this.router.navigate(['login']);
          }
          return throwError(error.error.error || error.message || 'Ocurrió un error en el servidor');
        } else {
          return throwError(error);
        }
      })
    );
  }
}
