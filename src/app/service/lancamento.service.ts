import { Lancamento, LancamentoRequest } from './../models/lancamento.model';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Pageable } from '../models/Pageable';

@Injectable({
    providedIn: 'root',
})
export class LancamentoService {
    constructor(
        protected http: HttpClient,
        @Inject('API_ENDPOINT') private endpoint: string
    ) {}

    save(lancamento: LancamentoRequest): Observable<Lancamento> {
        return this.http
            .post<Lancamento>(`${this.endpoint}/lancamento`, lancamento)
            .pipe(take(1));
    }

    getAllLancamentos(searchObject?: any): Observable<Pageable<Lancamento>> {
        return this.http.get<Pageable<Lancamento>>(`${this.endpoint}/lancamento`);
    }

    deleteById(lancamentoId: number): Observable<any> {
        return this.http.delete<any>(
            `${this.endpoint}/lancamento/${lancamentoId}`
        );
    }
}
