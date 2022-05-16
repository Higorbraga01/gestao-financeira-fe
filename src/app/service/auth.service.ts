import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(private httpClient: HttpClient) {}
    private formHeader = new  HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    // Provide username and password for authentication, and once authentication is successful,
    //store JWT token in session
      authenticate(username: string, password: string):Observable<any> {
        const body = `username=${username}&password=${password}`
        return this.httpClient
          .post<any>("http://localhost:8080/api/v1/login", body, {headers: this.formHeader})
          .pipe(
            map(userData => {
              sessionStorage.setItem("username", username);
              let tokenStr = "Bearer " + userData.access_token;
              sessionStorage.setItem("token", tokenStr);
              return userData;
            })
          );
      }

      isUserLoggedIn() {
        let user = sessionStorage.getItem("username");
        console.log(!(user === null));
        return !(user === null);
      }

      logOut() {
        sessionStorage.removeItem("username");
      }
}
