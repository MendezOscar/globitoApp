import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-place-activities',
  templateUrl: './place-activities.page.html',
  styleUrls: ['./place-activities.page.scss'],
})
export class PlaceActivitiesPage implements OnInit {
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
    this.router.navigate(['/home/tabs/tab1']);
  }

}
