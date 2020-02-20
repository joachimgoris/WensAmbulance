import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {Patient} from '../../models/patient.model';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent implements OnInit {
  userForm: FormGroup;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
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

  onSubmit(): void {
    const user = new Patient();
    user.firstname = this.userForm.get('firstname').value;
    user.lastname = this.userForm.get('lastname').value;
    user.email = this.userForm.get('email').value;
    user.address = this.userForm.get('address').value;
    user.birthDate = this.userForm.get('birthDate').value;
    user.pickupLocation = this.userForm.get('pickupLocation').value;
    user.DNRCode = this.userForm.get('DNRCode').value;
    user.accessibility = this.userForm.get('accessibility').value;
    user.medicalNotes = this.userForm.get('medicalNotes').value;
    console.log(user);
    this.apiService.addPatient(user).subscribe((value) => {
      console.log('User saved!');
    }, (error) => {
      console.log(error.message);
    });
  }

}
