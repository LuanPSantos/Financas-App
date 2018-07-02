import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoConfirmacaoExclusaoComponent } from './dialogo-confirmacao-exclusao.component';

describe('DialogoConfirmacaoExclusaoComponent', () => {
  let component: DialogoConfirmacaoExclusaoComponent;
  let fixture: ComponentFixture<DialogoConfirmacaoExclusaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoConfirmacaoExclusaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoConfirmacaoExclusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
