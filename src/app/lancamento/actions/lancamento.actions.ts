import { Action } from '@ngrx/store';
import { Lancamento } from '../../shared/models/lancamento.model';

export enum LancamentoActionTypes {
  AddNovoLancamento = '[Home Page] Add Novo Lançamento',
  CarregarLancamentos = '[Home Page] Carregar Lançamentos',
  LancamentosCarregados = '[Lancamentos API] Lançamentos Carregados',
  ExcluirLancamento = '[Popup exclusão de lanamento] Excluir Lançamento',
  EditarLancamento = '[Home Page] Editar Lançamento',
  SalvarLancamento = '[Manutencao Page] Salvar Lançamento',
  SalvarAlteracoesLancamento = '[Manutencao Page] Salvar Alteracoes Lancamento'
}

export class AddNovoLancamento implements Action {
  readonly type = LancamentoActionTypes.AddNovoLancamento;
}

export class CarregarLancamentos implements Action {
  readonly type = LancamentoActionTypes.CarregarLancamentos;
}

export class LancamentosCarregados implements Action {
  readonly type = LancamentoActionTypes.LancamentosCarregados;

  constructor(public payload: { lancamentos: Lancamento[] }) { }
}

export class ExcluirLancamento implements Action {
  readonly type = LancamentoActionTypes.ExcluirLancamento;

  constructor(public payload: { lancamento: Lancamento }) { }
}

export class EditarLancamento implements Action {
  readonly type = LancamentoActionTypes.EditarLancamento;

  constructor(public payload: { lancamento: Lancamento }) { }
}

export class SalvarLancamento implements Action {
  readonly type = LancamentoActionTypes.SalvarLancamento;

  constructor(public payload: { lancamento: Lancamento }) { }
}

export class SalvarAlteracoesLancamento implements Action {
  readonly type = LancamentoActionTypes.SalvarAlteracoesLancamento;

  constructor(public payload: { lancamento: Lancamento }) { }
}

export type LancamentoActions =
  AddNovoLancamento
  | CarregarLancamentos
  | LancamentosCarregados
  | ExcluirLancamento
  | EditarLancamento
  | SalvarLancamento
  | SalvarAlteracoesLancamento;
