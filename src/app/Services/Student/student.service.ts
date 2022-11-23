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
      student_name: name,
      email: email,
      semester_id: semester_id,
      shift_id: shift_id,
      country_id: country_id
    }
    this.loginData = this.auth.loginData;

    return this.http.post(`${baseUrl}/add-student`, data, {
      headers: new HttpHeaders({
        'auth_token': this.loginData.token,
      })
    });
  }

  getStudents() {
    this.loginData = this.auth.loginData;
    return this.http.get(`${baseUrl}/all-students`, {
      headers: new HttpHeaders({
        'auth_token': this.loginData.token,
      })
    })
  }
}
