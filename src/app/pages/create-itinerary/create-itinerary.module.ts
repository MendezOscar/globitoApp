import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateItineraryPageRoutingModule } from './create-itinerary-routing.module';

import { CreateItineraryPage } from './create-itinerary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateItineraryPageRoutingModule
  ],
  declarations: [CreateItineraryPage]
})
export class CreateItineraryPageModule {}
