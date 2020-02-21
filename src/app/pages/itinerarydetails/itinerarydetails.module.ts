import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItinerarydetailsPageRoutingModule } from './itinerarydetails-routing.module';

import { ItinerarydetailsPage } from './itinerarydetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItinerarydetailsPageRoutingModule
  ],
  declarations: [ItinerarydetailsPage]
})
export class ItinerarydetailsPageModule {}
