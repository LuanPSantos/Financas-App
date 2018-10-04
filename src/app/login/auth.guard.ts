import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { UserChange } from './actions/auth.actions';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router, private store: Store<AppState>) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.afAuth.authState.pipe(
      take(1),
      tap((user) => {
        if (!!user) {
          this.store.dispatch(new UserChange({ user }));
        }
      }),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('access denied');
          this.router.navigateByUrl('login');
        }
      })
    );
  }
}
