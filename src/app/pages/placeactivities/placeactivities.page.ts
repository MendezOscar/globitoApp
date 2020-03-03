import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placeactivities',
  templateUrl: './placeactivities.page.html',
  styleUrls: ['./placeactivities.page.scss'],
})
export class PlaceactivitiesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/recommendations']);
  }

}
