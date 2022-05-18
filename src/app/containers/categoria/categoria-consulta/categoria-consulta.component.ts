import { CategoriaService } from './../../../service/categoria.service';
import { UserService } from './../../../service/user.service';
import { Categoria } from './../../../models/categoria.model';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MenuItem, MessageService } from 'primeng/api';
import { mapTo, mergeAll, of, share, Subscription, takeUntil, timer } from 'rxjs';

@Component({
    selector: 'app-categoria-consulta',
    templateUrl: './categoria-consulta.component.html',
    styleUrls: ['./categoria-consulta.component.scss'],
})
export class CategoriaConsultaComponent implements OnInit {
    subs$: Subscription[] = [];
    categorias: Categoria[];
    cols: any[];
    loading: boolean;
    selectAll: boolean = false;
    selectedCategorias: any;
    totalRecords: number;
    loadingData = true;
    rowsCount: number;
    items: MenuItem[];
    constructor(
        private messageService: MessageService,
        private userService: UserService,
        private categoriaService: CategoriaService
    ) {}

    ngOnInit(): void {
    }

    loadCategorias(event: LazyLoadEvent) {
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

        this.loading = true;
        const getCategorias$ =  this.userService.getAllUserCategorias(searchObject).pipe(share());
        const isLoading$ = of(
          timer(200).pipe(mapTo(true), takeUntil(getCategorias$)),
          getCategorias$.pipe(mapTo(false))
        ).pipe(mergeAll());

        this.subs$.push(
          isLoading$.subscribe(result => {
            this.loadingData = result;
          }),
          getCategorias$.subscribe((res: { content: Categoria[]; totalElements: number; }) => {
            this.categorias = res.content;
            this.totalRecords = res.totalElements;
            this.loading = false;
          })
        );
    }
    deleteCategoria(categoriaId: number) {
        this.categoriaService.deleteById(categoriaId).subscribe(()=>{
            this.loadCategorias({ first: 0, rows: 5 })
            this.messageService.add({
                severity: 'success',
                summary: 'Sucesso',
                detail: 'Categoria excluida com sucesso',
                life: 3000,
              });
        },
        (error) => {
            this.messageService.add({
                severity: 'error',
                summary: 'Erro',
                detail: 'Erro ao excluir categoria',
                life: 3000,
              })
        })
    }
    onDropdownClick(event: any, categoria: Categoria){

    }

    onSelectionChange(value = []) {
        this.selectAll = value.length === this.totalRecords;
        this.selectedCategorias = value;
    }

    onSelectAllChange(event) {
        const checked = event.checked;

        if (checked) {
            this.userService.getAllUserCategorias().subscribe((res) => {
                this.selectedCategorias = res.content;
                this.selectAll = true;
            });
        } else {
            this.selectedCategorias = [];
            this.selectAll = false;
        }
    }
}
