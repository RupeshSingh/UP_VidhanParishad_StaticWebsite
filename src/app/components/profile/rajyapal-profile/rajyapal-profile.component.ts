import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rajyapal-profile',
  templateUrl: './rajyapal-profile.component.html',
  styleUrls: ['./rajyapal-profile.component.css']
})
export class RajyapalProfileComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/profiles/rajyapal.json"
    this.http.get(url).subscribe(data => {
      this.data = data
    })
  }
  ngOnInit(): void {
  }

}






