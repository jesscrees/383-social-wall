import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnChanges {
  @Input() filters: any[] = this.appService.getPostFilters();
  @Input() items: any[] = [];

  imageSrc = "http://lorempixel.com/400/200/fashion/";

  
  constructor(
    private appService: AppService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items && changes.items.currentValue) {
      this.items = changes.items.currentValue;

      this.items.forEach(element => {
        const randomID = Math.floor(Math.random() * 10) + 1;

        element.item_data.image_url = this.imageSrc + randomID;
      });
    }
  }

  postIsNotFiltered(item): boolean {
    return this.filters.filter(x => x.name === item.service_name && x.enabled).length > 0;
  }
}
