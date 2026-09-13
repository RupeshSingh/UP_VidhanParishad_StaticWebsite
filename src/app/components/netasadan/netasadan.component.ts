import { Component, OnInit } from '@angular/core';
// import { NetasadanService } from '../../services/netasadan.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-netasadan',
  templateUrl: './netasadan.component.html',
  styleUrls: ['./netasadan.component.css']
})
export class NetasadanComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/netasadan.json"
    this.http.get(url).subscribe(data => {
      this.data = data

    })
  }

  ngOnInit(): void {
  }

}



