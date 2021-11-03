import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { CountService } from 'src/app/_core/services/api/count.service';

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

  startDate: string = "";
  endDate: string = "";

  counts: any = {
    allRejected: 28,
    onBoard: 98,
    visited: 18,
    tempRejected: 20,
    maskRejected: 8
  }

  constructor(
    private countService: CountService
  ) { }

  ngOnInit(): void {
    // setInterval(() => {
      this.getCount();
    // }, 1000)
  }
  getCount() {
    this.countService.getCount()
      .subscribe(
        (res) => {
          this.counts = res;
        }
      );
  }

}
