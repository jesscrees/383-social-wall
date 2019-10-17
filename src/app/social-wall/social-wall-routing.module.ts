import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialWallComponent } from './social-wall.component';


const routes: Routes = [
  { path: '', component: SocialWallComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialWallRoutingModule { }
