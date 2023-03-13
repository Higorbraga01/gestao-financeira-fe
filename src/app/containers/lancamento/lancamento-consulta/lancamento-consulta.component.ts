import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Lancamento } from 'src/app/models/lancamento.model';
import { mapTo, mergeAll, of, share, Subscription, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-lancamento-consulta',
  templateUrl: './lancamento-consulta.component.html',
  styleUrls: ['./lancamento-consulta.component.scss']
})
export class LancamentoConsultaComponent implements OnInit {
    subs$: Subscription[] = [];
    lancamentos: Lancamento[];
    cols: any[];
    loading: boolean;
    selectAll: boolean = false;
    selectedCategorias: any;
    totalRecords: number;
    loadingData = true;
    rowsCount: number;
  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  loadCustomers(event: LazyLoadEvent) {
    this.rowsCount = event.rows;
    const page = { page: (event.first / event.rows) };
    const size = { size: event.rows };
    let searchObject = {};
    if (event.sortField) {
      const sort = { sort: `${event.sortField},${event.sortOrder === 1 ? 'ASC' : 'DESC'}` };
      searchObject = Object.assign({},page, size, sort);
    } else {
      searchObject = Object.assign({},page, size);
    }
    const getLancamentos$ =  this.userService.getAllUserLancamentos(searchObject).pipe(share());
    const isLoading$ = of(
      timer(200).pipe(mapTo(true), takeUntil(getLancamentos$)),
      getLancamentos$.pipe(mapTo(false))
    ).pipe(mergeAll());

    this.subs$.push(
      isLoading$.subscribe(result => {
        this.loadingData = result;
      }),
      getLancamentos$.subscribe((res: { content: Lancamento[]; totalElements: number; }) => {
        this.loading = true;
        this.lancamentos = res.content;
        this.totalRecords = res.totalElements;
        this.loading = false;
      })
    );
}

}
