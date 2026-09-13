import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sansadeey-adhyayan',
  templateUrl: './sansadeey-adhyayan.component.html',
  styleUrls: ['./sansadeey-adhyayan.component.css']
})
export class SansadeeyAdhyayanComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/committees/sansadiyadhyayan.json"
    this.http.get(url).subscribe(data=>{
      this.data=data

    })
  }

  ngOnInit(): void {
  }

}
