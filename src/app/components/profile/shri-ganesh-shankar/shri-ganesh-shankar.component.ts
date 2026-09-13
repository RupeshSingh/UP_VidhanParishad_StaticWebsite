import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shri-ganesh-shankar',
  templateUrl: './shri-ganesh-shankar.component.html',
  styleUrls: ['./shri-ganesh-shankar.component.css']
})
export class ShriGaneshShankarComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/profiles/ShriGaneshShankar.json"
    this.http.get(url).subscribe(data => {
      this.data = data

    })
  }


  ngOnInit(): void {
  }

}
