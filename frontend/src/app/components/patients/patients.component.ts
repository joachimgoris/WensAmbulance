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
      const patient = new Patient();
      patient.firstname = 'Jan';
      patient.lastname = 'Veke';
      patient.id = '123';
      this.patients = [patient, patient, patient];
    });
  }

  patientSelected(patient: Patient): void {
    this.router.navigate(['/patient', patient.id]);
  }

}
