/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TipoLancamentoService } from './tipo-lancamento.service';

describe('Service: TipoLancamento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoLancamentoService]
    });
  });

  it('should ...', inject([TipoLancamentoService], (service: TipoLancamentoService) => {
    expect(service).toBeTruthy();
  }));
});
