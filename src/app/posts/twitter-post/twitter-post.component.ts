import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import * as globals from 'src/app/globals';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent implements OnInit {
  @Input() item: any;
  faTwitter = faTwitter;

  linkifyOptions = Object.create(globals.linkifyOptions);

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.overrideLinkifyOptions();

    this.verifyImages();
  }


  overrideLinkifyOptions() {
    this.linkifyOptions.formatHref = (href, type) => {
      if (type === 'hashtag') {
        return 'https://twitter.com/search?q=%23' + href.substr(1);

      } else if (type === 'mention') {
        return 'https://twitter.com/' + href;

      } else {
        return href;
      }
    };
  }


  verifyImages() {
    this.appService.verifyImageURL(this.item.item_data.user.avatar, (imageExists) => {
      if (!imageExists) {
        this.item.item_data.user.avatar = this.appService.replaceWithPlaceholderImage();
      }
    });
  }

}
