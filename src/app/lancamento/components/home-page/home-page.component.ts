import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Lancamento } from '../../../shared/models/lancamento.model';
import { LancamentoState } from '../../reducers/lancamento.reducer';
import { CarregarLancamentos, ExcluirLancamento, EditarLancamento } from '../../actions/lancamento.actions';
import { selectLancamentos, selectDataConsulta } from '../../selectors/lancamento.selectors';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacaoExclusaoComponent } from '../dialogo-confirmacao-exclusao/dialogo-confirmacao-exclusao.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  lancamentos$: Observable<Lancamento[]>;
  data$: Observable<Date>;
  total = 1234.28;

  constructor(
    private router: Router,
    private store: Store<LancamentoState>,
    public dialog: MatDialog) { }

  openDialog(lancamento: Lancamento): void {
    this.dialog.open(DialogoConfirmacaoExclusaoComponent, {
      width: '230px',
      height: '150px',
      data: { lancamento: lancamento }
    });
  }

  ngOnInit() {
    this.store.dispatch(new CarregarLancamentos());

    this.lancamentos$ = this.store.pipe(
      select(selectLancamentos)
    );

    this.data$ = this.store.pipe(
      select(selectDataConsulta)
    );

    // this.lancamentos$.subscribe((lancamentos) => {
    //   this.total = lancamentos.map(c => c.valor).reduce((sum, current) => sum + current);
    // });
  }

  editar(lancamento: Lancamento) {
    this.store.dispatch(new EditarLancamento({ lancamento: lancamento }));
    this.router.navigateByUrl('manutencao');
  }

  adicionar() {
    this.router.navigateByUrl('manutencao');
  }

  mesAnterior() {
    console.log('Mes atenrior');
  }

  proximoMes() {
    console.log('Proximo Mes');
  }

}
