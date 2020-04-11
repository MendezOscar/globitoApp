import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceActivitiesPageRoutingModule } from './place-activities-routing.module';

import { PlaceActivitiesPage } from './place-activities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceActivitiesPageRoutingModule
  ],
  declarations: [PlaceActivitiesPage]
})
export class PlaceActivitiesPageModule {}
