import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lancamento } from '../shared/models/lancamento.model';
import { AngularFirestore } from 'angularfire2/firestore';
import {  } from 'rxjs';


@Injectable()
export class LancamentoService {

  constructor(private db: AngularFirestore) {

  }

  salvar(lancamento: Lancamento): Observable<void> {
    this.db.collection('lancamentos').add(lancamento);
    return of();
  }

  buscarTodos(): Observable<Lancamento[]> {
    return this.db.collection<Lancamento>('lancamentos').valueChanges();
  }
}
