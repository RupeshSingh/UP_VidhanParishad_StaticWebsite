import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rajyapal',
  templateUrl: './rajyapal.component.html',
  styleUrls: ['./rajyapal.component.css']
})
export class RajyapalComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/rajyapal.json"
    this.http.get(url).subscribe(data=>{
    // console.warn(data)
    this.data=data

  })

}

  ngOnInit(): void {
  }

}
