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

  paginationLimit = 20;
  paginationOffset = 0;


  constructor(
    private appService: AppService
  ) {
    this.getData();
  }

  getData() {
    this.dataLoaded = false;

    this.appService.getData(this.paginationLimit, this.paginationOffset)
    .subscribe(async (response) => {
      // Sort the response by date published most recently
      this.items = this.items
      .concat(response.items)
      .sort((a, b) => {
        a = new Date(a.item_published);
        b = new Date(b.item_published);
        return a > b ? -1 : a < b ? 1 : 0;
      });

      this.dataLoaded = true;

      this.paginationOffset = this.paginationOffset + this.paginationLimit;

    }, error => {
      // Error getting data
      console.log(error);
    });
  }


  async filtersChanged($event) {
    let allFiltersTurnedOff = true;

    await $event.filters.forEach(element => {
      if (element.enabled) {
        allFiltersTurnedOff = false;
      }
    });

    if (allFiltersTurnedOff) {
      // No filters being chosen can mean show all data and leave none out
      // As can all filters being chosen
      // So turn all filters on to ensure posts all displayed
      // Another option would be to display a message and give a call to action to the user as to what they could do next
      this.filters = this.appService.getPostFilters();

      await this.items.sort((a, b) => {
        a = new Date(a.item_published);
        b = new Date(b.item_published);
        return a > b ? -1 : a < b ? 1 : 0;
      });

    } else {
      this.filters = $event.filters;
    }
  }
}
