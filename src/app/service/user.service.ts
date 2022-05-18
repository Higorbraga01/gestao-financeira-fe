import { Pageable } from './../models/Pageable';
import { Categoria } from './../models/categoria.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(
        private httpClient: HttpClient,
        @Inject('API_ENDPOINT') private endpoint: string
    ) {}

    removeEmptyFields(data: any): void {
        if (!data) {
          return;
        }

        Object.keys(data).forEach(
          (key) =>
            (data[key] === null ||
              data[key] === '' ||
              data[key] === undefined ||
              data[key].length === 0) &&
            delete data[key]
        );
      }

      buildHttpParams(data: any): HttpParams {
        let params = new HttpParams();
        if (!data) {
          return params;
        }
        params = params.appendAll(data);
        return params;
      }


    public getAllUserCategorias(searchObject?: any): Observable<Pageable<Categoria>>{
        this.removeEmptyFields(searchObject)
        const params = this.buildHttpParams(searchObject);
        return this.httpClient.get<Pageable<Categoria>>(`${this.endpoint}/user/categoria`,{params});
    }

    public getAllUserLancamentos(searchObject?: any): Observable<Pageable<Categoria>>{
        this.removeEmptyFields(searchObject)
        const params = this.buildHttpParams(searchObject);
        return this.httpClient.get<Pageable<Categoria>>(`${this.endpoint}/user/lancamento`,{params});
    }
}
