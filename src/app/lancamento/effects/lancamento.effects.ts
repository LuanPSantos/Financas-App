import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  LancamentoActionTypes,
  CarregarLancamentos,
  LancamentosCarregados,
  SalvarLancamento,
  ExcluirLancamento,
  AtualizarLancamento,
  AtualizarData
} from '../actions/lancamento.actions';
import { map, mergeMap, tap } from 'rxjs/operators';
import { LancamentoService } from '../lancamento.service';
import { AppState } from '../../reducers';
import { Store, select } from '@ngrx/store';
import { selectDataConsulta } from '../selectors/lancamento.selectors';

@Injectable()
export class LancamentoEffects {

  @Effect()
  carregarLancamentos$ = this.actions$
    .pipe(
      ofType<CarregarLancamentos>(LancamentoActionTypes.CarregarLancamentos),
      mergeMap((action) => this.lancamentoService.buscarTodos(action.payload.data)),
      map((lancamentos) => {
        return new LancamentosCarregados({ lancamentos });
      })
    );

  @Effect({ dispatch: false })
  salvarLancamento$ = this.actions$
    .pipe(
      ofType<SalvarLancamento>(LancamentoActionTypes.SalvarLancamento),
      tap((action) => this.lancamentoService.salvar(action.payload.lancamento))
    );

  @Effect({ dispatch: false })
  excluirLancamento$ = this.actions$
    .pipe(
      ofType<ExcluirLancamento>(LancamentoActionTypes.ExcluirLancamento),
      map((action) => this.lancamentoService.excluir(action.payload.lancamento)),
      tap(() => {
        this.store.pipe(
          select(selectDataConsulta),
          map((data) => new CarregarLancamentos({ data }))
        );
      })
    );

  @Effect({ dispatch: false })
  atualizarLancamento$ = this.actions$
    .pipe(
      ofType<AtualizarLancamento>(LancamentoActionTypes.AtualizarLancamento),
      tap((action) => this.lancamentoService.atualizar(action.payload.lancamento))
    );

  @Effect()
  atualizarData$ = this.actions$
    .pipe(
      ofType<AtualizarData>(LancamentoActionTypes.AtualizarData),
      map((action) => new CarregarLancamentos({ data: action.payload.data }))
    );

  constructor(
    private actions$: Actions,
    private lancamentoService: LancamentoService,
    private store: Store<AppState>) { }
}
