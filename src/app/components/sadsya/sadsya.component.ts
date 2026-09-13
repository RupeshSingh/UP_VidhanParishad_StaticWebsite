import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sadsya',
  templateUrl: './sadsya.component.html',
  styleUrls: ['./sadsya.component.css']
})
export class SadsyaComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/sadasya.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }
  ngOnInit(): void {
  }

}
