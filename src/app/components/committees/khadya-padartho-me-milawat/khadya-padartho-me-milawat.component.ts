import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-khadya-padartho-me-milawat',
  templateUrl: './khadya-padartho-me-milawat.component.html',
  styleUrls: ['./khadya-padartho-me-milawat.component.css']
})
export class KhadyaPadarthoMeMilawatComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/committees/khadyapadarth.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }


  ngOnInit(): void {
  }

}
