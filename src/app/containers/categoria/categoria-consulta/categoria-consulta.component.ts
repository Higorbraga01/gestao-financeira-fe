import { CategoriaService } from './../../../service/categoria.service';
import { UserService } from './../../../service/user.service';
import { Categoria } from './../../../models/categoria.model';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'app-categoria-consulta',
    templateUrl: './categoria-consulta.component.html',
    styleUrls: ['./categoria-consulta.component.scss'],
})
export class CategoriaConsultaComponent implements OnInit {
    categorias: Categoria[];
    cols: any[];
    loading: boolean;
    selectAll: boolean = false;
    selectedCategorias: any;
    totalRecords: number;
    first = 0;
    rows = 5;
    items: MenuItem[];
    constructor(
        private messageService: MessageService,
        private userService: UserService,
        private categoriaService: CategoriaService
    ) {}

    ngOnInit(): void {
        // this.userService.getAllUserCategorias().subscribe((categorias) => {
        //     this.categorias = categorias.content;
        // });
    }

    loadCategorias(event: LazyLoadEvent) {
        this.loading = true;
            this.userService
                .getAllUserCategorias({ lazyEvent: JSON.stringify(event) })
                .subscribe((res) => {
                    this.categorias = res.content;
                    this.totalRecords = res.totalElements;
                    this.loading = false;
                });
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
