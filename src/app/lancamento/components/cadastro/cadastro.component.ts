import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppState } from '../../../reducers';
import { Store, select } from '@ngrx/store';
import { SalvarLancamento, AtualizarLancamento } from '../../actions/lancamento.actions';

import { selectDataConsulta } from '../../selectors/lancamento.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

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

  parcelas = 1;

  form: FormGroup;
  formParcelas: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    this.form = this.fb.group({
      id: new FormControl(null),
      valor: new FormControl('', [Validators.required]),
      titulo: new FormControl('', [Validators.required]),
      data: new FormControl(new Date(), Validators.required),
      categoria: new FormControl(null, Validators.required),
      pago: new FormControl(false)
    });

    this.formParcelas = this.fb.group({
      parcelas: new FormControl(1, [Validators.min(1), Validators.required])
    });
  }

  ngOnInit() {
    this.store.pipe(
      select(selectDataConsulta),
      map((data) => {
        this.form.get('data').setValue(data);
      })
    ).subscribe();
  }

  voltar() {
    this.router.navigateByUrl('app/home');
  }

  salvar() {
    this.dispatchEvents();
    this.form.reset();
    this.formParcelas.reset();
    this.router.navigateByUrl('app/home');
  }

  dispatchEvents() {
    const parcelas = this.formParcelas.get('parcelas').value;
    for (let i = 1; i <= this.formParcelas.get('parcelas').value; i++) {
      const data: Date = this.form.get('data').value;
      let pago = this.form.get('pago').value;

      if (i > 1) {
        pago = false;
        data.setDate(1);
        data.setMonth(data.getMonth() + 1);
      }


      const lancamento = {
        ...this.form.value,
        data: data,
        pago: pago,
        parcelas: parcelas,
        parcela: i
      };

      this.store.dispatch(new SalvarLancamento({ lancamento: lancamento }));
    }
  }
}
