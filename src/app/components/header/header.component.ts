import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  faCartShopping = faCartShopping;

  userName: string | undefined;
  email: string | undefined;
  photo: string | undefined;
  isUserLoggedIn = false;

  constructor(private auth: AuthService) {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      this.userName = user.name;
      this.email = user.email;
      this.photo = user.picture;
      this.isUserLoggedIn = true;
    }
  }

  signOut() {
    sessionStorage.removeItem('loggedInUser');
    this.isUserLoggedIn = false;
    this.auth.signOut();
  }
}
