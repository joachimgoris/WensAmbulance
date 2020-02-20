import { Component, OnInit } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { Wish } from 'src/app/models/wish.model';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-wish-detail',
  templateUrl: './wish-detail.component.html',
  styleUrls: ['./wish-detail.component.scss']
})
export class WishDetailComponent implements OnInit {

  wish: Wish;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.wish = new Wish();
    this.wish.requestorName = "John Doe";
    this.wish.requestorEmail = "johndoe@gmail.com";
    this.wish.requestorPhoneNumber = "+0123456789";
    this.wish.title = "See the sea for one last time";
    this.wish.description = "This man wants to see the sea at Oostende one more time before going to the eternal fields.";
    this.wish.date = new Date();
    this.wish.location = "Oostende";
    this.wish.volunteers = null;
    this.wish.patient = null;
    this.wish.evaluation = null;
  }
}
