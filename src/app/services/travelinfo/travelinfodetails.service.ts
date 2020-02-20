import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Travelinfodetails } from 'src/app/models/Travelinfodetails';

@Injectable({
  providedIn: 'root'
})
export class TravelinfodetailsService {

  apiUrl = 'https://localhost:5001/api/Travelinfodetails';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Travelinfodetails[]>(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get<Travelinfodetails>(this.apiUrl + '/' + id);
  }

  createTravelinfodetails(obj: Travelinfodetails) {
    return this.http.post<Travelinfodetails>(this.apiUrl, obj);
  }

  editTravelinfodetails(obj: Travelinfodetails) {
    return this.http.put<Travelinfodetails>(this.apiUrl + '/' + obj.travelinfodetailsid, obj);
  }

  deleteTravelinfodetails(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
