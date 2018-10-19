import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Lancamento } from '../../model/lancamento.model';
import { LancamentoState } from '../../reducers/lancamento.reducer';
import { CarregarLancamentos, EditarLancamento, AtualizarData } from '../../actions/lancamento.actions';
import { selectLancamentos, selectDataConsulta, estaCarregandoLancamentos, naoEstaCarregandoLancamentos } from '../../selectors/lancamento.selectors';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacaoExclusaoComponent } from '../dialogo-confirmacao-exclusao/dialogo-confirmacao-exclusao.component';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from '../../../login/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  lancamentos$: Observable<Lancamento[]>;
  estaCarregando$: Observable<boolean>;
  naoEstaCarregando$: Observable<boolean>;
  data: Date;
  verLista: boolean = true;

  constructor(
    private router: Router,
    private store: Store<LancamentoState>,
    public dialog: MatDialog,
    public auth: AuthService) { }

  openDialog(lancamento: Lancamento): void {
    this.dialog.open(DialogoConfirmacaoExclusaoComponent, {
      width: '230px',
      height: '150px',
      data: { lancamento: lancamento }
    });
  }

  ngOnInit() {
    this.carregarLancamentos();
    this.buscarLancamentos();  
    this.observarCarregamentoLancamentos();  
  }

  carregarLancamentos(){
    this.store.pipe(
      select(selectDataConsulta),
      map((data) => {
        this.store.dispatch(new CarregarLancamentos({ data }));
        this.data = new Date(data.getTime());
      })
    ).subscribe();
  }

  buscarLancamentos(){
    this.lancamentos$ = this.store.pipe(
      select(selectLancamentos)
    );
  }

  observarCarregamentoLancamentos(){
    this.estaCarregando$ = this.store.pipe(
      select(estaCarregandoLancamentos)
    );

    this.naoEstaCarregando$ = this.store.pipe(
      select(naoEstaCarregandoLancamentos)
    )
  }

  editar(lancamento: Lancamento) {
    this.store.dispatch(new EditarLancamento({ lancamento: lancamento }));
    this.router.navigateByUrl('app/edicao');
  }

  adicionar() {
    this.router.navigateByUrl('app/cadastro');
  }

  mesAnterior() {
    this.data.setDate(1);
    this.data.setMonth(this.data.getMonth() - 1);

    this.store.dispatch(new AtualizarData({ data: this.data }));
  }

  proximoMes() {
    this.data.setDate(1);
    this.data.setMonth(this.data.getMonth() + 1);

    this.store.dispatch(new AtualizarData({ data: this.data }));
  }

  onLogout() {
    this.auth.signOut();
  }

  trocarVisualizacao(verLista){
    this.verLista = verLista;
  }
}
