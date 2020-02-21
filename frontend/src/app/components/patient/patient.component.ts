import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {Patient} from '../../models/patient.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  user: Patient = new Patient();
  userForm: FormGroup;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

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
    this.apiService.modifyPatient(user).subscribe((value) => {
      console.log('User saved!');
    }, (error) => {
      console.log(error.message);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.apiService.getPatient(id.toString()).subscribe((value) => {
        this.user = value;
      }, (error) => {
        console.log(error.message);
        this.user = this.getPatients().find(p => p.id === id.toString());
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
    this.apiService.deletePatient(this.user).subscribe((value) => {
      console.log('deleted');
    }, (error) => {
      console.log(error.message);
    });
  }

  getPatients(): Patient[] {
    let p = [];
    let patient = new Patient();
    patient.id = '1';
    patient.firstname = "Jan";
    patient.lastname = "Vekemans";
    patient.email = "jan.vekemans@outlook.be";
    patient.address = "Kanariestraat 22";
    patient.birthDate = new Date();
    patient.pickupLocation = "UZ Diest";
    patient.DNRCode = "12K78";
    patient.accessibility = "Good";
    patient.medicalNotes = "/";
    p = p.concat(patient);
    patient = new Patient();
    patient.id = '2';
    patient.firstname = "Tim";
    patient.lastname = "Bergen";
    patient.email = "foobar@foo.bar";
    patient.address = "foobarstreet";
    patient.birthDate = new Date();
    patient.pickupLocation = "foobarplace";
    patient.DNRCode = "Foo";
    patient.accessibility = "Bar";
    patient.medicalNotes = "FooBar";
    p = p.concat(patient);
    patient = new Patient();
    patient.id = '3';
    patient.firstname = "Jannes";
    patient.lastname = "Avers";
    patient.email = "foobar@foo.bar";
    patient.address = "foobarstreet";
    patient.birthDate = new Date();
    patient.pickupLocation = "foobarplace";
    patient.DNRCode = "Foo";
    patient.accessibility = "Bar";
    patient.medicalNotes = "FooBar";
    p = p.concat(patient);
    return p;
  }


}
