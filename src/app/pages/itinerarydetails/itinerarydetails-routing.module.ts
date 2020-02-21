import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItinerarydetailsPage } from './itinerarydetails.page';

const routes: Routes = [
  {
    path: '',
    component: ItinerarydetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItinerarydetailsPageRoutingModule {}
