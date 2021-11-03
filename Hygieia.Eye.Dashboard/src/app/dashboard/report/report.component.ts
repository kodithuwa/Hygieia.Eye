import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  displayedColumns: string[] = ['date', 'temperature', 'isAllowed'];
  dataSource: any[] = [
    { date: "2021-10-12 10:12AM", temperature: '34C', isAllowed: "Yes" },
    { date: "2021-10-12 10:15AM", temperature: '32C', isAllowed: "No" },
    { date: "2021-10-12 11:30AM", temperature: '36C', isAllowed:"Yes" },
    { date: "2021-10-12 01:10PM", temperature: '35.5C', isAllowed:"Yes" },
    { date: "2021-10-12 02:13PM", temperature: '37.3C', isAllowed: "Yes" },
    { date: "2021-10-12 02:30PM", temperature: '30.9C', isAllowed: "Yes" },
    { date: "2021-10-12 02:58PM", temperature: '33.5C', isAllowed: "No" },
    { date: "2021-10-12 03:27PM", temperature: '31C', isAllowed: "No"},
    { date: "2021-10-12 03:43PM", temperature: '36.6C', isAllowed: "No"},
    { date: "2021-10-12 18:12PM", temperature: '33.2C', isAllowed: "No"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
