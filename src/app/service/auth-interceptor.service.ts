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

      if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
        req = req.clone({
          headers: req.headers.append('Authorization', JSON.stringify(sessionStorage.getItem('token')))
        });
      }

      return next.handle(req);

    }
}
