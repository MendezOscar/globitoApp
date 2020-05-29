import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayamentModalPage } from './payament-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PayamentModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayamentModalPageRoutingModule {}
