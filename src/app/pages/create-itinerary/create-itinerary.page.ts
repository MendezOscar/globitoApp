import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-create-itinerary',
  templateUrl: './create-itinerary.page.html',
  styleUrls: ['./create-itinerary.page.scss'],
})
export class CreateItineraryPage implements OnInit {
  user: User;
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;

  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
    this.user = new User();
    this.getInfoUser();
    this.getDate();
  }

  getInfoUser() {
    this.storage.get('user').then((val) => {
      this.user = val;
    });
  }

  getDate() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  goItineraries() {
    this.router.navigate(['/home/tabs/tab2']);
  }

}
