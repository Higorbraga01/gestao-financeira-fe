import { LancamentoRequest } from './../../../models/lancamento.model';
import { UserService } from './../../../service/user.service';
import { Categoria } from './../../../models/categoria.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CategoriaService } from 'src/app/service/categoria.service';
import { CountryService } from 'src/app/service/countryservice';
import { TipoLancamentoService } from 'src/app/service/tipo-lancamento.service';
import { LancamentoService } from 'src/app/service/lancamento.service';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.scss']
})
export class LancamentoCadastroComponent implements OnInit {
    form: FormGroup;
    categorias: Categoria[]
    tiposLancamento: any[];
    countries: any[];
    filteredCountries: any[];
    selectedDate:any;

  constructor(private fb: FormBuilder,
    private tipoLancamentoService: TipoLancamentoService,
    private lancamentoService: LancamentoService,
    private userService: UserService,
    private messageService: MessageService,
    private router: Router) {}

  ngOnInit(): void {
    this.userService.getAllUserCategorias()
    .subscribe(categorias => this.categorias = categorias.content);
    this.tipoLancamentoService.getAllTipoLancamentos()
    .subscribe(tiposLancamento => this.tiposLancamento = tiposLancamento.content)
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
        id: [null],
        nome: [null, [Validators.required]],
        categoriaId: [null, [Validators.required]],
        tipoLancamentoId: [null, [Validators.required]],
        quantidadeRepeticao: [0],
        valorTotal: [null, [Validators.required]],
        dataCriacao: [null, [Validators.required]],
        dataAlteracao:  [null]
    });
}

createLancamento(){
    const lancamentoCreate: LancamentoRequest = {
        nome: this.form.get('nome').value,
        categoriaId: this.form.get('categoriaId').value,
        tipoLancamentoId: this.form.get('tipoLancamentoId').value,
        quantidadeRepeticao: this.form.get('quantidadeRepeticao').value,
        valorTotal: this.form.get('valorTotal').value.toString().replace('.', ''),
        dataCriacao: this.form.get('dataCriacao').value
    }
    if(lancamentoCreate) {
        this.lancamentoService.save(lancamentoCreate).subscribe({
            next: (result) => {
                console.log(result)
                this.messageService.add({
                    severity: 'success',
                    summary: 'Sucesso',
                    detail: 'Lançamento cadastrado com sucesso',
                    life: 3000,
                });
                this.router.navigateByUrl('lancamento/consulta')
            },
            error: (error) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erro',
                    detail: 'Erro ao cadastrar lançamento',
                    life: 3000,
                  })
            }
        })
    }
}
}
