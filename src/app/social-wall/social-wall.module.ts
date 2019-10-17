import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialWallRoutingModule } from './social-wall-routing.module';
import { SocialWallComponent } from './social-wall.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxImagesloadedModule } from 'ngx-imagesloaded';
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';
import { NgxMasonryModule } from 'ngx-masonry';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from '../filter/filter.component';
import { PostListComponent } from '../post-list/post-list.component';
import { TwitterPostComponent } from '../posts/twitter-post/twitter-post.component';
import { InstagramPostComponent } from '../posts/instagram-post/instagram-post.component';
import { ManualPostComponent } from '../posts/manual-post/manual-post.component';


@NgModule({
  declarations: [
    SocialWallComponent,
    FilterComponent,
    PostListComponent,
    TwitterPostComponent,
    InstagramPostComponent,
    ManualPostComponent
  ],
  imports: [
    CommonModule,
    SocialWallRoutingModule,

    FontAwesomeModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,

    NgxImagesloadedModule,
    NgxLinkifyjsModule.forRoot(),
    NgxMasonryModule,
    ReactiveFormsModule
  ]
})
export class SocialWallModule { }