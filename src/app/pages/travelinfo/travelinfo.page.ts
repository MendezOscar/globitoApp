import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Travelinfo } from 'src/app/models/travelinfo';
import { Travelinfodetails } from 'src/app/models/Travelinfodetails';
import { TravelinfoService } from 'src/app/services/travelinfo/travelinfo.service';
import { TravelinfodetailsService } from 'src/app/services/travelinfo/travelinfodetails.service';
import { CityService } from 'src/app/services/cities/city.service';
import { City } from 'src/app/models/City';
import { Categoryoption } from 'src/app/models/categoryoption';
import { CategoryoptionsService } from 'src/app/services/caterogy/categoryoptions.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-travelinfo',
  templateUrl: './travelinfo.page.html',
  styleUrls: ['./travelinfo.page.scss'],
})
export class TravelinfoPage implements OnInit {

  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;

  travelinfoSaved: Travelinfo;
  travelinfoSavedid: number;
  travelinfo: Travelinfo;
  travelinfodetails: Travelinfodetails;

  travelinfoid: number;
  title: string;
  startdate: Date;
  enddate: Date;
  city: number;
  userid: number;

  myculture: number[];
  myleisure: number[];
  mytourism: number[];
  mytransport: number[];

  category: number;
  priority: number;

  cities: City[];

  culture: Categoryoption[];
  leisure: Categoryoption[];
  tourism: Categoryoption[];
  transport: Categoryoption[];


  constructor(private router: Router, private travelinfoService: TravelinfoService,
              private travelinfodetailsService: TravelinfodetailsService,
              private cityService: CityService, private categoryOptionService: CategoryoptionsService,
              private storage: Storage) { }

  ngOnInit() {
    this.getCities();
    this.getCategoryOption(1);
    this.getCategoryOption(2);
    this.getCategoryOption(3);
    this.getCategoryOption(4);
  }

  initCalendar() {
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
    };
  }

  cancel() {
    this.router.navigate(['/home/tabs/tab1']);
  }

  getTravelinfoForSave() {
    this.storage.get('user').then((val) => {
      this.travelinfo = new Travelinfo();
      this.travelinfo.title = this.title;
      this.travelinfo.startdate = this.startdate;
      this.travelinfo.enddate = this.enddate;
      this.travelinfo.city = this.city;
      this.travelinfo.userid = val.userid;
      this.travelinfoService.createTravelinfo(this.travelinfo).subscribe(data => {
        this.getTravelInfoByTitulo(this.title);
      });
    });
  }

  getTravelinfodetailsForSave() {
    this.saveMyCultureSelection();
  }

saveMyCultureSelection() {
  if (this.myculture.length) {
    this.myculture.map( obj => {
      this.travelinfodetails = new Travelinfodetails();
      this.travelinfodetails.category = obj;
      this.travelinfodetails.priority = 0;
      this.travelinfodetails.travelinfoid = 14;
      this.travelinfodetailsService.createTravelinfodetails(this.travelinfodetails).subscribe(data => {
      });
    });
  }
}

saveMyCultureTourism() {
  if (this.tourism.length) {
    this.myculture.map( obj => {
      this.travelinfodetails = new Travelinfodetails();
      this.travelinfodetails.category = obj;
      this.travelinfodetails.priority = 0;
      this.travelinfodetails.travelinfoid = this.travelinfoSavedid;
      this.travelinfodetailsService.createTravelinfodetails(this.travelinfodetails).subscribe(data => {
      });
    });
  }
}

saveMyCultureLeisure() {
  if (this.leisure.length) {
    this.myculture.map( obj => {
      this.travelinfodetails = new Travelinfodetails();
      this.travelinfodetails.category = obj;
      this.travelinfodetails.priority = 0;
      this.travelinfodetails.travelinfoid = this.travelinfoSavedid;
      this.travelinfodetailsService.createTravelinfodetails(this.travelinfodetails).subscribe(data => {
      });
    });
  }
}

saveMyCultureTransport() {
  if (this.transport.length) {
    this.myculture.map( obj => {
      this.travelinfodetails = new Travelinfodetails();
      this.travelinfodetails.category = obj;
      this.travelinfodetails.priority = 0;
      this.travelinfodetails.travelinfoid = this.travelinfoSavedid;
      this.travelinfodetailsService.createTravelinfodetails(this.travelinfodetails).subscribe(data => {
      });
    });
  }
}
  getTravelInfoByTitulo(title: string) {
    this.travelinfoService.getByTitle(title).subscribe(data => {
      this.travelinfoSaved = data;
      this.travelinfoSavedid = this.travelinfoSaved.travelinfoid;
      console.log(this.travelinfoSavedid);
    });
  }


  save() {
    this.getTravelinfoForSave();
    this.getTravelinfodetailsForSave();
  }

  getCities() {
    this.cityService.getCities().subscribe(data => {
      this.cities = data;
    });
  }

  getCategoryOption(categoryid: number) {
    this.categoryOptionService.getCategoryOptionBycategoryId(categoryid).subscribe(data => {
      if (categoryid === 1) {
        this.culture = data;
      } else if (categoryid === 2) {
        this.leisure = data;
      } else if (categoryid === 3) {
        this.tourism = data;
      } else if (categoryid === 4) {
        this.transport = data;
      }
    });
  }

}
