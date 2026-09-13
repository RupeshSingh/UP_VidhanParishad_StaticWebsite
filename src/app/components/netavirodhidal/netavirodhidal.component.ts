import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-netavirodhidal',
  templateUrl: './netavirodhidal.component.html',
  styleUrls: ['./netavirodhidal.component.css']
})
export class NetavirodhidalComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/netavirodhidal.json"
    this.http.get(url).subscribe(data => {
      this.data = data

    })
  }
  ngOnInit(): void {
  }

}
