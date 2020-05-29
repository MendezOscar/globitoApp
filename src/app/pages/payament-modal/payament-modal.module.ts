import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayamentModalPageRoutingModule } from './payament-modal-routing.module';

import { PayamentModalPage } from './payament-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayamentModalPageRoutingModule
  ],
  declarations: [PayamentModalPage]
})
export class PayamentModalPageModule {}
