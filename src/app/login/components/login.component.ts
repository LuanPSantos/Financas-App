import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import { Login } from '../actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router, private store: Store<AppState>) { }

  ngOnInit() {

  }

  onLogin() {
    this.store.dispatch(new Login());
    // this.auth.googleLogin().then(() => {
    //   this.router.navigateByUrl('/app/home');
    // });
  }
}
