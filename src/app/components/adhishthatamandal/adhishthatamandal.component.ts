import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adhishthatamandal',
  templateUrl: './adhishthatamandal.component.html',
  styleUrls: ['./adhishthatamandal.component.css']
})
export class AdhishthatamandalComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/adhishthatamandal.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }

  ngOnInit(): void {
  }

}
