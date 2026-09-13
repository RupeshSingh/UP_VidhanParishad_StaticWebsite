import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pradesheey-vidyut-vyawastha-sambandhi-janch',
  templateUrl: './pradesheey-vidyut-vyawastha-sambandhi-janch.component.html',
  styleUrls: ['./pradesheey-vidyut-vyawastha-sambandhi-janch.component.css']
})
export class PradesheeyVidyutVyawasthaSambandhiJanchComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/committees/vidhutvyawastha.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }

  ngOnInit(): void {
  }

}
