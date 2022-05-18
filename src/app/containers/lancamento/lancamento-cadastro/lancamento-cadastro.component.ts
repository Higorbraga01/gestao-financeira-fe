import { UserService } from './../../../service/user.service';
import { Categoria } from './../../../models/categoria.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CategoriaService } from 'src/app/service/categoria.service';
import { CountryService } from 'src/app/service/countryservice';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.scss']
})
export class LancamentoCadastroComponent implements OnInit {
    form: FormGroup;
    categorias: Categoria[]
    countries: any[];
    filteredCountries: any[];
    selectedDate:any;

  constructor(private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private userService: UserService,
    private messageService: MessageService,
    private router: Router) {}

  ngOnInit(): void {
    this.userService.getAllUserCategorias()
    .subscribe(categorias => this.categorias = categorias.content);
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
        id: [null],
        nome: [null, [Validators.required]],
        categoriaId: [null, [Validators.required]],
        quantidadeRepeticao: [null],
        valorTotal: [null, [Validators.required]],
        dataCriacao: [null, [Validators.required]],
        tipoLancamentoId: [null, [Validators.required]]
    });
}

createLancamento(){

}

  filterCountry(event) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.categorias.length; i++) {
        const categoria = this.categorias[i];
        if (categoria.nome.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(categoria);
        }
    }

    this.categorias = filtered;
}
}
