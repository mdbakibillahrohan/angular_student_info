import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoughService {

  constructor(private http: HttpClient) { }

  getSemester() {
    return this.http.get(`${baseUrl}/semesters`);
  }
  getCountries() {
    return this.http.get(`${baseUrl}/countries`);
  }
  getShifts() {
    return this.http.get(`${baseUrl}/shifts`);
  }


}
