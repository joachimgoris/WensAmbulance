import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {Patient} from '../../models/patient.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {
  user: User = new User();
  userForm: FormGroup;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

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

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.apiService.getUser(id.toString()).subscribe((value) => {
        this.user = value;
      }, (error) => {
        console.log(error.message);
      });
    });
    this.userForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('@email.com', [Validators.required, Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')]),
      address: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      pickupLocation: new FormControl('', [Validators.required]),
      DNRCode: new FormControl('', [Validators.required]),
      accessibility: new FormControl('', [Validators.required]),
      medicalNotes: new FormControl('', [Validators.required])
    });
  }

  deletePatient(): void {
    this.apiService.deleteUser(this.user.id).subscribe((value) => {
      console.log('deleted');
    }, (error) => {
      console.log(error.message);
    });
  }

}
