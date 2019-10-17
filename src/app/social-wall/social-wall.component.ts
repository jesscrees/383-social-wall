import { Component } from '@angular/core';
import { Filter } from '../shared/models/filter.model';
import * as globals from 'src/app/globals';
import { AppService } from '../app.service';

@Component({
  selector: 'app-social-wall',
  templateUrl: './social-wall.component.html',
  styleUrls: ['./social-wall.component.scss']
})
export class SocialWallComponent {

  dataLoaded = false;

  items: any[] = [];

  filters: Filter[] = this.appService.getPostFilters();

  progressSpinnerOptions: any = globals.progressSpinnerOptions;

  paginationLimit = globals.paginationLimit;
  paginationOffset = 0;


  constructor(
    private appService: AppService
  ) {
    this.getData();
  }

  getData() {
    // Shows progress spinner
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

      // Hides progress spinner
      this.dataLoaded = true;

      // Increase pagination offset in preparation for making another call to load more data
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
      // So, if all filters are off, turn them all on to ensure all posts are displayed
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