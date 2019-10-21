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
  moreDataLoaded = false;

  filters: Filter[] = this.appService.getPostFilters();

  items: any[] = [];

  paginationLimit = globals.paginationLimit;
  paginationOffset = 0;

  progressSpinnerOptions: any = globals.progressSpinnerOptions;


  constructor(
    private appService: AppService
  ) {
    this.getData(true);
  }

  getData(firstTimeLoading?) {
    // Show progress spinner
    if (firstTimeLoading) {
      this.dataLoaded = false;
    }
    this.moreDataLoaded = false;

    this.appService.getData(this.paginationLimit, this.paginationOffset)
    .subscribe((response) => {
      // Sort the response by date published most recently
      this.items = this.items
      .concat(response.items)
      .sort((a, b) => {
        // This function was found on StackOverflow
        // https://stackoverflow.com/questions/15507729/safari-doesnt-sort-array-of-objects-like-others-browsers
        // "A sort function in JavaScript is supposed to return a real number -- not true or false or a string or date.
        // Whether that number is positive, negative, or zero affects the sort result."
        return (b.item_published > a.item_published) ? 1 : (b.item_published < a.item_published) ? -1 : 0;
      });

      console.log(this.items);


      // Hide progress spinner
      if (firstTimeLoading) {
        this.dataLoaded = true;
      }

      this.moreDataLoaded = true;

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
      this.filters = this.appService.defaultFilters;

    } else {
      this.filters = $event.filters;
    }

    // this.items = this.items
    //   .sort((a, b) => {
    //     a = new Date(a.item_published);
    //     b = new Date(b.item_published);
    //     return a > b ? -1 : a < b ? 1 : 0;
    //   });

    // Store the filters in local storage so they persist on page change
    localStorage.setItem('filters', JSON.stringify(this.filters));
  }

}
