import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';

@NgModule({
    imports: [
        StoreModule.forFeature('auth', fromAuth.authReducer),
        EffectsModule.forFeature([AuthEffects]),
        CommonModule,
        LoginRoutingModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
        MatButtonModule
    ],
    declarations: [LoginComponent],
    providers: [AuthService]
})
export class LoginModule { }
