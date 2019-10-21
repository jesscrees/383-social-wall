import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-manual-post',
  templateUrl: './manual-post.component.html',
  styleUrls: ['./manual-post.component.scss']
})
export class ManualPostComponent implements OnInit {
  @Input() item: any;


  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.verifyImages();

    this.item.item_data.link_text = this.appService.decodeHTMLEntities(this.item.item_data.link_text);
  }


  verifyImages() {
    this.appService.verifyImageURL(this.item.item_data.image_url, (imageExists) => {
      if (!imageExists) {
        this.item.item_data.image_url = this.appService.replaceWithPlaceholderImage();
      }
    });
  }

}
