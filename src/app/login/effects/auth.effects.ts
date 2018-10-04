import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, Login, UserChange } from '../actions/auth.actions';
import { tap, map, mergeMap, take } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { from, merge } from 'rxjs';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthEffects {

  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    tap(() => from(this.authService.googleLogin()).pipe(
      mergeMap(() => this.afAuth.authState),
      take(1),
      tap((user) => this.store.dispatch(new UserChange({ user }))),
      tap(() => this.router.navigateByUrl('app/home'))
    ).subscribe())
  );

  @Effect({ dispatch: false})
  userChange$ = this.actions$.pipe(
    ofType<UserChange>(AuthActionTypes.UserChange),
    tap((action) => this.authService.user = action.payload.user)
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router,
    private afAuth: AngularFireAuth) { }
}
