import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ashwashan',
  templateUrl: './ashwashan.component.html',
  styleUrls: ['./ashwashan.component.css']
})
export class AshwashanComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/committees/ashwasan.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }

  ngOnInit(): void {
  }

}
