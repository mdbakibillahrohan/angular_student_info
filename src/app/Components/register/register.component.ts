import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService, private routes: Router) { }
  passwordHide = true;
  ngOnInit(): void {
  }

  onRegisterSubmit(data: any) {
    let password;
    console.log("register component", data)
    if (data.newPassword == data.confirmPassword) {
      password = data.confirmPassword;
      this.auth.register(data.name, data.email, password).subscribe((data) => {
        this.auth.setLoginData(data);
        this.routes.navigate(['/', 'home']);
      });
    }

  }

}
