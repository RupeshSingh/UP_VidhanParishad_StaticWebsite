import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-membersadd',
  templateUrl: './membersadd.component.html',
  styleUrls: ['./membersadd.component.css']
})
export class MembersaddComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/sadasyaaddress.json"
    this.http.get(url).subscribe(data => {
      this.data = data

    })
   }

  ngOnInit(): void {
  }

}
