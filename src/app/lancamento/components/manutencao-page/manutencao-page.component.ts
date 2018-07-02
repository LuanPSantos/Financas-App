import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppState } from '../../../reducers';
import { Store } from '@ngrx/store';
import { SalvarLancamento } from '../../actions/lancamento.actions';
import { firestore } from 'firebase';

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
      valor: new FormControl(''),
      titulo: new FormControl(''),
      data: new FormControl(new Date()),
      categoria: new FormControl()
    });
  }

  ngOnInit() {
  }

  voltar() {
    this.router.navigateByUrl('home');
  }

  salvar() {
    this.store.dispatch(new SalvarLancamento({ lancamento: this.form.value }));
  }
}
