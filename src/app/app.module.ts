import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { SocialWallModule } from './social-wall/social-wall.module';
import { SettingsModule } from './settings/settings.module';
import { SocialWallComponent } from './social-wall/social-wall.component';
import { SettingsComponent } from './settings/settings.component';

const appRoutes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'social-wall', component: SocialWallComponent },
  { path: '',
    redirectTo: 'social-wall',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: 'social-wall',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),

    BrowserAnimationsModule,
    HttpClientModule,

    SettingsModule,
    SocialWallModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
