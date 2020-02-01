import { Injectable } from '@angular/core';
import { User } from 'src/app/mdels/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'https://192.168.100.8/api/user';

  constructor(private http: HttpClient) { }

  getUserByLogin(username: string, password: string) {
    return this.http.get<User>(this.apiUrl + '/' + username + '/' + password);
  }

}
