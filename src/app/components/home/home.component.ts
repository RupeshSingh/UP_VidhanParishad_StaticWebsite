import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const columnchart: any;
declare const google: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {}
  constructor() {}

  ngOnInit(): void {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(columnchart);
  }
}
