import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pramukhsachiv',
  templateUrl: './pramukhsachiv.component.html',
  styleUrls: ['./pramukhsachiv.component.css']
})
export class PramukhsachivComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/pramukhsachiv.json"
    this.http.get(url).subscribe(data => {
      this.data = data

    })
  }

    ngOnInit(): void {
    }
  }



