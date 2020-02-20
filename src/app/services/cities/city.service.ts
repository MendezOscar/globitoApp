import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from 'src/app/models/City';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  apiUrl = 'https://localhost:5001/api/City';

  constructor(private http: HttpClient) { }

  getCities() {
    return this.http.get<City[]>(this.apiUrl);
  }
}
