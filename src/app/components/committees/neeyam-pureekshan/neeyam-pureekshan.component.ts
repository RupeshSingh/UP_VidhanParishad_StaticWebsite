import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-neeyam-pureekshan',
  templateUrl: './neeyam-pureekshan.component.html',
  styleUrls: ['./neeyam-pureekshan.component.css']
})
export class NeeyamPureekshanComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/committees/niyampunrikshan.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }

  ngOnInit(): void {
  }

}
