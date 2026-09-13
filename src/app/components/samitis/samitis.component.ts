import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-samiti',
  templateUrl: './samitis.component.html',
  styles:[`li.active{color:#fff;background-color:#007bff}`]
})
export class SamitisComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/samitiyanByName.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }

  ngOnInit(): void {
  }

}
