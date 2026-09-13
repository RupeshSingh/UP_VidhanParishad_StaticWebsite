import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mukhyamantri-profile',
  templateUrl: './mukhyamantri-profile.component.html',
  styleUrls: ['./mukhyamantri-profile.component.css']
})
export class MukhyamantriProfileComponent implements OnInit {
  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/profiles/mukhyamantri.json"
    this.http.get(url).subscribe(data => {
      this.data = data
})
}

  ngOnInit(): void {
  }

}
