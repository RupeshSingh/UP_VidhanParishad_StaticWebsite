import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shri-shiv-prasad',
  templateUrl: './shri-shiv-prasad.component.html',
  styleUrls: ['./shri-shiv-prasad.component.css']
})
export class ShriShivPrasadComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/profiles/ShriShivPrasad.json"
    this.http.get(url).subscribe(data => {
      this.data = data

    })
  }


  ngOnInit(): void {
  }

}
