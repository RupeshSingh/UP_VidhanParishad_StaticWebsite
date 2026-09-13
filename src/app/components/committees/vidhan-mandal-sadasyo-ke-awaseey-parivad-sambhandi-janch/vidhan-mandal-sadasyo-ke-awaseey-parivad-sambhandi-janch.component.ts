import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vidhan-mandal-sadasyo-ke-awaseey-parivad-sambhandi-janch',
  templateUrl: './vidhan-mandal-sadasyo-ke-awaseey-parivad-sambhandi-janch.component.html',
  styleUrls: ['./vidhan-mandal-sadasyo-ke-awaseey-parivad-sambhandi-janch.component.css']
})
export class VidhanMandalSadasyoKeAwaseeyParivadSambhandiJanchComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/committees/awasiyepariwar.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }

  ngOnInit(): void {
  }

}
