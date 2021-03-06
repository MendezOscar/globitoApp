import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  user: User;

  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
    this.user = new User();
    this.getInfoUser();
  }

  goItineraryDetails() {
    this.router.navigate(['/itinerarydetails']);
  }

  getInfoUser() {
    this.storage.get('user').then((val) => {
      this.user = val;
    });
  }

  goDetails() {
    this.router.navigate(['/itinerary-details']);
  }

}
