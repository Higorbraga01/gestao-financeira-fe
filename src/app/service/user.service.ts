import { Pageable } from './../models/Pageable';
import { Categoria } from './../models/categoria.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(
        private httpClient: HttpClient,
        @Inject('API_ENDPOINT') private endpoint: string
    ) {}

    public getAllUserCategorias(searchObject?: any): Observable<Pageable<Categoria>>{
        return this.httpClient.get<Pageable<Categoria>>(`${this.endpoint}/user/categoria`);
    }

    public getAllUserLancamentos(searchObject?: any): Observable<Pageable<Categoria>>{
        return this.httpClient.get<Pageable<Categoria>>(`${this.endpoint}/user/lancamento`);
    }
}
