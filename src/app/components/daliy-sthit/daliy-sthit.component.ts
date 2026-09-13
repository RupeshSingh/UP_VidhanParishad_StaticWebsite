import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const drawChart: any;
declare const google: any;
@Component({
  selector: 'app-daliy-sthit',
  templateUrl: './daliy-sthit.component.html',
  styleUrls: ['./daliy-sthit.component.css'],
})
export class DaliySthitComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    // drawChart();
  }
  data: any;
  constructor(private http: HttpClient) {
    const url = '/assets/JSON/daliyasthiti.json';
    this.http.get(url).subscribe((data) => {
      // console.warn(data)
      this.data = data;
    });
  }

  ngOnInit(): void {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    //   function drawChart() {
    //       var data = google.visualization.arrayToDataTable([
    //           ['Task', ''],
    //           ['भारतीय जनता पार्टी (79%)', 79],
    //           ['समाजवादी पार्टी (10%)', 10],

    //           ['अपना दल (सोनेलाल) (1%)', 1],
    //           ['निर्बल इण्डियन शोषित हमारा आम दल (1%)', 1],
    //           ['जनसत्‍ता दल लोकतांत्रिक (1%)', 1],
    //           ['राष्ट्रीय लोक दल (1%)', 1],
    //           ['सुहेलदेव भारतीय समाज पार्टी (1%)', 1],
    //           ['शिक्षक दल (गैर राजनीतिक) (1%)', 1],
    //           ['निर्दलीय समूह (2%)', 2],
    //           ['निर्दलीय (2%)', 2],
    //           ['रिक्‍त (1%)', 1]

    //       ]);

    //       var options = { 'title': '' };

    //   }
  }
}
