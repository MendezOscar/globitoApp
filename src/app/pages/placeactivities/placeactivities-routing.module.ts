import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceactivitiesPage } from './placeactivities.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceactivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceactivitiesPageRoutingModule {}
