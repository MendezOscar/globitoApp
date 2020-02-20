import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelinfoService } from 'src/app/services/travelinfo/travelinfo.service';
import { Travelinfo } from 'src/app/models/travelinfo';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  travelInfo: Travelinfo[];

  constructor(private router: Router, private travelInfoService: TravelinfoService,
              private storage: Storage) {}

  getTravelInfo() {
    this.storage.get('user').then((val) => {
      this.travelInfoService.getByUser(val.userid).subscribe(data => {
        this.travelInfo = data;
        console.log(this.travelInfo);
      });
    });
  }

  ngOnInit() {
    this.getTravelInfo();
  }

  createNewTravel() {
    this.router.navigate(['/travelinfo']);
  }
}
