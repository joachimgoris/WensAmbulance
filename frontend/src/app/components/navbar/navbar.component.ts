import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  visible = true;
  user: User = new User();

  constructor(private router: Router, private apiService: ApiService, private authService: AuthService) {
    if (sessionStorage.getItem('Token') != null) {
      this.visible = true;
    }
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }

}
