import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelinfoPage } from './travelinfo.page';

const routes: Routes = [
  {
    path: '',
    component: TravelinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelinfoPageRoutingModule {}
