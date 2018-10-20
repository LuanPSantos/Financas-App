import { Component, OnInit, Input } from '@angular/core';
import { Lancamento } from '../../model/lancamento.model';

@Component({
  selector: 'app-charts-view',
  templateUrl: './charts-view.component.html',
  styleUrls: ['./charts-view.component.css']
})
export class ChartsViewComponent implements OnInit {

  // Pie
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType = 'pie';

  @Input()
  public lancamentos: Lancamento[] = [];

  @Input()
  public categorias = [];

  constructor() { }

  ngOnInit() {
    this.categorias.forEach(categoria => {
      let soma = 0;
      this.lancamentos.filter(lancamento => lancamento.categoria === categoria.value).map(lancamento => lancamento.valor).forEach(valor => {
        soma = soma + valor;
      });

      if (soma > 0) {
        this.pieChartLabels = [...this.pieChartLabels, categoria.label];
        this.pieChartData = [...this.pieChartData, soma];
      }
    });
  }

}
