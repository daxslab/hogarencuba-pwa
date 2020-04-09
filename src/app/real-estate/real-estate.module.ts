import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealEstatePageRoutingModule } from './real-estate-routing.module';

import { RealEstatePage } from './real-estate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealEstatePageRoutingModule
  ],
  declarations: [RealEstatePage]
})
export class RealEstatePageModule {}
