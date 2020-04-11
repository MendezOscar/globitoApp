import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-itinerary-details',
  templateUrl: './itinerary-details.page.html',
  styleUrls: ['./itinerary-details.page.scss'],
})
export class ItineraryDetailsPage implements OnInit {
  user: User;

  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
    this.user = new User();
    this.getInfoUser();
  }

  getInfoUser() {
    this.storage.get('user').then((val) => {
      this.user = val;
    });
  }

  back() {
    this.router.navigate(['/home/tabs/tab2']);
  }

}
