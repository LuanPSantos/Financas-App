import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngrx/store';
import { LancamentoState } from '../../reducers/lancamento.reducer';
import { ExcluirLancamento } from '../../actions/lancamento.actions';
import { Lancamento } from '../../model/lancamento.model';

@Component({
  selector: 'app-dialogo-confirmacao-exclusao',
  templateUrl: './dialogo-confirmacao-exclusao.component.html',
  styleUrls: ['./dialogo-confirmacao-exclusao.component.css']
})
export class DialogoConfirmacaoExclusaoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogoConfirmacaoExclusaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { lancamento: Lancamento },
    private store: Store<LancamentoState>
  ) { }

  nao(): void {
    this.dialogRef.close();
  }

  sim(): void {
    this.store.dispatch(new ExcluirLancamento({ lancamento: this.data.lancamento }));
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
