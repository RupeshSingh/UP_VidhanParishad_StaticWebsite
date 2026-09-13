import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mahilasadsya',
  templateUrl: './mahilasadsya.component.html',
  styleUrls: ['./mahilasadsya.component.css']
})
export class MahilasadsyaComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/mahilasadasya.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }

  ngOnInit(): void {
  }

}
