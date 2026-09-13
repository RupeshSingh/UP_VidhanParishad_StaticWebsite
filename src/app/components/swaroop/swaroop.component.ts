import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-swaroop',
  templateUrl: './swaroop.component.html',
  styleUrls: ['./swaroop.component.css']
})
export class SwaroopComponent implements OnInit {
  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/swaroop.json"
    this.http.get(url).subscribe(data=>{
      this.data=data
    })
  }

  ngOnInit(): void {
  }

}
