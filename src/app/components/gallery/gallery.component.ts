import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles:[`li.active{color:#fff;background-color:#007bff}`]
})
export class GalleryComponent implements OnInit{

  constructor() {

  }
  ngOnInit(): void {

  }

}


