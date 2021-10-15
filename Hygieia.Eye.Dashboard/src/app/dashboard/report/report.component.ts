import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  displayedColumns: string[] = ['date', 'temperature', 'isAllowed'];
  dataSource: any[] = [
    { date: "2021-10-12 10:12AM", temperature: 'Hydrogen', isAllowed: "Yes" },
    { date: "2021-10-12 10:15AM", temperature: 'Helium', isAllowed: "No" },
    { date: "2021-10-12 11:30AM", temperature: 'Lithium', isAllowed:"Yes" },
    { date: "2021-10-12 01:10PM", temperature: 'Beryllium', isAllowed:"Yes" },
    { date: "2021-10-12 02:13PM", temperature: 'Boron', isAllowed: "Yes" },
    { date: "2021-10-12 02:30PM", temperature: 'Carbon', isAllowed: "Yes" },
    { date: "2021-10-12 02:58PM", temperature: 'Nitrogen', isAllowed: "No" },
    { date: "2021-10-12 03:27PM", temperature: 'Oxygen', isAllowed: "No"},
    { date: "2021-10-12 03:43PM", temperature: 'Fluorine', isAllowed: "No"},
    { date: "2021-10-12 18:12PM", temperature: 'Neon', isAllowed: "No"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
