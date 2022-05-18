import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaCadastroComponent } from './categoria-cadastro/categoria-cadastro.component';
import { CategoriaConsultaComponent } from './categoria-consulta/categoria-consulta.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoriaCadastroComponent,
    CategoriaConsultaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    ToastModule,
    ToolbarModule
  ]
})
export class CategoriaModule { }
