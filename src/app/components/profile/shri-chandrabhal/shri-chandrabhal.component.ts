import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shri-chandrabhal',
  templateUrl: './shri-chandrabhal.component.html',
  styleUrls: ['./shri-chandrabhal.component.css']
})
export class ShriChandrabhalComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/profiles/ShriChandrabhal.json"
    this.http.get(url).subscribe(data => {
      this.data = data

    })
  }


  ngOnInit(): void {
  }

}

