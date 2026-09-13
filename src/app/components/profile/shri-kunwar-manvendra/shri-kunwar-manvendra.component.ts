import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shri-kunwar-manvendra',
  templateUrl: './shri-kunwar-manvendra.component.html',
  styleUrls: ['./shri-kunwar-manvendra.component.css']
})
export class ShriKunwarManvendraComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/profiles/ShriKunwarManvendra.json"
    this.http.get(url).subscribe(data => {
      this.data = data

    })
  }


  ngOnInit(): void {
  }

}
