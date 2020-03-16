import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/authentication/register.service';
import { User } from 'src/app/models/user';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User;
  name: string;
  lastname: string;
  username: string;
  password: string;
  type: string;
  phone: string;
  email: string;

  constructor(private router: Router, private registerService: RegisterService,
              public toastController: ToastController) { }

  ngOnInit() {
  }

  save() {
    this.router.navigate(['/register-preferences']);
    /*
    this.user = new User();
    this.user.name = this.name;
    this.user.lastname = this.lastname;
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.phone = this.phone;
    this.user.email = this.email;
    this.user.type = 'USER';
    this.registerService.createUser(this.user).subscribe(data => {
      this.router.navigate(['/']);
      this.presentToast();
    });*/
  }

  cancel() {
    this.router.navigate(['/']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registrado exitosamente.',
      duration: 2000
    });
    toast.present();
  }

}
