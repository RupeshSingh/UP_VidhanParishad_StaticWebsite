import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-committeenamelist',
  templateUrl: './committeenamelist.component.html',
  styleUrls: ['./committeenamelist.component.css']
})
export class CommitteenamelistComponent implements OnInit {
  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/samitiyanByName.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
   }

  ngOnInit(): void {
  }

}
