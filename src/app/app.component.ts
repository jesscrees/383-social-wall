import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataLoaded = false;

  items = [];

  filters: any[] = this.appService.getPostFilters();

  progressSpinnerOptions: any = {
    diameter: 60,
    strokeWidth: 8
  };


  constructor(
    private appService: AppService
  ) {
    this.getData();
  }

  getData() {
    this.dataLoaded = false;

    this.appService.getData()
    .subscribe((response) => {
      this.items = this.items.concat(response.items);

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
