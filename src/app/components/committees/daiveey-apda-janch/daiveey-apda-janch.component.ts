import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-daiveey-apda-janch',
  templateUrl: './daiveey-apda-janch.component.html',
  styleUrls: ['./daiveey-apda-janch.component.css']
})
export class DaiveeyApdaJanchComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/committees/daivikapda.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }

  ngOnInit(): void {
  }

}
