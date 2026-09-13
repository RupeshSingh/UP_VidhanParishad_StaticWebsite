import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pithaseen',
  templateUrl: './pithaseen.component.html',
  styleUrls: ['./pithaseen.component.css']
})
export class PithaseenComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/pithasinadhikari.json"
    this.http.get(url).subscribe(data => {
      // console.warn(data)
      this.data = data
    })
  }

  ngOnInit(): void {
  }


}
