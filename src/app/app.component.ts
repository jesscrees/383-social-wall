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
    .subscribe(async (response) => {
      console.log('RES');
      // Sort the response by date published most recently
      await response.items.sort((a, b) => {
        a = new Date(a.item_published);
        b = new Date(b.item_published);
        return a > b ? -1 : a < b ? 1 : 0;
      });

      console.log(response.items);

      this.items = this.items.concat(response.items);

      // Push new page of items to array
      // this.items.push(response.items);

      this.dataLoaded = true;

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
      // Turn all filters on
      // Another option is to display a message and give a call to action to the user as to what they could do next
      this.filters = this.appService.getPostFilters();

    } else {
      this.filters = $event.filters;
    }
  }
}
