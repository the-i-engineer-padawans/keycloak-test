import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {KeycloakGuard} from './guards/keycloak.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'public-space',
    loadChildren: () => import('./public-space/public-space.module').then( m => m.PublicSpacePageModule)
  },
  {
    path: 'restricted-space',
    loadChildren: () => import('./restricted-space/restricted-space.module').then( m => m.RestrictedSpacePageModule),
    canActivate: [KeycloakGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
