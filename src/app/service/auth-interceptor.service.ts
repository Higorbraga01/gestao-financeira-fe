import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor
  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

      if (sessionStorage.getItem('user') && sessionStorage.getItem('token')) {
        req = req.clone({
          headers: req.headers.append('Authorization', sessionStorage.getItem('token'))
        });
      }
      return next.handle(req);

    }
}
