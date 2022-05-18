import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CategoriaRequest } from './../../../models/categoria.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
    selector: 'app-categoria-cadastro',
    templateUrl: './categoria-cadastro.component.html',
    styleUrls: ['./categoria-cadastro.component.scss'],
})
export class CategoriaCadastroComponent implements OnInit {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private categoriaService: CategoriaService,
        private messageService: MessageService,
        private router: Router
    ) {
        this.createForm();
    }

    ngOnInit(): void {}

    createForm(): void {
        this.form = this.fb.group({
            nome: [null, [Validators.required]],
            descricao: [null, [Validators.required]],
        });
    }

    createCategoria() {
        const categoria: CategoriaRequest = {
            nome: this.form.get('nome').value,
            descricao: this.form.get('descricao').value,
        };
        this.categoriaService.save(categoria).subscribe(
            () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Sucesso',
                    detail: 'Categoria cadastrada com sucesso',
                    life: 3000,
                });
                this.router.navigateByUrl('categoria/consulta')
            },
            (error) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erro',
                    detail: 'Erro ao cadastrar categoria',
                    life: 3000,
                  })
            }
        );
    }
}
