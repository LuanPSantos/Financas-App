import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lancamento } from '../shared/models/lancamento.model';
import { AngularFirestore } from 'angularfire2/firestore';
import {  } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable()
export class LancamentoService {

  constructor(private db: AngularFirestore) {

  }

  salvar(lancamento: Lancamento): Observable<void> {
    this.db.collection('lancamentos').add(lancamento);
    return of();
  }

  buscarTodos(): Observable<Lancamento[]> {
    return this.db.collection<Lancamento>('lancamentos').snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          let id = a.payload.doc.id;
          let data = a.payload.doc.data();

          return {id : id, ...data};
        });
      })
    );
  }

  excluir(lancamento: Lancamento){
    this.db.doc('lancamentos/' + lancamento.id).delete();
  }

  atualizar(lancamento: Lancamento){
    this.db.doc('lancamentos/' + lancamento.id).update(lancamento);
  }
}
