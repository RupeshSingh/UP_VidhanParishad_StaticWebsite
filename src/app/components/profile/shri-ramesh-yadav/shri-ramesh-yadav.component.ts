import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shri-ramesh-yadav',
  templateUrl: './shri-ramesh-yadav.component.html',
  styleUrls: ['./shri-ramesh-yadav.component.css']
})
export class ShriRameshYadavComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/profiles/ShriRameshYadav.json"
    this.http.get(url).subscribe(data => {
      this.data = data

    })
  }


  ngOnInit(): void {
  }

}
