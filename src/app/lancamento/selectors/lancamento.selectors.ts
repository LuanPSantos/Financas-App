import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LancamentoState, lancamentoReducer } from '../reducers/lancamento.reducer';

export const selectLancamentoState = createFeatureSelector<LancamentoState>('lancamento');

export const selectLancamentos = createSelector(
  selectLancamentoState,
  (lancamentoState) => lancamentoState.lancamentos
);

export const selectDataConsulta = createSelector(
  selectLancamentoState,
  (lancamentoState) => lancamentoState.data
);

export const selectLancamentoEdicao = createSelector(
  selectLancamentoState,
  (lancamentoState) => lancamentoState.lancamentoASerEditado
);
