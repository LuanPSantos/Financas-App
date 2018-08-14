import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './lancamento/components/home-page/home-page.component';
import { CadastroComponent } from './lancamento/components/cadastro/cadastro.component';
import { AtualizacaoComponent } from './lancamento/components/atualizacao/atualizacao.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'edicao', component: AtualizacaoComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
