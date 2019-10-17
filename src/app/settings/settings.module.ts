import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsComponent } from './settings.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,

    FlexLayoutModule,

    MatButtonModule,
    MatSlideToggleModule
  ]
})
export class SettingsModule { }
