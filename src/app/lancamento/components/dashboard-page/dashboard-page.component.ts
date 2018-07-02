import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LancamentoState } from '../../reducers/lancamento.reducer';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  constructor(private store: Store<LancamentoState>) { }

  ngOnInit() {
  }

}
