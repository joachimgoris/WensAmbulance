import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {ApiService} from '../../services/api.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Wish} from '../../models/wish.model';
import { TokenInformationService } from 'src/app/services/token-information.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userForm: FormGroup;
  user: User = new User();

  constructor(private apiService: ApiService, private tokenInformationService: TokenInformationService) { }

  ngOnInit() {
    this.fetchUser();
    
    while(this.user == null) {}

    this.userForm = new FormGroup({
      username: new FormControl(this.user.username ? this.user.username : null, [Validators.required]),
      firstname: new FormControl(this.user.firstname ? this.user.firstname : null, [Validators.required]),
      lastname: new FormControl(this.user.lastname ? this.user.lastname : null, [Validators.required]),
      email: new FormControl(this.user.email ? this.user.email : null, [Validators.required, Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')]),
      address: new FormControl(this.user.address ? this.user.address : null, [Validators.required]),
      ssn: new FormControl(this.user.ssn ? this.user.ssn : null, [Validators.required]),
      certificate: new FormControl(this.user.certificate ? this.user.certificate : null, [Validators.required]),
      medicalScreening: new FormControl(this.user.medicalScreening ? this.user.medicalScreening : null, [Validators.required]),
      badgeNumber: new FormControl(this.user.badgeNumber ? this.user.badgeNumber : null, [Validators.required]),
      badgeExpirationDate: new FormControl(this.user.badgeExpirationDate ? this.user.badgeExpirationDate : null, [Validators.required]),
      shirtSize: new FormControl(this.user.shirtSize ? this.user.shirtSize : null, [Validators.required])
    });
  }

  fetchUser() {
    this.apiService.getUser(this.tokenInformationService.getUserId()).subscribe(data => {this.user = data; console.log(this.user), (error) => {
      this.user = new User();
      console.log('An error has occured');
    }});
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
    console.log("form: " + user);

    this.user.username = user.username ? user.username : this.user.username;
    this.user.firstname = user.firstname ? user.firstname : this.user.firstname;
    this.user.lastname = user.lastname ? user.lastname : this.user.lastname;
    this.user.email = user.email ? user.email : this.user.email;
    this.user.address = user.address ? user.address : this.user.address;
    this.user.ssn = user.ssn ? user.ssn : this.user.ssn;
    this.user.certificate = user.certificate ? user.certificate : this.user.certificate;
    this.user.medicalScreening = user.medicalScreening ? user.medicalScreening : this.user.medicalScreening;
    this.user.badgeNumber = user.badgeNumber ? user.badgeNumber : this.user.badgeNumber;
    this.user.badgeExpirationDate = user.badgeExpirationDate ? user.badgeExpirationDate : this.user.badgeExpirationDate;
    this.user.shirtSize = user.shirtSize ? user.shirtSize : this.user.shirtSize;


    this.apiService.modifyUser(this.user).subscribe((value) => {
      console.log('User saved!');
      this.fetchUser();
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
    this.apiService.logout();
  }

}
