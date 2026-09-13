import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viniyaman-samiksha',
  templateUrl: './viniyaman-samiksha.component.html',
  styleUrls: ['./viniyaman-samiksha.component.css']
})
export class ViniyamanSamikshaComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/committees/viniyamansamiksha.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }


  ngOnInit(): void {
  }

}
