import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicSpacePageRoutingModule } from './public-space-routing.module';

import { PublicSpacePage } from './public-space.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicSpacePageRoutingModule
  ],
  declarations: [PublicSpacePage]
})
export class PublicSpacePageModule {}
