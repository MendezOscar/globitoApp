import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from 'src/app/models/Place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  apiUrl = 'https://localhost:5001/api/Place';

  constructor(private http: HttpClient) { }

  getPlaces() {
    return this.http.get<Place[]>(this.apiUrl);
  }
}
