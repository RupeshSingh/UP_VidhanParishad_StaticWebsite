import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-karya-pramarsh-datry',
  templateUrl: './karya-pramarsh-datry.component.html',
  styleUrls: ['./karya-pramarsh-datry.component.css']
})
export class KaryaPramarshDatryComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/committees/karyapramarshdatri.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }

  ngOnInit(): void {
  }

}
