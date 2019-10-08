import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'social-wall';

  dataLoaded = false;

  items = [];

  filters: any[] = this.appService.getPostFilters();


  constructor(
    private appService: AppService
  ) {
    this.getData();
  }

  getData() {
    this.appService.getData()
    .subscribe((response) => {
      this.items = response.items;
      console.log(this.items);
      this.dataLoaded = true;

    }, error => {
      // Error getting data
      console.log(error);
    });
  }


  filtersChanged($event) {
    this.filters = $event.filters;
  }
}
