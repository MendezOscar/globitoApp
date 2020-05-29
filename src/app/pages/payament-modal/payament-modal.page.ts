import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payament-modal',
  templateUrl: './payament-modal.page.html',
  styleUrls: ['./payament-modal.page.scss'],
})
export class PayamentModalPage implements OnInit {

  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {
  }



  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
