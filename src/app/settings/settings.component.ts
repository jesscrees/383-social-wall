import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  placeholderImagesTurnedOn = JSON.parse(localStorage.getItem('placeholderImagesTurnedOn'));


  constructor(
    private router: Router
  ) {}


  toggleValue() {
    this.placeholderImagesTurnedOn = !this.placeholderImagesTurnedOn;

    localStorage.setItem('placeholderImagesTurnedOn', JSON.stringify(this.placeholderImagesTurnedOn));
  }


  backToSocialWall() {
    this.router.navigate(['/social-wall']);
  }

}
