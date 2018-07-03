import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Lancamento } from '../../../shared/models/lancamento.model';
import { LancamentoState } from '../../reducers/lancamento.reducer';
import { CarregarLancamentos, EditarLancamento, AtualizarData } from '../../actions/lancamento.actions';
import { selectLancamentos, selectDataConsulta } from '../../selectors/lancamento.selectors';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacaoExclusaoComponent } from '../dialogo-confirmacao-exclusao/dialogo-confirmacao-exclusao.component';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  lancamentos$: Observable<Lancamento[]>;
  data: Date;
  total = 0;

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
    this.lancamentos$ = this.store.pipe(
      select(selectLancamentos)
    );

    this.store.pipe(
      select(selectDataConsulta),
      map((data) => {
        this.store.dispatch(new CarregarLancamentos({ data }));
        this.data = new Date(data.getTime());
      })
    ).subscribe();

    this.lancamentos$.subscribe((lancamentos) => {
      if (lancamentos.length > 0) {
        this.total = lancamentos.map(c => c.valor).reduce((sum, current) => sum + current);
      } else {
        this.total = 0;
      }
    });
  }

  editar(lancamento: Lancamento) {
    this.store.dispatch(new EditarLancamento({ lancamento: lancamento }));
    this.router.navigateByUrl('manutencao');
  }

  adicionar() {
    this.router.navigateByUrl('manutencao');
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
}
