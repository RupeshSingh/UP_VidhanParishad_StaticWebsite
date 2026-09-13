import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-yachika',
  templateUrl: './yachika.component.html',
  styleUrls: ['./yachika.component.css']
})
export class YachikaComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/committees/yachika.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }


  ngOnInit(): void {
  }

}
