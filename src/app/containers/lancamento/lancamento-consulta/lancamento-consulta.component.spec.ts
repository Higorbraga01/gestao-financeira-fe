import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoConsultaComponent } from './lancamento-consulta.component';

describe('LancamentoConsultaComponent', () => {
  let component: LancamentoConsultaComponent;
  let fixture: ComponentFixture<LancamentoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancamentoConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
