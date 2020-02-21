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
    this.createDummyUser();
    this.createDummyWish();
  }

  createDummyPatient(){
    this.patient = new Patient();
    this.patient.id = '1';
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

  createDummyUser(){

  }

  createDummyWish(){
    this.wish = new Wish();
    this.wish.requestorName = "John Doe";
    this.wish.requestorEmail = "johndoe@gmail.com";
    this.wish.requestorPhoneNumber = "+0123456789";
    this.wish.title = "See the sea for one last time";
    this.wish.description = "This man wants to see the sea at Oostende one more time before going to the eternal fields.";
    this.wish.date = new Date();
    this.wish.location = "Oostende";
    this.wish.volunteers = null
    this.wish.patient = this.patient;
    this.wish.evaluation = null;
  }
}
