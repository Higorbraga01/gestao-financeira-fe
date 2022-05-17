import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaCadastroComponent } from './categoria-cadastro/categoria-cadastro.component';
import { CategoriaConsultaComponent } from './categoria-consulta/categoria-consulta.component';



@NgModule({
  declarations: [
    CategoriaCadastroComponent,
    CategoriaConsultaComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CategoriaModule { }
