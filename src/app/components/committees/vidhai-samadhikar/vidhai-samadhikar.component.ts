import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vidhai-samadhikar',
  templateUrl: './vidhai-samadhikar.component.html',
  styleUrls: ['./vidhai-samadhikar.component.css']
})
export class VidhaiSamadhikarComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/committees/vidhaisamadhikar.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }

  ngOnInit(): void {
  }

}
