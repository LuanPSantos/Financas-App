import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lancamento } from './model/lancamento.model';
import { AuthService } from '../login/auth.service';


@Injectable()
export class LancamentoService {

  constructor(private db: AngularFirestore, private authService: AuthService) {

  }

  salvar(lancamento: Lancamento) {
    this.db.collection(`users/${this.authService.user.uid}/lancamentos`).add(lancamento);
  }

  buscarTodos(currentDate: Date): Observable<Lancamento[]> {
    const date = currentDate;
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    return this.db.collection<Lancamento>(`users/${this.authService.user.uid}/lancamentos`,
      ref => ref
        .where('data', '>=', firstDay)
        .where('data', '<=', lastDay)

    ).snapshotChanges().pipe(
      map((actions) => actions.map((a): Lancamento => {
        const id = a.payload.doc.id;
        const data = a.payload.doc.data();

        const lancamento: Lancamento = { ...data, id: id };
        return lancamento;
      })));
  }

  excluir(lancamento: Lancamento) {
    this.db.doc<Lancamento>(`users/${this.authService.user.uid}/lancamentos/${lancamento.id}`).delete();
  }

  atualizar(lancamento: Lancamento) {
    this.db.doc<Lancamento>(`users/${this.authService.user.uid}/lancamentos/${lancamento.id}`).update(lancamento);
  }
}
