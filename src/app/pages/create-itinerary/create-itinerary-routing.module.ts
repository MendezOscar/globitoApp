import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateItineraryPage } from './create-itinerary.page';

const routes: Routes = [
  {
    path: '',
    component: CreateItineraryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateItineraryPageRoutingModule {}
