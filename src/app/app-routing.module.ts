import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(mod => mod.SettingsModule),
  },
  {
    path: 'social-wall',
    loadChildren: () => import('./social-wall/social-wall.module').then(mod => mod.SocialWallModule),
  },
  { path: '', redirectTo: 'social-wall', pathMatch: 'full' },
  { path: '**', redirectTo: 'social-wall' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
