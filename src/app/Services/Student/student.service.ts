import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  loginData: any;

  constructor(private http: HttpClient, private auth: AuthService) { }

  addStudent(name: string | null, email: string, semester_id: number, shift_id: number, country_id: number) {
    let data = {
      name: name,
      email: email,
      semester_id: semester_id,
      shift_id: shift_id,
      country_id: country_id
    }
    this.loginData = this.auth.loginData;
    let headers = new HttpHeaders();
    headers.append('auth_token', this.loginData.token);
    console.log('headers is ', headers);
    return this.http.post(`${baseUrl}/add-student`, data, { headers: headers });
  }
}
