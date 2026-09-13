import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shri-virendra-bahadur-singh',
  templateUrl: './shri-virendra-bahadur-singh.component.html',
  styleUrls: ['./shri-virendra-bahadur-singh.component.css']
})
export class ShriVirendraBahadurSinghComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/profiles/ShriVirendraBahadurSingh.json"
    this.http.get(url).subscribe(data => {
      this.data = data

    })
  }


  ngOnInit(): void {
  }

}
