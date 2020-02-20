import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoryoption } from 'src/app/models/categoryoption';

@Injectable({
  providedIn: 'root'
})
export class CategoryoptionsService {

  apiUrl = 'https://localhost:5001/api/Categoryoption';

  constructor(private http: HttpClient) { }

  getCategoryOptionBycategoryId(categoryId: number) {
    return this.http.get<Categoryoption[]>(this.apiUrl + '/categoryid/' + categoryId);
  }

}
