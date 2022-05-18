import { TipoLancamento } from './../models/tipo-lancamento.model';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pageable } from '../models/Pageable';

@Injectable({
    providedIn: 'root'
  })
export class TipoLancamentoService {
    constructor(
        private http: HttpClient,
        @Inject('API_ENDPOINT') private endpoint: string
    ) {}

    getAllTipoLancamentos(searchObject?: any): Observable<Pageable<TipoLancamento>> {
        return this.http.get<Pageable<TipoLancamento>>(`${this.endpoint}/tipo_lancamento`);
    }

}
