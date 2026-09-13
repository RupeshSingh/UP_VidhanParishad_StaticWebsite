import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shiksha-ka-vyavsaikaran',
  templateUrl: './shiksha-ka-vyavsaikaran.component.html',
  styleUrls: ['./shiksha-ka-vyavsaikaran.component.css']
})
export class ShikshaKaVyavsaikaranComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/committees/shikshakavyavasaikaran.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }


  ngOnInit(): void {
  }

}
