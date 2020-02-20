import { Component, OnInit } from '@angular/core';
import {Patient} from '../../models/patient.model';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.scss']
})
export class VolunteersComponent implements OnInit {
  volunteers: User[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAllUser().subscribe((value) => {
      this.volunteers = value;
    }, (error) => {
      console.log(error.message);
      const patient = new User();
      patient.firstname = 'Jan';
      patient.lastname = 'Veke';
      patient.id = '123';
      this.volunteers = [patient, patient, patient];
    });
  }

  volunteerSelected(volunteer: User): void {
    this.router.navigate(['/volunteer', volunteer.id]);
  }

}
