import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-cgrafico',
  templateUrl: './cgrafico.component.html',
  styles: []
})
export class CgraficoComponent implements OnInit {

  @Input() Parametros: any;
  public doughnutChartData: number[] = [];
  public doughnutChartLabels: string[] = [];
  public doughnutChartType: string;
  leyenda: string;

  constructor() { 
 
  }


  ngOnInit() {

    this.doughnutChartData = this.Parametros.data;
    this.doughnutChartLabels = this.Parametros.labels;
    this.doughnutChartType = this.Parametros.type;
    this.leyenda =  this.Parametros.leyenda;
    this.doughnutChartData.push(0);

  }

  

}
