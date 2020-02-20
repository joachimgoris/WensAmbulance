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
      const patient = new Wish();
      patient.title = 'titleke';
      patient.description = 'desc';
      patient.requestorName = 'Janneke maan';
      patient.id = '1234';
      this.wishes = [patient, patient, patient];
    });
  }

  wishSelected(wish: Wish): void {
    this.router.navigate(['/wish', wish.id]);
  }

  new(): void {
    this.router.navigate(['/wish']);
  }
}
