import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sadsyaaddress',
  templateUrl: './sadsyaaddress.component.html',
  styleUrls: ['./sadsyaaddress.component.css']
})
export class SadsyaaddressComponent implements OnInit {
  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/sadasyaaddress.json"
    this.http.get(url).subscribe(data=>{
      console.warn(data)
      this.data=data
    })
  }

  ngOnInit(): void {
  }

}
