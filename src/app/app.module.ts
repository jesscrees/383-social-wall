import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialWallModule } from './social-wall/social-wall.module';
import { SettingsModule } from './settings/settings.module';
import { AppRoutingModule } from './app-routing.module';
import { PipesModule } from './pipes/pipes.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    HttpClientModule,

    PipesModule,
    SettingsModule,
    SocialWallModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
