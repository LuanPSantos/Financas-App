import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromLancamento from './reducers/lancamento.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LancamentoEffects } from './effects/lancamento.effects';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { DialogoConfirmacaoExclusaoComponent } from './components/dialogo-confirmacao-exclusao/dialogo-confirmacao-exclusao.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { LancamentoService } from './lancamento.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AtualizacaoComponent } from './components/atualizacao/atualizacao.component';
import { LancamentoRoutingModule } from './lancamento-routing.module';
import { ChartsModule } from 'ng2-charts';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('lancamento', fromLancamento.lancamentoReducer),
    EffectsModule.forFeature([LancamentoEffects]),

    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    MatSlideToggleModule,
    LancamentoRoutingModule,
    ChartsModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    DashboardPageComponent,
    HomePageComponent,
    DialogoConfirmacaoExclusaoComponent,
    CadastroComponent,
    AtualizacaoComponent
  ],
  entryComponents: [
    DialogoConfirmacaoExclusaoComponent
  ],
  providers: [
    LancamentoService
  ]
})
export class LancamentoModule { }
