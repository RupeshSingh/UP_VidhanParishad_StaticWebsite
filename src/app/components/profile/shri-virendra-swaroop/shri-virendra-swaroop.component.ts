import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shri-virendra-swaroop',
  templateUrl: './shri-virendra-swaroop.component.html',
  styleUrls: ['./shri-virendra-swaroop.component.css']
})
export class ShriVirendraSwaroopComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient) {
    const url="/assets/JSON/profiles/ShriVirendraSwaroop.json"
    this.http.get(url).subscribe(data => {
      this.data = data

    })
  }


  ngOnInit(): void {
  }

}
