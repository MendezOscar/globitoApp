import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'https://localhost:5001/api/User';

  constructor(private http: HttpClient) { }

  getUserByLogin(username: string, password: string) {
    return this.http.get<User>(this.apiUrl + '/' + username + '/' + password);
  }

}
