import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Patient} from '../../models/patient.model';
import {ApiService} from '../../services/api.service';
import {Wish} from '../../models/wish.model';
import {User} from '../../models/user.model';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {VolunteerComponent} from '../volunteer/volunteer.component';

@Component({
  selector: 'app-new-wish',
  templateUrl: './new-wish.component.html',
  styleUrls: ['./new-wish.component.scss']
})
export class NewWishComponent implements OnInit {
  wishForm: FormGroup;
  patients: Patient[] = [];
  volunteers: User[] = [];
  selectedPatients = [];
  selectedVolunteers = [];
  dropdownSettingsVolunteers: IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'username',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  dropdownSettingsPatients: IDropdownSettings = {
    singleSelection: true,
    idField: 'id',
    textField: 'firstname',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.wishForm = new FormGroup({
      requestorName: new FormControl('', [Validators.required]),
      requestorEmail: new FormControl('', [Validators.required]),
      requestorPhoneNumber: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      evaluation: new FormControl('', [Validators.required])
    });
    this.apiService.getAllUser().subscribe((value) => {
      this.volunteers = value;
    }, (error) => {
      console.log(error.message);
      const user = new User();
      user.id = '1';
      user.username = 'Joske';
      this.volunteers = [user];
    });
    this.apiService.getAllPatients().subscribe((value) => {
      this.patients = value;
    }, (error) => {
      console.log(error.message);
      const user = new Patient();
      user.id = '1';
      user.firstname = 'Joske';
      this.patients = [user];
    });
  }

  onSubmit(): void {
    const user = new Wish();
    user.requestorName = this.wishForm.get('requestorName').value;
    user.requestorEmail = this.wishForm.get('requestorEmail').value;
    user.requestorPhoneNumber = this.wishForm.get('requestorPhoneNumber').value;
    user.title = this.wishForm.get('title').value;
    user.description = this.wishForm.get('description').value;
    user.date = this.wishForm.get('date').value;
    user.location = this.wishForm.get('location').value;
    user.volunteers = this.volunteers;
    user.patient = this.patients[0];
    user.evaluation = this.wishForm.get('evaluation').value;

    console.log(user);
    this.apiService.addWish(user).subscribe((value) => {
      console.log('Wish saved!');
    }, (error) => {
      console.log(error.message);
    });
  }
}
