import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upsabhapati',
  templateUrl: './upsabhapati.component.html',
  styleUrls: ['./upsabhapati.component.css']
})
export class UpsabhapatiComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/upsabhapati.json"
    this.http.get(url).subscribe(data => {
      this.data = data
    })
  }

  ngOnInit(): void {
  }

}
