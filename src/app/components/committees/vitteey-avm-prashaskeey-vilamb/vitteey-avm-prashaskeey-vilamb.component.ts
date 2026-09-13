import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vitteey-avm-prashaskeey-vilamb',
  templateUrl: './vitteey-avm-prashaskeey-vilamb.component.html',
  styleUrls: ['./vitteey-avm-prashaskeey-vilamb.component.css']
})
export class VitteeyAvmPrashaskeeyVilambComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/committees/vittiyaandprashaskiyvilamb.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }

  ngOnInit(): void {
  }

}
