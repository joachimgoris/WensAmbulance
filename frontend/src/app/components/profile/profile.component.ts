import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {ApiService} from '../../services/api.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Wish} from '../../models/wish.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userForm: FormGroup;
  user: User = new User();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('@email.com', [Validators.required, Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')]),
      address: new FormControl('', [Validators.required]),
      ssn: new FormControl('', [Validators.required]),
      certificate: new FormControl('', [Validators.required]),
      medicalScreening: new FormControl('', [Validators.required]),
      badgeNumber: new FormControl('', [Validators.required]),
      badgeExpirationDate: new FormControl('', [Validators.required]),
      shirtSize: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    const user = new User();
    user.username = this.userForm.get('username').value;
    user.firstname = this.userForm.get('firstname').value;
    user.lastname = this.userForm.get('lastname').value;
    user.email = this.userForm.get('email').value;
    user.address = this.userForm.get('address').value;
    user.ssn = this.userForm.get('ssn').value;
    user.certificate = this.userForm.get('certificate').value;
    user.medicalScreening = this.userForm.get('medicalScreening').value;
    user.badgeNumber = this.userForm.get('badgeNumber').value;
    user.badgeExpirationDate = this.userForm.get('badgeExpirationDate').value;
    user.shirtSize = this.userForm.get('shirtSize').value;
    console.log(user);
    this.apiService.modifyUser(user).subscribe((value) => {
      console.log('User saved!');
    }, (error) => {
      console.log(error.message);
    });
  }

  deleteProfile(): void {
    this.apiService.deleteUser(this.user.id).subscribe((value) => {
      console.log('Profile deleted!');
      this.logout();
    }, (error) => {
      console.log(error.message);
    });
  }

  logout(): void {
    this.apiService.logout().subscribe((value) => {
      console.log('Logged out!');
    }, (error) => {
      console.log(error.message);
    });
  }

}
