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

  filterPosts() {
    // Based on the enabled filters
    // Decide which posts to show
    console.log(this.filters);
    console.log(this.items);
  }

}
