import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppState } from '../../../reducers';
import { Store, select } from '@ngrx/store';
import { AtualizarLancamento } from '../../actions/lancamento.actions';

import { selectLancamentoEdicao, selectDataConsulta } from '../../selectors/lancamento.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-atualizacao',
  templateUrl: './atualizacao.component.html',
  styleUrls: ['./atualizacao.component.css']
})
export class AtualizacaoComponent implements OnInit {

  categorias$ = of([
    { label: 'Carro', value: 'Carro' },
    { label: 'Comida', value: 'Comida' },
    { label: 'Educação', value: 'Educação' },
    { label: 'Lazer', value: 'Lazer' },
    { label: 'Casa', value: 'Casa' },
    { label: 'Cartão de crédio', value: 'Cartão de crédito' },
    { label: 'Imprevistos', value: 'Imprevistos' },
    { label: 'Saúde', value: 'Saúde' },
    { label: 'Outros', value: 'Outros' }
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
      categoria: new FormControl(),
      pago: new FormControl(false)
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
  }

  voltar() {
    this.router.navigateByUrl('app/home');
  }

  salvar() {
      this.store.dispatch(new AtualizarLancamento({ lancamento: this.form.value }));
  }

}
