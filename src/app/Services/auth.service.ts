import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginData: object | null = null;
  constructor(private http: HttpClient) {

  }


  isLogin() {
    if (this.loginData == undefined) {
      return false;
    }
    return true;
  }

  setLoginData(data: object) {
    this.loginData = data;
  }

  login(email: string, password: string) {
    const data = {
      "email": email,
      "password": password
    }
    let loginResponse = this.http.post(`${baseUrl}/login`, data);
    return loginResponse;
  }

  register(name: string, email: string, password: string) {
    const data = {
      name: name,
      email: email,
      password: password
    }
    let registerResponse = this.http.post(`${baseUrl}/register`, data);
    return registerResponse;

  }
}
