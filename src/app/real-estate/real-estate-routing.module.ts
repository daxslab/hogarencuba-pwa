import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealEstatePage } from './real-estate.page';

const routes: Routes = [
  {
    path: '',
    component: RealEstatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealEstatePageRoutingModule {}
