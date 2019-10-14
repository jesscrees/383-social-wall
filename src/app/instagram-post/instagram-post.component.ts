import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-instagram-post',
  templateUrl: './instagram-post.component.html',
  styleUrls: ['./instagram-post.component.scss']
})
export class InstagramPostComponent implements OnInit {
  @Input() item: any;
  faInstagram = faInstagram;


  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.verifyImages();
  }


  async verifyImages() {
    // Check user avatar image
    this.appService.verifyImageURL(this.item.item_data.user.avatar, (imageExists) => {
      if (!imageExists) {
        this.item.item_data.user.avatar = this.appService.replaceWithPlaceholderImage();
      }
    });

    // Check large, medium, and thumb image URLs
    await this.appService.verifyImageURL(this.item.item_data.image.large, (imageExists) => {
      if (!imageExists) {
        this.item.item_data.image.large = this.appService.replaceWithPlaceholderImage();
      }
    });

    await this.appService.verifyImageURL(this.item.item_data.image.medium, (imageExists) => {
      if (!imageExists) {
        this.item.item_data.image.medium = this.appService.replaceWithPlaceholderImage();
      }
    });

    await this.appService.verifyImageURL(this.item.item_data.image.thumb, (imageExists) => {
      if (!imageExists) {
        this.item.item_data.image.thumb = this.appService.replaceWithPlaceholderImage();
      }
    });

    // If the large image exists but the others don't, then replace them with the large
    if (this.item.item_data.image.large) {
      if (!this.item.item_data.image.medium) {
        this.item.item_data.image.medium = this.item.item_data.image.large;
      }

      if (!this.item.item_data.image.thumb) {
        this.item.item_data.image.thumb = this.item.item_data.image.large;
      }
    }

    // If the medium image exists but the thumb doesn't then replace it with medium
    if (this.item.item_data.image.medium && !this.item.item_data.image.thumb) {
      this.item.item_data.image.thumb = this.item.item_data.image.medium;
    }

  }

}
