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
      let patient = new User();
      patient.firstname = 'Jan';
      patient.lastname = 'Peeters';
      patient.id = '1';
      this.volunteers = this.volunteers.concat(patient);
      patient = new User();
      patient.firstname = 'Vic';
      patient.lastname = 'Pipeleers';
      patient.id = '2';
      this.volunteers = this.volunteers.concat(patient);
      patient = new User();
      patient.firstname = 'Stef';
      patient.lastname = 'Koninckx';
      patient.id = '3';
      this.volunteers = this.volunteers.concat(patient);
    });
  }

  volunteerSelected(volunteer: User): void {
    this.router.navigate(['/volunteer', volunteer.id]);
  }

}
