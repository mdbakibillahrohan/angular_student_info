import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private routes: Router) { }
  hide = true;

  ngOnInit(): void {
  }

  onSubmit(data: any) {
    const email = data.email;
    const password = data.password;

    this.auth.login(email, password).subscribe((data) => {
      this.auth.setLoginData(data);
      this.routes.navigate(['/', 'home']);
    })

  }

}
