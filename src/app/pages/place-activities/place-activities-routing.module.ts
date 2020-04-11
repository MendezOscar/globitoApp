import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceActivitiesPage } from './place-activities.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceActivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceActivitiesPageRoutingModule {}
