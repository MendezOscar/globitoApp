import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/authentication/login.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User;
  username: string;
  password: string;

  constructor(private loginService: LoginService, private router: Router,
              private storage: Storage, public toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuario o contraseña incorrecta.',
      duration: 2000
    });
    toast.present();
  }

  getUser() {
    this.loginService.getUserByLogin(this.username, this.password).subscribe(data => {
      this.user = data;
    });
  }

  register() {
    this.router.navigate(['/register']);
  }

  login() {
    this.getUser();
    if (this.user) {
      this.storage.set('user', this.user);
      this.router.navigate(['/home/tabs/tab1']);
    } else {
      this.presentToast();
    }
  }

}
