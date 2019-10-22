import { Component } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {

  slideshowHeight = '400px';

  images: IImage[] = [];


  constructor() {
    this.getImages();
  }

  getImages() {
    this.images = [
      { url: 'assets/images/slider/Dates.jpg' },
      { url: 'assets/images/slider/MainImage.jpg' },
      { url: 'assets/images/slider/michael-lee-5Z9bgfRZLLE-unsplash-min.jpg' },
      { url: 'assets/images/slider/raden-prasetya-CQDkSdPOzYY-unsplash-min.jpg' },
      { url: 'assets/images/slider/raden-prasetya-EvjmSg1xurI-unsplash-min.jpg' },
      { url: 'assets/images/slider/yogendra-singh-C4XXBa1ZQWI-unsplash-min.jpg' },
      { url: 'assets/images/slider/yogendra-singh-kOIODZD_ByQ-unsplash-min.jpg' },
    ];
  }

}
