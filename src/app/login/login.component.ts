declare var google: any;

import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  private router = inject(Router);

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: environment.googleClientId,
      callback: (resp: any) => this.handleLogin(resp),
      ux_mode: 'popup',
      scope: 'profile email'
    });

    google.accounts.id.renderButton(document.getElementById('google-sign-in-button'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangular',
      width: 350,
    });
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleLogin(response: any) {
    if(response) {
      const payload = this.decodeToken(response.credential);

      sessionStorage.setItem('loggedInUser', JSON.stringify(payload));

      this.router.navigate(['/']);
    }
  }
}
