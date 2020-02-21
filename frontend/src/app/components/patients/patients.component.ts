import {Component, OnDestroy, OnInit} from '@angular/core';
import {Patient} from '../../models/patient.model';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAllPatients().subscribe((value) => {
      this.patients = value;
    }, (error) => {
      console.log(error.message);
      this.patients = this.getPatients();
    });
  }

  patientSelected(patient: Patient): void {
    this.router.navigate(['/patient', patient.patientId]);
  }

  new() {
    this.router.navigate(['/patient']);
  }

  getPatients(): Patient[] {
    let p = [];
    let patient = new Patient();
    patient.patientId = '1';
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
    patient.patientId = '2';
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
    patient.patientId = '3';
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
