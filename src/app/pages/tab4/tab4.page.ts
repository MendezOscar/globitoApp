import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
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

  logout() {
    this.router.navigate(['/']);
  }

}
