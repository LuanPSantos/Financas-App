import { LancamentoActionTypes, LancamentoActions } from '../actions/lancamento.actions';
import { Lancamento } from '../../shared/models/lancamento.model';

export interface LancamentoState {
  data: Date;
  lancamentos: Lancamento[];
  lancamentoASerExcluido: Lancamento;
  lancamentoASerEditado: Lancamento;
}

export const initialState: LancamentoState = {
  data: new Date(),
  lancamentos: [],
  lancamentoASerExcluido: null,
  lancamentoASerEditado: null
};

export function lancamentoReducer(state = initialState, action: LancamentoActions): LancamentoState {
  switch (action.type) {
    case LancamentoActionTypes.LancamentosCarregados: {
      return {
        ...state,
        lancamentoASerEditado: null,
        lancamentoASerExcluido: null,
        lancamentos: action.payload.lancamentos
      };
    }
    case LancamentoActionTypes.ExcluirLancamento: {
      return {
        ...state,
        lancamentoASerExcluido: action.payload.lancamento
      };
    }
    case LancamentoActionTypes.EditarLancamento: {
      return {
        ...state,
        lancamentoASerEditado: action.payload.lancamento
      };
    }
    default: {
      return state;
    }
  }
}
