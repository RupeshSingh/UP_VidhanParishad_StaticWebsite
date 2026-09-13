import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prashn-avm-sandarbh',
  templateUrl: './prashn-avm-sandarbh.component.html',
  styleUrls: ['./prashn-avm-sandarbh.component.css']
})
export class PrashnAvmSandarbhComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/committees/prashnandsandarbh.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }

  ngOnInit(): void {
  }

}
