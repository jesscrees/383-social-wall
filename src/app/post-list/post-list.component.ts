import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { NgxMasonryComponent } from 'ngx-masonry';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnChanges {
  @Input() filters: any[] = this.appService.getPostFilters();
  @Input() items: any[] = [];

  @ViewChild(NgxMasonryComponent, {static: false}) masonry: NgxMasonryComponent;


  constructor(
    private appService: AppService
  ) { }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.items && changes.items.currentValue) {
      this.items = changes.items.currentValue;
      this.masonry.reloadItems();
    }
  }

  postIsNotFiltered(item): boolean {
    return this.filters.filter(x => x.name === item.service_name && x.enabled).length > 0;
  }

}
