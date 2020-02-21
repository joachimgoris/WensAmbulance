import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Wish} from '../../models/wish.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  wishes: Wish[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllWishesCensored().subscribe((value) => {
      this.wishes = value;
    }, (error) => {
      console.log(error.message);
      this.wishes = [this.createDummyWish()];
    });
  }

  createDummyWish() {
    const wish = new Wish();
    wish.id = '1';
    wish.date = new Date();
    wish.location = 'Oostende';
    return wish;
  }

}
