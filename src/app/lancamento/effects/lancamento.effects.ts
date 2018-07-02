import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LancamentoActionTypes, CarregarLancamentos, LancamentosCarregados, SalvarLancamento, ExcluirLancamento, SalvarAlteracoesLancamento } from '../actions/lancamento.actions';
import { map, mergeMap, tap } from 'rxjs/operators';
import { LancamentoService } from '../lancamento.service';
import { Router } from '@angular/router';

@Injectable()
export class LancamentoEffects {

  @Effect()
  carregarLancamentos$ = this.actions$
    .pipe(
      ofType<CarregarLancamentos>(LancamentoActionTypes.CarregarLancamentos),
      mergeMap(() => this.lancamentoService.buscarTodos()),
      map((lancamentos) => new LancamentosCarregados({ lancamentos }))
    );

  @Effect({ dispatch: false })
  salvarLancamento$ = this.actions$
    .pipe(
      ofType<SalvarLancamento>(LancamentoActionTypes.SalvarLancamento),
      mergeMap((lancamento) => this.lancamentoService.salvar(lancamento.payload.lancamento)),
      tap(() => this.router.navigateByUrl('home'))// TODO Configurar router-store
    );

  @Effect()
  excluirLancamento$ = this.actions$
    .pipe(
      ofType<ExcluirLancamento>(LancamentoActionTypes.ExcluirLancamento),
      tap((lancamento) => this.lancamentoService.excluir(lancamento.payload.lancamento)),
      map(() => new CarregarLancamentos())
    );

  @Effect({ dispatch: false })
  salvarAlteracoesLancamento$ = this.actions$
    .pipe(
      ofType<SalvarAlteracoesLancamento>(LancamentoActionTypes.SalvarAlteracoesLancamento),
      tap((lancamento) => this.lancamentoService.atualizar(lancamento.payload.lancamento))
    );

  constructor(private actions$: Actions, private lancamentoService: LancamentoService, private router: Router) { }
}
