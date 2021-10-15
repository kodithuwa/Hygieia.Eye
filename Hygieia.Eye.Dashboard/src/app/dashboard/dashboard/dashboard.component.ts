import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['21', '22', '23', '24', '25', '26', '27'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Rejected' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Visited' }
  ];

  startDate:string="";
  endDate:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
