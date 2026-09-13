import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shri-raghunath-vinayak',
  templateUrl: './shri-raghunath-vinayak.component.html',
  styleUrls: ['./shri-raghunath-vinayak.component.css']
})
export class ShriRaghunathVinayakComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/profiles/ShriRaghunathVinayak.json"
    this.http.get(url).subscribe(data => {
      this.data = data

    })
  }


  ngOnInit(): void {
  }

}
