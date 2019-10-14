import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lancamento } from '../../model/lancamento.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-listagem-lancamentos',
  templateUrl: './listagem-lancamentos.component.html',
  styleUrls: ['./listagem-lancamentos.component.css']
})
export class ListagemLancamentosComponent implements OnInit {

  constructor() { }

  @Input()
  public lancamentos: Lancamento[] = [];
  @Output()
  public onOpenDialog: EventEmitter<Lancamento> = new EventEmitter();
  @Output()
  public onEditar: EventEmitter<Lancamento> = new EventEmitter();
  @Output()
  public onTogglePago: EventEmitter<Lancamento> = new EventEmitter();

  pago = new FormControl(true);

  ngOnInit() {
  }

  openDialog(lancamento) {
    this.onOpenDialog.emit(lancamento);
  }

  editar(lancamento) {
    this.onEditar.emit(lancamento);
  }

  togglePago(event, lancamento) {
    lancamento = {
      ...lancamento,
      pago: event.checked
    };
    this.onTogglePago.emit(lancamento);
  }

}
