import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LancamentoState } from '../../reducers/lancamento.reducer';
import { selectLancamentos } from '../../selectors/lancamento.selectors';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  total$: Observable<number> = of(0);
  pago$: Observable<number> = of(0);
  restante$: Observable<number> = of(0);

  @Output()
  public onTrocarVisualizacao: EventEmitter<boolean> = new EventEmitter();

  private verLista: boolean = true;

  constructor(private store: Store<LancamentoState>) { }

  ngOnInit() {
    this.total$ = this.store.pipe(
      select(selectLancamentos),
      map((lancamentos) => {
        if (lancamentos.length > 0) {
          return lancamentos.map(c => c.valor).reduce((sum, current) => sum + current);
        } else {
          return 0;
        }
      })
    );

    this.pago$ = this.store.pipe(
      select(selectLancamentos),
      map((lancamentos) => {
        const filtered = lancamentos.filter(l => l.pago);
        if (lancamentos.length > 0 && filtered.length > 0) {
          return filtered.map(c => c.valor).reduce((sum, current) => sum + current);
        } else {
          return 0;
        }
      })
    );

    this.restante$ = this.store.pipe(
      select(selectLancamentos),
      map((lancamentos) => {
        const filtered = lancamentos.filter(l => !l.pago);
        if (lancamentos.length > 0 && filtered.length > 0) {
          return filtered.map(c => c.valor).reduce((sum, current) => sum + current);
        } else {
          return 0;
        }
      })
    );
  }

  trocarVisualizacao(){
    this.verLista = !this.verLista;
    this.onTrocarVisualizacao.emit(this.verLista);
  }
}
