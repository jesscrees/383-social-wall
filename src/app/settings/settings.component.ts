import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  placeholderImagesTurnedOn = JSON.parse(localStorage.getItem('placeholderImagesTurnedOn'));


  constructor() {}


  toggleValue() {
    this.placeholderImagesTurnedOn = !this.placeholderImagesTurnedOn;

    localStorage.setItem('placeholderImagesTurnedOn', JSON.stringify(this.placeholderImagesTurnedOn));
  }

}
