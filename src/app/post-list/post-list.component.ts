import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() filters: any[] = this.appService.getPostFilters();
  @Input() items: any[] = [];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
  }


  loadMorePosts() {
    this.appService.getData()
    .subscribe((response: any) => {
      this.items.push(response.items);
    });
  }

  postIsNotFiltered(item): boolean {
    return this.filters.filter(x => x.name === item.service_name && x.enabled).length > 0;
  }
}
