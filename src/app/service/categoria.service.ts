import { Categoria, CategoriaRequest } from './../models/categoria.model';
import {
    HttpClient,
    HttpHeaders,
    HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Pageable } from '../models/Pageable';

@Injectable({
    providedIn: 'root',
})
export class CategoriaService {
    constructor(
        protected http: HttpClient,
        @Inject('API_ENDPOINT') private endpoint: string
    ) {}

    save(categoria: CategoriaRequest): Observable<Categoria> {
        return this.http
            .post<Categoria>(`${this.endpoint}/categoria`, categoria)
            .pipe(take(1));
    }

    getAllCategorias(searchObject?: any): Observable<Pageable<Categoria>> {
        return this.http.get<Pageable<Categoria>>(`${this.endpoint}/categoria`);
    }

    deleteById(categoriaId: number): Observable<any> {
        return this.http.delete<any>(
            `${this.endpoint}/categoria/${categoriaId}`
        );
    }
}
