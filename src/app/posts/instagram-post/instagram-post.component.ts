import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import * as globals from 'src/app/globals';

@Component({
  selector: 'app-instagram-post',
  templateUrl: './instagram-post.component.html',
  styleUrls: ['./instagram-post.component.scss']
})
export class InstagramPostComponent implements OnInit {
  @Input() item: any;

  faInstagram = faInstagram;

  progressSpinnerOptions = globals.progressSpinnerOptions;

  linkifyOptions = Object.create(globals.linkifyOptions);


  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.overrideLinkifyOptions();

    this.verifyImages();

    this.item.item_data.caption = this.appService.decodeHTMLEntities(this.item.item_data.caption);
  }


  overrideLinkifyOptions() {
    this.linkifyOptions.formatHref = (href, type) => {
      if (type === 'hashtag') {
        return 'https://www.instagram.com/explore/tags/' + href.substr(1);

      } else {
        return href;
      }
    };
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
