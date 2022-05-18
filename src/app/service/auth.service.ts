import { MessageService } from 'primeng/api';
import { Token } from './../models/token.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Router } from '@angular/router';
import { of, delay, Subscription } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    authToken: any;
    refresh_token: any;
    user: any;
    tokenSubscription = new Subscription();
    timeout;
    constructor(
        private router: Router,
        private http: HttpClient,
        private jwtHelper: JwtHelperService,
        @Inject('API_ENDPOINT') private endpoint: string
    ) {}

    private formHeader = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
    });

    authenticateUser(username: string, password: string): Observable<any> {
        const user = `username=${username}&password=${password}`;
        return this.http.post(`${this.endpoint}/login`, user, {
            headers: this.formHeader,
        });
    }

    storeUserData(token: string, refresh_token: string, user: string) {
        this.timeout =
            this.jwtHelper.getTokenExpirationDate(token).valueOf() -
            new Date().valueOf();
        sessionStorage.setItem('token', 'Bearer ' + token);
        sessionStorage.setItem('refresh_token', 'Bearer ' + refresh_token);
        sessionStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.refresh_token = refresh_token;
        this.user = user;
        this.router.navigateByUrl('');
        this.expirationCounter(this.timeout);
    }

    expirationCounter(timeout) {
        this.tokenSubscription.unsubscribe();
        this.tokenSubscription = of(null)
            .pipe(delay(timeout))
            .subscribe((expired) => {
                this.logout();
                this.router.navigate(['/login']);
            });
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('user');
        if (user !== null) {
            if (this.jwtHelper.isTokenExpired(sessionStorage.getItem('token'))) {
                this.refreshToken().subscribe((res) =>
                    sessionStorage.setItem(
                        'token',
                        'Bearer ' + res.access_token
                    )
                );
            }
            if (this.jwtHelper.isTokenExpired(sessionStorage.getItem('refresh_token'))) {
                this.logout();
            }
        }
        return !(user === null);
    }

    private refreshToken() {
        return this.http.get<Token>(`${this.endpoint}/token/refresh`);
    }

    logout() {
        this.tokenSubscription.unsubscribe();
        this.authToken = null;
        this.user = null;
        sessionStorage.clear();
    }
}
