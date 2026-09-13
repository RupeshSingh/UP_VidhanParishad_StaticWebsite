import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-achar-sanhita',
  templateUrl: './achar-sanhita.component.html',
  styleUrls: ['./achar-sanhita.component.css']
})
export class AcharSanhitaComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/committees/acharsanhita.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }

  ngOnInit(): void {
  }

}



