import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiUrl = 'https://localhost:5001/api/User';

  constructor(private http: HttpClient) { }

  createUser(obj: User) {
    return this.http.post<User>(this.apiUrl, obj);
  }

  editUser(obj: User) {
    return this.http.put<User>(this.apiUrl + '/' + obj.userid, obj);
  }
}
