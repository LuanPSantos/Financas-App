import { Action } from '@ngrx/store';
import { User } from 'firebase';

export enum AuthActionTypes {
  UserChange = '[Auth] User change',
  Login = '[Auth] Login',
  Logout = '[Auth] Logout'
}

export class UserChange implements Action {
  readonly type = AuthActionTypes.UserChange;

  constructor(public payload: { user: User }) { }
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActions = UserChange | Login | Logout;
