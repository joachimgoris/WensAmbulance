import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {Wish} from '../../models/wish.model';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.scss']
})
export class WishesComponent implements OnInit {
  wishes: Wish[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAllWishes().subscribe((value) => {
      this.wishes = value;
    }, (error) => {
      console.log(error.message);
      let patient = new Wish();
      patient.id = '1';
      patient.date = new Date();
      patient.wishRequestor = 'Jan Konings';
      this.wishes = this.wishes.concat(patient);
      patient = new Wish();
      patient.id = '2';
      patient.date = new Date();
      patient.wishRequestor = 'Bert Clijsner';
      this.wishes = this.wishes.concat(patient);
      patient = new Wish();
      patient.id = '3';
      patient.date = new Date();
      patient.wishRequestor = 'Berend Brokkepap';
      this.wishes = this.wishes.concat(patient);
    });
  }

  wishSelected(wish: Wish): void {
    this.router.navigate(['/wish', wish.id]);
  }

  new(): void {
    this.router.navigate(['/wish']);
  }
}
