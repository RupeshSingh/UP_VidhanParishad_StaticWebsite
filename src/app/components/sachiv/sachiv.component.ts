import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sachiv',
  templateUrl: './sachiv.component.html',
  styleUrls: ['./sachiv.component.css']
})
export class SachivComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/sachiv.json"
    this.http.get(url).subscribe(data=>{
    // console.warn(data)
    this.data=data

  })

}

  ngOnInit(): void {
  }

}
