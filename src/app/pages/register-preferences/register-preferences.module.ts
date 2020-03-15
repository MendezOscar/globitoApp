import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPreferencesPageRoutingModule } from './register-preferences-routing.module';

import { RegisterPreferencesPage } from './register-preferences.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPreferencesPageRoutingModule
  ],
  declarations: [RegisterPreferencesPage]
})
export class RegisterPreferencesPageModule {}
