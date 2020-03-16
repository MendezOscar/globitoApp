import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-preferences',
  templateUrl: './register-preferences.page.html',
  styleUrls: ['./register-preferences.page.scss'],
})
export class RegisterPreferencesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/register']);
  }

  register() {
    this.router.navigate(['/']);
  }

}
