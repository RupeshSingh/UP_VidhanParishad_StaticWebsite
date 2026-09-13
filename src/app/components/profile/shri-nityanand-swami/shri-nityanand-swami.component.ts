import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shri-nityanand-swami',
  templateUrl: './shri-nityanand-swami.component.html',
  styleUrls: ['./shri-nityanand-swami.component.css']
})
export class ShriNityanandSwamiComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/profiles/ShriNityanandSwami.json"
    this.http.get(url).subscribe(data => {
      this.data = data

    })
  }


  ngOnInit(): void {
  }

}
