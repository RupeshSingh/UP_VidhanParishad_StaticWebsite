import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mukhyamantri',
  templateUrl: './mukhyamantri.component.html',
  styleUrls: ['./mukhyamantri.component.css']
})
export class MukhyamantriComponent implements OnInit {
  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/mukhyamantri.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }

  ngOnInit(): void {
  }

}
