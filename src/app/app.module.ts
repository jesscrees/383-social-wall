import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { PostListComponent } from './post-list/post-list.component';
import { TwitterPostComponent } from './posts/twitter-post/twitter-post.component';
import { InstagramPostComponent } from './posts/instagram-post/instagram-post.component';
import { ManualPostComponent } from './posts/manual-post/manual-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMasonryModule } from 'ngx-masonry';
import { NgxImagesloadedModule } from 'ngx-imagesloaded';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    PostListComponent,
    TwitterPostComponent,
    InstagramPostComponent,
    ManualPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,

    NgxImagesloadedModule,
    NgxLinkifyjsModule.forRoot(),
    NgxMasonryModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
