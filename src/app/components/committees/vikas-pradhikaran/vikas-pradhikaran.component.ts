import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vikas-pradhikaran',
  templateUrl: './vikas-pradhikaran.component.html',
  styleUrls: ['./vikas-pradhikaran.component.css']
})
export class VikasPradhikaranComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/committees/vikashpradhikaran.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }

  ngOnInit(): void {
  }

}
