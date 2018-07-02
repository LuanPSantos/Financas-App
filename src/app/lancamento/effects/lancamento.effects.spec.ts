import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LancamentoEffects } from './lancamento.effects';

describe('LancamentoService', () => {
  let actions$: Observable<any>;
  let effects: LancamentoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LancamentoEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(LancamentoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
