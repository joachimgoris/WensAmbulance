import { Component, OnInit } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { Wish } from 'src/app/models/wish.model';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/models/user.model';
import { Patient } from 'src/app/models/patient.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wish-detail',
  templateUrl: './wish-detail.component.html',
  styleUrls: ['./wish-detail.component.scss']
})
export class WishDetailComponent implements OnInit {

  wish: Wish;
  private patient: Patient;
  private user: User;
  private otherUser: User;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.fetchWish(this.route.snapshot.params['id']);
  }

  fetchWish(id: string){
    this.apiService.getWish(id).subscribe((data) => this.wish = data, (error) => {
      console.log("No wish found, seeding dummy data");
      this.createDummyData();
    });
  }

  createDummyData(){
    this.createDummyPatient();
    this.createDummyUsers();
    this.createDummyWish();
  }

  createDummyPatient(){
    this.patient = new Patient();
    this.patient.patientId = '1';
    this.patient.firstname = "Foo";
    this.patient.lastname = "Bar";
    this.patient.email = "foobar@foo.bar";
    this.patient.address = "foobarstreet";
    this.patient.birthDate = new Date();
    this.patient.pickupLocation = "foobarplace";
    this.patient.DNRCode = "Foo";
    this.patient.accessibility = "Bar";
    this.patient.medicalNotes = "FooBar";
  }

  createDummyUsers(){
    this.user = new User();
    this.user.id = '1';
    this.user.username = 'Jan Janssens';
    this.user.firstname = 'Jan';
    this.user.lastname = 'Janssens';
    this.user.email = 'janjanssens@gmail.com';
    this.user.address = 'Kesselaan 15 3500 Hasselt';
    this.user.ssn = '0123456789';
    this.user.certificate = 'Een certificaat';
    this.user.badgeNumber = '0123456789';
    this.user.badgeExpirationDate = new Date();
    this.user.shirtSize = 'L';
    this.user.userWishes = null;

    this.otherUser = new User();
    this.otherUser.id = '1';
    this.otherUser.username = 'Dirk Goosen';
    this.otherUser.firstname = 'Dirk';
    this.otherUser.lastname = 'Goosen';
    this.otherUser.email = 'dirkgoosen@gmail.com';
    this.otherUser.address = 'Kesselaan 16 3500 Hasselt';
    this.otherUser.ssn = '0123456789';
    this.otherUser.certificate = 'Een certificaat';
    this.otherUser.badgeNumber = '0123456789';
    this.otherUser.badgeExpirationDate = new Date();
    this.otherUser.shirtSize = 'L';
    this.otherUser.userWishes = null;
  }

  createDummyWish(){
    this.wish = new Wish();
    this.wish.wishRequestor = "John Doe";
    this.wish.requestorEmail = "johndoe@gmail.com";
    this.wish.requestorPhoneNumber = "+0123456789";
    this.wish.title = "See the sea for one last time";
    this.wish.description = "This man wants to see the sea at Oostende one more time before going to the eternal fields.";
    this.wish.date = new Date();
    this.wish.location = "Oostende";
    this.wish.volunteers = new Array();
    this.wish.volunteers.push(this.otherUser);
    this.wish.volunteers.push(this.user);
    this.wish.patient = this.patient;
    this.wish.evaluation = null;

  }
}
