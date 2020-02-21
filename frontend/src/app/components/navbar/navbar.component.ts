import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {AuthService} from '../../services/auth.service';
import {TokenInformationService} from '../../services/token-information.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user: User = new User();

  constructor(private router: Router, private apiService: ApiService, private authService: AuthService, private tokenInformationService: TokenInformationService) {
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  isVolunteer() {
    return this.tokenInformationService.getRole() === 'Volunteer';
  }

}
