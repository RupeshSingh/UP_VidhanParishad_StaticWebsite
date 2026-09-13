import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shri-darbarilal',
  templateUrl: './shri-darbarilal.component.html',
  styleUrls: ['./shri-darbarilal.component.css']
})
export class ShriDarbarilalComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/profiles/ShriDarbarilal.json"
    this.http.get(url).subscribe(data => {
      this.data = data

    })
  }


  ngOnInit(): void {
  }

}
