import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {

  images: IImage[] = [];


  constructor() {
    this.getImages();
  }

  getImages() {
    this.images = [
      { url: 'assets/images/slider/michael-lee-5Z9bgfRZLLE-unsplash.jpg' },
      { url: 'assets/images/slider/raden-prasetya-CQDkSdPOzYY-unsplash.jpg' },
      { url: 'assets/images/slider/raden-prasetya-EvjmSg1xurI-unsplash.jpg' },
      { url: 'assets/images/slider/yogendra-singh-C4XXBa1ZQWI-unsplash.jpg' },
      { url: 'assets/images/slider/yogendra-singh-kOIODZD_ByQ-unsplash.jpg' },
    ];
  }

}
