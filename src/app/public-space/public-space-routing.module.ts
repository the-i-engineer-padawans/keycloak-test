import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicSpacePage } from './public-space.page';

const routes: Routes = [
  {
    path: '',
    component: PublicSpacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicSpacePageRoutingModule {}
