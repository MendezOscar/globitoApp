import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PayamentModalPage } from '../payament-modal/payament-modal.page';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {

  constructor(private router: Router, public modalController: ModalController) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/place-activities']);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PayamentModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
