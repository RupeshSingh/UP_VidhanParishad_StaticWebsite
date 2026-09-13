import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sansadeey-avm-samajik-sadbhav',
  templateUrl: './sansadeey-avm-samajik-sadbhav.component.html',
  styleUrls: ['./sansadeey-avm-samajik-sadbhav.component.css']
})
export class SansadeeyAvmSamajikSadbhavComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/committees/sansadiyandsamajiksadbhaw.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }

  ngOnInit(): void {
  }

}
