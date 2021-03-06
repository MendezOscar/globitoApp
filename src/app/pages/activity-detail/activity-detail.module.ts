import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityDetailPageRoutingModule } from './activity-detail-routing.module';

import { ActivityDetailPage } from './activity-detail.page';
import { PayamentModalPage } from '../payament-modal/payament-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityDetailPageRoutingModule
  ],
  declarations: [ActivityDetailPage, PayamentModalPage],
  entryComponents: [PayamentModalPage]
})
export class ActivityDetailPageModule {}
