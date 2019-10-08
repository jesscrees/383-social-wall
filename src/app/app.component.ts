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

  posts = [];


  constructor(
    private appService: AppService
  ) {
    this.getData();
  }

  getData() {
    this.appService.getData()
    .subscribe((response) => {
      this.posts = response.items;
      console.log(this.posts);
      this.dataLoaded = true;

    }, error => {
      // Error getting data
      console.log(error);
    });
  }
}
