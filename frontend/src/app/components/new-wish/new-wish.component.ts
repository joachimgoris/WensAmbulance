import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Patient} from '../../models/patient.model';
import {ApiService} from '../../services/api.service';
import {Wish} from '../../models/wish.model';
import {User} from '../../models/user.model';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {VolunteerComponent} from '../volunteer/volunteer.component';
import { Select, AsyncSelect, MultiSelect } from 'dropdown-select';
import 'dropdown-select/dist/css/dropdown-select.css';

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
    textField: 'firstname',
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
  config = {
    displayKey:"firstname", //if objects array passed which key to be displayed defaults to description
    search:true, // true/false for the search functionlity defaults to false,
    height: 'auto', // height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder:'Select', // text to be displayed when no item is selected defaults to Select,
    customComparator: ()=>{}, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    limitTo: this.volunteers.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder:'Search', // label thats displayed in search input,
    searchOnKey: 'username' // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
  }

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.wishForm = new FormGroup({
      wishRequestor: new FormControl('', [Validators.required]),
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
      console.log("hoi");
    }, (error) => {
      console.log(error.message);
      const user = new User();
      user.id = '1';
      user.username = 'Joske';
      user.firstname = 'Joske';
      this.volunteers = [user];
    });
    this.apiService.getAllPatients().subscribe((value) => {
      this.patients = value;
      console.log(value);
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
    user.wishRequestor = this.wishForm.get('wishRequestor').value;
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
