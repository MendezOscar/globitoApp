import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itinerarydetails',
  templateUrl: './itinerarydetails.page.html',
  styleUrls: ['./itinerarydetails.page.scss'],
})
export class ItinerarydetailsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/home/tabs/tab2']);
  }

}
