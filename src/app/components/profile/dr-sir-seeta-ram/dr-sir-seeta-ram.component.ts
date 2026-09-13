import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dr-sir-seeta-ram',
  templateUrl: './dr-sir-seeta-ram.component.html',
  styleUrls: ['./dr-sir-seeta-ram.component.css']
})
export class DrSirSeetaRamComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/profiles/DrSirSeetaRam.json"
    this.http.get(url).subscribe(data => {
      this.data = data

    })
  }


  ngOnInit(): void {
  }

}
