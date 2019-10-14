import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent implements OnInit {
  @Input() item: any;
  faTwitter = faTwitter;


  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.verifyImages();
  }


  verifyImages() {
    this.appService.verifyImageURL(this.item.item_data.user.avatar, (imageExists) => {
      if (!imageExists) {
        this.item.item_data.user.avatar = this.appService.replaceWithPlaceholderImage();
      }
    });
  }

}
