import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visheshadhikar',
  templateUrl: './visheshadhikar.component.html',
  styleUrls: ['./visheshadhikar.component.css']
})
export class VisheshadhikarComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/committees/visheshadhikar.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }

  ngOnInit(): void {
  }

}
