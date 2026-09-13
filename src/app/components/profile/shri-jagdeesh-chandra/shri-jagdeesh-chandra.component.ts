import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shri-jagdeesh-chandra',
  templateUrl: './shri-jagdeesh-chandra.component.html',
  styleUrls: ['./shri-jagdeesh-chandra.component.css']
})
export class ShriJagdeeshChandraComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/profiles/ShriJagdeeshChandra.json"
    this.http.get(url).subscribe(data => {
      this.data = data

    })
  }


  ngOnInit(): void {
  }

}
