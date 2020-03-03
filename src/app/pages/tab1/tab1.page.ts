import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelinfoService } from 'src/app/services/travelinfo/travelinfo.service';
import { Travelinfo } from 'src/app/models/travelinfo';
import { Storage } from '@ionic/storage';
import { PlaceService } from 'src/app/services/places/place.service';
import { Place } from 'src/app/models/Place';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  travelInfo: Travelinfo[];
  places: Place[];

  constructor(private router: Router, private travelInfoService: TravelinfoService,
              private storage: Storage, private placeService: PlaceService) { }

  getTravelInfo() {
    this.storage.get('user').then((val) => {
      this.travelInfoService.getByUser(val.userid).subscribe(data => {
        this.travelInfo = data;
        console.log(this.travelInfo);
      });
    });
  }

  ngOnInit() {
    this.getPlaces();
  }

  createNewTravel() {
    this.router.navigate(['/travelinfo']);
  }

  gotoPlaceActivities() {
    this.router.navigate(['/placeactivities']);
  }

  gotoRecommendations() {
    this.router.navigate(['/recommendations']);
  }

  getPlaces() {
    this.placeService.getPlaces().subscribe(data => {
      this.places = data;
      console.log(this.places);
    });
  }
}
