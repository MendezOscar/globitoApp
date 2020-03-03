import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/Place';
import { Router } from '@angular/router';
import { PlaceService } from 'src/app/services/places/place.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.page.html',
  styleUrls: ['./recommendations.page.scss'],
})
export class RecommendationsPage implements OnInit {
  places: Place[];

  constructor(private router: Router, private placeService: PlaceService) { }

  ngOnInit() {
    this.getPlaces();
  }

  getPlaces() {
    this.placeService.getPlaces().subscribe( data => {
      this.places = data;
      console.log(this.places);
    });
  }

  gotoPlaceActivities() {
    this.router.navigate(['/placeactivities']);
  }

  contactar() {
    this.router.navigate(['/home/tabs/tab3']);
  }

  back(){
    this.router.navigate(['/home/tabs/tab1']);

  }

}
