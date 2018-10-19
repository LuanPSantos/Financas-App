import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lancamento } from '../../model/lancamento.model';

@Component({
  selector: 'app-listagem-lancamentos',
  templateUrl: './listagem-lancamentos.component.html',
  styleUrls: ['./listagem-lancamentos.component.css']
})
export class ListagemLancamentosComponent implements OnInit {

  constructor() { }

  @Input()
  public naoEstaCarregando: boolean = false;

  @Input()
  public lancamentos: Lancamento[] = [];

  @Output()
  public onOpenDialog: EventEmitter<Lancamento> = new EventEmitter();

  @Output()
  public onEditar: EventEmitter<Lancamento> = new EventEmitter();

  ngOnInit() {
  }

  openDialog(lancamento){
    this.onOpenDialog.emit(lancamento);
  }

  editar(lancamento){
    this.onEditar.emit(lancamento);
  }

}
