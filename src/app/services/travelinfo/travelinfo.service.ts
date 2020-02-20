import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Travelinfo } from 'src/app/models/travelinfo';

@Injectable({
  providedIn: 'root'
})
export class TravelinfoService {

  apiUrl = 'https://localhost:5001/api/Travelinfo';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Travelinfo[]>(this.apiUrl);
  }

  getByUser(userid: string) {
    return this.http.get<Travelinfo[]>(this.apiUrl + '/byuser/' + userid);
  }

  getById(id: number) {
    return this.http.get<Travelinfo>(this.apiUrl + '/' + id);
  }

  getByTitle(title: string) {
    return this.http.get<Travelinfo>(this.apiUrl + '/bytitle/' + title);
  }

  createTravelinfo(obj: Travelinfo) {
    return this.http.post<Travelinfo>(this.apiUrl, obj);
  }

  editTravelinfo(obj: Travelinfo) {
    return this.http.put<Travelinfo>(this.apiUrl + '/' + obj.travelinfoid, obj);
  }

  deleteTravelinfo(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
