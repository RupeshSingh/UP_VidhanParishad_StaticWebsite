import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shri-chawdhari-sukhram',
  templateUrl: './shri-chawdhari-sukhram.component.html',
  styleUrls: ['./shri-chawdhari-sukhram.component.css']
})
export class ShriChawdhariSukhramComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/profiles/ShriChawdhariSukhram.json"
    this.http.get(url).subscribe(data => {
      this.data = data

    })
  }


  ngOnInit(): void {
  }

}
