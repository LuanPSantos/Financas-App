import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemLancamentosComponent } from './listagem-lancamentos.component';

describe('ListagemLancamentosComponent', () => {
  let component: ListagemLancamentosComponent;
  let fixture: ComponentFixture<ListagemLancamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemLancamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemLancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
