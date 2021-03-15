import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router'
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }
  socialUser: SocialUser;

  constructor(
    private login_service: LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  login_user(): void {
    const data = {
      email: this.user.email,
      password: this.user.password
    }

    this.login_service.login(data)
      .subscribe(
        response => {
          localStorage.setItem('access_token', response)
          this.router.navigate(['/'])
        },
        error => {
          console.log(error)
        }
      )
  }
}
