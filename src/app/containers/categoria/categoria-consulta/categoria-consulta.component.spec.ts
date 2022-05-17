import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaConsultaComponent } from './categoria-consulta.component';

describe('CategoriaConsultaComponent', () => {
  let component: CategoriaConsultaComponent;
  let fixture: ComponentFixture<CategoriaConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
