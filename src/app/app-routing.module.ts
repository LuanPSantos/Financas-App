import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './lancamento/components/home-page/home-page.component';
import { ManutencaoPageComponent } from './lancamento/components/manutencao-page/manutencao-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'manutencao', component: ManutencaoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
