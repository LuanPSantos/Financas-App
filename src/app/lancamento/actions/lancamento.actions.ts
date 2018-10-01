import { Action } from '@ngrx/store';
import { Lancamento } from '../model/lancamento.model';

export enum LancamentoActionTypes {
  AddNovoLancamento = '[Página home] Add Novo Lançamento',
  CarregarLancamentos = '[Página home] Carregar Lançamentos',
  LancamentosCarregados = '[Lancamentos API] Lançamentos Carregados',
  ExcluirLancamento = '[Popup de exclusão de lanamento] Excluir Lançamento',
  EditarLancamento = '[Página Home] Editar Lançamento',
  SalvarLancamento = '[Página de manutenção] Salvar Lançamento',
  AtualizarLancamento = '[Página de manutenção de lançamentos] Atualizar Lancamento',
  AtualizarData = '[Página Home] Atualizar Data'
}

export class AddNovoLancamento implements Action {
  readonly type = LancamentoActionTypes.AddNovoLancamento;
}

export class CarregarLancamentos implements Action {
  readonly type = LancamentoActionTypes.CarregarLancamentos;

  constructor(public payload: { data: Date }) { }
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

export class AtualizarLancamento implements Action {
  readonly type = LancamentoActionTypes.AtualizarLancamento;

  constructor(public payload: { lancamento: Lancamento }) { }
}

export class AtualizarData implements Action {
  readonly type = LancamentoActionTypes.AtualizarData;

  constructor(public payload: { data: Date }) { }
}

export type LancamentoActions =
  AddNovoLancamento
  | CarregarLancamentos
  | LancamentosCarregados
  | ExcluirLancamento
  | EditarLancamento
  | SalvarLancamento
  | AtualizarLancamento
  | AtualizarData;
