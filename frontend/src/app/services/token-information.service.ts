import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInformationService {

  constructor(private router: Router) { }

  getRole(): string {
      let authenticationToken = sessionStorage.getItem('Token');

      if(authenticationToken == null){
        console.log('No authentication token found, user was not logged in.')
        this.router.navigate(['/login']);
        return;
      }

      let jwtData = authenticationToken.split('.')[1];
      let decodedJwtJsonData = window.atob(jwtData);
      let decodedJwtData = JSON.parse(decodedJwtJsonData);

      let role = decodedJwtData['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      console.log('role: ' + role);
      return role;
  }

  isVolunteer(): boolean {
    return this.getRole().toUpperCase() === 'VOLUNTEER';
  }

  isAdmin(): boolean {
    return this.getRole().toUpperCase() === 'ADMIN';
  }

  getUserId(): string {
    let authenticationToken = sessionStorage.getItem('Token');

      if(authenticationToken == null){
        console.log('No authentication token found, user was not logged in.')
        this.router.navigate(['/login']);
        return;
      }

      let jwtData = authenticationToken.split('.')[1];
      let decodedJwtJsonData = window.atob(jwtData);
      let decodedJwtData = JSON.parse(decodedJwtJsonData);

      let id = decodedJwtData['nameid'];
      console.log('id: ' + id);
      return id;
  }
}
