import { CategoriaRequest } from './../../../models/categoria.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styleUrls: ['./categoria-cadastro.component.scss']
})
export class CategoriaCadastroComponent implements OnInit {
    form: FormGroup;

  constructor(private fb: FormBuilder, private categoriaService: CategoriaService) {
      this.createForm();
   }

  ngOnInit(): void {
  }

  createForm():void{
    this.form = this.fb.group({
        nome: [ null, [ Validators.required ]],
        descricao: [ null,[ Validators.required ]]
    })
  }

  createCategoria(){
    const categoria: CategoriaRequest = {
        nome: this.form.get('nome').value,
        descricao: this.form.get('descricao').value
    }
    this.categoriaService.save(categoria).subscribe(() =>{

    },
    error => {
        console.log(error.error.error_message)
    })
    console.log(categoria);
  }

}
