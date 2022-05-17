import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentoConsultaComponent } from './lancamento-consulta/lancamento-consulta.component';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    LancamentoCadastroComponent,
    LancamentoConsultaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    CardModule,
    AutoCompleteModule,
    InputNumberModule,
    CalendarModule,
    ChipsModule,
    InputMaskModule,
    InputTextModule,
    InputTextareaModule
  ]
})
export class LancamentoModule { }
