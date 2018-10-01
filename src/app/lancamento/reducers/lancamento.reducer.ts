import { LancamentoActionTypes, LancamentoActions } from '../actions/lancamento.actions';
import { Lancamento } from '../model/lancamento.model';

export interface LancamentoState {
  data: Date;
  lancamentos: Lancamento[];
  lancamentoASerEditado: Lancamento;
}

export const initialState: LancamentoState = {
  data: new Date(),
  lancamentos: [],
  lancamentoASerEditado: null,
};

export function lancamentoReducer(state = initialState, action: LancamentoActions): LancamentoState {
  switch (action.type) {
    case LancamentoActionTypes.LancamentosCarregados: {
      return {
        ...state,
        lancamentoASerEditado: null,
        lancamentos: action.payload.lancamentos
      };
    }
    case LancamentoActionTypes.EditarLancamento: {
      return {
        ...state,
        lancamentoASerEditado: action.payload.lancamento
      };
    }
    case LancamentoActionTypes.AtualizarData: {
      return {
        ...state,
        data: action.payload.data
      };
    }
    default: {
      return state;
    }
  }
}
