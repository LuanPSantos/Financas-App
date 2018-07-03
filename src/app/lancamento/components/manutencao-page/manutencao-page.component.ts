import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppState } from '../../../reducers';
import { Store, select } from '@ngrx/store';
import { SalvarLancamento, SalvarAlteracoesLancamento } from '../../actions/lancamento.actions';

import { selectLancamentoEdicao, selectDataConsulta } from '../../selectors/lancamento.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-manutencao-page',
  templateUrl: './manutencao-page.component.html',
  styleUrls: ['./manutencao-page.component.css']
})
export class ManutencaoPageComponent implements OnInit {

  categorias$ = of([
    { label: 'Carro', value: 'Carro' },
    { label: 'Comida', value: 'Comida' },
    { label: 'Educação', value: 'Educação' }
  ]);
  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    this.form = this.fb.group({
      id: new FormControl(null),
      valor: new FormControl(''),
      titulo: new FormControl(''),
      data: new FormControl(new Date()),
      categoria: new FormControl()
    });
  }

  ngOnInit() {
    this.store.pipe(
      select(selectLancamentoEdicao)
    ).subscribe((lancamento) => {
      if (lancamento) {
        this.form.patchValue({ ...lancamento, data: lancamento.data.toDate() });
      }
    });

    this.store.pipe(
      select(selectDataConsulta),
      map((data) => {
        this.form.get('data').setValue(data);
      })
    ).subscribe();
  }

  voltar() {
    this.router.navigateByUrl('home');
  }

  salvar() {
    if (this.form.get('id').value) {
      this.store.dispatch(new SalvarAlteracoesLancamento({ lancamento: this.form.value }));
    } else {
      this.store.dispatch(new SalvarLancamento({ lancamento: this.form.value }));
    }
  }
}
