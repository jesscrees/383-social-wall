import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FilterComponent } from './filter/filter.component';
import { PostListComponent } from './post-list/post-list.component';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { InstagramPostComponent } from './instagram-post/instagram-post.component';
import { ManualPostComponent } from './manual-post/manual-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FilterComponent,
    PostListComponent,
    TwitterPostComponent,
    InstagramPostComponent,
    ManualPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
