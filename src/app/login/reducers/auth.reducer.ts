import { AuthActions, AuthActionTypes } from '../actions/auth.actions';
import { User } from '../model/user.model';

export interface AuthState {
  user: User;
}

export const initialState: AuthState = {
  user: null
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {

    case AuthActionTypes.UserChange:
      return {
        ...state,
        user: action.payload.user
      };

    default:
      return state;
  }
}
