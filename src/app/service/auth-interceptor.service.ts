import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor
  } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private jwtHelper: JwtHelperService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

      if (sessionStorage.getItem('user') && sessionStorage.getItem('token') && sessionStorage.getItem('refresh_token')) {
          if(this.jwtHelper.isTokenExpired(sessionStorage.getItem('token'))){
            req = req.clone({
                headers: req.headers.append('Authorization', sessionStorage.getItem('refresh_token'))
              });
          }else {
            req = req.clone({
                headers: req.headers.append('Authorization', sessionStorage.getItem('token'))
              });
          }

      }
      return next.handle(req);

    }
}
